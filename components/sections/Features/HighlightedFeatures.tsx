import React from 'react';
import F1 from './F1';
import F2 from './F2';
import F3 from './F3';
import F4 from './F4';

const HighlightedFeatures = () => {
  return (
    <section className="bg-black py-12 md:py-24 px-4 md:px-8">
      {/* p-4: Mobile padding
        md:p-8: Reduced from p-16 for a tighter, cleaner desktop look
      */}
      <div className="max-w-7xl mx-auto bg-white rounded-[2.5rem] p-4 md:p-8 text-black shadow-2xl">
        
        {/* gap-8: Mobile vertical spacing
          md:gap-6: Reduced from gap-16 so the 2x2 grid feels connected but distinct
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6">
          <F1 />
          <F3 />
          <F4 />
          <F2 />
        </div>
      </div>
    </section>
  );
};

export default HighlightedFeatures;