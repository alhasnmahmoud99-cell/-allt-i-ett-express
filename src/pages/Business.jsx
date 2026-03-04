import { Button } from '../components/ui/Button'
import { useNavigate } from 'react-router-dom'

const Business = () => {
  const navigate = useNavigate()
  return (
    <div>
      <section className="relative min-h-[400px] flex items-center justify-center bg-primary text-white py-20">
        <div className="container-main text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">Solutions for Businesses</h1>
          <p className="text-xl mb-8 opacity-90">Professional cleaning and maintenance services tailored for your business</p>
          <Button size="lg" onClick={() => navigate('/contact')}>Get in Touch</Button>
        </div>
      </section>

      <section className="container-main section-padding">
        <h2 className="font-display text-4xl font-bold text-text-primary mb-12">Our Business Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card-base p-8">
            <h3 className="font-display text-2xl font-bold text-text-primary mb-4">Office Cleaning</h3>
            <p className="text-text-secondary mb-6">Daily cleaning, restroom maintenance, and waste management for professional office spaces.</p>
            <Button variant="outline" size="sm" onClick={() => navigate('/business/office-cleaning')}>Learn More</Button>
          </div>
          <div className="card-base p-8">
            <h3 className="font-display text-2xl font-bold text-text-primary mb-4">Housing Associations</h3>
            <p className="text-text-secondary mb-6">Common area cleaning, hallway maintenance, and community space management.</p>
            <Button variant="outline" size="sm">Learn More</Button>
          </div>
          <div className="card-base p-8">
            <h3 className="font-display text-2xl font-bold text-text-primary mb-4">Salary Benefit</h3>
            <p className="text-text-secondary mb-6">Offer Allt I Ett Express AB cleaning as an employee benefit to attract and retain talent.</p>
            <Button variant="outline" size="sm">Learn More</Button>
          </div>
        </div>
      </section>

      <section className="container-main section-padding bg-primary-ultra-light rounded-card">
        <h2 className="font-display text-4xl font-bold text-text-primary mb-8">Why Partner With Allt I Ett Express AB?</h2>
        <ul className="space-y-4 text-text-secondary max-w-3xl">
          <li className="flex gap-3">
            <span className="text-primary-light font-bold">✓</span>
            <span>Reliable, professional staff with background checks</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary-light font-bold">✓</span>
            <span>Customized cleaning schedules and solutions</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary-light font-bold">✓</span>
            <span>Eco-friendly products for a healthy workplace</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary-light font-bold">✓</span>
            <span>Transparent pricing and no hidden fees</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary-light font-bold">✓</span>
            <span>24/7 customer support for your peace of mind</span>
          </li>
        </ul>
        <div className="mt-12">
          <Button size="lg" onClick={() => navigate('/contact')}>Request a Consultation</Button>
        </div>
      </section>
    </div>
  )
}

export default Business
