import { Button } from '../components/ui/Button'
import { useNavigate } from 'react-router-dom'

const OfficeCleaning = () => {
  const navigate = useNavigate()
  return (
    <div>
      <section className="relative min-h-[400px] flex items-center justify-center bg-primary-light text-white py-20">
        <div className="container-main text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">Office Cleaning</h1>
          <p className="text-xl mb-8 opacity-90">Professional workplace cleaning that maintains a hygienic environment</p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => navigate('/contact')}>Contact Us</Button>
        </div>
      </section>
      <section className="container-main section-padding">
        <h2 className="font-display text-4xl font-bold text-text-primary mb-8">Office Cleaning Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card-base p-8"><div className="text-4xl mb-4">🏢</div><h3 className="font-display text-xl font-bold text-text-primary mb-3">Daily Cleaning</h3><p className="text-text-secondary">Maintain pristine office spaces daily</p></div>
          <div className="card-base p-8"><div className="text-4xl mb-4">🧹</div><h3 className="font-display text-xl font-bold text-text-primary mb-3">Deep Cleaning</h3><p className="text-text-secondary">Quarterly deep cleans for sanitization</p></div>
          <div className="card-base p-8"><div className="text-4xl mb-4">✨</div><h3 className="font-display text-xl font-bold text-text-primary mb-3">Customized Plans</h3><p className="text-text-secondary">Tailored to your business needs</p></div>
        </div>
      </section>
    </div>
  )
}

export default OfficeCleaning
