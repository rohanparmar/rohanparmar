import React from 'react'
import Image from 'next/image';
import { Badge } from "@/components/ui/badge"

interface Props {
  src: string;
  title: string;
  description: string;
  badge?: string;
}

const ExperienceCard = ({ src, title, description, badge }: Props) => {
  return (
    <div className='relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]'>
      <Image src={src} alt={title} width={600} height={600} className='w-full object-contain' />
      
      <div className='relative p-4'>
        <h1 className='text-2xl font-semibold text-white'>{title}</h1>
        {badge && <Badge variant="outline" className='mt-2'>{badge}</Badge>}
        <p className='mt-2 text-gray-300'>{description}</p>
      </div>
    </div>
  )
}

export default ExperienceCard
