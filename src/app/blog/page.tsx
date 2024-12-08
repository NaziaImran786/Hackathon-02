import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <div className=' w-full container mx-auto px-4'>
      <div className='flex items-center justify-center'>
        <Image src="/error.png" alt="blog" width={913} height={677}></Image>
      </div>
    </div>
  )
}

export default page
