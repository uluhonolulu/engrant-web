import React from 'react';
import { Play } from 'lucide-react';

const LoomVideo = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Play className="w-4 h-4 mr-2" />
            See It in Action
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-4">
            Watch how Engrant finds your grants
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            A quick walkthrough of how Engrant matches grants to your nonprofit — from start to results.
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden warm-shadow-lg border border-neutral-100">
          <div style={{ position: 'relative', paddingBottom: '41.875%', height: 0 }}>
            <iframe
              src="https://www.loom.com/embed/8ab0a559df90486f9c6b1278203f7c5b"
              frameBorder="0"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              title="Engrant demo video"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoomVideo;
