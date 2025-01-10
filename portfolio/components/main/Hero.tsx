"use client";

import React from 'react'
import HeroContent from '../sub/HeroContent'

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-[#C6FE01] shadow-[0_0_10px_#C6FE01] animate-glow" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#C6FE01] shadow-[0_0_10px_#C6FE01] animate-glow" />
      </div>
      <HeroContent />
    </div>
  )
}

export default Hero