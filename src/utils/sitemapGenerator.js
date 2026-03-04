/**
 * Sitemap Generator for Allt I Ett Express AB
 * This generates sitemap.xml for SEO
 * Can be used via API endpoint or pre-generated
 */

const DOMAIN = import.meta.env.VITE_API_URL || 'http://localhost:5173'

const pages = [
  // Main pages
  { path: '', lastmod: '2026-03-04', changefreq: 'weekly', priority: '1.0' },
  { path: '/about', lastmod: '2026-03-04', changefreq: 'monthly', priority: '0.8' },
  { path: '/contact', lastmod: '2026-03-04', changefreq: 'yearly', priority: '0.7' },
  { path: '/faq', lastmod: '2026-03-04', changefreq: 'monthly', priority: '0.7' },
  { path: '/terms', lastmod: '2026-03-04', changefreq: 'yearly', priority: '0.5' },
  { path: '/privacy', lastmod: '2026-03-04', changefreq: 'yearly', priority: '0.5' },
  { path: '/sustainability', lastmod: '2026-03-04', changefreq: 'monthly', priority: '0.6' },
  
  // Service pages
  { path: '/services/cleaning', lastmod: '2026-03-04', changefreq: 'monthly', priority: '0.9' },
  { path: '/services/cleaning/home', lastmod: '2026-03-04', changefreq: 'monthly', priority: '0.9' },
  { path: '/services/cleaning/deep', lastmod: '2026-03-04', changefreq: 'monthly', priority: '0.9' },
  { path: '/services/cleaning/windows', lastmod: '2026-03-04', changefreq: 'monthly', priority: '0.9' },
  { path: '/services/cleaning/move-out', lastmod: '2026-03-04', changefreq: 'monthly', priority: '0.9' },
  { path: '/services/garden', lastmod: '2026-03-04', changefreq: 'monthly', priority: '0.9' },
  { path: '/services/garden/gardening', lastmod: '2026-03-04', changefreq: 'monthly', priority: '0.9' },
  { path: '/services/office', lastmod: '2026-03-04', changefreq: 'monthly', priority: '0.9' },
  { path: '/business', lastmod: '2026-03-04', changefreq: 'monthly', priority: '0.8' },
  
  // Blog pages
  { path: '/blog', lastmod: '2026-03-04', changefreq: 'weekly', priority: '0.8' },
  { path: '/blog/home-cleaning-tips', lastmod: '2026-03-04', changefreq: 'yearly', priority: '0.7' },
  { path: '/blog/eco-friendly-cleaning', lastmod: '2026-03-04', changefreq: 'yearly', priority: '0.7' },
  { path: '/blog/spring-cleaning-guide', lastmod: '2026-03-04', changefreq: 'yearly', priority: '0.7' },
  
  // Auth pages (no index)
  // { path: '/login', lastmod: '2026-03-04', changefreq: 'yearly', priority: '0.3' },
  // { path: '/register', lastmod: '2026-03-04', changefreq: 'yearly', priority: '0.3' },
]

/**
 * Generate sitemap XML
 */
export const generateSitemapXML = () => {
  const urlEntries = pages
    .map(page => {
      return `  <url>
    <loc>${DOMAIN}${page.path}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    })
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`
}

/**
 * API endpoint to serve sitemap
 * Call this from your backend: GET /api/sitemap.xml
 */
export const sitemapHandler = (req, res) => {
  const xml = generateSitemapXML()
  res.setHeader('Content-Type', 'application/xml')
  res.send(xml)
}

export default {
  generateSitemapXML,
  sitemapHandler,
}
