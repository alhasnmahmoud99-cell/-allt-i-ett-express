import { Button } from '../components/ui/Button'
import { useNavigate } from 'react-router-dom'

const WindowCleaning = () => {
  const navigate = useNavigate()
  return (
    <div>
      <section className="relative min-h-[400px] flex items-center justify-center bg-primary-light text-white py-20">
        <div className="container-main text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">Window Cleaning</h1>
          <p className="text-xl mb-8 opacity-90">Crystal clear windows inside and out for a brighter home</p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => navigate('/book')}>Book Now</Button>
        </div>
      </section>
      <section className="container-main section-padding">
        <h2 className="font-display text-4xl font-bold text-text-primary mb-8">Window Cleaning Service</h2>
        <p className="text-text-secondary max-w-2xl mb-8">Professional window cleaning service for residential properties</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card-base p-6"><h3 className="font-bold text-primary-light mb-3">Interior Windows</h3><p className="text-text-secondary text-sm">All glass and frames cleaned</p></div>
          <div className="card-base p-6"><h3 className="font-bold text-primary-light mb-3">Exterior Windows</h3><p className="text-text-secondary text-sm">Safe cleaning at all heights</p></div>
          <div className="card-base p-6"><h3 className="font-bold text-primary-light mb-3">Frames & Sills</h3><p className="text-text-secondary text-sm">Dust and debris removed</p></div>
        </div>
      </section>
    </div>
  )
}

export default WindowCleaning
