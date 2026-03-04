import { useAuth } from '../context/AuthContext'
import { Button } from '../components/ui/Button'
import { useNavigate } from 'react-router-dom'

const Account = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  if (!user) {
    return (
      <div className="container-main section-padding text-center">
        <h1 className="font-display text-4xl font-bold text-text-primary mb-8">Please log in</h1>
        <Button onClick={() => navigate('/login')}>Go to Login</Button>
      </div>
    )
  }

  return (
    <div className="container-main section-padding">
      <div className="max-w-2xl">
        <h1 className="font-display text-4xl font-bold text-text-primary mb-8">My Account</h1>
        
        <div className="card-base p-8 mb-8">
          <h2 className="font-display text-2xl font-bold text-text-primary mb-4">Profile</h2>
          <p className="text-text-secondary mb-2"><strong>Name:</strong> {user.name}</p>
          <p className="text-text-secondary mb-6"><strong>Email:</strong> {user.email}</p>
          <Button variant="danger" onClick={() => {logout(); navigate('/')}}>Logout</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-base p-8 cursor-pointer hover:shadow-lg">
            <h3 className="font-display text-xl font-bold text-text-primary mb-2">My Bookings</h3>
            <p className="text-text-secondary text-sm">View and manage your bookings</p>
          </div>
          <div className="card-base p-8 cursor-pointer hover:shadow-lg">
            <h3 className="font-display text-xl font-bold text-text-primary mb-2">Time Bank</h3>
            <p className="text-text-secondary text-sm">Check your available hours</p>
          </div>
          <div className="card-base p-8 cursor-pointer hover:shadow-lg">
            <h3 className="font-display text-xl font-bold text-text-primary mb-2">Instructions</h3>
            <p className="text-text-secondary text-sm">Add cleaning instructions</p>
          </div>
          <div className="card-base p-8 cursor-pointer hover:shadow-lg">
            <h3 className="font-display text-xl font-bold text-text-primary mb-2">Settings</h3>
            <p className="text-text-secondary text-sm">Update your preferences</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account
