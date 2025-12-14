import React from 'react';
import { Code2, Database, Cloud, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      id: 'languages',
      name: 'Languages',
      icon: <Code2 size={22} />,
      // ordered by strength
      skills: ['Python', 'SQL', 'TypeScript', 'JavaScript', 'C#', 'Java', 'R', 'HTML', 'CSS']
    },
    {
      id: 'frameworks',
      name: 'Application & ML Frameworks',
      icon: <Wrench size={22} />,
      skills: ['React', '.NET', 'Node.js', 'Angular', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Keras']
    },
    {
      id: 'databases',
      name: 'Databases',
      icon: <Database size={22} />,
      skills: ['PostgreSQL', 'MySQL', 'SQL Server', 'Snowflake', 'MongoDB', 'Oracle']
    },
    {
      id: 'tools',
      name: 'Tools & Platforms',
      icon: <Cloud size={22} />,
      skills: ['Git/GitHub', 'AWS', 'Docker', 'PySpark', 'Hadoop', 'Tableau', 'Jupyter', 'Streamlit']
    }
  ];

  // Single-brand (rust) styling + neutral chips
  const iconWrap = 'p-3 rounded-xl bg-rust-50 dark:bg-rust-900/30';
  const iconColor = 'text-rust-600 dark:text-rust-300';

  const chipBase =
    'px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200';
  const chipNeutral =
    'bg-white dark:bg-gray-900 text-slate-700 dark:text-slate-200 border-gray-200 dark:border-gray-800';
  const chipHover =
    'hover:border-rust-300 dark:hover:border-rust-700 hover:bg-rust-50/60 dark:hover:bg-rust-900/20 hover:-translate-y-[1px]';

  return (
    <section id="skills" className="section-container">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-rust-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My core stack for building scalable web applications and data systems in production.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.id} className="card p-6">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={iconWrap}>
                  <div className={iconColor}>{category.icon}</div>
                </div>
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className={`${chipBase} ${chipNeutral} ${chipHover}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills (de-emphasized) */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-center mb-5 text-slate-800 dark:text-slate-100">
            Additional Expertise
          </h3>

          <div className="card p-6">
            <div className="flex flex-wrap justify-center gap-2">
              {[
                'RESTful APIs',
                'ETL',
                'Data Warehousing',
                'Machine Learning',
                'Statistical Modeling',
                'Agile/Scrum',
                'JWT Authentication',
                'Entity Framework',
                'XGBoost',
                'Random Forest',
                'Regression Analysis',
                'Data Visualization',
                'Cloud Architecture',
                'CI/CD'
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-gray-50 dark:bg-gray-900 text-slate-600 dark:text-slate-300 rounded-md text-xs font-medium border border-gray-200 dark:border-gray-800 hover:border-rust-300 dark:hover:border-rust-700 hover:bg-rust-50/50 dark:hover:bg-rust-900/20 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
