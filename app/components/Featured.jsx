import React from 'react'
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import Image from 'next/image'
import imagee from '/public/chocolate.webp'
import Link from 'next/link'
const Featured = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-12 md:gap-2 py-8'>
      <div className='md:col-span-4 text-center py-5'>
        {/* <span className='font-bold text-1xl text-[#555]'>Snacky featured product</span> */}
        <div className="image-wrapper">
        <Image src={imagee}  alt="Picture of the author" className='w-[90%] ml-5 md:mx-auto  qq ' />
        </div>
      <h1 className='text-[#555] text-2xl font-bold lg:text-3xl text-left ml-12 pt-3 md:text-center md:ml-0'>Grasshopper Desert</h1>
      <p className='uppercase py-3 font-bold text-1xl text-left ml-12 md:text-center md:ml-0'>cocooa</p>
      <p className='py-1 font-bold text-2xl text-left ml-12 md:text-center md:ml-0'>$123</p>
      <Link href={'/'}>
      <button className='font-bold pt-4 rounded inline-flex items-center'>
          <span className='mr-3 text-2xl text-[var(--primary-color)] uppercase'>Order now</span>
          <BsFillArrowRightCircleFill className='text-2xl'/>
      </button>
      </Link>
      </div>
      <div className='md:col-span-4 text-center py-5'>
        {/* <span className='font-bold text-1xl text-[#555]'>Snacky featured product</span> */}
        <div className="image-wrapper">
        <Image src={imagee}  alt="Picture of the author" className='w-[90%] ml-5 md:mx-auto qq' />
        </div>
      <h1 className='text-[#555] text-2xl font-bold lg:text-3xl text-left ml-12 pt-3 md:text-center md:ml-0'>Grasshopper Desert</h1>
      <p className='uppercase py-3 font-bold text-1xl text-left ml-12 md:text-center md:ml-0'>cocooa</p>
      <p className='py-1 font-bold text-2xl text-left ml-12 md:text-center md:ml-0'>$123</p>
      <Link href={'/'}>
      <button className='font-bold pt-4 rounded inline-flex items-center'>
          <span className='mr-3 text-2xl text-[var(--primary-color)] uppercase'>Order now</span>
          <BsFillArrowRightCircleFill className='text-2xl'/>
      </button>
      </Link>
      </div>
      <div className='md:col-span-4 text-center py-5'>
        {/* <span className='font-bold text-1xl text-[#555]'>Snacky featured product</span> */}
        <div className="image-wrapper">
        <Image src={imagee}  alt="Picture of the author" className='w-[90%] ml-5 md:mx-auto qq'/>
        </div>
      <h1 className='text-[#555] text-2xl font-bold lg:text-3xl text-left ml-12 pt-3 md:text-center md:ml-0'>Grasshopper Desert</h1>
      <p className='uppercase py-3 font-bold text-1xl text-left ml-12 md:text-center md:ml-0'>cocooa</p>
      <p className='py-1 font-bold text-2xl text-left ml-12 md:text-center md:ml-0'>$123</p>
      <Link href={'/'}>
      <button className='font-bold pt-4 rounded inline-flex items-center'>
          <span className='mr-3 text-2xl text-[var(--primary-color)] uppercase'>Order now</span>
          <BsFillArrowRightCircleFill className='text-2xl'/>
      </button>
      </Link>
      </div>
    </div>
    
  )
}

export default Featured