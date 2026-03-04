import { loadStripe } from '@stripe/stripe-js'

const STRIPE_PUBLIC_KEY = import.meta.env.VITE_STRIPE_PUBLIC_KEY || 'pk_test_placeholder'
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5173'

if (STRIPE_PUBLIC_KEY === 'pk_test_placeholder' || !STRIPE_PUBLIC_KEY) {
  console.warn('❌ MISSING ENV VARIABLE: VITE_STRIPE_PUBLIC_KEY is not set. Add your Stripe public key to .env file.')
}

// Initialize Stripe
let stripePromise = null

export const getStripe = async () => {
  if (!stripePromise) {
    if (STRIPE_PUBLIC_KEY === 'pk_test_placeholder') {
      throw new Error('Stripe is not configured. Please add VITE_STRIPE_PUBLIC_KEY to your .env file.')
    }
    stripePromise = loadStripe(STRIPE_PUBLIC_KEY)
  }
  return stripePromise
}

/**
 * Create a payment intent on the backend
 * @param {Object} bookingData - The booking details
 * @returns {Promise<Object>} - Contains clientSecret for Stripe Elements
 */
export const createPaymentIntent = async (bookingData) => {
  try {
    const response = await fetch(`${API_URL}/api/payments/create-intent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: Math.round(bookingData.totalPrice * 100), // Convert to cents
        currency: 'sek', // Swedish Krona
        bookingId: bookingData.bookingNumber,
        customerEmail: bookingData.email,
        customerName: bookingData.name,
        serviceType: bookingData.service,
        description: `Cleaning service - ${bookingData.service}`,
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to create payment intent')
    }

    const data = await response.json()
    return data // { clientSecret, paymentIntentId }
  } catch (error) {
    console.error('Error creating payment intent:', error)
    throw error
  }
}

/**
 * Confirm payment with Stripe Elements
 * @param {Object} stripe - Stripe instance
 * @param {Object} elements - Stripe Elements instance
 * @param {string} clientSecret - The payment intent client secret
 * @returns {Promise<Object>} - Payment confirmation result
 */
export const confirmPayment = async (stripe, elements, clientSecret) => {
  try {
    const result = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${API_URL}/booking-confirmation`,
      },
    })

    return result
  } catch (error) {
    console.error('Error confirming payment:', error)
    throw error
  }
}

/**
 * Verify payment status
 * @param {string} paymentIntentId - The payment intent ID
 * @returns {Promise<Object>} - Payment status details
 */
export const verifyPayment = async (paymentIntentId) => {
  try {
    const response = await fetch(
      `${API_URL}/api/payments/verify/${paymentIntentId}`
    )

    if (!response.ok) {
      throw new Error('Failed to verify payment')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error verifying payment:', error)
    throw error
  }
}

/**
 * Handle payment refund
 * @param {string} paymentIntentId - The payment intent ID
 * @param {Object} refundData - Additional refund data
 * @returns {Promise<Object>} - Refund confirmation
 */
export const requestRefund = async (paymentIntentId, refundData = {}) => {
  try {
    const response = await fetch(`${API_URL}/api/payments/refund`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        paymentIntentId,
        ...refundData,
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to process refund')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error requesting refund:', error)
    throw error
  }
}
