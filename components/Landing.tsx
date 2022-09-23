import Link from 'next/link'
import React from 'react'

type Props = {}

const Landing = (props: Props) => {
  return (
    <section className='ml-4'>
        {/* Title container */}
        <div>
            <p className='text-4xl font-bold max-w-xs '><span className='text-pink-500 block'>Powered</span>
            <span className='block'>By Intellect </span> Driven By Values</p>
        </div>

        {/* Buttons container */}

        <div className='flex gap-4  justify-start mt-4 '>
            <Link href={"/products"}>
                <button className='
                bg-gradient-to-l
                to-pink-500 
                via-pink-500
                from-purple-500 text-white
                text-xs rounded-sm font-semibold
                px-4 py-2' >Buy Now</button>
            </Link>
            <Link href={"/products"}>
                <button className='text-sm font-medium'>Learn More</button>
            </Link>
        </div>

    </section>
  )
}

export default Landing