"use client"
import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    // For now, this will use a mailto link as a fallback
    // You can replace this with a real API endpoint later
    const mailtoLink = `mailto:michaelrchavez@sbcglobal.net?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
    
    window.location.href = mailtoLink
    
    setStatus('sent')
    setFormData({ name: '', email: '', message: '' })
    
    setTimeout(() => setStatus(''), 3000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[#c8c8c8] mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-[#2a2a2a]/90 bg-[rgba(8,8,10,0.63)] px-4 py-3 text-sm text-white placeholder-[#666] transition focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[#c8c8c8] mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-[#2a2a2a]/90 bg-[rgba(8,8,10,0.63)] px-4 py-3 text-sm text-white placeholder-[#666] transition focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#c8c8c8] mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="6"
          className="w-full rounded-lg border border-[#2a2a2a]/90 bg-[rgba(8,8,10,0.63)] px-4 py-3 text-sm text-white placeholder-[#666] transition focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
          placeholder="Tell me about your project or opportunity..."
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="neuron-spark-hover w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-[#22d3ee]/50 bg-[#22d3ee] px-8 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
        
        {status === 'sent' && (
          <span className="text-sm text-emerald-400">
            ✓ Opening your email client...
          </span>
        )}
      </div>
    </form>
  )
}
