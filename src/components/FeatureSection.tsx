import React from 'react'
import Image from 'next/image'
import ProductCard from './Feature'
import { featureCards } from '@/constant/featurecard'

function FeatureSection() {
  return (
    < >
    <section className='w-full mt-[129px] '>
      <div className="container 2xl:w-[1920px] mx-auto px-4 text-center mb-[48px] ">
        <h1 className='text-[24px] lg:text-[42px] font-bold text-[#1A0B5B] font-josefin-sans'>Featured Products</h1>
    </div>

    {/* card div */}
    <div className="container w-full mx-auto px-4 mb-[53px]">
    <div className='mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
    <ProductCard loop={featureCards}/>
    </div>

    <div  className='flex justify-center mt-[53px] mx-auto'>
        <Image src="/f-slide.png" alt="arrow" width={91} height={4}></Image></div>
    </div>

    </section>
    </>  
  )
}

export default FeatureSection
