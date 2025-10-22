import { Github, Linkedin, Mail, Code2 } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="glass-effect border-t border-primary-200">
      <div className="container-max section-padding">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo and description */}
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="icon-transparent">
              <Code2 className="h-6 w-6 text-primary-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-primary-900">
                Jorge Leite Portfolio
              </p>
              <p className="text-xs text-primary-600">
                AWS Architecture Lab
              </p>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/ujorgeleite"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-transparent hover:bg-primary-100 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-primary-600" />
            </a>
            <a
              href="https://www.linkedin.com/in/ujorgeleite"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-transparent hover:bg-primary-100 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-primary-600" />
            </a>
            <a
              href="mailto:contact@jorgeleite.dev"
              className="icon-transparent hover:bg-primary-100 transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 text-primary-600" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-primary-200">
          <p className="text-center text-xs text-primary-600">
            © {currentYear} Jorge Leite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
