import React from 'react'

type Props = {
    title: string,
    onClick?: ()=> void;
    width?: string;
    loading?: boolean;
    padding?: string;
    noIcon?: boolean;
}

const Button = ({title}: Props) => {
  return (
       <button className='
                bg-gradient-to-l
                to-pink-500 
                via-pink-500
                from-purple-500 text-white
                text-xs rounded-sm font-semibold
                px-4 py-2' >{title}</button>
  )
}

export default Button