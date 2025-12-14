import React, { useState } from 'react';
import { Github, Linkedin, Mail, ArrowDown, FileText } from 'lucide-react';
import ResumeModal from './ResumeModal';

const Hero = () => {
  const [resumeOpen, setResumeOpen] = useState(false);

  const technologies = [
    // Programming Languages
    { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Java', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'C#', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    { name: 'R', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg' },
    
    // Frontend
    { name: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Angular', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    { name: 'HTML5', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    
    // Backend & Frameworks
    { name: 'Node.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: '.NET', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
    
    // Data Science & ML
    { name: 'TensorFlow', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
    { name: 'Pandas', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
    { name: 'NumPy', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
    { name: 'Scikit-learn', img: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
    { name: 'Keras', img: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg' },
    
    // Big Data
    { name: 'Apache Spark', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg' },
    { name: 'Hadoop', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg' },
    
    // Databases
    { name: 'MySQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'PostgreSQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MongoDB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Oracle', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
    { name: 'Microsoft SQL Server', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
    
    // Cloud & DevOps
    { name: 'AWS', img: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
    { name: 'Docker', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Git', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    
    // Visualization & Analytics
    { name: 'Tableau', img: 'https://img.icons8.com/color/512/tableau-software.png' },
    { name: 'Matplotlib', img: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg' },
    
    // Other Tools
    { name: 'Streamlit', img: 'https://streamlit.io/images/brand/streamlit-mark-color.svg' },
    { name: 'Jupyter', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
    { name: 'VS Code', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  ];

  // Duplicate technologies for seamless loop
  const allTechnologies = [...technologies, ...technologies];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden"
    >
      {/* Subtle decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-rust-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-rust-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center py-20">
        {/* Profile Photo */}
        <div className="relative w-64 h-64 mx-auto mb-8">
          <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-rust-500 shadow-2xl">
            <img
              src="/profile-photo.jpeg"
              alt="Nandini Patel"
              className="w-full h-full object-cover object-center scale-150"
            />
          </div>
        </div>

        {/* Tech Stack Icons - Infinite Scrolling */}
        <div className="mb-12 relative">
          <div className="overflow-hidden py-8">
            {/* Gradient fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            
            {/* Scrolling container */}
            <div className="flex gap-6 animate-scroll">
              {allTechnologies.map((tech, index) => (
                <div
                  key={index}
                  className="group relative flex-shrink-0"
                >
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl hover:ring-2 hover:ring-rust-500 p-3">
                    <img
                      src={tech.img}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                    <span className="text-xs text-slate-700 font-medium whitespace-nowrap bg-white px-2 py-1 rounded-lg shadow-md border border-slate-200">
                      {tech.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="mb-8 mt-12">
          <p className="text-rust-600 text-sm md:text-base mb-2 font-semibold uppercase tracking-wider">
            Software Engineer | Data & ML
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-3">
            Nandini Patel
          </h1>
          <div className="flex items-center justify-center gap-2 text-slate-600 text-base">
            <span className="w-2 h-2 bg-rust-500 rounded-full animate-pulse" />
            <span>Open to full-time roles</span>
          </div>
        </div>

        {/* Bio */}
        <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Software engineer working at the intersection of data, systems and scale.
        </p>
        <p className="text-slate-500 text-sm mt-1">
          I care about clarity, performance, and systems that hold up in production.
          <br/>
        </p>
        <br/>
        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          
          <a  href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-rust-500 to-rust-600 text-white rounded-full font-semibold hover:from-rust-600 hover:to-rust-700 hover:scale-105 transition-all shadow-lg hover:shadow-xl"
          >
            View My Work
          </a>
          
          <a  href="#contact"
            className="px-8 py-4 bg-white border-2 border-rust-500 text-rust-600 rounded-full font-semibold hover:bg-rust-50 hover:scale-105 transition-all shadow-md"
          >
            Let's Connect
          </a>
          <button
            onClick={() => setResumeOpen(true)}
            className="px-6 py-4 flex items-center gap-2 text-slate-600 hover:text-rust-600 transition-colors font-medium"
          >
            <FileText size={20} />
            Resume
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          
          <a  href="https://github.com/nandiniii2"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-slate-100 hover:bg-rust-500 flex items-center justify-center text-slate-700 hover:text-white hover:scale-110 transition-all shadow-md"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          
          <a  href="https://linkedin.com/in/nandinipatel0204"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-slate-100 hover:bg-rust-500 flex items-center justify-center text-slate-700 hover:text-white hover:scale-110 transition-all shadow-md"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          
          <a  href="mailto:nantpate@iu.edu"
            className="w-12 h-12 rounded-full bg-slate-100 hover:bg-rust-600 flex items-center justify-center text-slate-700 hover:text-white hover:scale-110 transition-all shadow-md"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ArrowDown size={20} className="animate-bounce" />
        </div>
      </div>

      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </section>
  );
};

export default Hero;