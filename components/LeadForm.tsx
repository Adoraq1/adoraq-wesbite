'use client'

import { useState } from 'react'
import { Download, CheckCircle, Loader2 } from 'lucide-react'

interface LeadFormProps {
  onSuccess?: () => void
}

export default function LeadForm({ onSuccess }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: '',
    eventDate: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<{[key: string]: string}>({})

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsLoading(true)
    
    try {
      const response = await fetch('/api/subscribe/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          name: formData.name,
          eventType: formData.eventType,
          eventDate: formData.eventDate
        })
      })
      
      const data = await response.json()
      
      if (response.ok) {
        console.log('Successfully subscribed:', data)
        // Redirect to thank you page
        window.location.href = '/thank-you/'
      } else {
        console.error('Subscription failed:', data)
        // Show specific error message if available
        if (data.error) {
          setErrors({ general: data.error })
        } else {
          throw new Error('Subscription failed')
        }
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setErrors({ general: 'Something went wrong. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = 'checked' in e.target ? e.target.checked : false
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  return (
    <div className="card max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        {errors.general && (
          <div className="p-3 rounded-lg bg-red-50 border border-red-200">
            <p className="text-sm text-red-600">{errors.general}</p>
          </div>
        )}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-muted-700 mb-2">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.name ? 'border-red-500 focus:ring-red-500' : 'border-muted-300 focus:ring-brand'
            } focus:ring-2 focus:border-transparent transition-all duration-200`}
            placeholder="Enter your name"
            required
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-muted-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.email ? 'border-red-500 focus:ring-red-500' : 'border-muted-300 focus:ring-brand'
            } focus:ring-2 focus:border-transparent transition-all duration-200`}
            placeholder="your@email.com"
            required
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="eventType" className="block text-sm font-medium text-muted-700 mb-2">
            Event Type
          </label>
          <select
            id="eventType"
            name="eventType"
            value={formData.eventType}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl border border-muted-300 focus:ring-brand focus:ring-2 focus:border-transparent transition-all duration-200"
          >
            <option value="">Select event type</option>
            <option value="workshop">Workshop</option>
            <option value="conference">Conference</option>
            <option value="meetup">Meetup</option>
            <option value="networking">Networking Event</option>
            <option value="training">Training Session</option>
            <option value="launch">Product/Service Launch</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="eventDate" className="block text-sm font-medium text-muted-700 mb-2">
            Event Date
          </label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl border border-muted-300 focus:ring-brand focus:ring-2 focus:border-transparent transition-all duration-200"
            placeholder="When is your event?"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
                      <>
            <Download className="w-5 h-5" />
            <span>Download Free Guide</span>
          </>
          )}
        </button>

        <p className="text-xs text-muted-500 text-center">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </form>
    </div>
  )
}
