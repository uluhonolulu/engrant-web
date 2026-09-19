import React from 'react';
import { Users, Check } from 'lucide-react';

const BuyerPersonasSection = ({ title, personas }) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4 mr-2" />
            Which tool for which person
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
            {title}
          </h2>
          <p className="text-lg text-neutral-600">
            Not everyone is the same customer. Pick the tool that matches your role.
          </p>
        </div>

        <div className="space-y-6">
          {personas.map((persona, index) => {
            const engrantWins = persona.winner === 'Engrant';
            return (
              <div
                key={index}
                className={`rounded-2xl p-6 md:p-8 border ${
                  engrantWins
                    ? 'bg-gradient-to-br from-teal-50 to-teal-100/40 border-teal-100'
                    : 'bg-slate-50 border-slate-100'
                }`}
              >
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {persona.name}
                </h3>
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  {persona.description}
                </p>
                <p
                  className={`font-semibold flex items-start gap-2 ${
                    engrantWins ? 'text-teal-700' : 'text-slate-700'
                  }`}
                >
                  {engrantWins ? (
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  ) : (
                    <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-center">→</span>
                  )}
                  <span>
                    Verdict: {persona.winner} — {persona.verdict}
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BuyerPersonasSection;
