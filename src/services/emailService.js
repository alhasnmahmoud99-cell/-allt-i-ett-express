const RESEND_API_KEY = import.meta.env.VITE_RESEND_API_KEY || 'placeholder'
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5173'
const COMPANY_EMAIL = import.meta.env.VITE_COMPANY_EMAIL || 'alltiettexpressab@gmail.com'
const COMPANY_NAME = 'Allt I Ett Express AB'

if (RESEND_API_KEY === 'placeholder' || !RESEND_API_KEY) {
  console.warn('❌ MISSING ENV VARIABLE: VITE_RESEND_API_KEY is not set. Emails will be logged to console only.')
}

/**
 * Send booking confirmation email
 */
export const sendBookingConfirmation = async (bookingData, userEmail) => {
  try {
    return await sendEmail({
      to: userEmail,
      subject: `Booking Confirmation - ${bookingData.bookingNumber}`,
      template: 'booking-confirmation',
      data: {
        bookingNumber: bookingData.bookingNumber,
        serviceType: bookingData.service,
        date: bookingData.date,
        timeSlot: bookingData.timeSlot,
        address: bookingData.address,
        totalPrice: bookingData.totalPrice,
        frequency: bookingData.frequency,
        customerName: bookingData.name,
        extras: bookingData.extras || [],
      },
    })
  } catch (error) {
    console.error('Error sending booking confirmation:', error)
    throw error
  }
}

/**
 * Send 24-hour appointment reminder
 */
export const sendAppointmentReminder24h = async (
  bookingData,
  userEmail
) => {
  try {
    return await sendEmail({
      to: userEmail,
      subject: `Reminder: Your Appointment Tomorrow - ${bookingData.bookingNumber}`,
      template: 'appointment-reminder-24h',
      data: {
        bookingNumber: bookingData.bookingNumber,
        serviceType: bookingData.service,
        date: bookingData.date,
        timeSlot: bookingData.timeSlot,
        address: bookingData.address,
        customerName: bookingData.name,
      },
    })
  } catch (error) {
    console.error('Error sending 24-hour reminder:', error)
    throw error
  }
}

/**
 * Send day-of appointment reminder
 */
export const sendAppointmentReminderDayOf = async (
  bookingData,
  userEmail
) => {
  try {
    return await sendEmail({
      to: userEmail,
      subject: `Reminder: Your Appointment Today - ${bookingData.bookingNumber}`,
      template: 'appointment-reminder-day-of',
      data: {
        bookingNumber: bookingData.bookingNumber,
        serviceType: bookingData.service,
        timeSlot: bookingData.timeSlot,
        address: bookingData.address,
        customerName: bookingData.name,
      },
    })
  } catch (error) {
    console.error('Error sending day-of reminder:', error)
    throw error
  }
}

/**
 * Send review request email
 */
export const sendReviewRequest = async (bookingData, userEmail) => {
  try {
    return await sendEmail({
      to: userEmail,
      subject: `How was your experience with ${COMPANY_NAME}?`,
      template: 'review-request',
      data: {
        bookingNumber: bookingData.bookingNumber,
        serviceType: bookingData.service,
        date: bookingData.date,
        customerName: bookingData.name,
      },
    })
  } catch (error) {
    console.error('Error sending review request:', error)
    throw error
  }
}

/**
 * Send invoice email
 */
export const sendInvoice = async (bookingData, userEmail, invoiceUrl) => {
  try {
    return await sendEmail({
      to: userEmail,
      subject: `Invoice - ${bookingData.bookingNumber}`,
      template: 'invoice',
      data: {
        bookingNumber: bookingData.bookingNumber,
        serviceType: bookingData.service,
        date: bookingData.date,
        address: bookingData.address,
        totalPrice: bookingData.totalPrice,
        customerName: bookingData.name,
        invoiceUrl,
      },
    })
  } catch (error) {
    console.error('Error sending invoice:', error)
    throw error
  }
}

/**
 * Send cancellation confirmation email
 */
export const sendCancellationConfirmation = async (
  bookingData,
  userEmail,
  refundAmount
) => {
  try {
    return await sendEmail({
      to: userEmail,
      subject: `Booking Cancelled - ${bookingData.bookingNumber}`,
      template: 'cancellation-confirmation',
      data: {
        bookingNumber: bookingData.bookingNumber,
        serviceType: bookingData.service,
        date: bookingData.date,
        refundAmount,
        customerName: bookingData.name,
      },
    })
  } catch (error) {
    console.error('Error sending cancellation confirmation:', error)
    throw error
  }
}

/**
 * Send welcome email to new customers
 */
export const sendWelcomeEmail = async (userData) => {
  try {
    return await sendEmail({
      to: userData.email,
      subject: `Welcome to ${COMPANY_NAME}!`,
      template: 'welcome',
      data: {
        customerName: userData.name,
      },
    })
  } catch (error) {
    console.error('Error sending welcome email:', error)
    throw error
  }
}

/**
 * Send password reset email
 */
export const sendPasswordReset = async (userEmail, resetToken, resetUrl) => {
  try {
    return await sendEmail({
      to: userEmail,
      subject: `Reset Your Password - ${COMPANY_NAME}`,
      template: 'password-reset',
      data: {
        resetUrl,
        resetToken,
      },
    })
  } catch (error) {
    console.error('Error sending password reset email:', error)
    throw error
  }
}

/**
 * Generic email sender function
 */
const sendEmail = async ({ to, subject, template, data, replyTo = COMPANY_EMAIL, from = COMPANY_EMAIL }) => {
  try {
    // For development/preview, log the email that would be sent
    if (RESEND_API_KEY === 'placeholder') {
      console.log('[EMAIL PREVIEW]', {
        from: `${COMPANY_NAME} <${from}>`,
        to,
        replyTo,
        subject,
        template,
        data,
      })
      return { success: true, messageId: 'preview-' + Date.now() }
    }

    // In production, this would call the backend Resend API
    const response = await fetch(`${API_URL}/api/emails/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: `${COMPANY_NAME} <${from}>`,
        to,
        replyTo,
        subject,
        template,
        data,
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to send email')
    }

    const result = await response.json()
    return result
  } catch (error) {
    console.error('Error sending email:', error)
    throw error
  }
}

export default {
  sendBookingConfirmation,
  sendAppointmentReminder24h,
  sendAppointmentReminderDayOf,
  sendReviewRequest,
  sendInvoice,
  sendCancellationConfirmation,
  sendWelcomeEmail,
  sendPasswordReset,
}
