import { FormEvent, useEffect, useRef, useState } from "react";
import { AlertCircle, Bot, RotateCcw, Send } from "lucide-react";
import { UI_COPY } from "../data/cultureData";
import { ChatMessage, LanguageCode } from "../types/culture";

interface ChatbotViewProps {
  lang: LanguageCode;
  onRecordChatXp: (question: string) => void;
}

const INITIAL_MESSAGES: Record<LanguageCode, ChatMessage[]> = {
  ko: [
    {
      id: "init-user",
      role: "user",
      text: "집들이 선물로 무엇을 사가면 좋을까요?",
    },
    {
      id: "init-ai",
      role: "assistant",
      text: "한국에서는 지인의 새집에 초대받았을 때 두루마리 휴지나 세제 같은 실용적인 생필품, 또는 함께 나눌 수 있는 과일과 디저트를 선물하는 따뜻한 관습이 있습니다.",
      doTip: "현관에서 신발을 벗고 가지런히 정리해 두세요.",
      dontTip: "칼이나 가위 같은 날카로운 선물은 피하세요.",
    },
  ],
  vi: [
    {
      id: "init-user",
      role: "user",
      text: "Nên mua gì làm quà tân gia ở Hàn Quốc?",
    },
    {
      id: "init-ai",
      role: "assistant",
      text: "Ở Hàn Quốc, khi được mời đến tiệc tân gia, mọi người thường tặng các vật dụng thiết thực như giấy vệ sinh cuộn hoặc nước giặt (mang ý nghĩa mọi việc suôn sẻ, sung túc), hoặc trái cây và bánh ngọt để cùng thưởng thức.",
      doTip: "Hãy cởi giày ở sảnh và xếp ngay ngắn hướng ra cửa.",
      dontTip: "Tránh tặng các vật sắc nhọn như dao hoặc kéo.",
    },
  ],
  en: [
    {
      id: "init-user",
      role: "user",
      text: "What should I bring as a housewarming gift in Korea?",
    },
    {
      id: "init-ai",
      role: "assistant",
      text: "In Korea, practical household items like toilet paper rolls (symbolizing things unrolling smoothly) or laundry detergent, as well as fruit or desserts to share together, are warm and popular housewarming gifts.",
      doTip: "Take off your shoes at the entryway and align them neatly.",
      dontTip: "Avoid gifting sharp objects such as knives or scissors.",
    },
  ],
  zh: [
    {
      id: "init-user",
      role: "user",
      text: "去韩国朋友家乔迁聚会时带什么礼物比较好？",
    },
    {
      id: "init-ai",
      role: "assistant",
      text: "在韩国，受邀参加乔迁聚会时，人们通常习惯赠送卷纸（寓意万事顺遂）或洗衣液等实用生活用品，也可以带一些方便大家一起分享的水果或甜点。",
      doTip: "在玄关脱鞋后，请将鞋子摆放整齐。",
      dontTip: "避免赠送刀具或剪刀等尖锐物品。",
    },
  ],
};

