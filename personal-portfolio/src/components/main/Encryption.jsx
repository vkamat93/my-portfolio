import React from 'react'
// React Server Components
import * as motion from "motion/react-client"
import { slideInFromTop } from '../../../utils/motion'
import Image from 'next/image'

const Encryption = () => {
    return (
        <div className='flex flex-row relative items-center justify-center min-h-screen w-full h-full'>
            <div className='absolute w-auto h-auto top-0 z-[20]'>
                <motion.div
                    variants={slideInFromTop}
                    className='font-medium text-center text-gray-200 text-[40px]'
                >
                    Performance
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
                        {" "}&
                    </span>
                    {" "}security
                </motion.div>
            </div>

            <div className='flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto'>
                <div className='flex flex-col items-center w-auto h-auto group cursor-pointer'>
                    <Image
                        src={"/LockTop.png"}
                        alt='Lock top'
                        width={50}
                        height={50}
                        className='translate-y-5 transition-all duration-200 group-hover:translate-y-11'
                    />

                    <Image
                        src={"/LockMain.png"}
                        alt='Lock main'
                        width={70}
                        height={70}
                        className='z-10'
                    />
                </div>
                <div className='welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#7042f88b] opacity-[0.9]'>
                    <h1 className='welcome-text text-[12px]'>Encryption</h1>
                </div>
            </div>

            <div className='absolute z-[20] bottom-[10px] px-[5px]'>
                <div className='cursive text-[20px] font-medium text-center text-gray-300'>
                    Secure your data with end-to-end encryption
                </div>
            </div>

            <div className='w-full flex items-start justify-center absolute'>
                <video
                    loop
                    autoPlay
                    muted
                    playsInline
                    preload='false'
                    className='w-full h-auto'
                    src="/encryption.webm"
                />
            </div>
        </div>
    )
}

export default Encryption