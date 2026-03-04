import { Button } from '../components/ui/Button'
import { useNavigate } from 'react-router-dom'

const MoveOutCleaning = () => {
  const navigate = useNavigate()
  return (
    <div>
      <section className="relative min-h-[400px] flex items-center justify-center bg-primary-light text-white py-20">
        <div className="container-main text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">Move-Out Cleaning</h1>
          <p className="text-xl mb-8 opacity-90">Complete professional cleaning for moving day</p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => navigate('/book')}>Book Now</Button>
        </div>
      </section>
      <section className="container-main section-padding">
        <h2 className="font-display text-4xl font-bold text-text-primary mb-8">Move-Out Cleaning</h2>
        <p className="text-text-secondary max-w-2xl mb-12">Professional move-out cleaning ensures you get your security deposit back and leaves the property spotless</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div><h3 className="font-display text-2xl font-bold text-text-primary mb-4">What We Clean</h3><ul className="space-y-2 text-text-secondary"><li>✓ All rooms and closets</li><li>✓ Kitchen appliances interior</li><li>✓ Bathroom fixtures</li><li>✓ Windows and frames</li><li>✓ Baseboards and doors</li><li>✓ Carpets and hard floors</li></ul></div>
          <div><h3 className="font-display text-2xl font-bold text-text-primary mb-4">Why Choose Us</h3><ul className="space-y-2 text-text-secondary"><li>✓ Thorough inspection included</li><li>✓ Photo documentation</li><li>✓ Satisfaction guaranteed</li><li>✓ Flexible scheduling</li><li>✓ Competitive pricing</li><li>✓ Reference for landlord</li></ul></div>
        </div>
      </section>
    </div>
  )
}

export default MoveOutCleaning
