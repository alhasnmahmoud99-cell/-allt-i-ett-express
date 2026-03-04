import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const ChatWidget = () => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: t('chat.title'),
      sender: 'bot',
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(messages.length === 1)
  const [conversationHistory, setConversationHistory] = useState([])
  const messagesEndRef = useRef(null)

  const suggestedQuestions = t('chat.suggestedQuestions', { returnObjects: true })

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  /**
   * Call Anthropic Claude API
   */
  const callClaudeAPI = async (userMessage) => {
    const ANTHROPIC_API_KEY = import.meta.env.VITE_ANTHROPIC_API_KEY || 'placeholder'
    
    if (ANTHROPIC_API_KEY === 'placeholder' || !ANTHROPIC_API_KEY) {
      console.warn('❌ MISSING ENV VARIABLE: VITE_ANTHROPIC_API_KEY is not set. Add it to .env file.')
      return "The chat assistant is not configured yet. Please add your Anthropic API key to continue."
    }

    const messagesForAPI = [
      ...conversationHistory,
      {
        role: 'user',
        content: userMessage,
      },
    ]

    const systemPrompt = `You are a friendly professional customer service assistant for Allt I Ett Express AB home services company. You help customers with questions about cleaning services, pricing, booking appointments, and complaints. You always respond in the same language the customer uses whether Arabic, English, or Swedish.

Our services include: Home Cleaning, Deep Cleaning, Window Cleaning, Move-Out Cleaning, Garden Service, Office Cleaning. When a customer is ready to book, guide them to click the Book Now button. Keep responses concise, friendly, and helpful.`

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 500,
          system: systemPrompt,
          messages: messagesForAPI,
        }),
      })

      if (!response.ok) {
        throw new Error('API request failed')
      }

      const data = await response.json()
      const assistantMessage = data.content[0].text

      setConversationHistory([
        ...messagesForAPI,
        {
          role: 'assistant',
          content: assistantMessage,
        },
      ])

      return assistantMessage
    } catch (error) {
      console.error('Error calling Claude API:', error)
      return "I'm having trouble connecting to the assistant right now. Please try again soon."
    }
  }

  const handleSendMessage = async (message) => {
    const textToSend = message || inputValue
    if (!textToSend.trim()) return

    const userMessage = {
      id: messages.length + 1,
      text: textToSend,
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setShowSuggestions(false)
    setIsLoading(true)

    try {
      const botResponseText = await callClaudeAPI(textToSend)
      const botResponse = {
        id: messages.length + 2,
        text: botResponseText,
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, botResponse])
    } catch (error) {
      const errorMessage = {
        id: messages.length + 2,
        text: 'Sorry, I encountered an error. Please try again.',
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-primary-light text-white rounded-full shadow-soft hover:scale-110 transition-transform duration-200 flex items-center justify-center animate-pulse-soft z-30"
          aria-label="Open chat"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-surface rounded-card shadow-soft flex flex-col z-30 max-sm:w-screen max-sm:h-screen max-sm:bottom-0 max-sm:right-0 max-sm:rounded-none">
          {/* Header */}
          <div className="bg-primary-light text-white p-4 rounded-t-card flex justify-between items-center">
            <div>
              <h3 className="font-display font-bold">Allt I Ett Express AB</h3>
              <p className="text-xs opacity-90">{t('chat.title')}</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-primary transition-colors rounded-btn"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-primary-ultra-light">
            {messages.map(message => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-3 rounded-lg font-sans text-sm ${
                    message.sender === 'user'
                      ? 'bg-primary-light text-white rounded-br-none'
                      : 'bg-surface text-text-primary border border-border rounded-bl-none'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-surface text-text-primary px-4 py-3 rounded-lg rounded-bl-none border border-border">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-text-secondary rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-text-secondary rounded-full animate-bounce delay-100" />
                    <span className="w-2 h-2 bg-text-secondary rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              </div>
            )}

            {showSuggestions && !isLoading && (
              <div className="space-y-2 mt-4">
                <p className="text-xs text-text-secondary font-sans px-2">{t('chat.title')}</p>
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(question)}
                    className="w-full text-left px-4 py-2 bg-surface hover:bg-primary-ultra-light rounded-btn border border-border font-sans text-sm text-text-primary transition-colors duration-200"
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-border p-4 bg-surface rounded-b-card">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && handleSendMessage()}
                placeholder={t('chat.inputPlaceholder')}
                className="flex-1 px-4 py-2 border border-border rounded-btn font-sans focus:outline-none focus:border-primary-light"
                disabled={isLoading}
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={isLoading || !inputValue.trim()}
                className="p-2 bg-primary-light text-white rounded-btn hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ChatWidget
