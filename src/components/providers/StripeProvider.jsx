import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { getStripe } from '../services/paymentService'
import { useEffect, useState } from 'react'

export const StripeProvider = ({ children }) => {
  const [stripe, setStripe] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadStripe = async () => {
      try {
        const stripeInstance = await getStripe()
        setStripe(stripeInstance)
      } catch (error) {
        console.error('Failed to load Stripe:', error)
      } finally {
        setLoading(false)
      }
    }

    loadStripe()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-text-secondary">Loading payment provider...</div>
      </div>
    )
  }

  return (
    <Elements stripe={stripe}>
      {children}
    </Elements>
  )
}

export default StripeProvider
