import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
import Landing from '../components/Landing'

const Home: NextPage = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center py-2 overflow-hidden">
      <Head>
        <title>Apple</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <main className=" container grid place-items-start w-screen h-screen overflow-hidden p-2"> 
       {/* header component */}
      <Header /> 
      {/*Landing component  */}
      <Landing/>
      </main>
      

     
    </div>
  )
}

export default Home
