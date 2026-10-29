import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher.jsx'
import ThemeToggle from './ThemeToggle.jsx'

const NAV_ITEMS = ['destinations', 'features', 'contact']

export default function Header() {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="logo">
          <span className="logo__mark">W</span>
          {t('header.logo')}
        </a>

        <nav className={`nav ${menuOpen ? 'is-open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <a key={item} href={`#${item}`} className="nav__link" onClick={() => setMenuOpen(false)}>
              {t(`header.nav.${item}`)}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            type="button"
            className={`burger ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={t('header.menu')}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
