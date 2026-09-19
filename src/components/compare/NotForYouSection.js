import React from 'react';
import { X } from 'lucide-react';

const DEFAULT_ITEMS = [
  'You need full grant lifecycle management (application tracking, reporting, budget spend-down)',
  'You need AI proposal drafting trained on your past submissions',
  'You have a grant team of 3+ people who need role-based collaboration',
  'You primarily need deep historical 990 research across decades of foundation data',
];

const NotForYouSection = ({ competitorHint, items = DEFAULT_ITEMS }) => {
  return (
    <section className="py-16 bg-white border-y border-neutral-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4">
          Engrant is not for you if
        </h2>
        <p className="text-neutral-600 mb-8 leading-relaxed">
          Honest comparisons mean saying when we are the wrong tool.
          {competitorHint ? ` ${competitorHint}` : ''}
        </p>
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-neutral-700">
              <span className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center flex-shrink-0">
                <X className="w-4 h-4 text-rose-400" />
              </span>
              <span className="pt-1">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default NotForYouSection;
