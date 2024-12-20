import Image from "next/image";
import React from "react";
import { Card } from "./ui/card";
import { LeatestCards } from "@/constant/leatestcard";

const LeatestCard = ({ loop }: { loop: LeatestCards[] }) => {
  return (
    <>
      {loop.map((item, index) => {
        return (
          <Card className="relative w-[300px] h-[325px] bg-[#F7F7F7] hover:bg-[#ffffff] shadow-lg" key={index}>
            
            <div className="bg-[#F7F7F7] hover:bg-[#ffffff] w-[360] h-[260px] absolute left-[19.19%] right-[19.19%] top-[14.44%] bottom-[3.25%] ">
              {/* Image goes here */}
              <Image
                src={item.src}
                alt="Cantilever chair"
                width={223}
                height={229}
                objectFit="cover"
                className="w-[267px] h-[277px] object-contain"
              ></Image>
            </div>

            {/* Title */}
            <div className="w-full bg-[#ffffff]">
            <div className="absolute left-[2%] right-[33.67%] bg-white top-[93.32%] bottom-[1.45%] text-[#151875] font-[Josefin Sans] text-[16px] leading-[19px]">
              {item.description}
            </div>

            {/* Price */}
            <div className="absolute left-[67.08%] right-[16.97%] top-[93.64%] bottom-[1.79%] bg-white text-[#151875] font-[Josefin Sans] text-[14px] leading-[16px]">
              {item.code}
            </div>

            {/* Old Price */}
            <div className="absolute left-[82.41%] right-[4.32%] top-[94.27%] bottom-[1.81%] bg-white text-[#FB2448] font-[Josefin Sans] text-[12px] leading-[14px] line-through">
              {item.price}
            </div>

            {/* Bottom border line */}
            <div className="absolute left-0 right-[57.3%] top-[99.69%] bottom-[0.31%] border-2 border-[#EEEFFB]"></div>
            
            {/* Sale Badge */}            
            {item.badge && (
              <div className="absolute left-[45px] top-[50.71px] bg-[#3F509E] text-[#EEEFFB] text-[14px] leading-[16px] rotate-[-18.12deg] px-2">
                {item.badge}
              </div>              
            )}
           </div>
          </Card>
        );
      })}
    </>
  );
};

export default LeatestCard;
