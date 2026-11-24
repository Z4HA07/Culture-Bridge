export type RouteTab = "dashboard" | "quiz" | "chatbot" | "webzine" | "analytics";

export type LanguageCode = "ko" | "vi" | "en" | "zh";

export type MasteryKey = "neighbor" | "lifestyle" | "public" | "workplace";

export interface QuizQuestion {
  id: number;
  masteryKey: MasteryKey;
  category: Record<LanguageCode, string>;
  question: Record<LanguageCode, string>;
  answer: "O" | "X";
  explanation: Record<LanguageCode, string>;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  text: string;
  doTip?: string;
  dontTip?: string;
  error?: boolean;
}

export interface WebzineArticle {
  id: string;
  category: Record<LanguageCode, string>;
  readTime: Record<LanguageCode, string>;
  icon: "forum" | "restaurant" | "celebration";
  title: Record<LanguageCode, string>;
  summary: Record<LanguageCode, string>;
  paragraphs: Record<LanguageCode, string[]>;
  culturalTip: Record<LanguageCode, string>;
}

export interface LearningRecord {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  xp: number;
}

export interface UserProfile {
  name: string;
  loggedIn: boolean;
}

export interface CultureState {
  xp: number;
  streakDays: number;
  quizAnswers: Record<number, "O" | "X">;
  quizStreak: number;
  readArticleIds: string[];
  mastery: Record<MasteryKey, number>;
  records: LearningRecord[];
  profile: UserProfile;
}
