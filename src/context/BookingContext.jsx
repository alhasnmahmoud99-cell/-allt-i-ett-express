import { createContext, useContext, useState, useCallback } from 'react'

export const BookingContext = createContext()

export const BookingProvider = ({ children }) => {
  const [bookingData, setBookingData] = useState({
    service: null,
    address: '',
    zipCode: '',
    city: '',
    apartmentSize: 100,
    bedrooms: 2,
    bathrooms: 1,
    floorNumber: 1,
    hasElevator: false,
    homeType: 'apartment',
    frequency: 'one-time',
    firstDate: null,
    timeSlot: 'morning',
    instructions: '',
    extras: [],
    contactInfo: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
    },
    paymentMethod: 'card',
    createAccount: false,
    termsAccepted: false,
  })

  const [bookings, setBookings] = useState([])
  const [currentBookingNumber, setCurrentBookingNumber] = useState(null)

  const updateBooking = useCallback((field, value) => {
    setBookingData(prev => ({ ...prev, [field]: value }))
  }, [])

  const updateContactInfo = useCallback((field, value) => {
    setBookingData(prev => ({
      ...prev,
      contactInfo: { ...prev.contactInfo, [field]: value }
    }))
  }, [])

  const resetBooking = useCallback(() => {
    setBookingData({
      service: null,
      address: '',
      zipCode: '',
      city: '',
      apartmentSize: 100,
      bedrooms: 2,
      bathrooms: 1,
      floorNumber: 1,
      hasElevator: false,
      homeType: 'apartment',
      frequency: 'one-time',
      firstDate: null,
      timeSlot: 'morning',
      instructions: '',
      extras: [],
      contactInfo: {
        fullName: '',
        email: '',
        phone: '',
        address: '',
      },
      paymentMethod: 'card',
      createAccount: false,
      termsAccepted: false,
    })
    setCurrentBookingNumber(null)
  }, [])

  const confirmBooking = useCallback((bookingNumber) => {
    setCurrentBookingNumber(bookingNumber)
    const newBooking = {
      id: bookingNumber,
      date: bookingData.firstDate,
      service: bookingData.service,
      status: 'confirmed',
      createdAt: new Date(),
    }
    setBookings(prev => [newBooking, ...prev])
  }, [bookingData])

  return (
    <BookingContext.Provider value={{
      bookingData,
      bookings,
      currentBookingNumber,
      updateBooking,
      updateContactInfo,
      resetBooking,
      confirmBooking,
    }}>
      {children}
    </BookingContext.Provider>
  )
}

export const useBooking = () => {
  const context = useContext(BookingContext)
  if (!context) {
    throw new Error('useBooking must be used within BookingProvider')
  }
  return context
}
