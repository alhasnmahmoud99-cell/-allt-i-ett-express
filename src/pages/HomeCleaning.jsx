import { Button } from '../components/ui/Button'
import { Accordion } from '../components/ui/Accordion'
import { useNavigate } from 'react-router-dom'

const HomeCleaning = () => {
  const navigate = useNavigate()

  const faqItems = [
    { title: 'How often should I get my home cleaned?', content: 'Most customers prefer weekly or bi-weekly cleaning. Choose based on your lifestyle and home size.' },
    { title: 'What is included in home cleaning?', content: 'Dusting, vacuuming, mopping, bathrooms, kitchen, and general tidying.' },
    { title: 'Do you provide cleaning supplies?', content: 'Yes! Eco-friendly supplies are included in all our services.' },
    { title: 'Can I request specific products?', content: 'Absolutely. Let us know during booking.' },
    { title: 'What if something breaks?', content: 'We have full insurance coverage and will make it right.' },
    { title: 'Can I reschedule?', content: 'Yes, up to 24 hours before your appointment.' },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[400px] flex items-center justify-center bg-primary-light text-white py-20">
        <div className="container-main text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">Home Cleaning</h1>
          <p className="text-xl mb-8 opacity-90">Keep your home fresh and spotless with our professional home cleaning service</p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => navigate('/book')}>
            Book Now
          </Button>
        </div>
      </section>

      {/* What's Included */}
      <section className="container-main section-padding">
        <h2 className="font-display text-4xl font-bold text-text-primary mb-12">What's Included</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: '✓', name: 'Dusting', desc: 'All surfaces thoroughly dusted' },
            { icon: '✓', name: 'Vacuuming', desc: 'Complete carpet and area rug vacuuming' },
            { icon: '✓', name: 'Mopping', desc: 'Hard floors cleaned and mopped' },
            { icon: '✓', name: 'Bathrooms', desc: 'Toilets, sinks, showers cleaned' },
            { icon: '✓', name: 'Kitchen', desc: 'Counters and appliances wiped down' },
            { icon: '✓', name: 'Trash Removal', desc: 'All trash bags replaced' },
          ].map((item, i) => (
            <div key={i} className="card-base p-6">
              <div className="text-3xl text-primary-light mb-3">{item.icon}</div>
              <h3 className="font-bold text-text-primary mb-2">{item.name}</h3>
              <p className="text-text-secondary text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="container-main section-padding bg-background rounded-card">
        <h2 className="font-display text-4xl font-bold text-text-primary mb-8">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { freq: 'One Time', price: '$199', desc: 'Single cleaning' },
            { freq: 'Weekly', price: '$169', desc: '-15% discount' },
            { freq: 'Every 2 Weeks', price: '$179', desc: '-10% discount' },
            { freq: 'Monthly', price: '$189', desc: '-5% discount' },
          ].map((plan, i) => (
            <div key={i} className="card-base p-6 text-center">
              <h3 className="font-display text-2xl font-bold text-primary-light mb-2">{plan.price}</h3>
              <p className="font-medium text-text-primary mb-2">{plan.freq}</p>
              <p className="text-sm text-text-secondary">{plan.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-main section-padding max-w-3xl">
        <h2 className="font-display text-4xl font-bold text-text-primary mb-12">Frequently Asked Questions</h2>
        <Accordion items={faqItems} />
      </section>

      {/* CTA */}
      <section className="container-main section-padding text-center">
        <h2 className="font-display text-4xl font-bold text-text-primary mb-8">Ready to Schedule?</h2>
        <Button size="lg" onClick={() => navigate('/book')}>Book Your Home Cleaning Today</Button>
      </section>
    </div>
  )
}

export default HomeCleaning
