import React from 'react';

const COMPARE_LINKS = [
  { href: '/compare/instrumentl/', label: 'Instrumentl' },
  { href: '/compare/grantwatch/', label: 'GrantWatch' },
  { href: '/compare/grantstation/', label: 'GrantStation' },
  { href: '/compare/candid-foundation-directory-online/', label: 'Candid FDO' },
  { href: '/compare/fundsforngos/', label: 'fundsforNGOs' },
  { href: '/compare/grantx/', label: 'GrantX' },
];

const CompareCrossLinks = ({ currentPath }) => {
  const links = COMPARE_LINKS.filter((link) => link.href !== currentPath);

  return (
    <section className="py-12 bg-slate-50 border-t border-neutral-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg font-bold text-slate-700 mb-4">
          More grant tool comparisons
        </h2>
        <p className="text-sm text-neutral-500 mb-6">
          See how Engrant compares to other grant research platforms:{' '}
          <a href="/compare/" className="text-teal-600 hover:underline font-medium">
            all comparisons
          </a>
        </p>
        <div className="flex flex-wrap gap-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm px-4 py-2 rounded-full bg-white border border-neutral-200 text-teal-700 hover:border-teal-300 hover:bg-teal-50 transition-colors font-medium"
            >
              vs {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompareCrossLinks;
