import React from 'react';
import { Sparkles } from 'lucide-react';

const CompareAnswerBox = ({ title, answer, bullets = [] }) => {
  return (
    <section className="py-12 bg-white border-b border-neutral-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-teal-50 to-amber-50/30 rounded-2xl p-8 border border-teal-100">
          <h2 className="text-lg font-bold text-teal-700 mb-4 flex items-center">
            <Sparkles className="w-5 h-5 mr-2" />
            {title}
          </h2>
          <p className="text-neutral-700 text-lg leading-relaxed mb-6">
            {answer}
          </p>
          {bullets.length > 0 && (
            <div className="border-t border-teal-100 pt-6">
              <h3 className="font-semibold text-slate-700 mb-4">At a glance:</h3>
              <ul className="grid md:grid-cols-2 gap-3">
                {bullets.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-neutral-600">
                    <span
                      className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                        i % 2 === 0 ? 'bg-teal-500' : 'bg-slate-400'
                      }`}
                    />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CompareAnswerBox;
