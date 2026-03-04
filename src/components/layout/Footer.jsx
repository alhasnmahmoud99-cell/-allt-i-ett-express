import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Heart } from 'lucide-react'

const Footer = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-text-primary text-white">
      <div className="container-main py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4">Allt I Ett Express AB</h3>
            <p className="text-gray-300 mb-4">
              Premium home cleaning and maintenance services for your peace of mind.
            </p>
            <div className="flex gap-4">
              {/* Social Links would go here */}
              <a href="#" className="hover:text-primary-light transition-colors">FB</a>
              <a href="#" className="hover:text-primary-light transition-colors">TW</a>
              <a href="#" className="hover:text-primary-light transition-colors">IG</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans font-bold mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2">
              <li><Link to="/cleaning/home-cleaning" className="text-gray-300 hover:text-primary-light transition-colors">{t('services.homeCleaning.name')}</Link></li>
              <li><Link to="/cleaning/deep-cleaning" className="text-gray-300 hover:text-primary-light transition-colors">{t('services.deepCleaning.name')}</Link></li>
              <li><Link to="/cleaning/window-cleaning" className="text-gray-300 hover:text-primary-light transition-colors">{t('services.windowCleaning.name')}</Link></li>
              <li><Link to="/business/office-cleaning" className="text-gray-300 hover:text-primary-light transition-colors">{t('services.officeCleaning.name')}</Link></li>
              <li><Link to="/garden/gardening-service" className="text-gray-300 hover:text-primary-light transition-colors">{t('services.gardenService.name')}</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-sans font-bold mb-4">{t('footer.support')}</h4>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-gray-300 hover:text-primary-light transition-colors">{t('footer.faq')}</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-primary-light transition-colors">{t('footer.contact')}</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-primary-light transition-colors">{t('footer.about')}</Link></li>
              <li><Link to="/tips" className="text-gray-300 hover:text-primary-light transition-colors">{t('footer.blog')}</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-sans font-bold mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-gray-300 hover:text-primary-light transition-colors">{t('footer.terms')}</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-primary-light transition-colors">{t('footer.privacy')}</Link></li>
              <li><Link to="/cookies" className="text-gray-300 hover:text-primary-light transition-colors">{t('footer.cookies')}</Link></li>
              <li><Link to="/accessibility" className="text-gray-300 hover:text-primary-light transition-colors">{t('footer.accessibility')}</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              © {currentYear} Allt I Ett Express AB. {t('footer.rights')}
            </p>
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              Made with <Heart size={16} className="text-accent" /> by the Allt I Ett Express AB team
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
