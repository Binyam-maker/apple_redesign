import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Button from './Button'

type Props = {}

const Landing = (props: Props) => {
  return (
    <section className='sticky top-0 ml-4 flex gap-4 items-center md:mx-auto h-screen justify-around'>
       
        <div>

        {/* Title container */}
        <div>
            <p className='text-4xl font-bold max-w-xs '><span className='text-pink-500 block'>Powered</span>
            <span className='block'>By Intellect </span> Driven By Values</p>
        </div>

        {/* Buttons container */}

        <div className='flex gap-4  justify-start mt-4 '>
            
            <Link href={"/products"}>
                <Button title='Buy Now' />             
            </Link>
            <Link href={"/products"}>
                <button className='cursor-pointer text-lg font-medium underlineItem'>Learn More</button>
            </Link>
        </div>
        </div>

        {/* Image container */}
        <div className='relative hidden                h-[450px]  w-[450px] transition-all duration-500 md:grid lg:h-[550px] lg:w-[500px]  rounded-lg' >
            <Image src={'/products.jpg'} layout='fill' objectFit='contain' />
        </div>

    </section>
  )
}

export default Landing