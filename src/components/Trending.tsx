import React from 'react'
import Image from 'next/image'
import TrendingCard from './TrendingCard'
import { TrendingCards } from '@/constant/trendingcard'

export default function Trending() {
  return (
    <section className='w-full 2xl:w-[1920px] mx-auto mt-[129px] mb-[130px] '>
    {/* heading */}
    <div className="container mx-auto px-4 text-center mb-[60px] ">
      <h1 className='text-[24px] lg:text-[42px] font-bold text-[#1A0B5B] font-josefin-sans'>Trending Products</h1>
    </div>

     {/* card div */}
     <div className="container w-full mx-auto mb-[53px]">
    <div className='mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
    <TrendingCard loop={TrendingCards}/>
    </div>
    </div>
     
     {/* Trending bottom card */}
    <div className='container lg:mx-auto px-4 mt-[39px] flex lg:flex-row flex-col '>
        <div className='relative h-[270px] w-[300px] lg:w-[420px] lg:mr-[29px] '>
            <Image src="/tb1.png" alt="arrow" layout='fill' objectFit='cover'></Image>
        </div>

        <div className='relative h-[270px] w-[300px] lg:w-[420px] lg:mr-[24px]'>
            <Image src="/tb2.png" alt="arrow" layout='fill' objectFit='cover'></Image>
        </div>

        <div className='h-[270px] w-[267px] '>
            <div className='relative h-[74px] w-[267px] mb-[20px]'>
            <Image src="/tp1.png" alt="arrow" layout='fill' objectFit='cover'></Image>
            </div>

            <div className='relative h-[74px] w-[267px] mb-[20px]'>
            <Image src="/tp2.png" alt="arrow" layout='fill' objectFit='cover'></Image>
            </div>

            <div className='relative h-[74px] w-[267px] '>
            <Image src="/tp3.png" alt="arrow" layout='fill' objectFit='cover'></Image>
            </div>
        </div>
 
    </div>

    </section>
  )
}
