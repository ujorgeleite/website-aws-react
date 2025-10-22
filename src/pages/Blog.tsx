import { Clock, ArrowRight, BookOpen, Construction } from 'lucide-react'

const Blog = () => {
  return (
    <div className="section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <BookOpen className="h-12 w-12 text-primary-600 mr-4" />
            <Construction className="h-8 w-8 text-primary-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Blog
          </h1>
          <p className="text-xl text-primary-700 max-w-3xl mx-auto">
            Coming Soon - I'll be sharing insights about software development, 
            cloud architecture, and technology trends here.
          </p>
        </div>

        {/* Coming Soon Content */}
        <div className="glass-effect rounded-xl p-12 text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-6">
              <BookOpen className="h-10 w-10 text-primary-600" />
            </div>
            <h2 className="text-3xl font-bold text-primary-900 mb-4">
              Blog Under Construction
            </h2>
            <p className="text-lg text-primary-700 mb-8">
              I'm currently working on creating valuable content about my experiences 
              in software development, cloud architecture, and the latest technology trends.
            </p>
          </div>

          {/* Planned Content */}
          <div className="text-left max-w-2xl mx-auto mb-8">
            <h3 className="text-xl font-semibold text-primary-900 mb-4">
              What you can expect to see here:
            </h3>
            <div className="space-y-3">
              {[
                'AWS Architecture best practices and lessons learned',
                'React and TypeScript development tips and tricks',
                'Full-stack development tutorials and guides',
                'Technology trends and industry insights',
                'Personal projects and case studies',
                'Career advice and professional development'
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-primary-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="glass-effect rounded-xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-primary-900 mb-4">
              Timeline
            </h3>
            <div className="flex items-center justify-center space-x-4 text-primary-700">
              <Clock className="h-5 w-5" />
              <span>Expected launch: Q2 2024</span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-4">
            <p className="text-primary-600">
              Want to be notified when I publish my first post?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors duration-200 font-medium"
              >
                Get in Touch
              </a>
              <a
                href="/"
                className="inline-flex items-center px-6 py-3 glass-effect text-primary-700 rounded-xl hover:bg-primary-50 transition-colors duration-200 font-medium"
              >
                Back to Homepage
              </a>
            </div>
          </div>

          {/* Social Links Reminder */}
          <div className="mt-8 pt-8 border-t border-primary-200">
            <p className="text-sm text-primary-600">
              Follow me on social media to stay updated on my latest projects and insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
