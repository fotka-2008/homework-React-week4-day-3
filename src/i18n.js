import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import ru from './locales/ru.json'
import tg from './locales/tg.json'

export const LANGUAGES = [
  { code: 'ru', label: 'RU', name: 'Русский' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'tg', label: 'TJ', name: 'Тоҷикӣ' },
]

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ru: { translation: ru },
      en: { translation: en },
      tg: { translation: tg },
    },
    fallbackLng: 'ru',
    supportedLngs: LANGUAGES.map((lang) => lang.code),
    nonExplicitSupportedLngs: true,
    load: 'languageOnly',
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'lang',
      caches: ['localStorage'],
    },
  })

const syncHtmlLang = (lng) => {
  document.documentElement.lang = lng
}

syncHtmlLang(i18n.resolvedLanguage || 'ru')
i18n.on('languageChanged', syncHtmlLang)

export default i18n
