import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);

      let current = 'hero';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const offsetTop = rect.top + window.scrollY;
        if (y >= offsetTop - 120) current = id;
      }
      setActive(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-slate-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rust-500 to-rust-600 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-105 transition-transform">
              N
            </div>
            <span className="hidden sm:block text-sm font-semibold tracking-wide text-slate-900">
              Nandini Patel
            </span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                
                <a  key={item.name}
                  href={item.href}
                  className="relative text-sm font-medium text-slate-600 hover:text-rust-600 transition-colors"
                >
                  {item.name}
                  {isActive && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-rust-500 to-rust-600 rounded-full" />}
                </a>
              );
            })}

            <a href="#contact" className="px-6 py-2 bg-gradient-to-r from-rust-500 to-rust-600 text-white rounded-full font-medium hover:scale-105 transition-transform shadow-lg">
              Let's Talk
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-900"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 bg-white rounded-b-2xl shadow-xl">
            <div className="flex flex-col gap-2 pt-2">
              {navItems.map((item) => {
                const isActive = active === item.id;
                return (
                  
                  <a  key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${isActive ? 'bg-rust-500 text-white' : 'text-slate-700 hover:bg-slate-100'}`}
                  >
                    {item.name}
                  </a>
                );
              })}
              
              <a  href="#contact"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-gradient-to-r from-rust-500 to-rust-600 text-white rounded-lg text-sm font-medium text-center mt-2"
              >
                Let's Talk
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;