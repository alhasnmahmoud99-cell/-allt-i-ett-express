import { Button } from '../components/ui/Button'
import { useNavigate } from 'react-router-dom'

const GardeningService = () => {
  const navigate = useNavigate()
  return (
    <div>
      <section className="relative min-h-[400px] flex items-center justify-center bg-primary-light text-white py-20">
        <div className="container-main text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">Gardening Service</h1>
          <p className="text-xl mb-8 opacity-90">Professional garden maintenance for a beautiful outdoor space</p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => navigate('/book')}>Book Now</Button>
        </div>
      </section>
      <section className="container-main section-padding">
        <h2 className="font-display text-4xl font-bold text-text-primary mb-8">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card-base p-6"><h3 className="font-bold text-primary-light mb-2">Lawn Care</h3><p className="text-text-secondary text-sm">Mowing, edging, and lawn treatments</p></div>
          <div className="card-base p-6"><h3 className="font-bold text-primary-light mb-2">Plant Maintenance</h3><p className="text-text-secondary text-sm">Pruning, trimming, and fertilizing</p></div>
          <div className="card-base p-6"><h3 className="font-bold text-primary-light mb-2">Weeding</h3><p className="text-text-secondary text-sm">Regular weed control and removal</p></div>
          <div className="card-base p-6"><h3 className="font-bold text-primary-light mb-2">Cleanup</h3><p className="text-text-secondary text-sm">Debris removal and leaf cleanup</p></div>
        </div>
      </section>
    </div>
  )
}

export default GardeningService
