import { useTranslation } from 'react-i18next'
import { Button } from '../components/ui/Button'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container-main text-center">
        <h1 className="font-display text-6xl font-bold text-text-primary mb-4">404</h1>
        <p className="text-xl text-text-secondary mb-8">Page not found</p>
        <Button onClick={() => navigate('/')}>Go Home</Button>
      </div>
    </div>
  )
}

export default NotFound
