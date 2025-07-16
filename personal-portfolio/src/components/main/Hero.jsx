import React from 'react'
import HeroContent from '../sub/HeroContent'

const Hero = () => {
  return (
    <div className='flex flex-col relative h-full w-full'>
        <video
        autoPlay
        muted
        loop
        className='absolute rotate-180 top-[-340px] left-0 z-[-1 h-full w-full object-cover'>
            <source src='/blackhole.webm' type='video/webm'/>
        </video>
        <HeroContent/>
    </div>
  )
}

export default Hero