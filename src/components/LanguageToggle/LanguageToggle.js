import React from "react";
import { useI18n } from "../../i18n/I18nContext";
import "./LanguageToggle.css";

const LOCALES = [
  { code: "en", label: "EN" },
  { code: "vi", label: "VI" },
];

function LanguageToggle() {
  const { locale, switchLocale } = useI18n();

  return (
    <button
      type="button"
      className="lang-toggle"
      onClick={switchLocale}
      aria-label="Toggle language"
      title={`Switch to ${locale === "en" ? "Tiếng Việt" : "English"}`}
    >
      <span className={`lang-toggle-slider ${locale === "vi" ? "is-vi" : ""}`} />
      {LOCALES.map(({ code, label }) => (
        <span
          key={code}
          className={`lang-toggle-btn ${locale === code ? "is-active" : ""}`}
          aria-hidden="true"
        >
          {label}
        </span>
      ))}
    </button>
  );
}

export default LanguageToggle;
