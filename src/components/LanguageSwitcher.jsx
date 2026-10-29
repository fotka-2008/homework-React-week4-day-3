import { useTranslation } from 'react-i18next'
import { LANGUAGES } from '../i18n.js'

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation()
  const current = i18n.resolvedLanguage

  return (
    <div className="lang-switcher" role="group" aria-label={t('header.language')}>
      {LANGUAGES.map((lang) => (
        <button
          key={lang.code}
          type="button"
          className={`lang-switcher__btn ${current === lang.code ? 'is-active' : ''}`}
          onClick={() => i18n.changeLanguage(lang.code)}
          aria-pressed={current === lang.code}
          title={lang.name}
        >
          {lang.label}
        </button>
      ))}
    </div>
  )
}
