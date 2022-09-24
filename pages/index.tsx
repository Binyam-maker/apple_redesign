import { Tab } from '@headlessui/react'
import type { GetStaticProps, NextPage, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
import Landing from '../components/Landing'
import loadCategories from '../libs/loadCategories'

interface Props {
  categories: Category[]
}

const Home = ({categories}:  InferGetStaticPropsType<typeof getStaticProps>) => {

  // let categories: {id: string, title: string}[]=[]
  return (
    <div className="">
      <Head>
        <title>Apple</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header component */}
      <Header />      
  
      <main className=" w-screen  relative h-[200vh] bg-[#E7ECEE] ">     
      
      {/*Landing component  */}
      <Landing/>
      </main>
      <section className='relative z-40 -mt-[100vh]   min-h-screen bg-[#1B1B1B]'>
        <div className='space-y-10 py-16'>

        <h1 className='text-center text-4xl font-medium tracking-wide text-white md:text-5xl'>New Promos</h1>
        <Tab.Group>
          <Tab.List>
            {categories.map((category) => {
              return <Tab
              key={category._id}
              id={category._id}
              className={({selected}) => ` rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${
                selected ? 'borderGradient bg-[#35383C] text-white' : 'border-b-2 border-[#35383C] text-[#47474]'
              }`}>
                {category.title}
              </Tab>
            })}
          </Tab.List>
          <Tab.Panels className={'mx-auto max-w-fit pt-10 pb-24 sm:px-4'}>
            <Tab.Panel className={"tabPanel"}></Tab.Panel>
            <Tab.Panel className={"tabPanel"}></Tab.Panel>
            <Tab.Panel className={"tabPanel"}></Tab.Panel>
            <Tab.Panel className={"tabPanel"}></Tab.Panel>

          </Tab.Panels>
        </Tab.Group>
        </div>

      </section>
      

     
    </div>
  )
}



export default Home


// Server Side
  export const getStaticProps: GetStaticProps<Props> = async() => {


  const categories= await loadCategories()

  return {
    props:{
      categories: categories
    }
  }
}