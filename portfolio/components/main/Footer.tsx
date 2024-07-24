import React from 'react'
import { RxGithubLogo, RxLinkedinLogo } from 'react-icons/rx'

const Footer = () => {
  return (
    <div className='w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] backdrop-blur-md relative'>
        <div className='w-full flex flex-row items-center justify-start'>
            <a href='https://github.com' className='flex flex-row items-center mx-[15px] cursor-pointer'>
                <RxGithubLogo className='h-5 w-5' />
                <span className='text-[15px] ml-[6px]'>Github</span>
            </a>
            <a href='https://linkedin.com' className='flex flex-row items-center mx-[15px] cursor-pointer'>
                <RxLinkedinLogo className='h-5 w-5' />
                <span className='text-[15px] ml-[6px]'>LinkedIn</span>
            </a>
        </div>
        <div className='absolute left-1/2 transform -translate-x-1/2 text-[15px] text-center'>
            &copy; Rohan Parmar 2024. Copyleft, all wrongs reserved.
        </div>
    </div>
  )
}

export default Footer
