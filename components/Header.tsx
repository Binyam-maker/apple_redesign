import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {HiOutlineSearch, HiOutlineShoppingCart} from 'react-icons/hi'
import {FiUser} from 'react-icons/fi'


const bannerUrl = "https://rb.gy/vsvv2o"

const links = [{name:"Products", link: '/products'},{name: "Explore", link: '/explore'}, {name:"Support", link: "/support"}, {name:"Business", link: '/business'}]

const Header: () => JSX.Element= () => {
    const [imageUrl, setImageUrl] = useState("")

    useEffect(()=> {
        setImageUrl(bannerUrl)
    },[])
    return (
        <div className='sticky top-0 z-30  flex items-center  w-full  bg-[#E7ECEE] pr-3 justify-between'> 

            {/* Logo container */}
            <div className="flex items-center justify-center md:w-1/5 bg-white">
            <Link href={'/'}> 
            <div className="relative w-6 h-12 mx-4 cursor-pointer opacity-100 hover:opacity-80  ">
                <Image src={bannerUrl} layout="fill" objectFit="contain" alt='Header Image'/>
            </div>
            </Link>
            </div>

            {/* Links container */}
            <ul className='hidden justify-center flex-1 space-x-8 md:flex md:visible gap-4 '>
                {links.map((item) => <Link key={item.name} href={item.link}>{item.name}</Link>)}
            </ul>

            {/* Icons container */}
            <div className='flex justify-center item-center gap-4 md:w-1/5 '>

            {/* Search */}
            <div >
                <HiOutlineSearch className='headerIcon'/>
            </div>
            
            {/* Cart */}
            <Link href={'/checkout'}>
            <div className='relative'>
                <HiOutlineShoppingCart
                className='headerIcon'/>
                <span className='absolute -right-1 -top-2 text-xs bg-gradient-to-l from-pink-500 to-purple-500  w-4 h-4 rounded-full text-center  text-white'>3</span>
            </div>
                </Link>
                  {/* Cart */}
            <Link href={'/profile'}>
            <div className='rounded-full '>
                <FiUser className='headerIcon'/>
                 {/* <Image src={bannerUrl} layout="fill" objectFit="contain" alt='Profile Image'/> */}
              
            </div>
                </Link>
            </div>
        
        </div>
           
    )
}

export default Header