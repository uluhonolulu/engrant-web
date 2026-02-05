import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const PromptCard = ({ promptNumber, title, instructions, promptContent, dependencies = [] }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(promptContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = promptContent;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (fallbackErr) {
        console.error('Fallback copy failed:', fallbackErr);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg border border-neutral-200 overflow-hidden mb-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">{title}</h2>
            <p className="text-teal-100 text-sm">Prompt #{promptNumber}</p>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-all duration-200 font-medium backdrop-blur-sm"
            aria-label="Copy prompt to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-5 h-5" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-5 h-5" />
                <span>Copy Prompt</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Instructions Section */}
      <div className="px-6 py-5 bg-amber-50 border-b border-amber-200">
        <h3 className="text-lg font-semibold text-neutral-800 mb-3 flex items-center gap-2">
          <span className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
            i
          </span>
          Instructions
        </h3>
        <div className="text-neutral-700 space-y-3">
          {instructions}
        </div>
        {dependencies.length > 0 && (
          <div className="mt-4 pt-4 border-t border-amber-200">
            <p className="text-sm font-semibold text-neutral-800 mb-2">📎 Required Files:</p>
            <ul className="list-disc list-inside text-sm text-neutral-700 space-y-1">
              {dependencies.map((dep, idx) => (
                <li key={idx}>{dep}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Prompt Content */}
      <div className="px-6 py-5">
        <h3 className="text-lg font-semibold text-neutral-800 mb-3">Prompt Content</h3>
        <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 max-h-96 overflow-y-auto" style={{ scrollbarWidth: 'thin', scrollbarColor: '#d4d4d8 #f5f5f5' }}>
          <pre className="text-sm text-neutral-700 whitespace-pre-wrap font-mono leading-relaxed">
            {promptContent}
          </pre>
        </div>
        <p className="text-xs text-neutral-500 mt-2 italic">
          💡 Scroll to view the full prompt content
        </p>
      </div>
    </div>
  );
};

export default PromptCard;
