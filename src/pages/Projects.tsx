import { ExternalLink, Github, Calendar, Code2, Construction, FolderOpen } from 'lucide-react'

const Projects = () => {
  return (
    <div className="section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <FolderOpen className="h-12 w-12 text-primary-600 mr-4" />
            <Construction className="h-8 w-8 text-primary-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Projects
          </h1>
          <p className="text-xl text-primary-700 max-w-3xl mx-auto">
            Coming Soon - A showcase of my portfolio projects, open-source contributions, 
            and technical experiments will be featured here.
          </p>
        </div>

        {/* Coming Soon Content */}
        <div className="glass-effect rounded-xl p-12 text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-6">
              <Code2 className="h-10 w-10 text-primary-600" />
            </div>
            <h2 className="text-3xl font-bold text-primary-900 mb-4">
              Projects Portfolio Under Development
            </h2>
            <p className="text-lg text-primary-700 mb-8">
              I'm curating and preparing to showcase my best work, including personal projects, 
              open-source contributions, and technical experiments that demonstrate my skills and expertise.
            </p>
          </div>

          {/* Planned Project Categories */}
          <div className="text-left max-w-2xl mx-auto mb-8">
            <h3 className="text-xl font-semibold text-primary-900 mb-6 text-center">
              Project Categories Coming Soon:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Web Applications',
                  description: 'Full-stack React applications with modern UI/UX'
                },
                {
                  title: 'Cloud Architecture',
                  description: 'AWS solutions and infrastructure as code projects'
                },
                {
                  title: 'Open Source',
                  description: 'Contributions to community projects and tools'
                },
                {
                  title: 'Mobile Apps',
                  description: 'React Native and cross-platform applications'
                }
              ].map((category, index) => (
                <div key={index} className="glass-effect p-4 rounded-xl">
                  <h4 className="font-semibold text-primary-900 mb-2">
                    {category.title}
                  </h4>
                  <p className="text-sm text-primary-700">
                    {category.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Sample Project Preview */}
          <div className="glass-effect rounded-xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-primary-900 mb-4">
              This Portfolio Website
            </h3>
            <p className="text-primary-700 mb-4">
              Built with React, TypeScript, TailwindCSS, and containerized with Docker.
              This project serves as both my portfolio and AWS architecture laboratory.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {['React', 'TypeScript', 'TailwindCSS', 'Docker', 'AWS'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/ujorgeleite"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 glass-effect rounded-lg hover:bg-primary-50 transition-colors duration-200"
              >
                <Github className="h-4 w-4 mr-2" />
                View Code
              </a>
              <a
                href="/"
                className="inline-flex items-center px-4 py-2 glass-effect rounded-lg hover:bg-primary-50 transition-colors duration-200"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </a>
            </div>
          </div>

          {/* Timeline */}
          <div className="glass-effect rounded-xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-primary-900 mb-4">
              Development Timeline
            </h3>
            <div className="flex items-center justify-center space-x-4 text-primary-700">
              <Calendar className="h-5 w-5" />
              <span>Project showcase expected: Q2 2024</span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-4">
            <p className="text-primary-600">
              Interested in seeing my work or collaborating on a project?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors duration-200 font-medium"
              >
                Let's Collaborate
              </a>
              <a
                href="/experience"
                className="inline-flex items-center px-6 py-3 glass-effect text-primary-700 rounded-xl hover:bg-primary-50 transition-colors duration-200 font-medium"
              >
                View Experience
              </a>
            </div>
          </div>

          {/* GitHub Reminder */}
          <div className="mt-8 pt-8 border-t border-primary-200">
            <p className="text-sm text-primary-600 mb-4">
              You can check out some of my code on GitHub in the meantime.
            </p>
            <a
              href="https://github.com/ujorgeleite"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 glass-effect rounded-lg hover:bg-primary-50 transition-colors duration-200 text-primary-700"
            >
              <Github className="h-5 w-5 mr-2" />
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
