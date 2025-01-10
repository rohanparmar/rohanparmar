import React from 'react'
import { RxGithubLogo, RxLinkedinLogo } from 'react-icons/rx'

const Footer = () => {
  return (
    <div className='relative w-full py-6 md:py-8'>
      {/* Background elements */}
      <div className="absolute inset-0 bg-[#17151e]">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[linear-gradient(to_right,#00E6E633_1px,transparent_1px),linear-gradient(to_bottom,#00E6E633_1px,transparent_1px)]" style={{ backgroundSize: '24px 24px' }} />
        </div>
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#00E6E615] to-transparent" />
      </div>

      {/* Top border with gradient */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00E6E6] to-transparent" />

      {/* Main content */}
      <div className='relative max-w-[1200px] mx-auto px-4 md:px-8'>
        {/* Decorative elements - Moved further out */}
        <div className="absolute top-0 left-0 md:left-0 w-24 md:w-40">
          <div className="absolute top-0 left-0 w-1/2 h-1 bg-[#00E6E6]/50" />
          <div className="absolute top-0 left-0 w-1 h-8 md:h-12 bg-[#00E6E6]/50" />
        </div>
        <div className="absolute top-0 right-0 md:right-0 w-24 md:w-40">
          <div className="absolute top-0 right-0 w-1/2 h-1 bg-[#00E6E6]/50" />
          <div className="absolute top-0 right-0 w-1 h-8 md:h-12 bg-[#00E6E6]/50" />
        </div>

        {/* Content with increased padding to avoid overlap */}
        <div className='flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 pt-4 md:pt-6 px-8 md:px-16'>
          {/* Left side - Social links */}
          <div className='flex flex-row gap-4 md:gap-6'>
            <a 
              href='https://github.com' 
              className='flex items-center gap-1.5 md:gap-2 text-[#00E6E6] hover:brightness-110 transition-all duration-300'
              target="_blank"
              rel="noopener noreferrer"
            >
              <RxGithubLogo className='h-4 md:h-5 w-4 md:w-5' />
              <span className='text-xs md:text-sm font-medium'>Github</span>
            </a>
            <a 
              href='https://linkedin.com' 
              className='flex items-center gap-1.5 md:gap-2 text-[#00E6E6] hover:brightness-110 transition-all duration-300'
              target="_blank"
              rel="noopener noreferrer"
            >
              <RxLinkedinLogo className='h-4 md:h-5 w-4 md:w-5' />
              <span className='text-xs md:text-sm font-medium'>LinkedIn</span>
            </a>
          </div>

          {/* Center - Copyright */}
          <div className='text-[#00E6E6]/70 text-xs md:text-sm text-center'>
            &copy; Rohan Parmar 2024. Copyleft, all wrongs reserved.
          </div>

          {/* Right side - Status */}
          <div className='flex items-center gap-1.5 md:gap-2'>
            <div className='w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-[#C6FE01] animate-pulse' />
            <span className='text-[#C6FE01] text-xs md:text-sm tracking-wider'>SYSTEM ONLINE</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
