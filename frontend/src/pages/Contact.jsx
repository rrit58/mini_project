import React, { useState } from 'react'

// --- 1. DUMMY DATA ---
const contactDetails = {
  generalEmail: "support@careconnect.in",
  careersEmail: "careers@careconnect.in",
  tollFree: "1800-123-4567",
  workingHours: "Mon - Sat: 09:00 AM to 08:00 PM (IST)",
}

const offices = [
  {
    id: 1,
    city: "Mumbai (Headquarters)",
    address: "101, CareConnect Tower, Bandra Kurla Complex (BKC), Mumbai, Maharashtra 400051",
    phone: "+91 22 2345 6789"
  },
  {
    id: 2,
    city: "New Delhi",
    address: "45, Healthcare Avenue, Connaught Place, New Delhi 110001",
    phone: "+91 11 9876 5432"
  },
  {
    id: 3,
    city: "Bangalore",
    address: "Level 4, Med-Tech Park, Whitefield, Bengaluru, Karnataka 560066",
    phone: "+91 80 1234 5678"
  }
]

// --- 2. COMPONENT ---
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to your backend or an email service
    console.log("Message sent:", formData)
    alert("Thank you for reaching out! Our team will get back to you shortly.")
    setFormData({ name: '', email: '', subject: '', message: '' }) // Reset form
  }

  const inputClass = "w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all bg-gray-50 focus:bg-white"

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="flex flex-wrap items-center justify-center gap-x-3 gap-y-4 text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            <span>Get in Touch with</span>
            
            {/* This wrapper keeps the logo and brand name glued together perfectly aligned */}
            <span className="flex items-center gap-2">
            <img className='h-12 w-auto object-contain' src="../src/assets/logo2.png" alt="logo" />
            <span className="font-bold text-4xl tracking-wide drop-shadow-sm bg-primary rounded-3xl px-3 py-1">
                <span className="text-violet-100">Care </span>
                <span className="text-amber-500">Connect</span>
            </span>
            </span>
        </h1>
        
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            Whether you have a question about an appointment, need assistance with our platform, or just want to provide feedback, our team is here to help.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
        
        {/* LEFT COLUMN: Contact Information */}
        <div className="space-y-8">
          
          {/* Direct Contact Cards */}
          <div className="bg-white p-8 rounded-3xl shadow-lg shadow-gray-200/50 border border-primary-light">
            <h3 className="text-xl font-bold text-text-secondary mb-6">Direct Contact</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent text-primary-light rounded-2xl flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <p className="text-md font-semibold text-text-secondary uppercase tracking-wider">Toll-Free Helpline</p>
                  <p className="text-lg font-semibold text-primary">{contactDetails.tollFree}</p>
                  <p className="text-sm text-text-secondary mt-0.5">{contactDetails.workingHours}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent text-primary-light rounded-2xl flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <p className="text-md font-semibold text-text-secondary uppercase tracking-wider">Email Support</p>
                  <p className="text-base font-semibold text-primary">{contactDetails.generalEmail}</p>
                  <p className="text-base font-semibold text-primary mt-0.5">{contactDetails.careersEmail} (Careers)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Office Locations */}
          <div className="bg-white p-8 rounded-3xl shadow-lg shadow-gray-200/50 border border-primary-light">
            <h3 className="text-xl font-bold text-text-primary mb-6">Our Offices</h3>
            <div className="space-y-6">
              {offices.map((office) => (
                <div key={office.id} className="border-b border-gray-100 pb-5 last:border-0 last:pb-0">
                  <div className="flex items-center gap-2 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" className="text-accent" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    <h4 className="text-base font-bold text-gray-900">{office.city}</h4>
                  </div>
                  <p className="text-sm text-gray-600 pl-6 leading-relaxed mb-1">{office.address}</p>
                  <p className="text-sm font-medium text-primary pl-6">{office.phone}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Contact Form */}
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-emerald-100/50 border border-emerald-50 h-fit">
          <h3 className="text-2xl font-bold text-text-primary mb-2">Send us a Message</h3>
          <p className="text-sm text-text-secondary mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wide mb-1.5">Full Name *</label>
              <input 
                type="text" name="name" required 
                placeholder="John Doe" 
                className={inputClass} 
                value={formData.name} onChange={handleChange} 
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wide mb-1.5">Email Address *</label>
                <input 
                  type="email" name="email" required 
                  placeholder="john@example.com" 
                  className={inputClass} 
                  value={formData.email} onChange={handleChange} 
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wide mb-1.5">Subject</label>
                <input 
                  type="text" name="subject" 
                  placeholder="How can we help?" 
                  className={inputClass} 
                  value={formData.subject} onChange={handleChange} 
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wide mb-1.5">Message *</label>
              <textarea 
                name="message" required rows="5" 
                placeholder="Write your message here..." 
                className={`${inputClass} resize-none`} 
                value={formData.message} onChange={handleChange} 
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-emerald-600/30 transform active:scale-[0.98] mt-2"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Contact