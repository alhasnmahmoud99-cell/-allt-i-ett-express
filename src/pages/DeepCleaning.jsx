import { Button } from '../components/ui/Button'
import { useNavigate } from 'react-router-dom'

const DeepCleaning = () => {
  const navigate = useNavigate()
  return (
    <div>
      <section className="relative min-h-[400px] flex items-center justify-center bg-primary-light text-white py-20">
        <div className="container-main text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">Deep Cleaning</h1>
          <p className="text-xl mb-8 opacity-90">Comprehensive cleaning reaching every corner of your home</p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => navigate('/book')}>Book Now</Button>
        </div>
      </section>
      <section className="container-main section-padding">
        <h2 className="font-display text-4xl font-bold text-text-primary mb-8">About Deep Cleaning</h2>
        <p className="text-text-secondary max-w-2xl mb-8">Our deep cleaning service goes beyond regular cleaning to address areas that accumulate dust and dirt over time.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card-base p-6"><h3 className="font-bold mb-2">Baseboards & Trim</h3><p className="text-text-secondary text-sm">Cleaned and polished throughout</p></div>
          <div className="card-base p-6"><h3 className="font-bold mb-2">Inside Appliances</h3><p className="text-text-secondary text-sm">Oven, microwave, and fridge interior</p></div>
          <div className="card-base p-6"><h3 className="font-bold mb-2">Light Fixtures</h3><p className="text-text-secondary text-sm">All lights and fixtures dusted</p></div>
          <div className="card-base p-6"><h3 className="font-bold mb-2">Walls & Ceilings</h3><p className="text-text-secondary text-sm">Spot cleaned where needed</p></div>
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" onClick={() => navigate('/book')}>Schedule Deep Cleaning</Button>
        </div>
      </section>
    </div>
  )
}

export default DeepCleaning
