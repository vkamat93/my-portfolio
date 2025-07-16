import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417 backdrop-blur-md] z-50 px-10 text-center'>
            <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
                <Link href={"/"}>
                    <Image
                        src={"/NavLogo.png"}
                        alt='logo'
                        width={70}
                        height={70}
                        className='cursor-pointer hover:animate-spin' />
                    <span className='font-bold ml-[10px] hidden md:block text-gray-300'>Webchain Dev</span>
                </Link>
                <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-20'>
                    <div className='flex items-center justify-between border border-[#7042f861] bg-[#0300145e] rounded-full text-gray-200 px-[20px] py-[10px]'>
                        <Link href={"/about"} className='cursor-pointer'>About Me</Link>
                        <Link href={"/skills"} className='cursor-pointer'>Skills</Link>
                        <Link href={"/projects"} className='cursor-pointer'>Projects</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar