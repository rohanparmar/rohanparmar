import React from 'react'
import { RxGithubLogo, RxLinkedinLogo } from 'react-icons/rx'

const Footer = () => {
  return (
    <footer className='relative'>
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

      {/* Main content */}
      <div className='relative py-8 md:py-10'>
        {/* Decorative bars */}
        <div className='absolute left-24 md:left-40 top-0 w-1 h-8 md:h-12 bg-gradient-to-b from-[#C6FE01] to-transparent' />
        <div className='absolute right-24 md:right-40 top-0 w-1 h-8 md:h-12 bg-gradient-to-b from-[#C6FE01] to-transparent' />

        {/* Content with increased padding to avoid overlap */}
        <div className='flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 pt-4 md:pt-6 px-8 md:px-16'>
          {/* Left side - Social links */}
          <div className='flex flex-row gap-4 md:gap-6'>
            <a 
              href='https://github.com' 
              className='flex items-center gap-1.5 md:gap-2 text-[#C6FE01] hover:brightness-110 transition-all duration-300'
              target="_blank"
              rel="noopener noreferrer"
            >
              <RxGithubLogo className='h-4 md:h-5 w-4 md:w-5' />
              <span className='text-xs md:text-sm font-medium'>Github</span>
            </a>
            <a 
              href='https://linkedin.com' 
              className='flex items-center gap-1.5 md:gap-2 text-[#C6FE01] hover:brightness-110 transition-all duration-300'
              target="_blank"
              rel="noopener noreferrer"
            >
              <RxLinkedinLogo className='h-4 md:h-5 w-4 md:w-5' />
              <span className='text-xs md:text-sm font-medium'>LinkedIn</span>
            </a>
          </div>

          {/* Center - Copyright */}
          <div className='text-[#C6FE01]/70 text-xs md:text-sm text-center'>
            &copy; Rohan Parmar 2024. Copyleft, all wrongs reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
