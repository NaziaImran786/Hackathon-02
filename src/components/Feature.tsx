import Image from "next/image";
import { FeatureCard } from "@/constant/featurecard";
import React from "react";
import { Card } from "./ui/card";

const ProductCard = ({ loop }: { loop: FeatureCard[] }) => {
  return (
    <>
    {loop.map((item, index) => {
        return (
    <Card className="relative w-[270px] h-[361px] bg-white shadow-lg hover:bg-[#2F1AC4]">
      key={index}
      
      {/* Product Image */}
      <div className="absolute w-full h-[236px] bg-[#F6F7FB] top-0 left-0 flex items-center justify-center">
        <Image
          src={item.src}
          alt="Cantilever chair"
          width={150}
          height={150}
          className="w-[150px] h-[150px] object-contain"
        />
      </div>

      {/* Product Name */}
      <div className="absolute top-[69.53%] left-[26.3%] right-[27.04%] text-[#FB2E86] font-lato font-bold text-[18px] text-center">
        {item.description}
      </div>

      {/* Color Options */}
      {item.div && (
          <div className="absolute top-[78.95%] left-[40.74%] flex space-x-2">
          <div className="w-[14px] h-2  bg-[#05E6B7]"></div>
          <div className="w-[14px] h-2  bg-[#F701A8]"></div>
          <div className="w-[14px] h-2  bg-[#00009D]"></div>
        </div>
      )}

      {/* Product Code */}
      <div className="absolute top-[83.38%] left-[25.07%] right-[25.26%] text-[#151875] font-josefin text-sm text-center">
        {item.code}
      </div>

      {/* Product Price */}
      <div className="absolute top-[90.58%] left-[42.59%] right-[41.11%] text-[#151875] font-lato text-sm text-center">
        {item.price}
      </div>
    </Card>
        );
      })}
    </>
  );
};

export default ProductCard;
