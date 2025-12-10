import React from 'react';

const WhoThisIsFor = () => {
  return (
    <section id="who-this-is-for" className="py-20 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 text-center mb-8">
          Built for solo development professionals
        </h2>
        
        <p className="text-lg text-neutral-700 mb-8 leading-relaxed text-center">
          You're the only person at your nonprofit who touches grants. Your executive director wants more applications submitted. Your board wants higher success rates. And you're working late every night just trying to find opportunities that actually fit.
        </p>
        
        <p className="text-xl text-neutral-900 font-semibold text-center mb-12">
          Engrant gives you your evenings back.
        </p>
        
        <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary-600">
          <p className="text-xl text-neutral-700 italic mb-4">
            "I spend more time searching for grants than I do actually writing them, and half the ones I find don't even fit our mission."
          </p>
          <p className="text-neutral-600">
            — The problem Engrant solves
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoThisIsFor;


