import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Bot,
  Box,
  ExternalLink,
  HelpCircle,
  Home,
  Phone,
} from "lucide-react";
import { METAVERSE_URL, UI_COPY } from "../data/cultureData";
import { LanguageCode, RouteTab } from "../types/culture";

interface SidebarProps {
  activeTab: RouteTab;
  onSelectTab: (tab: RouteTab) => void;
  lang: LanguageCode;
  xp: number;
}

export function Sidebar({ activeTab, onSelectTab, lang, xp }: SidebarProps) {
  const copy = UI_COPY[lang];
  const level = Math.floor(xp / 500) + 1;
  const nextLevelXp = level * 500;
  const remainingXp = Math.max(0, nextLevelXp - xp);
  const progressPercent = Math.min(100, Math.round(((xp % 500) / 500) * 100));

  const navItems: { id: RouteTab; label: string; icon: typeof Home }[] = [
    { id: "dashboard", label: copy.nav.dashboard, icon: Home },
    { id: "quiz", label: copy.nav.quiz, icon: HelpCircle },
    { id: "chatbot", label: copy.nav.chatbot, icon: Bot },
    { id: "webzine", label: copy.nav.webzine, icon: BookOpen },
    { id: "analytics", label: copy.nav.analytics, icon: BarChart3 },
  ];

  return (
    <aside className="hidden lg:flex lg:w-64 lg:shrink-0 bg-light-surface-container-lowest border-r border-light-outline-variant p-gutter-lg flex-col justify-between gap-gutter-lg min-h-screen">
      <div className="flex flex-col gap-gutter-lg">
        <button
          type="button"
          onClick={() => onSelectTab("dashboard")}
          className="flex items-center gap-gutter-sm text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-primary rounded-sm"
        >
          <div className="w-10 h-10 rounded-sm bg-light-primary text-light-on-primary flex items-center justify-center shrink-0">
            <span className="font-headline text-title-lg">文</span>
          </div>
          <div className="flex flex-col">
            <span className="font-title text-title-md text-light-on-surface leading-tight whitespace-nowrap">
              Culture Bridge
            </span>
            <span className="font-body text-label-md text-light-on-surface-variant whitespace-nowrap">
              {copy.brandSub}
            </span>
          </div>
        </button>

        <nav aria-label="주 메뉴" className="flex flex-col gap-gutter-xs">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectTab(item.id)}
                className={`flex items-center gap-gutter-sm px-gutter-md py-gutter-sm rounded-sm font-label text-label-lg transition-colors duration-150 ease-out text-left w-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-primary ${
                  isActive
                    ? "bg-light-primary text-light-on-primary"
                    : "text-light-on-surface-variant hover:bg-light-surface-container-low hover:text-light-on-surface"
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span className="truncate">{item.label}</span>
              </button>
            );
          })}

          <a
            href={METAVERSE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-gutter-sm px-gutter-md py-gutter-sm rounded-sm text-light-on-surface-variant hover:bg-light-surface-container-low hover:text-light-on-surface font-label text-label-lg transition-colors duration-150 ease-out"
          >
            <span className="flex items-center gap-gutter-sm min-w-0">
              <Box className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span className="truncate">{copy.nav.metaverse}</span>
            </span>
            <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          </a>
        </nav>

        <article className="bg-light-surface-container-low border border-light-outline-variant rounded-md p-gutter-md flex flex-col gap-gutter-sm">
          <div className="flex items-center justify-between gap-gutter-sm">
            <span className="font-label text-label-md text-light-on-surface-variant">
              {copy.sidebar.cultureIndex}
            </span>
            <span
              role="status"
              className="inline-flex items-center px-gutter-sm py-gutter-xs rounded-full bg-light-primary text-light-on-primary font-mono text-label-md tabular-nums"
            >
              Lv.{level}
            </span>
          </div>
          <div className="flex flex-wrap items-baseline justify-between gap-gutter-xs">
            <span className="font-mono text-title-md text-light-on-surface tabular-nums">
              {xp.toLocaleString()} XP
            </span>
            <span className="font-body text-label-md text-light-on-surface-variant tabular-nums">
              -{remainingXp} XP
            </span>
          </div>
          <div className="w-full h-2 rounded-full bg-light-surface-container-highest overflow-hidden">
            <div
              className="h-2 rounded-full bg-light-primary transition-[width] duration-200 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </article>
      </div>

      <article className="bg-light-secondary-container border border-light-outline-variant rounded-md p-gutter-md flex flex-col justify-between gap-gutter-sm">
        <header className="flex flex-col gap-gutter-xs">
          <div className="flex items-center gap-gutter-xs text-light-on-secondary-container">
            <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
            <h3 className="font-title text-title-md text-light-on-secondary-container">
              {copy.sidebar.supportTitle}
            </h3>
          </div>
          <p className="font-body text-body-md text-light-on-secondary-container text-pretty">
            {copy.sidebar.supportDesc}
          </p>
        </header>
        <footer>
          <a
            href="tel:1345"
            className="inline-flex items-center gap-gutter-xs font-label text-label-lg text-light-primary hover:underline"
          >
            <span>{copy.sidebar.supportCta}</span>
            <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
          </a>
        </footer>
      </article>
    </aside>
  );
}
