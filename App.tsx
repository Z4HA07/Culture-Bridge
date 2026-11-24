/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useMemo, useState } from "react";
import { AnalyticsView } from "./components/AnalyticsView";
import { AuthModal } from "./components/AuthModal";
import { ChatbotView } from "./components/ChatbotView";
import { DashboardView } from "./components/DashboardView";
import { Header } from "./components/Header";
import { MobileNav } from "./components/MobileNav";
import { QuizView } from "./components/QuizView";
import { Sidebar } from "./components/Sidebar";
import { WebzineView } from "./components/WebzineView";
import { INITIAL_CULTURE_STATE, QUIZ_DATA } from "./data/cultureData";
import { CultureState, LanguageCode, MasteryKey, RouteTab } from "./types/culture";

const STORAGE_KEY = "culture-bridge-state-v1";
const LANG_STORAGE_KEY = "culture-bridge-lang-v1";

function loadSavedState(): CultureState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return INITIAL_CULTURE_STATE;
    const parsed = JSON.parse(raw) as Partial<CultureState>;
    return {
      ...INITIAL_CULTURE_STATE,
      ...parsed,
      mastery: {
        ...INITIAL_CULTURE_STATE.mastery,
        ...(parsed.mastery || {}),
      },
      profile: {
        ...INITIAL_CULTURE_STATE.profile,
        ...(parsed.profile || {}),
      },
    };
  } catch {
    return INITIAL_CULTURE_STATE;
  }
}

function loadSavedLang(): LanguageCode {
  try {
    const raw = localStorage.getItem(LANG_STORAGE_KEY);
    if (raw === "ko" || raw === "vi" || raw === "en" || raw === "zh") return raw;
  } catch {
    // ignore storage errors
  }
  return "ko";
}

