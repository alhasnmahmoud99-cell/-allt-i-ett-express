import { useState } from 'react'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Input } from '../components/ui/Input'
import { Select } from '../components/ui/Select'
import { Toggle } from '../components/ui/Toggle'
import { useBooking } from '../context/BookingContext'
import { useNavigate } from 'react-router-dom'

const Book = () => {
  const { bookingData, updateBooking, updateContactInfo } = useBooking()
  const navigate = useNavigate()
  const [step, setStep] = useState(1)

  const services = [
    { value: 'home-cleaning', label: 'Home Cleaning' },
    { value: 'deep-cleaning', label: 'Deep Cleaning' },
    { value: 'window-cleaning', label: 'Window Cleaning' },
    { value: 'move-out', label: 'Move-Out Cleaning' },
    { value: 'garden', label: 'Garden Service' },
    { value: 'office', label: 'Office Cleaning' },
  ]

  const handleNext = () => {
    if (step < 6) setStep(step + 1)
  }

  const handlePrev = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleConfirm = () => {
    // In production, would call API to create booking
    alert('Booking confirmed! Check your email for confirmation details.')
    navigate('/')
  }

  return (
    <div className="container-main section-padding">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-4xl font-bold text-text-primary mb-8">Book Your Cleaning</h1>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-text-secondary">Step {step} of 6</span>
            <span className="text-sm font-medium text-text-secondary">Progress</span>
          </div>
          <div className="w-full bg-border rounded-full h-2">
            <div
              className="bg-primary-light h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 6) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              {step === 1 && (
                <div>
                  <h2 className="font-display text-2xl font-bold text-text-primary mb-6">Select Service</h2>
                  <div className="space-y-3">
                    {services.map(service => (
                      <div
                        key={service.value}
                        onClick={() => updateBooking('service', service.value)}
                        className={`p-4 border-2 rounded-btn cursor-pointer transition-all ${
                          bookingData.service === service.value
                            ? 'border-primary-light bg-primary-ultra-light'
                            : 'border-border hover:border-primary'
                        }`}
                      >
                        <p className="font-medium text-text-primary">{service.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="font-display text-2xl font-bold text-text-primary mb-6">Home Details</h2>
                  <div className="space-y-4">
                    <Input
                      label="Address"
                      value={bookingData.address}
                      onChange={(e) => updateBooking('address', e.target.value)}
                    />
                    <Input
                      label="ZIP Code"
                      value={bookingData.zipCode}
                      onChange={(e) => updateBooking('zipCode', e.target.value)}
                    />
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">
                        Apartment Size ({bookingData.apartmentSize} sqm)
                      </label>
                      <input
                        type="range"
                        min="30"
                        max="300"
                        value={bookingData.apartmentSize}
                        onChange={(e) => updateBooking('apartmentSize', parseInt(e.target.value))}
                        className="w-full"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-2">Bedrooms</label>
                        <input
                          type="number"
                          min="1"
                          value={bookingData.bedrooms}
                          onChange={(e) => updateBooking('bedrooms', parseInt(e.target.value))}
                          className="w-full px-4 py-2 border border-border rounded-btn"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-2">Bathrooms</label>
                        <input
                          type="number"
                          min="1"
                          value={bookingData.bathrooms}
                          onChange={(e) => updateBooking('bathrooms', parseInt(e.target.value))}
                          className="w-full px-4 py-2 border border-border rounded-btn"
                        />
                      </div>
                    </div>
                    <Toggle
                      checked={bookingData.hasElevator}
                      onChange={(val) => updateBooking('hasElevator', val)}
                      label="Has Elevator"
                    />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h2 className="font-display text-2xl font-bold text-text-primary mb-6">Schedule</h2>
                  <div className="space-y-4">
                    <Select
                      label="Frequency"
                      options={[
                        { value: 'one-time', label: 'One Time' },
                        { value: 'weekly', label: 'Weekly (-15%)' },
                        { value: 'every-2-weeks', label: 'Every 2 Weeks (-10%)' },
                        { value: 'monthly', label: 'Monthly (-5%)' },
                      ]}
                      value={bookingData.frequency}
                      onChange={(e) => updateBooking('frequency', e.target.value)}
                    />
                    <Input
                      label="First Cleaning Date"
                      type="date"
                      value={bookingData.firstDate || ''}
                      onChange={(e) => updateBooking('firstDate', e.target.value)}
                    />
                    <Select
                      label="Time Slot"
                      options={[
                        { value: 'morning', label: 'Morning (8am - 12pm)' },
                        { value: 'afternoon', label: 'Afternoon (12pm - 4pm)' },
                        { value: 'evening', label: 'Evening (4pm - 8pm)' },
                      ]}
                      value={bookingData.timeSlot}
                      onChange={(e) => updateBooking('timeSlot', e.target.value)}
                    />
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">Special Instructions</label>
                      <textarea
                        value={bookingData.instructions}
                        onChange={(e) => updateBooking('instructions', e.target.value)}
                        placeholder="Any special requests or notes..."
                        className="w-full px-4 py-2 border border-border rounded-btn h-24 font-sans"
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div>
                  <h2 className="font-display text-2xl font-bold text-text-primary mb-6">Extras</h2>
                  <div className="space-y-3">
                    {[
                      { id: 'fridge', label: 'Inside Fridge', price: 30 },
                      { id: 'oven', label: 'Inside Oven', price: 40 },
                      { id: 'windows', label: 'Inside Windows', price: 50 },
                      { id: 'balcony', label: 'Balcony', price: 25 },
                      { id: 'wardrobes', label: 'Inside Wardrobes', price: 35 },
                      { id: 'bedsheets', label: 'Change Bed Sheets', price: 15 },
                    ].map(extra => (
                      <label key={extra.id} className="flex items-center p-4 border border-border rounded-btn cursor-pointer hover:bg-primary-ultra-light">
                        <input
                          type="checkbox"
                          checked={bookingData.extras.some(e => e.id === extra.id)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              updateBooking('extras', [...bookingData.extras, { id: extra.id, ...extra }])
                            } else {
                              updateBooking('extras', bookingData.extras.filter(e => e.id !== extra.id))
                            }
                          }}
                          className="mr-4"
                        />
                        <span className="flex-1 text-text-primary font-medium">{extra.label}</span>
                        <span className="text-primary-light font-bold">+${extra.price}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {step === 5 && (
                <div>
                  <h2 className="font-display text-2xl font-bold text-text-primary mb-6">Contact Information</h2>
                  <div className="space-y-4">
                    <Input
                      label="Full Name"
                      value={bookingData.contactInfo.fullName}
                      onChange={(e) => updateContactInfo('fullName', e.target.value)}
                    />
                    <Input
                      label="Email"
                      type="email"
                      value={bookingData.contactInfo.email}
                      onChange={(e) => updateContactInfo('email', e.target.value)}
                    />
                    <Input
                      label="Phone"
                      value={bookingData.contactInfo.phone}
                      onChange={(e) => updateContactInfo('phone', e.target.value)}
                    />
                    <Select
                      label="Payment Method"
                      options={[
                        { value: 'card', label: 'Credit Card' },
                        { value: 'wallet', label: 'Digital Wallet' },
                        { value: 'pay-day', label: 'Pay on Service Day' },
                      ]}
                      value={bookingData.paymentMethod}
                      onChange={(e) => updateBooking('paymentMethod', e.target.value)}
                    />
                    <Toggle
                      checked={bookingData.termsAccepted}
                      onChange={(val) => updateBooking('termsAccepted', val)}
                      label="I accept terms and conditions"
                    />
                  </div>
                </div>
              )}

              {step === 6 && (
                <div>
                  <h2 className="font-display text-2xl font-bold text-text-primary mb-6">Review Your Booking</h2>
                  <div className="space-y-4 text-text-secondary">
                    <p><strong>Service:</strong> {bookingData.service}</p>
                    <p><strong>Address:</strong> {bookingData.address}</p>
                    <p><strong>Date:</strong> {bookingData.firstDate}</p>
                    <p><strong>Time:</strong> {bookingData.timeSlot}</p>
                    <p><strong>Frequency:</strong> {bookingData.frequency}</p>
                    {bookingData.extras.length > 0 && (
                      <div>
                        <strong>Extras:</strong>
                        <ul className="list-disc list-inside ml-4">
                          {bookingData.extras.map(e => (
                            <li key={e.id}>{e.label} (+${e.price})</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex gap-4 mt-8 pt-8 border-t border-border">
                <Button
                  variant="outline"
                  onClick={handlePrev}
                  disabled={step === 1}
                >
                  Previous
                </Button>
                {step < 6 ? (
                  <Button onClick={handleNext} className="flex-1">
                    Next
                  </Button>
                ) : (
                  <Button onClick={handleConfirm} className="flex-1">
                    Confirm Booking
                  </Button>
                )}
              </div>
            </Card>
          </div>

          {/* Sidebar - Price Summary */}
          <div>
            <Card className="p-6 sticky top-24">
              <h3 className="font-display text-xl font-bold text-text-primary mb-6">Price Summary</h3>
              <div className="space-y-3 text-sm text-text-secondary">
                <div className="flex justify-between">
                  <span>Base Price</span>
                  <span>${(bookingData.apartmentSize * 2.5 + bookingData.bedrooms * 50).toFixed(2)}</span>
                </div>
                {bookingData.extras.length > 0 && (
                  <div className="flex justify-between">
                    <span>Extras</span>
                    <span>${bookingData.extras.reduce((sum, e) => sum + e.price, 0).toFixed(2)}</span>
                  </div>
                )}
                {bookingData.frequency !== 'one-time' && (
                  <div className="flex justify-between text-primary-light">
                    <span>Discount</span>
                    <span>-{bookingData.frequency === 'weekly' ? '15' : bookingData.frequency === 'every-2-weeks' ? '10' : '5'}%</span>
                  </div>
                )}
                <div className="border-t border-border pt-3 flex justify-between font-bold text-text-primary">
                  <span>Total</span>
                  <span className="text-lg text-primary-light">$299.99</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Book
