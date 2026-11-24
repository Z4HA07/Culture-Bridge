import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Bot,
  Box,
  ExternalLink,
  Flame,
  Hand,
  HelpCircle,
  Sparkles,
} from "lucide-react";
import { METAVERSE_URL, UI_COPY } from "../data/cultureData";
import { LanguageCode, RouteTab } from "../types/culture";

interface DashboardViewProps {
  lang: LanguageCode;
  xp: number;
  streakDays: number;
  accuracyPercent: number;
  onNavigate: (tab: RouteTab) => void;
}

export function DashboardView({
  lang,
  xp,
  streakDays,
  accuracyPercent,
  onNavigate,
}: DashboardViewProps) {
  const copy = UI_COPY[lang].dashboard;

  return (
    <main className="flex-1 p-page-margin max-w-5xl w-full mx-auto flex flex-col justify-center gap-gutter-xl">
      {/* Warm, High-Contrast Welcome Banner */}
      <section
        aria-labelledby="welcome-heading"
        className="bg-light-surface-container-lowest border border-light-outline-variant rounded-lg p-gutter-lg lg:p-gutter-xl flex flex-col gap-gutter-lg"
      >
        <div className="flex flex-col gap-gutter-sm">
          <span className="inline-flex items-center gap-gutter-xs self-start px-gutter-md py-gutter-xs rounded-full bg-light-secondary-container text-light-on-secondary-container font-label text-label-md">
            <Hand className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>{copy.badge}</span>
          </span>
          <h1
            id="welcome-heading"
            className="font-headline text-display-lg-mobile lg:text-display-lg text-light-on-surface text-balance"
          >
            {copy.heroTitle}
          </h1>
          <p className="font-body text-body-lg text-light-on-surface-variant text-pretty max-w-prose">
            {copy.heroDesc}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-gutter-md pt-gutter-sm border-t border-light-outline-variant">
          <div className="flex flex-wrap items-center gap-gutter-sm">
            <button
              type="button"
              onClick={() => onNavigate("quiz")}
              className="inline-flex items-center justify-center gap-gutter-sm px-gutter-lg py-gutter-md rounded-sm bg-light-primary text-light-on-primary font-label text-label-lg hover:bg-light-primary-container focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-primary transition-colors duration-150 ease-out whitespace-nowrap shrink-0"
            >
              <HelpCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>{copy.ctaQuiz}</span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate("chatbot")}
              className="inline-flex items-center justify-center gap-gutter-sm px-gutter-lg py-gutter-md rounded-sm bg-light-surface-container-low text-light-primary border border-light-outline-variant font-label text-label-lg hover:bg-light-surface-container focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-primary transition-colors duration-150 ease-out whitespace-nowrap shrink-0"
            >
              <Bot className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>{copy.ctaChat}</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-gutter-md">
            <div className="flex items-center gap-gutter-xs">
              <Flame className="w-4 h-4 text-light-primary shrink-0" aria-hidden="true" />
              <span className="font-label text-label-lg text-light-on-surface tabular-nums">
                {streakDays}
                {copy.streakLabel}
              </span>
            </div>
            <div className="flex items-center gap-gutter-xs">
              <Sparkles className="w-4 h-4 text-light-primary shrink-0" aria-hidden="true" />
              <span className="font-mono text-label-lg text-light-on-surface tabular-nums">
                {xp.toLocaleString()} XP
              </span>
            </div>
            <div className="flex items-center gap-gutter-xs">
              <BadgeCheck className="w-4 h-4 text-light-primary shrink-0" aria-hidden="true" />
              <span className="font-mono text-label-lg text-light-on-surface tabular-nums">
                {copy.accuracyLabel} {accuracyPercent}%
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Spacious 2x2 Quick-Start Grid */}
      <section aria-labelledby="services-heading" className="flex flex-col gap-gutter-md">
        <div className="flex flex-wrap items-center justify-between gap-gutter-sm">
          <h2
            id="services-heading"
            className="font-headline text-headline-md text-light-on-surface"
          >
            {copy.sectionTitle}
          </h2>
          <span className="font-body text-body-md text-light-on-surface-variant">
            {copy.sectionHint}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-lg items-stretch">
          <button
            type="button"
            onClick={() => onNavigate("quiz")}
            className="bg-light-surface-container-lowest border border-light-outline-variant rounded-md p-gutter-lg flex items-center justify-between gap-gutter-md hover:border-light-primary hover:bg-light-surface-container-low focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-primary transition-colors duration-150 ease-out h-full text-left"
          >
            <div className="flex items-start gap-gutter-md">
              <div className="w-12 h-12 rounded-md bg-light-secondary-container text-light-on-secondary-container flex items-center justify-center shrink-0">
                <HelpCircle className="w-6 h-6" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-gutter-xs">
                <h3 className="font-title text-title-lg text-light-on-surface">
                  {copy.cards.quizTitle}
                </h3>
                <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
                  {copy.cards.quizDesc}
                </p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-light-primary shrink-0" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => onNavigate("chatbot")}
            className="bg-light-surface-container-lowest border border-light-outline-variant rounded-md p-gutter-lg flex items-center justify-between gap-gutter-md hover:border-light-primary hover:bg-light-surface-container-low focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-primary transition-colors duration-150 ease-out h-full text-left"
          >
            <div className="flex items-start gap-gutter-md">
              <div className="w-12 h-12 rounded-md bg-light-secondary-container text-light-on-secondary-container flex items-center justify-center shrink-0">
                <Bot className="w-6 h-6" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-gutter-xs">
                <h3 className="font-title text-title-lg text-light-on-surface">
                  {copy.cards.chatTitle}
                </h3>
                <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
                  {copy.cards.chatDesc}
                </p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-light-primary shrink-0" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => onNavigate("webzine")}
            className="bg-light-surface-container-lowest border border-light-outline-variant rounded-md p-gutter-lg flex items-center justify-between gap-gutter-md hover:border-light-primary hover:bg-light-surface-container-low focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-primary transition-colors duration-150 ease-out h-full text-left"
          >
            <div className="flex items-start gap-gutter-md">
              <div className="w-12 h-12 rounded-md bg-light-secondary-container text-light-on-secondary-container flex items-center justify-center shrink-0">
                <BookOpen className="w-6 h-6" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-gutter-xs">
                <h3 className="font-title text-title-lg text-light-on-surface">
                  {copy.cards.webzineTitle}
                </h3>
                <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
                  {copy.cards.webzineDesc}
                </p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-light-primary shrink-0" aria-hidden="true" />
          </button>

          <a
            href={METAVERSE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-light-surface-container-lowest border border-light-outline-variant rounded-md p-gutter-lg flex items-center justify-between gap-gutter-md hover:border-light-primary hover:bg-light-surface-container-low focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-primary transition-colors duration-150 ease-out h-full"
          >
            <div className="flex items-start gap-gutter-md">
              <div className="w-12 h-12 rounded-md bg-light-secondary-container text-light-on-secondary-container flex items-center justify-center shrink-0">
                <Box className="w-6 h-6" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-gutter-xs">
                <h3 className="font-title text-title-lg text-light-on-surface">
                  {copy.cards.metaTitle}
                </h3>
                <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
                  {copy.cards.metaDesc}
                </p>
              </div>
            </div>
            <ExternalLink className="w-5 h-5 text-light-primary shrink-0" aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}
