import { Calendar, MapPin, ExternalLink, Building } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      company: 'Tech Solutions Inc.',
      position: 'Senior Software Engineer',
      period: '2022 - Present',
      location: 'Remote',
      description: 'Leading development of cloud-native applications using React, Node.js, and AWS services. Architected scalable microservices and implemented CI/CD pipelines.',
      achievements: [
        'Improved application performance by 40% through code optimization',
        'Led migration to AWS, reducing infrastructure costs by 30%',
        'Implemented automated testing strategies, increasing code coverage to 90%',
        'Mentored junior developers and conducted technical workshops'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'AWS', 'Docker', 'Kubernetes']
    },
    {
      company: 'Digital Innovations',
      position: 'Software Engineer',
      period: '2020 - 2022',
      location: 'São Paulo, Brazil',
      description: 'Developed full-stack web applications and RESTful APIs. Collaborated with cross-functional teams to deliver high-quality software solutions.',
      achievements: [
        'Built responsive web applications serving 10,000+ users',
        'Designed and implemented REST APIs with 99.9% uptime',
        'Contributed to open-source projects and technical documentation',
        'Participated in agile development processes and code reviews'
      ],
      technologies: ['JavaScript', 'Python', 'PostgreSQL', 'Redis', 'Git']
    },
    {
      company: 'StartupXYZ',
      position: 'Junior Developer',
      period: '2019 - 2020',
      location: 'Remote',
      description: 'Started my professional journey building web applications and learning modern development practices in a fast-paced startup environment.',
      achievements: [
        'Developed first commercial web application from scratch',
        'Learned agile development methodologies and best practices',
        'Contributed to team knowledge sharing and documentation',
        'Gained experience with modern frontend frameworks'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Firebase']
    }
  ]

  return (
    <div className="section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Work Experience
          </h1>
          <p className="text-xl text-primary-700 max-w-3xl mx-auto">
            My professional journey in software development and cloud architecture
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-primary-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-start md:items-center`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="glass-effect p-6 rounded-xl hover:bg-white/90 transition-all duration-200">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center mb-2">
                          <Building className="h-5 w-5 text-primary-600 mr-2" />
                          <h3 className="text-xl font-bold text-primary-900">
                            {exp.company}
                          </h3>
                        </div>
                        <h4 className="text-lg font-semibold text-primary-700 mb-2">
                          {exp.position}
                        </h4>
                        <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-sm text-primary-600">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {exp.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-primary-700 mb-4">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h5 className="font-semibold text-primary-900 mb-2">Key Achievements:</h5>
                      <ul className="list-disc list-inside space-y-1 text-primary-700">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h5 className="font-semibold text-primary-900 mb-2">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-effect p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-900 mb-4">
              Interested in My Experience?
            </h3>
            <p className="text-primary-700 mb-6">
              I'm always excited to discuss new opportunities and share more details about my professional journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors duration-200 font-medium"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Let's Connect
              </a>
              <a
                href="/skills"
                className="inline-flex items-center px-6 py-3 glass-effect text-primary-700 rounded-xl hover:bg-primary-50 transition-colors duration-200 font-medium"
              >
                View Skills
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
