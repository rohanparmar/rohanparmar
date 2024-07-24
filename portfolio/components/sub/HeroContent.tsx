"use client";

import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromTop, slideInFromLeft, slideInFromRight } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const HeroContent = () => {
  return (
    <motion.div initial="hidden" animate="visible" className='flex flex-col items-center justify-center px-20 mt-40 w-full h-screen z-[20]'>

        <div className='h-full w-full flex flex-col gap-5 justify-center items-center text-center'>

            <motion.div variants={slideInFromLeft(0.5)} className="flex flex-col gap-1 mt-1 text-6xl font-bold text-white max-w-[800px] w-auto h-auto">
                <span>
                    Hi! I am <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>Rohan Parmar</span>.
                </span>
            </motion.div>

            <motion.p variants={slideInFromLeft(0.8)} className='text-lg text-gray-400 my-1 max-w-[1400px]'>
                I am a Machine Learning Engineer with a passion for creating innovative solutions to complex problems. I have experience in developing and deploying machine learning models, as well as working with large datasets. I am always looking for new challenges and opportunities to learn and grow.
            </motion.p>

        </div>

    </motion.div>
  )
}

export default HeroContent
