"use client";

import React from 'react'
import HeroContent from '../sub/HeroContent'

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[#17151e]">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[linear-gradient(to_right,#C6FE0133_1px,transparent_1px),linear-gradient(to_bottom,#C6FE0133_1px,transparent_1px)]" style={{ backgroundSize: '24px 24px' }} />
        </div>
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00E6E615] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#C6FE0110] to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32">
        <div className="absolute inset-0 border border-[#C6FE01]/30" />
        <div className="absolute top-0 left-0 w-1/2 h-1 bg-[#C6FE01]/50" />
        <div className="absolute top-0 left-0 w-1 h-1/2 bg-[#C6FE01]/50" />
      </div>
      
      <div className="absolute bottom-20 right-10 w-32 h-32">
        <div className="absolute inset-0 border border-[#00E6E6]/30" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1 bg-[#00E6E6]/50" />
        <div className="absolute bottom-0 right-0 w-1 h-1/2 bg-[#00E6E6]/50" />
      </div>

      <HeroContent />
    </div>
  )
}

export default Hero