export function ChatbotView({ lang, onRecordChatXp }: ChatbotViewProps) {
  const copy = UI_COPY[lang].chatbot;
  const [messages, setMessages] = useState<ChatMessage[]>(() => INITIAL_MESSAGES[lang]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [lastFailedQuestion, setLastFailedQuestion] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMessages((prev) => {
      const onlyInitial =
        prev.length === 2 && prev[0].id === "init-user" && prev[1].id === "init-ai";
      return onlyInitial ? INITIAL_MESSAGES[lang] : prev;
    });
  }, [lang]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const sendQuestion = async (questionText: string, isRetry = false) => {
    const trimmed = questionText.trim();
    if (!trimmed || isLoading) return;

    setLastFailedQuestion(null);
    const historySnapshot = messages
      .filter((m) => !m.error)
      .map((m) => ({ role: m.role, text: m.text }));

    if (!isRetry) {
      setMessages((prev) => [
        ...prev,
        { id: `u-${Date.now()}`, role: "user", text: trimmed },
      ]);
    } else {
      setMessages((prev) => prev.filter((m) => !m.error));
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: trimmed,
          lang,
          history: historySnapshot,
        }),
      });

      const data = (await response.json()) as {
        answer?: string;
        doTip?: string;
        dontTip?: string;
        error?: string;
      };

      if (!response.ok || !data.answer) {
        throw new Error(data.error || "AI 응답을 불러오지 못했습니다.");
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `a-${Date.now()}`,
          role: "assistant",
          text: data.answer!,
          doTip: data.doTip,
          dontTip: data.dontTip,
        },
      ]);
      onRecordChatXp(trimmed);
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : "네트워크 오류가 발생했습니다.";
      setLastFailedQuestion(trimmed);
      setMessages((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          role: "assistant",
          text: errorMsg,
          error: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const val = input.trim();
    if (!val || isLoading) return;
    setInput("");
    void sendQuestion(val);
  };

  return (
    <main className="flex-1 p-page-margin max-w-4xl w-full mx-auto flex flex-col gap-gutter-lg">
      <div className="flex flex-wrap items-center justify-between gap-gutter-md">
        <div className="flex items-center gap-gutter-sm">
          <Bot className="w-7 h-7 text-light-primary shrink-0" aria-hidden="true" />
          <div>
            <h1 className="font-headline text-headline-md lg:text-headline-lg text-light-on-surface">
              {copy.title}
            </h1>
            <p className="font-body text-body-md text-light-on-surface-variant">
              {copy.subtitle}
            </p>
          </div>
        </div>
        <span className="px-gutter-md py-gutter-xs rounded-full bg-light-secondary-container text-light-on-secondary-container font-label text-label-md">
          {copy.liveBadge}
        </span>
      </div>

      {/* Suggested Cultural Questions */}
      <div className="flex flex-wrap items-center gap-gutter-sm">
        {copy.presets.map((preset) => (
          <button
            key={preset.label}
            type="button"
            disabled={isLoading}
            onClick={() => void sendQuestion(preset.prompt)}
            className="px-gutter-md py-gutter-xs rounded-full bg-light-surface-container-lowest border border-light-outline-variant text-light-on-surface font-label text-label-md hover:border-light-primary disabled:opacity-50 transition-colors duration-150 ease-out"
          >
            {preset.label}
          </button>
        ))}
      </div>

      {/* Conversational Chat Container */}
      <section className="bg-light-surface-container-lowest border border-light-outline-variant rounded-md p-gutter-lg flex flex-col gap-gutter-lg">
        <div className="flex flex-col gap-gutter-md max-h-[520px] overflow-y-auto pr-1">
          {messages.map((msg) => {
            if (msg.role === "user") {
              return (
                <div key={msg.id} className="flex justify-end">
                  <div className="bg-light-primary text-light-on-primary rounded-md px-gutter-md py-gutter-sm max-w-lg">
                    <p className="font-body text-body-md whitespace-pre-wrap">{msg.text}</p>
                  </div>
                </div>
              );
            }

            if (msg.error) {
              return (
                <div key={msg.id} className="flex items-start gap-gutter-sm">
                  <div className="w-8 h-8 rounded-full bg-light-error-container text-light-on-error-container flex items-center justify-center shrink-0">
                    <AlertCircle className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div className="bg-light-error-container border border-light-tertiary/30 rounded-md p-gutter-md flex flex-col gap-gutter-sm max-w-2xl">
                    <p className="font-body text-body-md text-light-on-error-container text-pretty">
                      {msg.text}
                    </p>
                    {lastFailedQuestion && (
                      <button
                        type="button"
                        onClick={() => void sendQuestion(lastFailedQuestion, true)}
                        className="self-start inline-flex items-center gap-gutter-xs px-gutter-md py-gutter-xs rounded-sm bg-light-surface-container-lowest border border-light-outline-variant font-label text-label-md text-light-on-surface hover:border-light-primary"
                      >
                        <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>{copy.retryBtn}</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            }

            return (
              <div key={msg.id} className="flex items-start gap-gutter-sm">
                <div className="w-8 h-8 rounded-full bg-light-secondary-container text-light-on-secondary-container flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4" aria-hidden="true" />
                </div>
                <div className="bg-light-surface-container-low border border-light-outline-variant rounded-md p-gutter-md flex flex-col gap-gutter-sm max-w-2xl">
                  <p className="font-body text-body-md text-light-on-surface text-pretty whitespace-pre-wrap">
                    {msg.text}
                  </p>
                  {(msg.doTip || msg.dontTip) && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter-sm pt-gutter-xs">
                      {msg.doTip && (
                        <div className="bg-light-surface-container-lowest rounded-sm p-gutter-sm border border-light-outline-variant">
                          <span className="font-label text-label-md text-light-primary block mb-0.5">
                            {copy.doLabel}
                          </span>
                          <p className="font-body text-body-md text-light-on-surface-variant">
                            {msg.doTip}
                          </p>
                        </div>
                      )}
                      {msg.dontTip && (
                        <div className="bg-light-surface-container-lowest rounded-sm p-gutter-sm border border-light-outline-variant">
                          <span className="font-label text-label-md text-light-tertiary block mb-0.5">
                            {copy.dontLabel}
                          </span>
                          <p className="font-body text-body-md text-light-on-surface-variant">
                            {msg.dontTip}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {isLoading && (
            <div className="flex items-start gap-gutter-sm">
              <div className="w-8 h-8 rounded-full bg-light-secondary-container text-light-on-secondary-container flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4 animate-pulse" aria-hidden="true" />
              </div>
              <div className="bg-light-surface-container-low border border-light-outline-variant rounded-md px-gutter-md py-gutter-sm">
                <p className="font-body text-body-md text-light-on-surface-variant">
                  {copy.loading}
                </p>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Chat Input Bar */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-gutter-sm pt-gutter-md border-t border-light-outline-variant"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={copy.placeholder}
            disabled={isLoading}
            className="flex-1 min-w-0 rounded-sm border border-light-outline-variant bg-light-surface-container-low px-gutter-md py-gutter-sm font-body text-body-md text-light-on-surface focus:border-light-primary focus:outline-none disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="shrink-0 whitespace-nowrap inline-flex items-center justify-center gap-gutter-xs px-gutter-md py-gutter-sm rounded-sm bg-light-primary text-light-on-primary font-label text-label-lg hover:bg-light-primary-container disabled:opacity-50 transition-colors duration-150 ease-out"
          >
            <span>{copy.sendBtn}</span>
            <Send className="w-4 h-4 shrink-0" aria-hidden="true" />
          </button>
        </form>
      </section>
    </main>
  );
}
