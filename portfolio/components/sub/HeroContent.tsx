"use client";

import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn, fadeInUp } from '@/utils/motion'

const HeroContent = () => {
  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      className='flex flex-col items-center justify-center px-20 mt-40 w-full h-screen z-[20]'
    >
      <div className='h-full w-full flex flex-col gap-5 justify-center items-center text-center'>
        <motion.div 
          variants={fadeInUp(0.5)} 
          className="cyber-panel backdrop-blur-sm relative mb-8"
        >
          <div className="absolute -inset-1 bg-cyber-neon opacity-10 blur-lg" />
          <h1 className="text-6xl font-bold">
            Hi! I am{' '}
            <span className="text-cyber-neon animate-glow">
              Rohan Parmar
            </span>
          </h1>
        </motion.div>

        <motion.div 
          variants={fadeInUp(0.7)} 
          className="cyber-panel max-w-[800px] relative"
        >
          <div className="absolute -inset-1 bg-cyber-neon opacity-10 blur-lg" />
          <p className='text-lg text-cyber-white'>
            I am a Machine Learning Engineer with a passion for creating innovative solutions to complex problems. 
            I have experience in developing and deploying machine learning models, as well as working with large datasets. 
            I am always looking for new challenges and opportunities to learn and grow.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn(0.9)}
          className="mt-8"
        >
          <button className="cyber-button">
            View My Work
          </button>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default HeroContent
