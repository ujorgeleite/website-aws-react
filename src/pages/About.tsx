import { Code2, Cloud, Users, Target } from 'lucide-react'

const About = () => {
  return (
    <div className="section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            About Me
          </h1>
          <p className="text-xl text-primary-700 max-w-3xl mx-auto">
            Passionate about technology, cloud architecture, and building solutions 
            that make a difference
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold text-primary-900 mb-6">
              Hello, I'm Jorge
            </h2>
            <div className="space-y-4 text-primary-700">
              <p>
                I'm a software engineer with a passion for cloud computing and AWS solutions. 
                My journey in technology has led me to specialize in building scalable, 
                reliable applications that leverage the power of cloud infrastructure.
              </p>
              <p>
                This portfolio website serves as my AWS architecture laboratory, where I 
                experiment with different services, deployment strategies, and best practices 
                to stay at the forefront of cloud technology.
              </p>
              <p>
                When I'm not coding or architecting cloud solutions, I enjoy staying up-to-date 
                with the latest technology trends and contributing to open-source projects.
              </p>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="glass-effect p-4 rounded-xl text-center">
                <Code2 className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                <h3 className="font-semibold text-primary-900">Software Development</h3>
                <p className="text-sm text-primary-600">Full-stack expertise</p>
              </div>
              <div className="glass-effect p-4 rounded-xl text-center">
                <Cloud className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                <h3 className="font-semibold text-primary-900">Cloud Architecture</h3>
                <p className="text-sm text-primary-600">AWS Solutions</p>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="glass-effect p-4 rounded-xl text-center">
                <Users className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                <h3 className="font-semibold text-primary-900">Team Collaboration</h3>
                <p className="text-sm text-primary-600">Agile methodologies</p>
              </div>
              <div className="glass-effect p-4 rounded-xl text-center">
                <Target className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                <h3 className="font-semibold text-primary-900">Problem Solving</h3>
                <p className="text-sm text-primary-600">Creative solutions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values & Approach */}
        <div className="glass-effect rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-primary-900 mb-6 text-center">
            My Approach
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Continuous Learning',
                description: 'Always exploring new technologies and methodologies to improve my skills and stay current with industry trends.',
              },
              {
                title: 'Quality First',
                description: 'I believe in writing clean, maintainable code and following best practices to ensure robust and scalable solutions.',
              },
              {
                title: 'Collaboration',
                description: 'I thrive in team environments and value open communication, knowledge sharing, and collective problem-solving.',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <h4 className="text-lg font-semibold text-primary-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-primary-700">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-primary-900 mb-6">
            Let's Connect
          </h3>
          <p className="text-primary-700 mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and projects. 
            Feel free to reach out if you'd like to discuss working together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors duration-200 font-medium"
            >
              Get in Touch
            </a>
            <a
              href="/experience"
              className="inline-flex items-center px-6 py-3 glass-effect text-primary-700 rounded-xl hover:bg-primary-50 transition-colors duration-200 font-medium"
            >
              View Experience
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
