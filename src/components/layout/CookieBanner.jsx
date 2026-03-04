import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '../ui/Button'

const CookieBanner = ({ onAccept }) => {
  const { t } = useTranslation()
  const [dismissed, setDismissed] = useState(false)

  const handleAcceptAll = () => {
    localStorage.setItem('cookies-accepted', 'true')
    setDismissed(true)
    onAccept()
  }

  const handleEssentialOnly = () => {
    localStorage.setItem('cookies-accepted', 'essential-only')
    setDismissed(true)
  }

  if (dismissed) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-surface border-t border-border shadow-soft p-4 md:p-6 z-40">
      <div className="container-main flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-sans font-bold text-text-primary mb-2">{t('cookies.title')}</h3>
          <p className="text-text-secondary text-sm">{t('cookies.message')}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Button variant="outline" size="sm" onClick={handleEssentialOnly}>
            {t('cookies.essentialOnly')}
          </Button>
          <Button size="sm" onClick={handleAcceptAll}>
            {t('cookies.acceptAll')}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CookieBanner
