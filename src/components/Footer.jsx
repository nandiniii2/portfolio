import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const social =
    "inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#E7DED9] text-slate-600 hover:text-[#B7513C] hover:border-[#B7513C]/40 hover:bg-[#B7513C]/5 transition-all";

  const link =
    "text-sm text-slate-600 hover:text-[#B7513C] transition-colors";

  return (
    <footer className="bg-[#FAF7F5] border-t border-[#E7DED9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#B7513C] text-white flex items-center justify-center font-semibold shadow-sm">
                N
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                Nandini Patel
              </h3>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              Building intelligent, scalable software at the intersection of
              full-stack engineering and data science.
            </p>

            <div className="flex gap-3 mt-5">
              <a
                href="https://github.com/nandiniii2"
                target="_blank"
                rel="noopener noreferrer"
                className={social}
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/nandinipatel0204"
                target="_blank"
                rel="noopener noreferrer"
                className={social}
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:nantpate@iu.edu"
                className={social}
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-4">
              Explore
            </h4>
            <ul className="space-y-2">
              <li><a href="#about" className={link}>About</a></li>
              <li><a href="#skills" className={link}>Skills</a></li>
              <li><a href="#projects" className={link}>Projects</a></li>
              <li><a href="#experience" className={link}>Experience</a></li>
              <li><a href="#contact" className={link}>Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <a href="mailto:nantpate@iu.edu" className={link}>
                  nantpate@iu.edu
                </a>
              </li>
              <li>Bloomington, IN</li>
              <li>Indiana University</li>
              <li>MS in Computer Science</li>
            </ul>

            <div className="mt-5">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#B7513C] text-white text-sm font-medium hover:bg-[#A24633] transition-colors"
              >
                Let’s Talk
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-[#E7DED9] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {currentYear} Nandini Patel
          </p>
          <p className="text-xs text-slate-500 flex items-center gap-1">
            Built using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
