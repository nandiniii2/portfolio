import React from 'react';
import { Briefcase, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "MyEdMaster LLC",
      role: "Software Developer Intern",
      period: "Jun 2025 - Aug 2025",
      location: "Remote",
      type: "software",
      achievements: [
        "Configured dashboard and navigation system across 5 core modules for seamless user experience",
        "Implemented secure login and profile system with React.js, Python, and MySQL supporting multi-device access",
        "Created reusable frontend components synced with backend APIs, speeding up development by 25%",
        "Developed search and chat features supporting 100+ daily user interactions"
      ],
      technologies: ["React.js", "Python", "MySQL", "REST APIs"]
    },
    {
      company: "MobMaxime (Eventtan Pvt. Ltd.)",
      role: "Junior Web Developer",
      period: "Dec 2023 - Jul 2024",
      location: "Ahmedabad, India",
      type: "software",
      promotion: true,
      achievements: [
        "Led development of 4 scalable web applications using ASP.NET and C# with focus on performance optimization",
        "Collaborated with cross-functional teams (frontend, backend, QA) and deployed modular backend systems",
        "Improved development productivity by 20% through code optimization and best practices",
        "Promoted to full-time role based on consistent performance across previous internship positions"
      ],
      technologies: ["ASP.NET", "C#", "Angular", "SQL", "Agile"]
    },
    {
      company: "IBM SkillsBuild (CSRBOX Foundation)",
      role: "Data Analyst Intern",
      period: "Feb 2023 - May 2023",
      location: "Remote",
      type: "data",
      achievements: [
        "Processed 500K+ records using SQL and Python, developing insights that increased reporting accuracy",
        "Applied statistical modeling and regression to identify key user behavior patterns guiding 3 strategic decisions",
        "Streamlined data cleaning processes, reducing dataset preparation time by 40%"
      ],
      technologies: ["Python", "SQL", "Statistical Modeling", "Data Analysis"]
    },
    {
      company: "MobMaxime (Eventtan Pvt. Ltd.)",
      role: "Web Developer Intern",
      period: "Feb 2023 - May 2023",
      location: "Ahmedabad, India",
      type: "software",
      achievements: [
        "Built adaptive web interfaces using ASP.NET and Angular with improved response times by 25%",
        "Connected SQL backends with RESTful APIs, improving data fetch operations",
        "Utilized Entity Framework for efficient SQL database management"
      ],
      technologies: ["ASP.NET", "Angular", "SQL", "Entity Framework"]
    },
    {
      company: "MobMaxime (Eventtan Pvt. Ltd.)",
      role: "Frontend Developer Intern",
      period: "Apr 2022 - Jun 2022",
      location: "Ahmedabad, India",
      type: "software",
      achievements: [
        "Implemented responsive UIs in Angular with focus on mobile-first design and cross-browser compatibility",
        "Engineered reusable Angular components and developed component library for 3 company projects",
        "Optimized JavaScript and CSS performance with lazy loading and code splitting"
      ],
      technologies: ["Angular", "JavaScript", "CSS", "HTML"]
    }
  ];

  return (
    <section id="experience" className="section-container">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-rust-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Career progression from Frontend Intern to Junior Developer with expertise in both software engineering and data analytics
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700"></div>

          {experiences.map((exp, index) => (
            <div key={index} className={`relative mb-12 ${
              index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
            }`}>
              {/* Timeline dot */}
              <div className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full transform -translate-x-1/2 ${
                exp.type === 'data' ? 'bg-rust-700' : 'bg-rust-600'
              } border-4 border-white dark:border-gray-900 z-10`}></div>

              {/* Content Card */}
              <div className="ml-20 md:ml-0 md:mr-8">
                <div className={`card p-6 hover:scale-105 transition-all duration-300 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase size={20} className={
                          exp.type === 'data' ? 'text-rust-700' : 'text-rust-600'
                        } />
                        <h3 className="text-xl font-bold">{exp.role}</h3>
                        {exp.promotion && (
                          <span className="ml-2 px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-semibold rounded-full flex items-center gap-1">
                            <TrendingUp size={12} />
                            Promoted
                          </span>
                        )}
                      </div>
                      <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                        {exp.company}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mt-2">
                        <span>{exp.period}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      exp.type === 'data'
                        ? 'bg-rust-200 dark:bg-rust-900 text-rust-800 dark:text-rust-300'
                        : 'bg-rust-100 dark:bg-rust-800 text-rust-700 dark:text-rust-200'
                    }`}>
                      {exp.type === 'data' ? 'Data' : 'Software'}
                    </span>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                        <span className={`mt-1.5 mr-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                          exp.type === 'data' ? 'bg-rust-700' : 'bg-rust-600'
                        }`}></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Career Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="card p-6 text-center">
            <div className="text-4xl font-bold text-rust-600 dark:text-rust-400 mb-2">
              5
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Roles Across Multiple Companies
            </div>
          </div>
          <div className="card p-6 text-center">
            <div className="text-4xl font-bold text-rust-700 dark:text-rust-500 mb-2">
              1+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Years Professional Experience
            </div>
          </div>
          <div className="card p-6 text-center">
            <div className="text-4xl font-bold text-rust-500 dark:text-rust-400 mb-2">
              ↑
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Intern to Junior Developer
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;