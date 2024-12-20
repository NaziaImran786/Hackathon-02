import React from 'react';
import Image from 'next/image';

function Hero() {
  return (
    <div className="w-full">
      {/* Relative container for the hero image */}
      <div className="relative w-full 2xl:w-[1920px] mx-auto min-h-[300px] lg:h-[764px]">
        {/* Background promotional image */}
        <Image 
          src="/promotional.png" 
          alt="hero" 
          layout='fill' 
          objectFit=''
        />
     </div>
    </div>
  );
}

export default Hero;
