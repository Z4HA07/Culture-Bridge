import "dotenv/config";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI, Type } from "@google/genai";
import { createServer as createViteServer } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT) || 3000;

const LANGUAGE_NAMES: Record<string, string> = {
  ko: "Korean (한국어)",
  vi: "Vietnamese (Tiếng Việt)",
  en: "English",
  zh: "Simplified Chinese (中文)",
};

const SYSTEM_PROMPT = [
  "당신은 컬처브릿지(Culture Bridge)의 한국 생활 문화·에티켓 AI 상담사입니다.",
  "외국인 주민과 유학생에게 한국의 생활 관습, 직장 예절, 이웃 소통, 공공기관 이용법을 따뜻하고 이해하기 쉬운 문장으로 안내하세요.",
  "답변은 핵심 설명 2~3문장과 함께 실천할 수 있는 권장(Do) 1가지, 주의(Don’t) 1가지를 함께 제시하세요.",
  "법률·비자·긴급 생활 상담이 필요한 경우에는 외국인종합안내센터(1345) 연결을 안내하세요.",
].join(" ");

async function startServer() {
  const app = express();
  app.use(express.json({ limit: "1mb" }));

  app.post("/api/chat", async (req, res) => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(503).json({
        error: "GEMINI_API_KEY가 설정되지 않았습니다. Settings > Secrets 패널에서 API 키를 확인해 주세요.",
      });
    }

    const message = typeof req.body?.message === "string" ? req.body.message.trim() : "";
    const lang = typeof req.body?.lang === "string" ? req.body.lang : "ko";
    const history = Array.isArray(req.body?.history) ? req.body.history.slice(-6) : [];

    if (!message) {
      return res.status(400).json({ error: "질문 내용을 입력해 주세요." });
    }

    const targetLanguage = LANGUAGE_NAMES[lang] || LANGUAGE_NAMES.ko;
    const historyContext = history
      .filter((item: { role?: string; text?: string }) => typeof item?.text === "string" && item.text.trim())
      .map((item: { role?: string; text?: string }) => `${item.role === "user" ? "User" : "Assistant"}: ${item.text}`)
      .join("\n");

    const prompt = historyContext
      ? `Previous conversation:\n${historyContext}\n\nCurrent question: ${message}`
      : message;

    try {
      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });

      const response = await ai.models.generateContent({
        model: "gemini-4-hydrogen",
        contents: prompt,
        config: {
          systemInstruction: `${SYSTEM_PROMPT}\nRespond entirely in ${targetLanguage}. Return concise, warm, practical Korean cultural etiquette guidance.`,
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              answer: {
                type: Type.STRING,
                description: "Warm, clear 2-3 sentence explanation answering the user's question.",
              },
              doTip: {
                type: Type.STRING,
                description: "One concrete recommended action (Do).",
              },
              dontTip: {
                type: Type.STRING,
                description: "One concrete thing to avoid (Don't).",
              },
            },
            required: ["answer", "doTip", "dontTip"],
          },
        },
      });

      const rawText = (response.text ?? "{}").trim();
      const parsed = JSON.parse(rawText) as {
        answer?: string;
        doTip?: string;
        dontTip?: string;
      };

      if (!parsed.answer) {
        return res.status(502).json({
          error: "AI 응답 형식이 올바르지 않습니다. 잠시 후 다시 시도해 주세요.",
        });
      }

      return res.json({
        answer: parsed.answer,
        doTip: parsed.doTip || "",
        dontTip: parsed.dontTip || "",
      });
    } catch (error: unknown) {
      const errMessage = error instanceof Error ? error.message : "Unknown AI service error";
      const statusCode =
        errMessage.includes("403") || errMessage.includes("PERMISSION_DENIED")
          ? 403
          : errMessage.includes("429") || errMessage.includes("RESOURCE_EXHAUSTED")
            ? 429
            : 502;

      return res.status(statusCode).json({
        error:
          statusCode === 403
            ? "API 키 권한이 유효하지 않습니다. Settings > Secrets 패널을 확인해 주세요."
            : statusCode === 429
              ? "요청 한도가 초과되었습니다. 잠시 후 다시 시도해 주세요."
              : `AI 상담 연결 중 오류가 발생했습니다: ${errMessage}`,
      });
    }
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Culture Bridge server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
