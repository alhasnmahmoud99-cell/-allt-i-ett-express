import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const PageTransition = ({ children }) => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <div className="transition-opacity duration-300">
      {children}
    </div>
  )
}

export default PageTransition
