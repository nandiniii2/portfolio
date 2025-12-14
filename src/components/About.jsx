import React from 'react';
import { GraduationCap, Code, Database, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: "Full-Stack Development",
      description: "1+ years building scalable web applications with .NET, React, and Angular"
    },
    {
      icon: <Database size={24} />,
      title: "Data Science & ML",
      description: "Expertise in predictive modeling, big data pipelines, and cloud analytics"
    },
    {
      icon: <GraduationCap size={24} />,
      title: "Strong Academic Foundation",
      description: "MS in CS (3.78 GPA) from IU, BE in CS (9.37 GPA) from GTU"
    },
    {
      icon: <Award size={24} />,
      title: "Career Progression",
      description: "Promoted from Frontend Intern to Junior Developer at MobMaxime"
    }
  ];

  return (
    <section id="about" className="section-container bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-rust-600 mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a <span className="font-semibold text-rust-600 dark:text-rust-400">software engineer transitioning into data science</span>, 
              combining technical expertise with analytical thinking to build end-to-end solutions.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My journey from <span className="font-semibold">Frontend Intern to Junior Developer</span> at MobMaxime, 
              coupled with data analytics experience at IBM SkillsBuild, has equipped me with a unique perspective: 
              <span className="font-semibold text-green-600 dark:text-purple-400"> I build intelligent applications powered by data</span>.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Currently pursuing my <span className="font-semibold">Master's in Computer Science at Indiana University</span>, 
              I specialize in machine learning, cloud computing, and full-stack development. 
              I've processed <span className="font-semibold">500K+ records</span>, 
              built <span className="font-semibold">scalable web applications</span>, 
              and developed <span className="font-semibold">predictive ML models</span>.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="card p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className="text-rust-600 dark:text-rust-400 mb-3">
                  {item.icon}
                </div>
                <h3 className="font-semibold mb-2 text-sm">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-rust-600 to-rust-700 rounded-2xl p-8 text-white text-center">
          <p className="text-xl md:text-2xl font-semibold mb-4">
            "I don't just build applications—I build intelligent systems that learn, adapt, and scale."
          </p>
          <div className="flex justify-center gap-8 mt-6 flex-wrap">
            <div>
              <div className="text-3xl font-bold">3.78</div>
              <div className="text-sm opacity-90">MS GPA</div>
            </div>
            <div>
              <div className="text-3xl font-bold">9.37</div>
              <div className="text-sm opacity-90">BE GPA</div>
            </div>
            <div>
              <div className="text-3xl font-bold">5M+</div>
              <div className="text-sm opacity-90">Records Processed</div>
            </div>
            <div>
              <div className="text-3xl font-bold">4+</div>
              <div className="text-sm opacity-90">Applications Built</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
