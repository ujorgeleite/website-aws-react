import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    alert('Thank you for your message! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      details: 'contact@jorgeleite.dev',
      link: 'mailto:contact@jorgeleite.dev'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      details: '+55 (11) 99999-9999',
      link: 'tel:+5511999999999'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Location',
      details: 'São Paulo, Brazil',
      link: '#'
    }
  ]

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      name: 'GitHub',
      url: 'https://github.com/ujorgeleite',
      handle: '@ujorgeleite'
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ujorgeleite',
      handle: '/in/ujorgeleite'
    }
  ]

  return (
    <div className="section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-primary-700 max-w-3xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Let's start a conversation!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-primary-900 mb-8">
              Let's Connect
            </h2>
            
            <p className="text-primary-700 mb-8">
              Whether you have a question, want to collaborate, or just want to say hi, 
              I'd love to hear from you. I typically respond within 24 hours.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center p-4 glass-effect rounded-xl hover:bg-white/90 transition-all duration-200 group"
                >
                  <div className="icon-transparent mr-4 group-hover:bg-primary-100 transition-colors duration-200">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-900">
                      {info.title}
                    </h3>
                    <p className="text-primary-700">
                      {info.details}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold text-primary-900 mb-4">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 glass-effect rounded-xl hover:bg-primary-100 transition-colors duration-200 group"
                  >
                    {social.icon}
                    <div className="ml-3">
                      <p className="font-medium text-primary-900">
                        {social.name}
                      </p>
                      <p className="text-sm text-primary-600">
                        {social.handle}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-effect p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-primary-900 mb-6">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary-900 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 glass-effect rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all duration-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 glass-effect rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-primary-900 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 glass-effect rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all duration-200"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 glass-effect rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all duration-200 resize-none"
                  placeholder="Tell me about your project or message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 font-medium"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16">
          <div className="glass-effect p-8 rounded-xl max-w-2xl mx-auto">
            <MessageSquare className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-primary-900 mb-4">
              Let's Build Something Amazing
            </h3>
            <p className="text-primary-700 mb-6">
              I'm always excited to work on new projects and explore innovative solutions. 
              Reach out if you'd like to collaborate or have an interesting project in mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/experience"
                className="inline-flex items-center px-6 py-3 glass-effect text-primary-700 rounded-xl hover:bg-primary-50 transition-colors duration-200 font-medium"
              >
                View My Experience
              </a>
              <a
                href="/skills"
                className="inline-flex items-center px-6 py-3 glass-effect text-primary-700 rounded-xl hover:bg-primary-50 transition-colors duration-200 font-medium"
              >
                Check My Skills
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
