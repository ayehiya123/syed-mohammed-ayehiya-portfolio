import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { emailjsConfig, personalInfo, socialLinks } from '../data/portfolioData'

const Contact = () => {
  const ref = useRef(null)
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%'])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return

    setStatus('sending')

    const firstName = formRef.current?.firstName?.value?.trim() || ''
    const lastName = formRef.current?.lastName?.value?.trim() || ''
    const email = formRef.current?.email?.value?.trim() || ''
    const message = formRef.current?.message?.value?.trim() || ''

    if (!firstName || !email || !message) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    const { serviceId, templateId, publicKey } = emailjsConfig
    const isConfigured =
      Boolean(serviceId) &&
      Boolean(templateId) &&
      Boolean(publicKey) &&
      serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY'

    if (!isConfigured) {
      const subject = `Portfolio Contact from ${firstName} ${lastName}`
      const body = `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`
      const mailtoUrl = `mailto:${personalInfo.emails.primary}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`

      window.open(mailtoUrl, '_blank')
      setStatus('success')
      formRef.current?.reset()
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    try {
      const emailjs = await import('@emailjs/browser')
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      setStatus('success')
      formRef.current?.reset()
      setTimeout(() => setStatus('idle'), 4000)
    } catch (err) {
      console.error('EmailJS submit error:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* Parallax Giant "Contact" Background Text */}
      <motion.div
        style={{ y }}
        className="absolute inset-x-0 top-10 pointer-events-none z-0 flex justify-center overflow-hidden"
      >
        <div
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter select-none scale-y-[1.6] origin-top text-white/[0.04]"
          style={{ fontFamily: "'Impact','Arial Black',sans-serif" }}
        >
          Contact
        </div>
      </motion.div>

      {/* Front Red Contact Card */}
      <div
        data-aos="fade-up"
        className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 ml-auto rounded-tl-3xl relative z-10 shadow-2xl"
      >
        {/* Header Row */}
        <div className="flex items-center justify-between pb-8 border-b border-white/20">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
            Reach Me
          </span>
          {socialLinks?.instagram && (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white text-xs font-semibold backdrop-blur-md transition-colors"
            >
              DM on Instagram
            </a>
          )}
        </div>

        {/* Contact Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-12 mt-10">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Left Inputs */}
            <div className="flex flex-col gap-8 flex-1">
              <div>
                <input
                  type="text"
                  id="firstName"
                  name="first_name"
                  required
                  placeholder="First Name *"
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/70 text-white focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <input
                  type="text"
                  id="lastName"
                  name="last_name"
                  placeholder="Last Name"
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/70 text-white focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  placeholder="Email Address *"
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/70 text-white focus:outline-none focus:border-white transition-colors"
                />
              </div>
            </div>

            {/* Right Textarea */}
            <div className="flex-1 flex flex-col">
              <textarea
                id="message"
                name="message"
                required
                placeholder="Your Message *"
                className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/70 text-white focus:outline-none focus:border-white transition-colors resize-none min-h-[140px] flex-1"
              />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col gap-6 pt-4 border-t border-white/20">
            {/* Permission Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="consent"
                required
                className="mt-1 accent-black cursor-pointer"
              />
              <label htmlFor="consent" className="text-xs text-white/80 cursor-pointer select-none">
                I agree that my submitted information will be stored and used to respond to my inquiry.
              </label>
            </div>

            {/* Response Note & Direct Email */}
            <div className="text-xs text-white/80 space-y-1">
              <p>
                Your message will be sent directly to my inbox. I typically respond within 24-48 hours.
              </p>
              <p>
                Need urgent response? Email me directly at{' '}
                <a
                  href={`mailto:${personalInfo.emails.primary}`}
                  className="underline font-bold text-white hover:text-black transition-colors"
                >
                  {personalInfo.emails.primary}
                </a>
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              {status === 'sending' && (
                <button
                  type="button"
                  disabled
                  className="px-8 py-4 rounded-full bg-white/20 border border-white/30 text-white/70 font-bold flex items-center gap-2 cursor-wait"
                >
                  <svg className="animate-spin w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  <span>Sending...</span>
                </button>
              )}

              {status === 'success' && (
                <button
                  type="button"
                  disabled
                  className="px-8 py-4 rounded-full bg-emerald-600 border border-emerald-500 text-white font-bold flex items-center gap-2 shadow-lg"
                >
                  <span>Sent Successfully ✓</span>
                </button>
              )}

              {status === 'error' && (
                <button
                  type="submit"
                  className="px-8 py-4 rounded-full bg-red-900 border border-red-700 text-white font-bold flex items-center gap-2 shadow-lg cursor-pointer"
                >
                  <span>Failed — Try Again</span>
                </button>
              )}

              {status === 'idle' && (
                <button
                  type="submit"
                  className="group px-8 py-4 rounded-full bg-white/10 hover:bg-white border border-white text-white hover:text-[#ff2a2a] font-bold text-base transition-all duration-300 flex items-center gap-3 shadow-md hover:shadow-xl cursor-pointer"
                >
                  <span>Send Message</span>
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
