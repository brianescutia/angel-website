import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { content } from '../data/content.js'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es')

  const toggle = useCallback(() => {
    setLang((prev) => {
      const next = prev === 'es' ? 'en' : 'es'
      if (typeof document !== 'undefined') {
        document.documentElement.lang = next
      }
      return next
    })
  }, [])

  const value = useMemo(
    () => ({ lang, t: content[lang], toggle }),
    [lang, toggle]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>')
  return ctx
}
