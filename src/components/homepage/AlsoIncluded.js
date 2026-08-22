import React from 'react';
import { Calendar, FileText, Building2, Mail, Download } from 'lucide-react';

const AlsoIncluded = () => {
  const items = [
    {
      icon: Calendar,
      text: 'Pipeline events in your own calendar — expected call open, deadline, decision date and more, written to the calendar app you already use, with as many reminders as you want to set',
    },
    {
      icon: FileText,
      text: 'Proposal drafting help — a first draft grounded in the funder\'s actual stated requirements, to work from',
    },
    {
      icon: Building2,
      text: 'Unlimited organization profiles — each one learns its own constraints',
    },
    {
      icon: Mail,
      text: 'Monthly email updates on new funders matching your saved organizations',
    },
    {
      icon: Download,
      text: 'Pipeline export',
    },
  ];

  return (
    <section id="also-included" className="py-16 bg-neutral-50 border-y border-neutral-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center bg-neutral-200 text-neutral-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Also included
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-700">
            Everything after the search
          </h2>
        </div>

        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-neutral-600">
              <item.icon className="w-5 h-5 text-neutral-400 flex-shrink-0 mt-0.5" />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AlsoIncluded;
