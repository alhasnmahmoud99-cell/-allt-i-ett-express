import { createContext, useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation()

  useEffect(() => {
    const lang = localStorage.getItem('language') || 'en'
    i18n.changeLanguage(lang)
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr')
  }, [i18n])

  const changeLanguage = async (lang) => {
    await i18n.changeLanguage(lang)
    localStorage.setItem('language', lang)
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr')
  }

  return (
    <LanguageContext.Provider value={{ language: i18n.language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
