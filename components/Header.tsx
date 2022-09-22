import React, { useEffect, useState } from 'react'
import Image from 'next/image'


const bannerUrl = "https://rb.gy/vsvv2o"

const Header: () => JSX.Element= () => {
    const [imageUrl, setImageUrl] = useState("")

    useEffect(()=> {
        setImageUrl(bannerUrl)
    },[])
    return (
        <div>
            <div className="relative w-8 h-10 cursor-pointer opacity-100 hover:opacity-80">
                <Image src={bannerUrl} layout="fill" objectFit="cover" alt='Header Image'/>
            </div>
            {/* <div><p>hello</p></div> */}
            
        </div>
    )
}

export default Header