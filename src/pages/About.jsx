import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()
  return (
    <div className="container-main section-padding">
      <h1 className="font-display text-5xl font-bold text-text-primary mb-8">About Allt I Ett Express AB</h1>
      <div className="max-w-3xl text-text-secondary space-y-6">
        <p className="text-lg">
          Since 2011, Allt I Ett Express AB has been dedicated to providing premium home cleaning and maintenance services to discerning homeowners. 
        </p>
        <p>
          Our mission is simple: to give you back your time by taking care of your home with professionalism, care, and integrity.
        </p>
        <h2 className="font-display text-2xl font-bold text-text-primary mt-8 mb-4">Our Values</h2>
        <ul className="space-y-2 list-disc list-inside">
          <li>Excellence in every service</li>
          <li>Respect for our customers and staff</li>
          <li>Environmental responsibility</li>
          <li>Transparent pricing</li>
          <li>Continuous improvement</li>
        </ul>
      </div>
    </div>
  )
}

export default About
