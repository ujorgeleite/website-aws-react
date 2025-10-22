import { Code2, Cloud, Database, Smartphone, Server, Zap } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code2 className="h-6 w-6" />,
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'TailwindCSS', level: 88 },
        { name: 'Next.js', level: 75 },
        { name: 'JavaScript', level: 90 },
        { name: 'HTML/CSS', level: 95 }
      ]
    },
    {
      title: 'Backend Development',
      icon: <Server className="h-6 w-6" />,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Express.js', level: 88 },
        { name: 'REST APIs', level: 90 },
        { name: 'GraphQL', level: 75 },
        { name: 'Microservices', level: 80 }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="h-6 w-6" />,
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'Docker', level: 90 },
        { name: 'Kubernetes', level: 70 },
        { name: 'CI/CD', level: 85 },
        { name: 'Terraform', level: 75 },
        { name: 'Git', level: 92 }
      ]
    },
    {
      title: 'Database',
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Redis', level: 75 },
        { name: 'MySQL', level: 82 },
        { name: 'DynamoDB', level: 70 },
        { name: 'Elasticsearch', level: 65 }
      ]
    },
    {
      title: 'Mobile Development',
      icon: <Smartphone className="h-6 w-6" />,
      skills: [
        { name: 'React Native', level: 75 },
        { name: 'Flutter', level: 65 },
        { name: 'iOS Development', level: 60 },
        { name: 'Android Development', level: 60 },
        { name: 'Progressive Web Apps', level: 80 }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: <Zap className="h-6 w-6" />,
      skills: [
        { name: 'VS Code', level: 95 },
        { name: 'Postman', level: 85 },
        { name: 'Jest/Testing', level: 80 },
        { name: 'Webpack', level: 75 },
        { name: 'Linux', level: 85 },
        { name: 'Agile/Scrum', level: 88 }
      ]
    }
  ]

  const certifications = [
    {
      name: 'AWS Solutions Architect Associate',
      issuer: 'Amazon Web Services',
      year: '2023',
      credential: 'Verification Available'
    },
    {
      name: 'React Developer Certification',
      issuer: 'Meta',
      year: '2022',
      credential: 'Frontend Development'
    },
    {
      name: 'Node.js Certified Developer',
      issuer: 'OpenJS Foundation',
      year: '2022',
      credential: 'Backend Development'
    }
  ]

  return (
    <div className="section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Skills & Expertise
          </h1>
          <p className="text-xl text-primary-700 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and professional competencies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="glass-effect p-6 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="icon-transparent mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-900">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-primary-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-primary-600 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-primary-200 rounded-full h-2">
                      <div
                        className="bg-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="glass-effect rounded-xl p-8 mb-16">
          <h3 className="text-3xl font-bold text-primary-900 mb-8 text-center">
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-primary-50">
                <h4 className="text-lg font-semibold text-primary-900 mb-2">
                  {cert.name}
                </h4>
                <p className="text-primary-700 mb-2">
                  {cert.issuer}
                </p>
                <div className="flex justify-center items-center space-x-2 text-sm text-primary-600">
                  <span>{cert.year}</span>
                  <span>•</span>
                  <span>{cert.credential}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-effect p-6 rounded-xl">
            <h4 className="text-xl font-bold text-primary-900 mb-4">
              Learning Philosophy
            </h4>
            <p className="text-primary-700 mb-4">
              I believe in continuous learning and staying updated with the latest 
              technologies and best practices in software development.
            </p>
            <ul className="space-y-2 text-primary-700">
              <li>• Regular participation in tech conferences and meetups</li>
              <li>• Contributing to open-source projects</li>
              <li>• Hands-on experimentation with new technologies</li>
              <li>• Knowledge sharing through blogs and mentoring</li>
            </ul>
          </div>

          <div className="glass-effect p-6 rounded-xl">
            <h4 className="text-xl font-bold text-primary-900 mb-4">
              Methodologies & Practices
            </h4>
            <p className="text-primary-700 mb-4">
              I follow industry best practices and methodologies to deliver 
              high-quality, maintainable solutions.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {['Agile', 'Scrum', 'TDD', 'Code Reviews', 'CI/CD', 'DevOps'].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm text-center"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-effect p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-900 mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-primary-700 mb-6">
              I'm passionate about using these skills to build amazing solutions. 
              Let's discuss how we can work together on your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors duration-200 font-medium"
              >
                Start a Conversation
              </a>
              <a
                href="/experience"
                className="inline-flex items-center px-6 py-3 glass-effect text-primary-700 rounded-xl hover:bg-primary-50 transition-colors duration-200 font-medium"
              >
                View My Experience
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
