import { useEffect } from 'react'

/**
 * SEO Meta Tags Component
 * Updates page title, description, and Open Graph tags
 */
export const SEOMeta = ({
  title,
  description,
  image,
  url,
  type = 'website',
  author = 'Allt I Ett Express AB',
}) => {
  useEffect(() => {
    // Update page title
    document.title = title ? `${title} | Allt I Ett Express AB` : 'Allt I Ett Express AB - Professional Home Services'

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', description || 'Professional home cleaning and maintenance services in Sweden')
    }

    // Open Graph tags
    updateMetaTag('og:title', title || 'Allt I Ett Express AB')
    updateMetaTag('og:description', description || 'Professional home cleaning and maintenance services')
    updateMetaTag('og:type', type)
    updateMetaTag('og:image', image || 'https://images.unsplash.com/photo-1563381013-db500b5511dd?w=1200&h=630')
    updateMetaTag('og:url', url || window.location.href)

    // Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:title', title || 'Allt I Ett Express AB')
    updateMetaTag('twitter:description', description || 'Professional home services')
    updateMetaTag('twitter:image', image || 'https://images.unsplash.com/photo-1563381013-db500b5511dd?w=1200&h=630')

    // Article author
    updateMetaTag('article:author', author)

    // Canonical URL
    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) {
      canonical.href = url || window.location.href
    }

    // Scroll to top
    window.scrollTo(0, 0)
  }, [title, description, image, url, type, author])

  return null
}

/**
 * Helper function to update or create meta tags
 */
const updateMetaTag = (name, content) => {
  let tag = document.querySelector(`meta[property="${name}"], meta[name="${name}"]`)

  if (!tag) {
    tag = document.createElement('meta')
    if (name.startsWith('og:') || name.startsWith('twitter:')) {
      tag.setAttribute('property', name)
    } else {
      tag.setAttribute('name', name)
    }
    document.head.appendChild(tag)
  }

  tag.setAttribute('content', content)
}

/**
 * JSON-LD Schema Component
 * Adds structured data for SEO
 */
export const JSONLDSchema = ({ schema }) => {
  useEffect(() => {
    // Remove old script if exists
    const oldScript = document.getElementById('json-ld-schema')
    if (oldScript) {
      oldScript.remove()
    }

    // Add new schema
    const script = document.createElement('script')
    script.id = 'json-ld-schema'
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(schema)
    document.head.appendChild(script)

    return () => {
      if (script && script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [schema])

  return null
}

/**
 * LocalBusiness Schema
 * Use on home page
 */
export const getLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Allt I Ett Express AB',
    description: 'Professional home cleaning and maintenance services in Sweden',
    url: 'https://allt-i-ett-express-ab.vercel.app',
    logo: 'https://allt-i-ett-express-ab.vercel.app/logo.png',
    image: 'https://images.unsplash.com/photo-1563381013-db500b5511dd?w=500',
    telephone: '+46-XXXX-XXXX',
    email: 'info@allt-i-ett-express-ab.se',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Your Street Address',
      addressLocality: 'Stockholm',
      addressRegion: 'Stockholm',
      postalCode: '00000',
      addressCountry: 'SE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '59.3293',
      longitude: '18.0686',
    },
    priceRange: 'SEK 400-2000',
    sameAs: [
      'https://www.facebook.com/allt-i-ett-express-ab',
      'https://www.instagram.com/allt-i-ett-express-ab',
      'https://www.linkedin.com/company/allt-i-ett-express-ab',
    ],
    areaServed: ['Stockholm', 'Gothenburg', 'Malmo', 'Uppsala', 'Vasteras'],
    serviceType: ['Home Cleaning', 'Office Cleaning', 'Garden Services'],
  }
}

/**
 * Service Schema
 * Use on service detail pages
 */
export const getServiceSchema = (serviceName, description, price) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Allt I Ett Express AB',
    },
    areaServed: {
      '@type': 'City',
      name: 'Sweden',
    },
    offers: {
      '@type': 'Offer',
      price: price,
      priceCurrency: 'SEK',
      url: window.location.href,
    },
    serviceType: serviceName,
  }
}

/**
 * Organization Schema
 * Use on footer or globally
 */
export const getOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Allt I Ett Express AB',
    url: 'https://allt-i-ett-express-ab.vercel.app',
    logo: 'https://allt-i-ett-express-ab.vercel.app/logo.png',
    description: 'Professional home cleaning and maintenance services',
    foundingDate: '2010',
    sameAs: [
      'https://www.facebook.com/allt-i-ett-express-ab',
      'https://www.instagram.com/allt-i-ett-express-ab',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+46-XXXX-XXXX',
      email: 'info@allt-i-ett-express-ab.se',
    },
  }
}

export default {
  SEOMeta,
  JSONLDSchema,
  getLocalBusinessSchema,
  getServiceSchema,
  getOrganizationSchema,
}
