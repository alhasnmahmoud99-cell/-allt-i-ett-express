export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

export const formatPrice = (price, locale = 'en-US') => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'USD',
  }).format(price)
}

export const formatDate = (date, locale = 'en-US') => {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
}

export const formatDateTime = (date, locale = 'en-US') => {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(date))
}

export const calculateRUT = (apartmentSize, bedrooms, bathrooms) => {
  const basePrice = apartmentSize * 2.5
  const roomPrice = bedrooms * 50
  return basePrice + roomPrice
}

export const validateZIP = (zip) => {
  const validZIPs = ['10001', '10002', '10003', '10004', '10005', '90001', '90002', '90003']
  return validZIPs.includes(zip)
}

export const getFrequencyDiscount = (frequency) => {
  const discounts = {
    'weekly': 0.15,
    'every-2-weeks': 0.10,
    'monthly': 0.05,
    'one-time': 0,
  }
  return discounts[frequency] || 0
}

export const calculateBookingPrice = (basePrice, extras, frequency) => {
  const extrasTotal = extras.reduce((sum, extra) => sum + extra.price, 0)
  const discount = getFrequencyDiscount(frequency)
  const subtotal = basePrice + extrasTotal
  const final = subtotal * (1 - discount)
  return {
    basePrice,
    extrasTotal,
    discount: (discount * 100),
    subtotal,
    final: Math.round(final * 100) / 100,
  }
}

export const generateBookingNumber = () => {
  return 'BK-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9).toUpperCase()
}
