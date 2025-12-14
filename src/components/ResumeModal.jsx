import React from 'react';
import { X, Download, FileText } from 'lucide-react';

const resumes = [
  {
    id: 'ds',
    title: 'Data Science / ML Resume',
    filename: '/Nandini_Patel_DS.pdf',
    summary:
      'Focus on machine learning, data pipelines, and analytics projects like the COVID-19 Healthcare Analytics Platform and F1 Finish Tier Predictor.',
  },
  {
    id: 'se',
    title: 'Software Engineering Resume',
    filename: '/Nandini_Patel_SE.pdf',
    summary:
      'Focus on full-stack web development, .NET, Angular, and production apps such as ReadersNest and enterprise web systems.',
  },
];

const ResumeModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-xl p-6 md:p-7 relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <FileText size={20} className="text-rust-600" />
          <h2 className="text-xl font-semibold text-slate-900">
            Choose a resume
          </h2>
        </div>
        <p className="text-sm text-slate-600 mb-4">
          Pick the version that matches the role you're applying for.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {resumes.map((r) => (
            <div
              key={r.id}
              className="border border-slate-200 rounded-xl p-4 hover:shadow-lg transition-shadow bg-white flex flex-col justify-between"
            >
              <div className="space-y-2">
                <p className="text-sm font-semibold text-slate-900">
                  {r.title}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {r.summary}
                </p>
              </div>
              
              <a  href={r.filename}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 bg-gradient-to-r from-rust-600 to-rust-700 text-white rounded-lg text-sm font-medium hover:scale-105 transition-transform flex items-center justify-center gap-2"
              >
                <Download size={16} />
                View / Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;