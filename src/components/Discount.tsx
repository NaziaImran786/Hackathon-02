import React from 'react'
import Image from 'next/image'

function Discount() {
  return (
    <>
    <section className='w-full 2xl:w-[1920px] mx-auto mt-[129px] mb-[58px] '>
      {/* heading */}
      <div className="container mx-auto px-4 text-center mb-[26px] ">
        <h1 className='text-[24px] lg:text-[42px] font-bold text-[#1A0B5B] font-josefin-sans'>Discount Item</h1>
    </div>
     
     {/* links */}
    <div className="min-w-[300px] min-h-[250px] lg:w-[1214px] h-[597px] ml-10 lg:mx-auto">
      <Image src="/d1.png" alt="arrow" width={1214} height={597} objectFit="contain"></Image>
    </div>
    </section>
      
    </>
  )
}

export default Discount
