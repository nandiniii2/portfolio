import React, { useEffect, useMemo, useState } from 'react';
import { Github, ExternalLink, Database, Code, BarChart3, X } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "F1 Finish Tier Predictor",
      category: "data-science",
      description:
        "Machine learning app predicting Formula 1 finish tiers using Random Forest and XGBoost with an interactive Streamlit UI.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop",
      technologies: ["Python", "Streamlit", "XGBoost", "Random Forest", "Pandas"],
      highlights: [
        "Analyzed race, lap-time, and pit-stop data",
        "Engineered features for predictive accuracy",
        "Tier predictions (Top 3, 4–10, 11+)",
        "Visualized class probabilities"
      ],
      github: "https://github.com/nandiniii2",
      demo: null,
      metrics: "MAE-based evaluation"
    },
    {
      title: "COVID-19 Healthcare Analytics Platform",
      category: "data-science",
      description:
        "Distributed big data pipeline analyzing 5M+ COVID-19 patient records with real-time AWS QuickSight dashboards.",
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&h=500&fit=crop",
      technologies: ["PySpark", "Hadoop", "AWS EC2", "AWS S3", "QuickSight", "Python"],
      highlights: [
        "Processed 5M+ patient records",
        "Optimized queries with partitioning & bucketing",
        "Real-time ICU occupancy tracking",
        "Predictive models for resource planning"
      ],
      github: "https://github.com/nandiniii2",
      demo: null,
      metrics: "5M+ records analyzed"
    },
    {
      title: "Readers Nest - Library Management System",
      category: "software",
      description:
        "Full-stack library management app with JWT auth, role-based access control, and efficient record handling.",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=500&fit=crop",
      technologies: ["Angular 17", "ASP.NET Core", "SQL Server", "JWT", "TypeScript"],
      highlights: [
        "Manages 1K+ book records",
        "JWT authentication & RBAC",
        "Responsive single-page application",
        "Admin-controlled user management"
      ],
      github: "https://github.com/nandiniii2",
      demo: null,
      metrics: "1K+ records"
    },
    {
      title: "House Price Prediction Model",
      category: "data-science",
      description:
        "Regression model predicting house prices using linear regression and decision tree baselines with feature engineering.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
      highlights: [
        "R² score of 0.82 on test data",
        "Integrated 3+ real estate data sources",
        "Comprehensive data visualization",
        "Statistical feature engineering"
      ],
      github: "https://github.com/nandiniii2",
      demo: null,
      metrics: "R² = 0.82"
    },
    {
      title: "MyEdMaster Platform Features",
      category: "software",
      description:
        "Contributed to an entrepreneurship platform: dashboard modules, authentication system, and real-time features.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      technologies: ["React.js", "Python", "MySQL", "REST APIs"],
      highlights: [
        "Dashboard with 5 core modules",
        "Secure multi-device authentication",
        "25% development speed improvement",
        "100+ daily user interactions"
      ],
      github: null,
      demo: null,
      metrics: "100+ daily users"
    },
    {
      title: "MobMaxime Web Applications",
      category: "software",
      description:
        "Led development of 4 scalable web apps with ASP.NET/C# focused on performance optimization and modular architecture.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop",
      technologies: ["ASP.NET", "C#", "Angular", "SQL", "Entity Framework"],
      highlights: [
        "Built 4 production applications",
        "25% response time improvement",
        "Modular backend architecture",
        "20% productivity increase"
      ],
      github: null,
      demo: null,
      metrics: "4 applications"
    }
  ];

  const filteredProjects = useMemo(() => {
    if (filter === 'all') return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter, projects]);

  // Modal UX: ESC to close + lock background scroll
  useEffect(() => {
    if (!selectedProject) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const filterBtnBase =
    "px-6 py-3 rounded-full font-medium transition-all duration-300 border flex items-center gap-2";
  const filterBtnActive =
    "bg-[#B7513C] text-white border-[#B7513C] shadow-lg";
  const filterBtnIdle =
    "bg-white border-[#E7DED9] text-slate-700 hover:border-[#B7513C]/40 hover:bg-[#B7513C]/5";

  const chip =
    "px-3 py-1 rounded-full text-xs font-semibold bg-[#B7513C] text-white";

  const techChip =
    "px-3 py-1 bg-white border border-[#E7DED9] rounded-full text-sm font-medium text-slate-700";

  const softBtn =
    "px-4 py-2 rounded-lg border border-[#E7DED9] text-slate-700 hover:border-[#B7513C]/40 hover:bg-[#B7513C]/5 transition flex items-center gap-2";

  return (
    <section id="projects" className="section-container bg-[#FAF7F5]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-[#B7513C] mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A few things I’ve built across data science, machine learning, and full-stack engineering.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          <button
            onClick={() => setFilter('all')}
            className={`${filterBtnBase} ${filter === 'all' ? filterBtnActive : filterBtnIdle}`}
          >
            All
          </button>

          <button
            onClick={() => setFilter('data-science')}
            className={`${filterBtnBase} ${filter === 'data-science' ? filterBtnActive : filterBtnIdle}`}
          >
            <Database size={18} />
            Data Science
          </button>

          <button
            onClick={() => setFilter('software')}
            className={`${filterBtnBase} ${filter === 'software' ? filterBtnActive : filterBtnIdle}`}
          >
            <Code size={18} />
            Software
          </button>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <div className="card overflow-hidden border border-[#E7DED9] bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={chip}>
                      {project.category === 'data-science' ? 'Data Science' : 'Software'}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-lg leading-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5">
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-slate-500">
                      {project.metrics}
                    </span>
                    <span className="text-xs text-[#B7513C] font-semibold">
                      View details →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E7DED9]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                  aria-label="Close"
                >
                  <X size={22} className="text-white" />
                </button>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={chip}>
                      {selectedProject.category === 'data-science' ? 'Data Science' : 'Software'}
                    </span>
                    {selectedProject.category === 'data-science' ? (
                      <Database size={18} className="text-white" />
                    ) : (
                      <Code size={18} className="text-white" />
                    )}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              {/* Modal content */}
              <div className="p-6 md:p-8">
                {/* Summary */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-slate-900">
                    Summary
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-slate-900">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="text-slate-600 flex items-start"
                      >
                        <span className="text-[#B7513C] mr-2 mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-slate-900">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className={techChip}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics & Links */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-[#E7DED9]">
                  <div className="flex items-center gap-2 text-[#B7513C]">
                    <BarChart3 size={18} />
                    <span className="text-sm font-semibold">
                      {selectedProject.metrics}
                    </span>
                  </div>

                  <div className="flex gap-3">
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={softBtn}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={18} />
                        View Code
                      </a>
                    )}
                    {selectedProject.demo && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-[#B7513C] text-white rounded-lg font-medium hover:bg-[#A24633] transition-colors flex items-center gap-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">
            Want to see more? Check out my GitHub for additional projects and contributions.
          </p>
          <a
            href="https://github.com/nandiniii2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#B7513C] text-white font-medium hover:bg-[#A24633] transition-colors"
          >
            <Github size={20} />
            Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
