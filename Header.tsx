import { Globe, LogOut, Phone, Share2, User } from "lucide-react";
import { UI_COPY } from "../data/cultureData";
import { LanguageCode, UserProfile } from "../types/culture";

interface HeaderProps {
  lang: LanguageCode;
  onChangeLang: (lang: LanguageCode) => void;
  onShare: () => void;
  shareCopied: boolean;
  profile: UserProfile;
  onOpenAuth: (mode: "login" | "signup") => void;
  onLogout: () => void;
  onGoHome: () => void;
}

export function Header({
  lang,
  onChangeLang,
  onShare,
  shareCopied,
  profile,
  onOpenAuth,
  onLogout,
  onGoHome,
}: HeaderProps) {
  const copy = UI_COPY[lang];

  return (
    <>
      {/* Mobile Compact Header */}
      <header className="flex lg:hidden sticky top-0 z-20 bg-light-surface-container-lowest border-b border-light-outline-variant px-gutter-md py-gutter-sm items-center justify-between gap-gutter-sm">
        <button
          type="button"
          onClick={onGoHome}
          className="flex items-center gap-gutter-sm text-left"
        >
          <div className="w-9 h-9 rounded-sm bg-light-primary text-light-on-primary flex items-center justify-center shrink-0">
            <span className="font-headline text-title-md">文</span>
          </div>
          <div className="flex flex-col">
            <span className="font-title text-label-lg text-light-on-surface leading-tight whitespace-nowrap">
              Culture Bridge
            </span>
            <span className="font-body text-label-md text-light-on-surface-variant whitespace-nowrap">
              {copy.brandSub}
            </span>
          </div>
        </button>

        <div className="flex items-center gap-gutter-xs">
          <a
            href="tel:1345"
            aria-label="긴급 콜센터 1345 연결"
            className="inline-flex items-center gap-gutter-xs px-gutter-sm py-gutter-xs rounded-full bg-light-secondary-container text-light-on-secondary-container font-mono text-label-md tabular-nums whitespace-nowrap shrink-0"
          >
            <Phone className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>1345</span>
          </a>

          <div className="inline-flex items-center gap-gutter-xs px-gutter-sm py-gutter-xs rounded-sm bg-light-surface-container-low border border-light-outline-variant">
            <Globe className="w-3.5 h-3.5 text-light-primary shrink-0" aria-hidden="true" />
            <select
              aria-label="모바일 언어 선택"
              value={lang}
              onChange={(e) => onChangeLang(e.target.value as LanguageCode)}
              className="bg-transparent border-0 p-0 font-label text-label-md text-light-on-surface focus:outline-none cursor-pointer"
            >
              <option value="ko">KO</option>
              <option value="vi">VI</option>
              <option value="en">EN</option>
              <option value="zh">ZH</option>
            </select>
          </div>

          <button
            type="button"
            onClick={onShare}
            aria-label="컬처브릿지 공유하기"
            title={shareCopied ? copy.header.copied : copy.header.share}
            className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full text-light-on-surface-variant hover:bg-light-surface-container-low hover:text-light-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-primary transition-colors duration-150 ease-out"
          >
            <Share2 className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* Desktop Sticky Header */}
      <header className="hidden lg:flex sticky top-0 z-20 bg-light-surface-container-lowest border-b border-light-outline-variant px-gutter-lg py-gutter-md flex-wrap items-center justify-between gap-gutter-md">
        <div className="flex items-center gap-gutter-sm">
          <a
            href="tel:1345"
            className="inline-flex items-center gap-gutter-xs px-gutter-md py-gutter-sm rounded-full bg-light-secondary-container text-light-on-secondary-container font-label text-label-lg hover:bg-light-surface-variant focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-primary transition-colors duration-150 ease-out whitespace-nowrap shrink-0"
          >
            <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>{copy.header.hotlineFull}</span>
          </a>

          <button
            type="button"
            onClick={onShare}
            aria-label="컬처브릿지 공유하기"
            className="shrink-0 whitespace-nowrap inline-flex items-center justify-center gap-gutter-xs px-gutter-md py-gutter-sm rounded-full text-light-on-surface-variant hover:bg-light-surface-container-low hover:text-light-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-primary font-label text-label-md transition-colors duration-150 ease-out"
          >
            <Share2 className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>{shareCopied ? copy.header.copied : copy.header.share}</span>
          </button>
        </div>

        <div className="flex items-center gap-gutter-sm">
          <div className="inline-flex items-center gap-gutter-xs px-gutter-md py-gutter-sm rounded-sm bg-light-surface-container-low border border-light-outline-variant focus-within:border-light-primary">
            <Globe className="w-4 h-4 text-light-primary shrink-0" aria-hidden="true" />
            <select
              aria-label="언어 선택"
              value={lang}
              onChange={(e) => onChangeLang(e.target.value as LanguageCode)}
              className="bg-transparent border-0 p-0 pr-gutter-xs font-label text-label-lg text-light-on-surface focus:outline-none cursor-pointer"
            >
              <option value="ko">한국어 (KO)</option>
              <option value="vi">Tiếng Việt (VI)</option>
              <option value="en">English (EN)</option>
              <option value="zh">中文 (ZH)</option>
            </select>
          </div>

          {profile.loggedIn ? (
            <div className="flex items-center gap-gutter-sm">
              <div className="inline-flex items-center gap-gutter-xs px-gutter-md py-gutter-sm rounded-sm bg-light-surface-container-low border border-light-outline-variant font-label text-label-lg text-light-on-surface whitespace-nowrap">
                <User className="w-4 h-4 text-light-primary shrink-0" aria-hidden="true" />
                <span>{profile.name}</span>
              </div>
              <button
                type="button"
                onClick={onLogout}
                className="inline-flex items-center justify-center gap-gutter-xs px-gutter-md py-gutter-sm rounded-sm bg-light-surface-container-lowest text-light-on-surface-variant border border-light-outline-variant font-label text-label-lg hover:bg-light-surface-container-low focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-primary transition-colors duration-150 ease-out whitespace-nowrap shrink-0"
              >
                <LogOut className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{copy.header.logout}</span>
              </button>
            </div>
          ) : (
            <>
              <button
                type="button"
                onClick={() => onOpenAuth("login")}
                className="inline-flex items-center justify-center gap-gutter-sm px-gutter-md py-gutter-sm rounded-sm bg-light-surface-container-lowest text-light-primary border border-light-outline-variant font-label text-label-lg hover:bg-light-surface-container-low focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-primary transition-colors duration-150 ease-out whitespace-nowrap shrink-0"
              >
                <span>{copy.header.login}</span>
              </button>
              <button
                type="button"
                onClick={() => onOpenAuth("signup")}
                className="inline-flex items-center justify-center gap-gutter-sm px-gutter-md py-gutter-sm rounded-sm bg-light-primary text-light-on-primary font-label text-label-lg hover:bg-light-primary-container focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-primary transition-colors duration-150 ease-out whitespace-nowrap shrink-0"
              >
                <span>{copy.header.signup}</span>
              </button>
            </>
          )}
        </div>
      </header>
    </>
  );
}
