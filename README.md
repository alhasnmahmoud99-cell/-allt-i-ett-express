# SparkHome - Production Ready Home Services Website

A complete, modern, production-ready website for a premium home cleaning and services company.

## Features

- **Complete Service Booking System**: 6-step wizard for seamless booking experience
- **Multi-language Support**: Full Arabic (RTL) and English (LTR) translation
- **Modern Design**: Premium UI with Playfair Display and DM Sans fonts
- **AI Assistant**: Floating chat widget with Anthropic Claude integration
- **Authentication**: User login, registration, and protected routes
- **Customer Dashboard**: Manage bookings, time bank, and preferences
- **Responsive Design**: Mobile-first, works perfectly on all devices
- **SEO Optimized**: Meta tags, structured data, sitemap
- **Payment Integration**: Stripe React Elements for secure payments
- **Email System**: Automated booking confirmations and notifications
- **Real-time Price Calculation**: Dynamic pricing based on frequency, extras, and location

## Tech Stack

- React 18
- React Router v6
- Tailwind CSS
- Framer Motion
- React Hook Form + Zod
- Zustand
- React Query
- i18next
- Stripe React Elements
- Anthropic Claude API
- Lucide Icons
- Day.js

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── ui/              # Atomic UI components
│   ├── layout/          # Layout components (Navbar, Footer, etc.)
│   ├── sections/        # Page sections
│   ├── booking/         # Booking wizard
│   ├── dashboard/       # Customer dashboard
│   └── ai-assistant/    # Chat widget
├── pages/               # Page components
├── context/             # React Context
├── hooks/              # Custom hooks
├── services/           # API services
├── utils/              # Utility functions
├── locales/            # i18n translations
├── data/               # Static data
└── config/             # Configuration files
```

## Key Features Implemented

### Booking System
- 6-step booking wizard with real-time price updates
- Service selection with visual cards
- Home details configuration (size, rooms, floors)
- Schedule selection with frequency discounts
- Extras selection with price breakdown
- Contact information and payment method
- Order summary and confirmation

### Design System
- Color variables: Primary (#1B4D3E), Accent (#F4C542)
- 8px spacing grid
- 20px card radius, 12px button radius
- Soft shadows (0 8px 40px rgba(27,77,62,0.12))
- Playfair Display for headings, DM Sans for body

### Multi-language Support
- English and Arabic with automatic RTL/LTR
- All text in JSON translation files
- Language toggle in navbar
- Persistent language preference

### Home Page Sections
1. Hero with trust badges
2. Services grid
3. How it works
4. Why choose us
5. Stats counters
6. Testimonials carousel
7. Blog preview
8. Business banner
9. Sustainability
10. FAQ accordion

## Environment Variables

Create a `.env.local` file:

```
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
VITE_ANTHROPIC_API_KEY=your_anthropic_api_key
VITE_API_BASE_URL=https://api.sparkhome.com
```

## Deployment

Deploy to Vercel, Netlify, or any Node.js hosting:

```bash
npm run build
```

Deploy the `dist/` folder.

## Performance

- Lighthouse scores targeted: 95+ Performance, 100 Accessibility
- Code splitting with React.lazy
- Image lazy loading
- CSS optimization
- API response caching with React Query

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

Proprietary - SparkHome

## Support

For support, email hello@sparkhome.com or visit www.sparkhome.com
