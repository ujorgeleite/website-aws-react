import { Link } from 'react-router-dom'
import { ArrowRight, Code2, Cloud, Database } from 'lucide-react'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-3 mb-6">
                <div className="icon-transparent">
                  <Code2 className="h-8 w-8 text-primary-600" />
                </div>
                <div className="icon-transparent">
                  <Cloud className="h-8 w-8 text-primary-600" />
                </div>
                <div className="icon-transparent">
                  <Database className="h-8 w-8 text-primary-600" />
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-primary-900 mb-6 animate-fade-in">
              Hi, I'm{' '}
              <span className="text-primary-600">Jorge Leite</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-700 mb-8 max-w-3xl mx-auto animate-slide-up">
              Software Engineer & AWS Solutions Architect
            </p>
            
            <p className="text-lg text-primary-600 mb-12 max-w-2xl mx-auto animate-slide-up">
              Building scalable cloud solutions and exploring the latest in technology. 
              This portfolio serves as my AWS architecture laboratory.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors duration-200 font-medium"
              >
                Learn More About Me
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/experience"
                className="inline-flex items-center px-6 py-3 glass-effect text-primary-700 rounded-xl hover:bg-primary-50 transition-colors duration-200 font-medium"
              >
                View Experience
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-padding bg-primary-100/50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">
              Explore My Work
            </h2>
            <p className="text-primary-600 max-w-2xl mx-auto">
              Discover my professional journey, technical skills, and ongoing projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'About',
                description: 'Learn about my background and professional journey',
                href: '/about',
                icon: <Code2 className="h-6 w-6" />,
              },
              {
                title: 'Experience',
                description: 'Explore my work history and major achievements',
                href: '/experience',
                icon: <Cloud className="h-6 w-6" />,
              },
              {
                title: 'Skills',
                description: 'Technical competencies and technologies I work with',
                href: '/skills',
                icon: <Database className="h-6 w-6" />,
              },
            ].map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className="glass-effect p-6 rounded-xl hover:bg-white/90 transition-all duration-200 group"
              >
                <div className="icon-transparent w-fit mb-4 group-hover:bg-primary-100 transition-colors duration-200">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-primary-600">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
