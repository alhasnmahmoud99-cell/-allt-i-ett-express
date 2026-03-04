import { Accordion } from '../components/ui/Accordion'

const Faq = () => {
  const faqItems = [
    { title: 'How do I book a cleaning?', content: 'Click the Book Now button and follow our simple 6-step wizard.' },
    { title: 'What areas do you service?', content: 'We service 20+ major cities. Enter your ZIP code during booking to check availability.' },
    { title: 'Are your cleaners insured?', content: 'Yes! All cleaners are fully insured and background-checked.' },
    { title: 'What if Im not satisfied?', content: 'We offer a 100% satisfaction guarantee. Well make it right!' },
    { title: 'Can I reschedule?', content: 'Yes, you can reschedule up to 24 hours before your appointment.' },
    { title: 'Do you provide eco-friendly products?', content: 'Yes! All our products are eco-friendly and safe.' },
  ]

  return (
    <div className="container-main section-padding max-w-3xl">
      <h1 className="font-display text-5xl font-bold text-text-primary mb-8">Frequently Asked Questions</h1>
      <Accordion items={faqItems} />
    </div>
  )
}

export default Faq
