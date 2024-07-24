import React from 'react'
import ExperienceCard from '../sub/ExperienceCard'

const Experience = () => {
  return (
    <div className='flex flex-col items-center justify-center py-4 -mt-10'>
      <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-4'>
        Experience
      </h1>
      <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
        <ExperienceCard
          src='/Experience1.png'
          title='PayAmigo'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus nec nunc.'
          badge='PayAmigo Badge'
        />
        <ExperienceCard
          src='/Experience1.png'
          title='Workday'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus nec nunc.'
          badge='Workday Badge'
        />
        <ExperienceCard
          src='/Experience1.png'
          title='Government of India'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus nec nunc.'
          badge='Government Badge'
        />
      </div>
    </div>
  )
}

export default Experience
