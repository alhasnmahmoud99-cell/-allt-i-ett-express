import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Menu, X, Globe, LogOut } from 'lucide-react'
import { Button } from '../ui/Button'
import { useLanguage } from '../../context/LanguageContext'
import { useAuth } from '../../context/AuthContext'

const Navbar = () => {
  const { t } = useTranslation()
  const { language, changeLanguage } = useLanguage()
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [megaMenuOpen, setMegaMenuOpen] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-surface shadow-soft py-3 backdrop-blur-sm'
          : 'bg-surface/80 backdrop-blur-sm py-5'
      }`}
    >
      <div className="container-main flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="font-display text-2xl font-bold text-primary">
          {t('common.appName')}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="relative group">
            <button className="font-sans font-medium text-text-primary hover:text-primary transition-colors">
              {t('nav.cleaning')}
            </button>
            <div className="absolute hidden group-hover:block top-full left-0 bg-surface shadow-soft rounded-btn p-4 min-w-max">
              <Link to="/cleaning" className="block py-2 px-4 hover:text-primary">
                All Cleaning
              </Link>
              <Link to="/cleaning/home-cleaning" className="block py-2 px-4 hover:text-primary">
                Home Cleaning
              </Link>
              <Link to="/cleaning/deep-cleaning" className="block py-2 px-4 hover:text-primary">
                Deep Cleaning
              </Link>
              <Link to="/cleaning/window-cleaning" className="block py-2 px-4 hover:text-primary">
                Window Cleaning
              </Link>
              <Link to="/cleaning/move-out-cleaning" className="block py-2 px-4 hover:text-primary">
                Move-Out Cleaning
              </Link>
            </div>
          </div>

          <div className="relative group">
            <button className="font-sans font-medium text-text-primary hover:text-primary transition-colors">
              {t('nav.garden')}
            </button>
            <div className="absolute hidden group-hover:block top-full left-0 bg-surface shadow-soft rounded-btn p-4 min-w-max">
              <Link to="/garden" className="block py-2 px-4 hover:text-primary">
                All Garden Services
              </Link>
              <Link to="/garden/gardening-service" className="block py-2 px-4 hover:text-primary">
                Gardening Service
              </Link>
              <Link to="/garden/spring-fall" className="block py-2 px-4 hover:text-primary">
                Spring/Fall Care
              </Link>
            </div>
          </div>

          <Link to="/business" className="font-sans font-medium text-text-primary hover:text-primary transition-colors">
            {t('nav.business')}
          </Link>

          <Link to="/about" className="font-sans font-medium text-text-primary hover:text-primary transition-colors">
            {t('nav.about')}
          </Link>
        </div>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language Toggle */}
          <button
            onClick={() => changeLanguage(language === 'en' ? 'ar' : 'en')}
            className="flex items-center gap-2 px-3 py-2 rounded-btn hover:bg-primary-ultra-light transition-colors"
            title={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
          >
            <Globe size={20} className="text-primary" />
            <span className="text-sm font-medium">{language === 'en' ? 'عربي' : 'EN'}</span>
          </button>

          {user ? (
            <>
              <Link to="/account" className="font-sans font-medium text-text-primary hover:text-primary transition-colors">
                {t('nav.account')}
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-3 py-2 text-text-secondary hover:text-text-primary transition-colors"
              >
                <LogOut size={20} />
              </button>
            </>
          ) : (
            <Link to="/login" className="font-sans font-medium text-text-primary hover:text-primary transition-colors">
              {t('common.login')}
            </Link>
          )}

          <Button onClick={() => navigate('/book')}>
            {t('nav.book')}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-surface border-t border-border p-4 space-y-4">
          <Link to="/cleaning" className="block font-sans font-medium text-text-primary hover:text-primary">
            {t('nav.cleaning')}
          </Link>
          <Link to="/garden" className="block font-sans font-medium text-text-primary hover:text-primary">
            {t('nav.garden')}
          </Link>
          <Link to="/business" className="block font-sans font-medium text-text-primary hover:text-primary">
            {t('nav.business')}
          </Link>
          <Link to="/about" className="block font-sans font-medium text-text-primary hover:text-primary">
            {t('nav.about')}
          </Link>

          <div className="pt-4 border-t border-border space-y-3">
            <button
              onClick={() => changeLanguage(language === 'en' ? 'ar' : 'en')}
              className="w-full flex items-center gap-2 px-4 py-2 rounded-btn hover:bg-primary-ultra-light transition-colors"
            >
              <Globe size={20} />
              <span>{language === 'en' ? 'عربي' : 'EN'}</span>
            </button>

            {user ? (
              <>
                <Link to="/account" className="block w-full px-4 py-2 font-sans font-medium text-text-primary hover:text-primary">
                  {t('nav.account')}
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 font-sans font-medium text-text-secondary hover:text-text-primary"
                >
                  {t('common.logout')}
                </button>
              </>
            ) : (
              <Link to="/login" className="block w-full px-4 py-2 font-sans font-medium text-text-primary hover:text-primary">
                {t('common.login')}
              </Link>
            )}

            <Button onClick={() => navigate('/book')} className="w-full">
              {t('nav.book')}
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
