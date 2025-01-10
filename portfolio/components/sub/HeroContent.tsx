"use client";

import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn, fadeInUp } from '@/utils/motion'

const HeroContent = () => {
  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      className='flex flex-col items-center justify-center px-4 md:px-20 mt-20 md:mt-40 w-full h-screen z-[20]'
    >
      <div className='h-full w-full flex flex-col gap-3 md:gap-5 justify-center items-center text-center max-w-[1200px] mx-auto relative'>
        {/* Main content panel */}
        <motion.div 
          variants={fadeInUp(0.5)} 
          className="relative w-full max-w-[800px] bg-gradient-to-br from-[#1a1f2e] to-[#17151e] border border-[#C6FE01]/30 p-6 md:p-12"
        >
          {/* Decorative corners */}
          <div className="absolute top-0 left-0">
            <div className="absolute top-0 left-0 w-12 md:w-20 h-1 bg-gradient-to-r from-[#C6FE01] to-transparent" />
            <div className="absolute top-0 left-0 w-1 h-12 md:h-20 bg-gradient-to-b from-[#C6FE01] to-transparent" />
          </div>
          <div className="absolute top-0 right-0">
            <div className="absolute top-0 right-0 w-12 md:w-20 h-1 bg-gradient-to-l from-[#C6FE01] to-transparent" />
            <div className="absolute top-0 right-0 w-1 h-12 md:h-20 bg-gradient-to-b from-[#C6FE01] to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0">
            <div className="absolute bottom-0 left-0 w-12 md:w-20 h-1 bg-gradient-to-r from-[#00E6E6] to-transparent" />
            <div className="absolute bottom-0 left-0 w-1 h-12 md:h-20 bg-gradient-to-t from-[#00E6E6] to-transparent" />
          </div>
          <div className="absolute bottom-0 right-0">
            <div className="absolute bottom-0 right-0 w-12 md:w-20 h-1 bg-gradient-to-l from-[#00E6E6] to-transparent" />
            <div className="absolute bottom-0 right-0 w-1 h-12 md:h-20 bg-gradient-to-t from-[#00E6E6] to-transparent" />
          </div>

          {/* Name with glitch effect */}
          <div className="relative mb-4 md:mb-8">
            <h1 className="text-3xl md:text-6xl font-bold tracking-wider">
              Hi! I am{' '}
              <div className="relative inline-block">
                <span className="relative z-10 text-[#C6FE01] drop-shadow-[0_0_10px_rgba(198,254,1,0.5)]">
                  Rohan Parmar
                </span>
                <span className="absolute inset-0 text-[#00E6E6]/80 blur-[2px] mix-blend-screen animate-glitch-1 z-20 translate-x-[2px] translate-y-[-2px]">
                  Rohan Parmar
                </span>
                <span className="absolute inset-0 text-[#C6FE01]/80 blur-[1px] mix-blend-multiply animate-glitch-2 z-30 translate-x-[-2px] translate-y-[2px]">
                  Rohan Parmar
                </span>
              </div>
            </h1>
          </div>

          {/* Description */}
          <motion.div 
            variants={fadeInUp(0.7)} 
            className="relative"
          >
            <div className="absolute -left-3 top-0 w-1 h-full bg-gradient-to-b from-transparent via-[#00E6E6] to-transparent" />
            <p className='text-sm md:text-lg text-white/80 leading-relaxed pl-4'>
              I am a Machine Learning Engineer with a passion for creating innovative solutions to complex problems. 
              I have experience in developing and deploying machine learning models, as well as working with large datasets. 
              I am always looking for new challenges and opportunities to learn and grow.
            </p>
          </motion.div>
        </motion.div>

        {/* Action button */}
        <motion.div
          variants={fadeIn(0.9)}
          className="mt-4 md:mt-8"
        >
          <button className="px-6 md:px-8 py-2 md:py-3 bg-[#C6FE01]/10 text-[#C6FE01] border border-[#C6FE01]/50 hover:bg-[#C6FE01]/20 transition-colors duration-300 tracking-wider font-medium text-sm md:text-base">
            VIEW MY WORK
          </button>
        </motion.div>

        {/* Status indicators */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs md:text-sm px-4">
          <div className="flex items-center gap-1.5 md:gap-2">
            <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-[#C6FE01] animate-pulse" />
            <span className="text-[#C6FE01]">SYSTEM ACTIVE</span>
          </div>
          <div className="flex items-center gap-1.5 md:gap-2">
            <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-[#00E6E6] animate-pulse" />
            <span className="text-[#00E6E6]">CONNECTION SECURE</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default HeroContent
