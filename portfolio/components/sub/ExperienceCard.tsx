import React from 'react';
import Image from 'next/image';
import { Badge } from "@/components/ui/badge";

interface Props {
  src?: string;
  company: string;
  role?: string;
  description: string;
  date?: string;
  location?: string;
}

const ExperienceCard = ({ src, company, role, description, date, location }: Props) => {
  return (
    <div className='relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-80 h-96'> {/* Fixed width and height */}
      {/* <Image src={src} alt={company} width={600} height={600} className='w-full object-contain' /> */}
      <div className='relative p-4 h-full flex flex-col justify-between'>
        <div>
          <h1 className='text-2xl font-semibold text-white'>{company}</h1>
          {role && <p className='mt-2 text-gray-300'>{role}</p>}
          {date && <Badge className='mt-2'>{date}</Badge>}
          <p className='mt-2 text-gray-300'>{description}</p>
        </div>
        {location && <Badge className='mt-4'>{location}</Badge>}
      </div>
    </div>
  );
}

export default ExperienceCard;
