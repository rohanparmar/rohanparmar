"use client";

import React from 'react'
import HeroContent from '../sub/HeroContent'

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark/10 via-cyber-dark/90 to-cyber-dark" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-cyber-neon shadow-neon animate-glow" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-cyber-neon shadow-neon animate-glow" />
      </div>
      <HeroContent />
    </div>
  )
}

export default Hero