import { BarChart3, Bot, Box, HelpCircle, Home } from "lucide-react";
import { METAVERSE_URL, UI_COPY } from "../data/cultureData";
import { LanguageCode, RouteTab } from "../types/culture";

interface MobileNavProps {
  activeTab: RouteTab;
  onSelectTab: (tab: RouteTab) => void;
  lang: LanguageCode;
}

export function MobileNav({ activeTab, onSelectTab, lang }: MobileNavProps) {
  const copy = UI_COPY[lang];

  const items: { id: RouteTab; label: string; icon: typeof Home }[] = [
    { id: "dashboard", label: copy.mobileNav.home, icon: Home },
    { id: "quiz", label: copy.mobileNav.quiz, icon: HelpCircle },
    { id: "chatbot", label: copy.mobileNav.chatbot, icon: Bot },
    { id: "analytics", label: copy.mobileNav.analytics, icon: BarChart3 },
  ];

  return (
    <nav
      aria-label="하단 메뉴"
      className="grid lg:hidden sticky bottom-0 z-20 bg-light-surface-container-lowest border-t border-light-outline-variant px-gutter-sm py-gutter-xs grid-cols-5 gap-gutter-xs"
    >
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelectTab(item.id)}
            className={`flex flex-col items-center justify-center py-gutter-xs rounded-sm min-h-[44px] transition-colors duration-150 ease-out ${
              isActive ? "text-light-primary" : "text-light-on-surface-variant"
            }`}
          >
            <Icon className="w-4 h-4" aria-hidden="true" />
            <span className="font-label text-label-md mt-0.5">{item.label}</span>
          </button>
        );
      })}

      <a
        href={METAVERSE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center py-gutter-xs rounded-sm min-h-[44px] text-light-on-surface-variant"
      >
        <Box className="w-4 h-4" aria-hidden="true" />
        <span className="font-label text-label-md mt-0.5">{copy.mobileNav.meta}</span>
      </a>
    </nav>
  );
}
