import { FormEvent, useState } from "react";
import { X } from "lucide-react";
import { UI_COPY } from "../data/cultureData";
import { LanguageCode } from "../types/culture";

interface AuthModalProps {
  mode: "login" | "signup";
  lang: LanguageCode;
  onClose: () => void;
  onSuccess: (name: string) => void;
}

export function AuthModal({ mode, lang, onClose, onSuccess }: AuthModalProps) {
  const [name, setName] = useState("");
  const copy = UI_COPY[lang].auth;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;
    onSuccess(trimmed);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-gutter-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-modal-title"
    >
      <div className="w-full max-w-md bg-light-surface-container-lowest border border-light-outline-variant rounded-lg p-gutter-lg flex flex-col gap-gutter-md shadow-lg">
        <div className="flex items-start justify-between gap-gutter-sm">
          <div className="flex flex-col gap-gutter-xs">
            <h2
              id="auth-modal-title"
              className="font-headline text-headline-md text-light-on-surface"
            >
              {mode === "login" ? copy.loginTitle : copy.signupTitle}
            </h2>
            <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
              {copy.subtitle}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={copy.cancel}
            className="w-9 h-9 rounded-full inline-flex items-center justify-center text-light-on-surface-variant hover:bg-light-surface-container-low"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-gutter-md">
          <div className="flex flex-col gap-gutter-xs">
            <label
              htmlFor="auth-nickname"
              className="font-label text-label-lg text-light-on-surface"
            >
              {copy.nameLabel}
            </label>
            <input
              id="auth-nickname"
              type="text"
              required
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={copy.namePlaceholder}
              className="rounded-sm border border-light-outline-variant bg-light-surface-container-low px-gutter-md py-gutter-sm font-body text-body-md text-light-on-surface focus:border-light-primary focus:outline-none"
            />
          </div>

          <div className="flex items-center justify-end gap-gutter-sm pt-gutter-xs">
            <button
              type="button"
              onClick={onClose}
              className="px-gutter-md py-gutter-sm rounded-sm border border-light-outline-variant bg-light-surface-container-lowest text-light-on-surface-variant font-label text-label-lg hover:bg-light-surface-container-low"
            >
              {copy.cancel}
            </button>
            <button
              type="submit"
              className="px-gutter-lg py-gutter-sm rounded-sm bg-light-primary text-light-on-primary font-label text-label-lg hover:bg-light-primary-container"
            >
              {mode === "login" ? copy.submitLogin : copy.submitSignup}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
