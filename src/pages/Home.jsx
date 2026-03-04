import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Rating } from '../components/ui/Rating'
import { Accordion } from '../components/ui/Accordion'
import { ChevronDown, Check, Users, MapPin, Briefcase, Leaf } from 'lucide-react'

const Home = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [counters, setCounters] = useState({ customers: 0, cities: 0, professionals: 0, experience: 0 })
  const statsRef = useRef(null)

  // Animate counters on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // Animate counters
        const duration = 2000
        const start = Date.now()
        const interval = setInterval(() => {
          const progress = Math.min((Date.now() - start) / duration, 1)
          setCounters({
            customers: Math.floor(50000 * progress),
            cities: Math.floor(20 * progress),
            professionals: Math.floor(1000 * progress),
            experience: Math.floor(15 * progress),
          })
          if (progress === 1) clearInterval(interval)
        }, 50)
        observer.unobserve(entry.target)
      }
    })
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  const services = [
    {
      name: t('services.homeCleaning.name'),
      description: t('services.homeCleaning.description'),
      icon: '🏠',
      path: '/cleaning/home-cleaning',
    },
    {
      name: t('services.deepCleaning.name'),
      description: t('services.deepCleaning.description'),
      icon: '✨',
      path: '/cleaning/deep-cleaning',
    },
    {
      name: t('services.windowCleaning.name'),
      description: t('services.windowCleaning.description'),
      icon: '🪟',
      path: '/cleaning/window-cleaning',
    },
    {
      name: t('services.moveOutCleaning.name'),
      description: t('services.moveOutCleaning.description'),
      icon: '📦',
      path: '/cleaning/move-out-cleaning',
    },
    {
      name: t('services.gardenService.name'),
      description: t('services.gardenService.description'),
      icon: '🌿',
      path: '/garden/gardening-service',
    },
    {
      name: t('services.officeCleaning.name'),
      description: t('services.officeCleaning.description'),
      icon: '🏢',
      path: '/business/office-cleaning',
    },
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      city: 'New York',
      rating: 5,
      text: 'Absolutely love Allt I Ett Express AB! The cleaners are professional and my apartment has never looked better.',
    },
    {
      name: 'Ahmed Al-Mansouri',
      city: 'Dubai',
      rating: 5,
      text: 'خدمة ممتازة وموثوقة جداً. الفريق محترف وسريع في التنفيذ.',
    },
    {
      name: 'Maria Garcia',
      city: 'Los Angeles',
      rating: 5,
      text: 'Been using Allt I Ett Express AB for 6 months now. Consistent quality and great customer service!',
    },
    {
      name: 'Emma Wilson',
      city: 'London',
      rating: 5,
      text: 'Best cleaning service I have used. Highly recommend to anyone looking for reliability.',
    },
    {
      name: 'Hassan Ahmed',
      city: 'Cairo',
      rating: 5,
      text: 'خدمة بجودة عالية وأسعار منصفة. أنصح بشدة باستخدام Allt I Ett Express AB.',
    },
  ]

  const blogs = [
    {
      title: '10 Tips for Maintaining a Clean Home Between Cleanings',
      date: 'Mar 1, 2026',
      readTime: '5 min',
      category: 'Tips',
      image: 'https://images.unsplash.com/photo-1584622181563-430f63602d4b?w=400',
    },
    {
      title: 'Why Professional Cleaning is Worth the Investment',
      date: 'Feb 28, 2026',
      readTime: '8 min',
      category: 'Guide',
      image: 'https://images.unsplash.com/photo-1527892512404-7e378c9b0d8f?w=400',
    },
    {
      title: 'Eco-Friendly Cleaning Products That Actually Work',
      date: 'Feb 25, 2026',
      readTime: '6 min',
      category: 'Sustainability',
      image: 'https://images.unsplash.com/photo-1563453392212-d0c3fb526aa7?w=400',
    },
  ]

  const faqItems = [
    {
      title: 'How do I book a cleaning?',
      content: 'Click the "Book Now" button and follow our simple 6-step wizard. You\'ll set your service, address, date, and pay. Takes less than 60 seconds!',
    },
    {
      title: 'What areas do you service?',
      content: 'We currently serve 20+ major cities across North America and the Middle East. Enter your ZIP code during booking to check availability.',
    },
    {
      title: 'Are your cleaners insured?',
      content: 'Yes! All our cleaners are fully insured and thoroughly background-checked. Your home is completely protected.',
    },
    {
      title: 'What if I\'m not satisfied?',
      content: 'We offer a 100% satisfaction guarantee. If you\'re not happy, we\'ll make it right for free.',
    },
  ]

  return (
    <div>
      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary-light to-primary-light overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="container-main relative z-10 py-32 md:py-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="font-sans text-xl md:text-2xl mb-8 opacity-90">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" onClick={() => navigate('/book')} variant="primary">
                {t('hero.ctaPrimary')}
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => navigate('/cleaning')}>
                {t('hero.ctaSecondary')}
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
              {Object.values(t('hero.badges', { returnObjects: true })).map((badge, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check size={20} className="text-accent" />
                  <span className="text-sm font-sans">{badge}</span>
                </div>
              ))}
            </div>

            {/* Scroll indicator */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex justify-center"
            >
              <ChevronDown size={32} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: SERVICES GRID */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
              {t('services.title')}
            </h2>
            <p className="text-text-secondary text-lg">We have everything you need to keep your space perfect</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ translateY: -8 }}
                onClick={() => navigate(service.path)}
                className="cursor-pointer group relative h-64 rounded-card overflow-hidden shadow-soft hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-${['1584622181563-430f63602d4b', '1527892512404-7e378c9b0d8f', '1563453392212-d0c3fb526aa7', '1558618666-fcd25c85cd64', '1558618666-fcd25c85cd64', '1559027615-cd4628902d4a'][index]}?w=600)`,
                    backgroundPosition: 'center',
                  }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <p className="text-4xl mb-3">{service.icon}</p>
                  <h3 className="font-display text-2xl font-bold mb-2">{service.name}</h3>
                  <p className="text-sm opacity-90">{service.description}</p>
                  <button className="mt-4 px-4 py-2 bg-primary-light hover:bg-accent text-white rounded-btn font-medium transition-colors w-fit">
                    {t('common.learnMore')}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: HOW IT WORKS */}
      <section className="section-padding bg-surface">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
              {t('howItWorks.title')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((step) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: step * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-light text-white rounded-full flex items-center justify-center mx-auto mb-6 font-display text-2xl font-bold">
                  {step}
                </div>
                <h3 className="font-display text-2xl font-bold text-text-primary mb-3">
                  {t(`howItWorks.steps.${step - 1}.title`)}
                </h3>
                <p className="text-text-secondary">
                  {t(`howItWorks.steps.${step - 1}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE US */}
      <section className="section-padding bg-background">
        <div className="container-main grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-card overflow-hidden shadow-soft h-96"
          >
            <img
              src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600"
              alt="Happy family"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl font-bold text-text-primary mb-8">
              {t('whyChooseUs.title')}
            </h2>

            <ul className="space-y-4 mb-8">
              {(typeof t('whyChooseUs.points', { returnObjects: true }) === 'object'
                ? Object.values(t('whyChooseUs.points', { returnObjects: true }))
                : t('whyChooseUs.points', { returnObjects: true })).map((point, index) => (
                <li key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-light text-white flex items-center justify-center mt-1">
                    <Check size={16} />
                  </div>
                  <span className="text-text-secondary">{point}</span>
                </li>
              ))}
            </ul>

            <Button size="lg">{t('whyChooseUs.cta')}</Button>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: STATS */}
      <section ref={statsRef} className="section-padding bg-primary text-white">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="font-display text-5xl font-bold mb-2">
                {counters.customers.toLocaleString()}+
              </div>
              <p className="font-sans opacity-90">{t('stats.customers')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="font-display text-5xl font-bold mb-2">
                {counters.cities}+
              </div>
              <p className="font-sans opacity-90">{t('stats.cities')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="font-display text-5xl font-bold mb-2">
                {counters.professionals.toLocaleString()}+
              </div>
              <p className="font-sans opacity-90">{t('stats.professionals')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="font-display text-5xl font-bold mb-2">
                {counters.experience}+
              </div>
              <p className="font-sans opacity-90">{t('stats.experience')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 6: TESTIMONIALS */}
      <section className="section-padding bg-surface">
        <div className="container-main">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-text-primary mb-16">
            {t('testimonials.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-base p-6 hover:shadow-lg transition-shadow"
              >
                <Rating value={testimonial.rating} readOnly />
                <p className="mt-4 text-text-secondary text-sm mb-4">{testimonial.text}</p>
                <div>
                  <p className="font-medium text-text-primary">{testimonial.name}</p>
                  <p className="text-xs text-text-secondary">{testimonial.city}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: BLOG PREVIEW */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-text-primary mb-16">
            Latest Articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-base overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <Badge variant="default" className="mb-3">
                    {blog.category}
                  </Badge>
                  <h3 className="font-display text-xl font-bold text-text-primary mb-3">
                    {blog.title}
                  </h3>
                  <div className="flex justify-between text-xs text-text-secondary">
                    <span>{blog.date}</span>
                    <span>{blog.readTime}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" onClick={() => navigate('/tips')}>
              View All Articles
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 8: BUSINESS BANNER */}
      <section className="section-padding bg-surface">
        <div className="container-main grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-card overflow-hidden shadow-soft h-96"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600"
              alt="Office cleaning"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="primary" className="mb-4">Business Solutions</Badge>
            <h2 className="font-display text-4xl font-bold text-text-primary mb-4">
              We Also Serve Businesses
            </h2>
            <p className="text-text-secondary mb-8">
              Keep your workplace professional and hygienic with our specialized business cleaning solutions.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex gap-3">
                <Briefcase className="text-primary-light flex-shrink-0" size={20} />
                <span>Office Cleaning</span>
              </li>
              <li className="flex gap-3">
                <Users className="text-primary-light flex-shrink-0" size={20} />
                <span>Housing Associations</span>
              </li>
              <li className="flex gap-3">
                <MapPin className="text-primary-light flex-shrink-0" size={20} />
                <span>Cleaning as Salary Benefit</span>
              </li>
            </ul>
            <Button size="lg" onClick={() => navigate('/business')}>
              Business Solutions
            </Button>
          </motion.div>
        </div>
      </section>

      {/* SECTION 9: SUSTAINABILITY */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Our Commitment to Sustainability
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🌿',
                title: 'Eco-Friendly Products',
                description: 'All our cleaning products are biodegradable and safe for your family and the environment.',
              },
              {
                icon: '👥',
                title: 'Fair Employment',
                description: 'Permanent staff with competitive wages, benefits, and professional development opportunities.',
              },
              {
                icon: '🌍',
                title: 'Carbon Reduction',
                description: 'We offset our carbon footprint and work towards net-zero environmental impact.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-base p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-display text-2xl font-bold text-text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-text-secondary">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" onClick={() => navigate('/sustainability')}>
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 10: FAQ PREVIEW */}
      <section className="section-padding bg-surface">
        <div className="container-main max-w-3xl">
          <h2 className="font-display text-4xl font-bold text-center text-text-primary mb-16">
            Frequently Asked Questions
          </h2>

          <Accordion items={faqItems} />

          <div className="text-center mt-12">
            <Button size="lg" onClick={() => navigate('/faq')}>
              See All FAQs
            </Button>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-primary-light text-white">
        <div className="container-main text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
            Ready to Experience Allt I Ett Express AB?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book your first cleaning in less than 60 seconds
          </p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => navigate('/book')}>
            Book Now
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Home
