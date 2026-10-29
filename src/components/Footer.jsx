import { useTranslation } from 'react-i18next'

const YEAR = new Date().getFullYear()

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer id="contact" className="footer">
      <div className="container footer__inner">
        <div>
          <a href="#top" className="logo">
            <span className="logo__mark">W</span>
            {t('header.logo')}
          </a>
          <p className="footer__text">{t('footer.text')}</p>
        </div>
        <ul className="footer__contacts">
          <li>
            <span>{t('footer.email')}</span>
            <a href="mailto:hello@wanderly.example">hello@wanderly.example</a>
          </li>
          <li>
            <span>{t('footer.phone')}</span>
            <a href="tel:+992000000000">+992 00 000 00 00</a>
          </li>
        </ul>
      </div>
      <div className="container footer__bottom">
        © {YEAR} {t('header.logo')}. {t('footer.rights')}
      </div>
    </footer>
  )
}
