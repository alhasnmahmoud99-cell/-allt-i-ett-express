import { createContext, useState, useCallback, useContext } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('user')
    return stored ? JSON.parse(stored) : null
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const login = useCallback(async (email, password) => {
    setLoading(true)
    setError(null)
    try {
      // Mock login - replace with actual API call
      const mockUser = {
        id: '1',
        email,
        name: 'John Doe',
        phone: '+1 (555) 123-4567',
      }
      setUser(mockUser)
      localStorage.setItem('user', JSON.stringify(mockUser))
      localStorage.setItem('authToken', 'mock-token-' + Date.now())
      return mockUser
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const register = useCallback(async (email, password, name) => {
    setLoading(true)
    setError(null)
    try {
      // Mock register - replace with actual API call
      const mockUser = {
        id: '1',
        email,
        name,
        phone: '',
      }
      setUser(mockUser)
      localStorage.setItem('user', JSON.stringify(mockUser))
      localStorage.setItem('authToken', 'mock-token-' + Date.now())
      return mockUser
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const logout = useCallback(() => {
    setUser(null)
    localStorage.removeItem('user')
    localStorage.removeItem('authToken')
  }, [])

  const updateUser = useCallback((updates) => {
    const newUser = { ...user, ...updates }
    setUser(newUser)
    localStorage.setItem('user', JSON.stringify(newUser))
  }, [user])

  return (
    <AuthContext.Provider value={{ user, loading, error, login, register, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