function getTodayDateString(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export default function App() {
  const [activeTab, setActiveTab] = useState<RouteTab>("dashboard");
  const [lang, setLang] = useState<LanguageCode>(loadSavedLang);
  const [state, setState] = useState<CultureState>(loadSavedState);
  const [shareCopied, setShareCopied] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup" | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // ignore quota errors
    }
  }, [state]);

  useEffect(() => {
    try {
      localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch {
      // ignore quota errors
    }
    document.documentElement.lang = lang;
  }, [lang]);

  const accuracyPercent = useMemo(() => {
    const answeredIds = Object.keys(state.quizAnswers).map(Number);
    if (answeredIds.length === 0) return 92;
    const correctCount = answeredIds.filter((id) => {
      const q = QUIZ_DATA.find((item) => item.id === id);
      return q && state.quizAnswers[id] === q.answer;
    }).length;
    return Math.round((correctCount / answeredIds.length) * 100);
  }, [state.quizAnswers]);

  const handleShare = async () => {
    const shareData = {
      title: "Culture Bridge — 컬처브릿지",
      text: "한국 생활과 문화를 쉽고 따뜻하게 배우는 컬처브릿지",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") return;
      }
    }

    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(window.location.href);
      } catch {
        // ignore clipboard denial
      }
    }

    setShareCopied(true);
    setTimeout(() => setShareCopied(false), 2000);
  };

  const handleAnswerQuestion = (
    questionId: number,
    choice: "O" | "X",
    isCorrect: boolean,
    masteryKey: MasteryKey,
    questionCategory: string,
  ) => {
    setState((prev) => {
      const alreadyAnswered = prev.quizAnswers[questionId] !== undefined;
      const earnedXp = alreadyAnswered ? 0 : isCorrect ? 20 : 5;
      const nextStreak = alreadyAnswered
        ? prev.quizStreak
        : isCorrect
          ? prev.quizStreak + 1
          : 0;
      const masteryDelta = alreadyAnswered ? 0 : isCorrect ? 2 : 0;

      const nextRecords =
        !alreadyAnswered && earnedXp > 0
          ? [
              {
                id: `quiz-${questionId}-${Date.now()}`,
                title: `OX 퀴즈 · ${questionCategory}`,
                subtitle: isCorrect ? "정답 완료 · 생활 에티켓 숙련도 상승" : "해설 학습 완료",
                date: getTodayDateString(),
                xp: earnedXp,
              },
              ...prev.records,
            ]
          : prev.records;

      return {
        ...prev,
        xp: prev.xp + earnedXp,
        quizStreak: nextStreak,
        quizAnswers: {
          ...prev.quizAnswers,
          [questionId]: choice,
        },
        mastery: {
          ...prev.mastery,
          [masteryKey]: Math.min(100, prev.mastery[masteryKey] + masteryDelta),
        },
        records: nextRecords,
      };
    });
  };

  const handleResetQuiz = () => {
    setState((prev) => ({
      ...prev,
      quizAnswers: {},
      quizStreak: 0,
    }));
  };

  const handleRecordChatXp = (question: string) => {
    setState((prev) => ({
      ...prev,
      xp: prev.xp + 10,
      records: [
        {
          id: `chat-${Date.now()}`,
          title: question.length > 34 ? `${question.slice(0, 34)}...` : question,
          subtitle: "AI Q&A · 문화 에티켓 상담 완료",
          date: getTodayDateString(),
          xp: 10,
        },
        ...prev.records,
      ],
    }));
  };

  const handleCompleteArticle = (articleId: string, title: string) => {
    setState((prev) => {
      if (prev.readArticleIds.includes(articleId)) return prev;
      return {
        ...prev,
        xp: prev.xp + 15,
        readArticleIds: [...prev.readArticleIds, articleId],
        records: [
          {
            id: `webzine-${articleId}-${Date.now()}`,
            title,
            subtitle: "주간 문화 웹진 · 에세이 읽기 완료",
            date: getTodayDateString(),
            xp: 15,
          },
          ...prev.records,
        ],
      };
    });
  };

  const handleAuthSuccess = (name: string) => {
    setState((prev) => ({
      ...prev,
      profile: {
        name,
        loggedIn: true,
      },
    }));
    setAuthMode(null);
  };

  const handleLogout = () => {
    setState((prev) => ({
      ...prev,
      profile: {
        name: "",
        loggedIn: false,
      },
    }));
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-light-surface text-light-on-surface">
      <Sidebar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        lang={lang}
        xp={state.xp}
      />

      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        <Header
          lang={lang}
          onChangeLang={setLang}
          onShare={() => void handleShare()}
          shareCopied={shareCopied}
          profile={state.profile}
          onOpenAuth={(mode) => setAuthMode(mode)}
          onLogout={handleLogout}
          onGoHome={() => setActiveTab("dashboard")}
        />

        {activeTab === "dashboard" && (
          <DashboardView
            lang={lang}
            xp={state.xp}
            streakDays={state.streakDays}
            accuracyPercent={accuracyPercent}
            onNavigate={setActiveTab}
          />
        )}

        {activeTab === "quiz" && (
          <QuizView
            lang={lang}
            quizAnswers={state.quizAnswers}
            quizStreak={state.quizStreak}
            onAnswerQuestion={handleAnswerQuestion}
            onResetQuiz={handleResetQuiz}
          />
        )}

        {activeTab === "chatbot" && (
          <ChatbotView lang={lang} onRecordChatXp={handleRecordChatXp} />
        )}

        {activeTab === "webzine" && (
          <WebzineView
            lang={lang}
            readArticleIds={state.readArticleIds}
            onCompleteArticle={handleCompleteArticle}
          />
        )}

        {activeTab === "analytics" && (
          <AnalyticsView
            lang={lang}
            mastery={state.mastery}
            records={state.records}
          />
        )}

        <MobileNav activeTab={activeTab} onSelectTab={setActiveTab} lang={lang} />
      </div>

      {authMode && (
        <AuthModal
          mode={authMode}
          lang={lang}
          onClose={() => setAuthMode(null)}
          onSuccess={handleAuthSuccess}
        />
      )}
    </div>
  );
}
