import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import image from '/public/LRM.jpeg'
function Hero() {
  return (
    <div className='h-screen flex justify-center items-center bg-center bg-cover '>
        <Image src={image}   layout="fill" objectFit="cover" sizes="100vw" alt="Picture of the author"  priority/>
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[2'/>
        <div className='py-5 text-white z-[2] justify-center items-center absolute'>
            <Link href="/" target="_blank">
               <button className='px-16 py-4 border uppercase rounded-full bg-[var(--primary-color)] border-none text-white font-bold hover:opacity-90 hover:bg-[#fa0] text-1xl md:text-2xl'>order free samples</button>
            </Link>
        </div>
        
    </div>
  )
}
// 
export default Hero