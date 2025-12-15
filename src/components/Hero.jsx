import React, { useState } from 'react';
import { Github, Linkedin, Mail, ArrowDown, FileText } from 'lucide-react';
import ResumeModal from './ResumeModal';

const Hero = () => {
  const [resumeOpen, setResumeOpen] = useState(false);

  const technologies = [
    { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Java', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'C#', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    { name: 'R', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg' },
    { name: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Angular', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    { name: 'HTML5', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Node.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: '.NET', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
    { name: 'TensorFlow', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
    { name: 'Pandas', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
    { name: 'NumPy', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
    { name: 'Scikit-learn', img: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
    { name: 'Apache Spark', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg' },
    { name: 'Hadoop', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg' },
    { name: 'MySQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'PostgreSQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MongoDB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Cassandra', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cassandra/cassandra-original.svg' },
    { name: 'Neo4j', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg' },
    { name: 'AWS', img: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
    { name: 'Docker', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Git', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  ];

  const allTechnologies = [...technologies, ...technologies];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-rust-200 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-rust-300 rounded-full blur-3xl opacity-30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center py-12 md:py-16">

        {/* Profile Photo */}
        <div className="relative w-52 h-52 md:w-64 md:h-64 mx-auto mb-6">
          <div className="w-full h-full rounded-full overflow-hidden ring-4 ring-rust-500 shadow-2xl">
            <img
              src="/profile-photo.jpeg"
              alt="Nandini Patel"
              className="w-full h-full object-cover object-[50%_30%] scale-125"
            />
          </div>
        </div>

        {/* Title */}
        <div className="mb-6">
          <p className="text-rust-600 text-sm font-semibold uppercase tracking-wider mb-1">
            Software Engineer | Data & ML
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-2">
            Nandini Patel
          </h1>
          <div className="flex justify-center items-center gap-2 text-slate-600">
            <span className="w-2 h-2 bg-rust-500 rounded-full animate-pulse" />
            <span>Open to full-time roles</span>
          </div>
        </div>

        {/* Bio */}
        <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Software engineer working at the intersection of data, systems and scale.
        </p>
        <p className="text-slate-500 text-sm mt-1">
          I care about clarity, performance, and systems that hold up in production.
        </p>

        {/* Tech strip */}
        <div className="mt-6 mb-8 relative">
          <div className="overflow-hidden py-5">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

            <div className="flex gap-6 animate-scroll">
              {allTechnologies.map((tech, index) => (
                <div key={index} className="flex-shrink-0">
                  <div className="w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center p-2 hover:scale-110 transition">
                    <img src={tech.img} alt={tech.name} className="w-full h-full object-contain" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-rust-500 to-rust-600 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white border-2 border-rust-500 text-rust-600 rounded-full font-semibold hover:bg-rust-50 transition"
          >
            Let’s Connect
          </a>
          <button
            onClick={() => setResumeOpen(true)}
            className="px-6 py-4 flex items-center gap-2 text-slate-600 hover:text-rust-600 transition"
          >
            <FileText size={18} />
            Resume
          </button>
        </div>

        {/* Socials */}
        <div className="flex justify-center gap-4">
          <a href="https://github.com/nandiniii2" target="_blank" className="social-btn">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/nandinipatel0204" target="_blank" className="social-btn">
            <Linkedin size={20} />
          </a>
          <a href="mailto:nantpate@iu.edu" className="social-btn">
            <Mail size={20} />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400 flex flex-col items-center gap-1">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ArrowDown size={18} className="animate-bounce" />
        </div>
      </div>

      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </section>
  );
};

export default Hero;
