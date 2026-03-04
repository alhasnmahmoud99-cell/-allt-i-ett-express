import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { I18nextProvider } from 'react-i18next'
import i18n from './config/i18n'
import { AuthProvider } from './context/AuthContext'
import { BookingProvider } from './context/BookingContext'
import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CookieBanner from './components/layout/CookieBanner'
import ChatWidget from './components/ai-assistant/ChatWidget'
import PageTransition from './components/layout/PageTransition'

// Pages
import Home from './pages/Home'
import {
  NotFound,
  Login,
  Register,
  About,
  Sustainability,
  Contact,
  Terms,
  Privacy,
  Faq,
  Blog,
  BlogArticle,
  Account,
  Book,
  AllCleaning,
  HomeCleaning,
  DeepCleaning,
  WindowCleaning,
  MoveOutCleaning,
  AllGarden,
  GardeningService,
  OfficeCleaningPage,
  BusinessPage,
} from './pages/index'

const queryClient = new QueryClient()

function App() {
  const [cookiesAccepted, setCookiesAccepted] = useState(() => {
    return localStorage.getItem('cookies-accepted') === 'true'
  })

  useEffect(() => {
    const handleCookieAccept = (accepted) => {
      setCookiesAccepted(accepted)
      if (accepted) {
        localStorage.setItem('cookies-accepted', 'true')
      }
    }
    
    window.addEventListener('cookiesAccepted', () => handleCookieAccept(true))
    return () => window.removeEventListener('cookiesAccepted', () => {})
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <LanguageProvider>
          <AuthProvider>
            <BookingProvider>
              <Router>
                <div className="flex flex-col min-h-screen" dir={document.documentElement.dir}>
                  <Navbar />
                  <main className="flex-grow">
                    <PageTransition>
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cleaning" element={<AllCleaning />} />
                        <Route path="/cleaning/home-cleaning" element={<HomeCleaning />} />
                        <Route path="/cleaning/deep-cleaning" element={<DeepCleaning />} />
                        <Route path="/cleaning/window-cleaning" element={<WindowCleaning />} />
                        <Route path="/cleaning/move-out-cleaning" element={<MoveOutCleaning />} />
                        <Route path="/garden" element={<AllGarden />} />
                        <Route path="/garden/gardening-service" element={<GardeningService />} />
                        <Route path="/business" element={<BusinessPage />} />
                        <Route path="/business/office-cleaning" element={<OfficeCleaningPage />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/sustainability" element={<Sustainability />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/faq" element={<Faq />} />
                        <Route path="/tips" element={<Blog />} />
                        <Route path="/tips/:slug" element={<BlogArticle />} />
                        <Route path="/terms" element={<Terms />} />
                        <Route path="/privacy" element={<Privacy />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/book" element={<Book />} />
                        <Route path="/account/*" element={<Account />} />
                        <Route path="*" element={<NotFound />} />
                      </Routes>
                    </PageTransition>
                  </main>
                  <Footer />
                  {!cookiesAccepted && <CookieBanner onAccept={() => setCookiesAccepted(true)} />}
                  <ChatWidget />
                </div>
              </Router>
            </BookingProvider>
          </AuthProvider>
        </LanguageProvider>
      </I18nextProvider>
    </QueryClientProvider>
  )
}

export default App
