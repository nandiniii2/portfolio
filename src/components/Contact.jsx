import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Send, Download } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:nantpate@iu.edu?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="section-container bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-rust-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm currently seeking opportunities in software engineering and data science. 
            Let's discuss how I can contribute to your team!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Whether you have a question, want to discuss a project, or just want to say hi, 
                I'd love to hear from you!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <a
                href="mailto:nantpate@iu.edu"
                className="flex items-center gap-4 p-4 card hover:scale-105 transition-all duration-300"
              >
                <div className="p-3 bg-rust-100 dark:bg-rust-900 text-rust-600 dark:text-rust-400 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">nantpate@iu.edu</div>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/nandinipatel0204"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 card hover:scale-105 transition-all duration-300"
              >
                <div className="p-3 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg">
                  <Linkedin size={24} />
                </div>
                <div>
                  <div className="font-semibold">LinkedIn</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">linkedin.com/in/nandinipatel0204</div>
                </div>
              </a>

              <a
                href="https://github.com/nandiniii2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 card hover:scale-105 transition-all duration-300"
              >
                <div className="p-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg">
                  <Github size={24} />
                </div>
                <div>
                  <div className="font-semibold">GitHub</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">github.com/nandiniii2</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 card">
                <div className="p-3 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Bloomington, IN</div>
                </div>
              </div>
            </div>

            {/* Resume Download */}
            <div className="p-6 bg-gradient-to-r from-rust-600 to-rust-700 rounded-xl text-white">
              <h4 className="text-xl font-bold mb-3">Download My Resume</h4>
              <div className="flex gap-3">
                <button className="flex-1 px-4 py-2 bg-white text-rust-600 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                  <a href="/Nandini_Patel_DS.pdf"
                    download="Nandini_Patel_DataScience_Resume.pdf"
                    className="flex-1 px-4 py-2 bg-white text-rust-600 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                  >
                    <Download size={18} />
                    Data Science
                  </a>
                </button>
                <button className="flex-1 px-4 py-2 bg-white text-rust-600 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                  <a href="/Nandini_Patel_SE.pdf"
                    download="Nandini_Patel_SoftwareEngineer_Resume.pdf"
                    className="flex-1 px-4 py-2 bg-white text-rust-600 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                  >
                    <Download size={18} />
                    Software Eng
                  </a>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card p-8">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-rust-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-rust-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-rust-500 focus:border-transparent transition-all"
                  placeholder="Job Opportunity / Project Collaboration"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-rust-500 focus:border-transparent transition-all resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3
                          bg-rust-600 hover:bg-rust-700 text-white
                          font-medium rounded-lg shadow-md
                          transition-all duration-300 hover:scale-[1.02]"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
