import React from 'react'
import SkillDataProvider from '@/components/sub/SkillDataProvider'
import { Backend_skill, Frontend_skill, Full_stack, Other_skill, Skill_data } from '@/app/constants'
import SkillText from '../sub/SkillText'

const Skills = () => {
    return (
        <section
            id='skills'
            style={{ transform: "scale(0.9)" }}
            className='flex flex-col items-center-safe justify-center gap-4 h-full relative overflow-hidden py-20'
        >
            <SkillText />
            <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center-safe'>
                {Skill_data.map((image, index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div>

            <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center-safe'>
                {Frontend_skill.map((image, index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div>

            <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center-safe'>
                {Backend_skill.map((image, index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div>

            <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center-safe'>
                {Full_stack.map((image, index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div>

            <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center-safe'>
                {Other_skill.map((image, index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div>

            <div className='w-full h-full absolute'>
                <div className='w-full h-full opacity-30 flex absolute items-center justify-center bg-cover z-[-10]'>
                    <video className='w-full h-auto'
                        src="/cards-video.webm"
                        preload='false'
                        playsInline
                        loop
                        muted
                        autoPlay />
                </div>
            </div>
        </section>
    )
}

export default Skills