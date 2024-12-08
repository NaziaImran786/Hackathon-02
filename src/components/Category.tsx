import React from "react";
import { CategoryCards } from "@/constant/categorycard";
import CategoryCard from "./CategoryCard";

function Category() {
  return (
    <>
      <section className="w-full 2xl:w-[1920px] mx-auto mt-[79px] mb-[58px] ">
        {/* heading */}
        <div className="container mx-auto px-4 text-center mb-[56px] ">
          <h1 className="text-[24px] lg:text-[42px] font-bold text-[#1A0B5B] font-josefin-sans">
            Top Categories
          </h1>
        </div>

        {/* card div */}
        <div className="container mx-auto px-4 mb-[125px]  ">
          <div className="mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <CategoryCard loop={CategoryCards} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Category;
