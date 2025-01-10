import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Base background color */}
      <div className="absolute inset-0 bg-[#171616]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#00E6E633_1px,transparent_1px),linear-gradient(to_bottom,#00E6E633_1px,transparent_1px)]" style={{ backgroundSize: '24px 24px' }} />
      </div>

      {/* Hero to Experience transition */}
      <div className="absolute top-0 h-[140vh] bg-gradient-to-b from-[#171616] via-[#17151e] to-[#17151e] w-full">
        {/* Subtle cyan accents fading into pink */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#00E6E610] via-[#FF008010] to-[#FF008015]" />
      </div>

      {/* Experience to Projects transition */}
      <div className="absolute top-[120vh] h-[140vh] bg-gradient-to-b from-[#17151e] via-[#171616] to-[#17151e] w-full">
        {/* Pink accents fading into cyan */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FF008015] via-[#00E6E610] to-[#00E6E615]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF008010] via-[#00E6E610] to-transparent" />
      </div>

      {/* Projects section and footer transition */}
      <div className="absolute top-[240vh] h-screen bg-gradient-to-b from-[#17151e] via-[#171616] to-[#171616] w-full">
        {/* Cyan accents */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#00E6E615] via-[#00E6E610] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00E6E610] to-transparent" />
      </div>
    </div>
  );
};

export default Background; 