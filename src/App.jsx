import { useTranslation } from 'react-i18next'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Slider from './components/Slider.jsx'

const STATS = [
  { key: 'tours', value: '120+' },
  { key: 'countries', value: '35' },
  { key: 'clients', value: '8 000+' },
]

const FEATURES = [
  { key: 'guides', icon: '🧭' },
  { key: 'safety', icon: '🛡️' },
  { key: 'price', icon: '💎' },
]

export default function App() {
  const { t } = useTranslation()

  return (
    <div id="top">
      <Header />

      <main>
        <section className="hero">
          <div className="container hero__inner">
            <span className="hero__badge">{t('hero.badge')}</span>
            <h1 className="hero__title">{t('hero.title')}</h1>
            <p className="hero__subtitle">{t('hero.subtitle')}</p>
            <div className="hero__actions">
              <a href="#destinations" className="btn">{t('hero.cta')}</a>
              <a href="#features" className="btn btn--ghost">{t('hero.secondary')}</a>
            </div>
            <ul className="hero__stats">
              {STATS.map((stat) => (
                <li key={stat.key}>
                  <strong>{stat.value}</strong>
                  <span>{t(`hero.stats.${stat.key}`)}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Slider />

        <section id="features" className="section">
          <div className="container">
            <div className="section__head">
              <h2 className="section__title">{t('features.title')}</h2>
            </div>
            <div className="features">
              {FEATURES.map((feature) => (
                <article key={feature.key} className="feature">
                  <span className="feature__icon" aria-hidden="true">{feature.icon}</span>
                  <h3 className="feature__title">{t(`features.items.${feature.key}.title`)}</h3>
                  <p className="feature__text">{t(`features.items.${feature.key}.text`)}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
