import FilterSection from "@/components/FilterSection";
import { Heart, ShoppingCart, ZoomIn, Star } from "lucide-react";
import Image from "next/image";

const products = [
  {
    img: "/sl1.png",
    name: "Accumsan tincidunt",
    price: "$26.00",
    prevPrice: "$52.00",
    star: 4,
    emptyStar: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    cart: <ShoppingCart size={20} className="text-gray-500" />,
    heart: <Heart size={20} className="text-gray-500" />,
    zoom: <ZoomIn size={20} className="text-gray-500" />,
  },
  {
    img: "/sl2.png",
    name: "In nulla",
    price: "$26.00",
    prevPrice: "$52.00",
    star: 4,
    emptyStar: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    cart: <ShoppingCart size={20} className="text-gray-500" />,
    heart: <Heart size={20} className="text-gray-500" />,
    zoom: <ZoomIn size={20} className="text-gray-500" />,
  },
  {
    img: "/sl3.png",
    name: "Vel sem",
    price: "$26.00",
    prevPrice: "$52.00",
    star: 4,
    emptyStar: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    cart: <ShoppingCart size={20} className="text-gray-500" />,
    heart: <Heart size={20} className="text-gray-500" />,
    zoom: <ZoomIn size={20} className="text-gray-500" />,
  },
  {
    img: "/sl4.png",
    name: "Portitor cum",
    price: "$26.00",
    prevPrice: "$52.00",
    star: 4,
    emptyStar: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    cart: <ShoppingCart size={20} className="text-gray-500" />,
    heart: <Heart size={20} className="text-gray-500" />,
    zoom: <ZoomIn size={20} className="text-gray-500" />,
  },
  {
    img: "/sl5.png",
    name: "Nunc in",
    price: "$26.00",
    prevPrice: "$52.00",
    star: 4,
    emptyStar: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    cart: <ShoppingCart size={20} className="text-gray-500" />,
    heart: <Heart size={20} className="text-gray-500" />,
    zoom: <ZoomIn size={20} className="text-gray-500" />,
  },
  {
    img: "/sl6.png",
    name: "Vitae facilisis",
    price: "$26.00",
    prevPrice: "$52.00",
    star: 4,
    emptyStar: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    cart: <ShoppingCart size={20} className="text-gray-500" />,
    heart: <Heart size={20} className="text-gray-500" />,
    zoom: <ZoomIn size={20} className="text-gray-500" />,
  },
  {
    img: "/sl7.png",
    name: "Curabitur lectus",
    price: "$26.00",
    prevPrice: "$52.00",
    star: 4,
    emptyStar: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    cart: <ShoppingCart size={20} className="text-gray-500" />,
    heart: <Heart size={20} className="text-gray-500" />,
    zoom: <ZoomIn size={20} className="text-gray-500" />,
  },
];

const Page = () => {
  return (
    <main className="mt-10 overflow-hidden">
      <FilterSection
        textTitle={"Shop Products"}
        textNavigation={"Home . "}
        pageName={"Shop Products"}
      />
      <div className="space-y-10 mt-20">
        {products.map((item, index) => (
          <div
            className="flex justify-start gap-y-14 gap-x-8 items-center lg:ml-24 cursor-pointer hover:scale-110 transition-all lg:flex-row flex-col"
            key={index}
          >
            <div>
              <Image
                src={item.img}
                alt={item.name}
                width={314}
                height={218}
                className="w-auto h-auto"
              />
            </div>
            <div className="lg:w-[550px] w-full flex justify-center lg:block items-center flex-col">
              <div className="flex items-center gap-x-4">
                <h1 className="text-1 font-bold text-[19px] text-indigo-900">
                  {item.name}
                </h1>
                <div>
                  <Image
                    src={"/pagesPage/pagination.png"}
                    alt="pagination"
                    width={42}
                    height={10}
                    className="w-auto h-auto"
                  />
                </div>
              </div>
              <div className="flex items-center gap-x-4">
                <p className="text-1 text-indigo-900">{item.price}</p>
                <p className="text-red-500 text-1 line-through">
                  {item.prevPrice}
                </p>
                <div className="flex gap-x-1 items-center mb-1">
                  {Array.from({ length: item.star }).map((_, i) => (
                    <Star
                      key={`star-${index}-${i}`}
                      size={12}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                  {Array.from({ length: item.emptyStar }).map((_, i) => (
                    <Star
                      key={`emptyStar-${index}-${i}`}
                      size={12}
                      className="text-gray-400 fill-gray-400"
                    />
                  ))}
                </div>
              </div>
              <p className="lato text-gray-400 text-center lg:text-start text-lg my-4">
                {item.text}
              </p>
              <div className="flex gap-x-16 mt-8">
                {item.cart}
                {item.heart}
                {item.zoom}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-14">
        <Image
          src={"/topProduct/brands.png"}
          alt="brands-img"
          width={904}
          height={93}
          className="cursor-pointer"
        />
      </div>
    </main>
  );
};

export default Page;








// import React from "react";
// import Image from "next/image";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
// import { Grid2X2, Heart, List, Search, ShoppingCart } from "lucide-react";
// import { Card } from "@/components/ui/card";

// export default function Product() {
//   return (
//     <section>
//       <div className="w-full px-[40px] md:pl-[120px] h-[286px] bg-[#F6F5FF] ">
//         {/* Banner content can be added here */}

//         <div className="w-[314px] pt-[106px] ">
//           <h1 className="text-[36px] leading-[42px] font-['Josefin_Sans'] text-[#101750] text-center mb-2">
//             Shop Grid Default
//           </h1>

//           <div className="flex items-center justify-center gap-1 text-base font-medium font-['Lato']">
//             <span className="text-black">Home</span>
//             <span className="text-black">.</span>
//             <span className="text-black">Pages</span>
//             <span className="text-black">.</span>
//             <span className="text-[#FB2E86]">Shop Grid Default</span>
//           </div>
//         </div>
//       </div>

//       <div className="container w-[95%] 2xl:w-[1920px] mx-auto mt-[124px] mb-[144]">
//         <div className="w-full max-w-[1171px] mx-auto py-4 flex items-center justify-between ">
//           <div className="space-y-2">
//             <h1 className="text-[22px] leading-[26px] text-[#151875] font-['Josefin_Sans']">
//               Ecommerce Acceories & Fashion item
//             </h1>
//             <p className="text-xs text-[#8A8FB9]">
//               About 9,620 results (0.62 seconds)
//             </p>
//           </div>

//           <div className="flex items-center justify-end gap-6 mt-4">
//             <div className="flex items-center gap-2">
//               <span className="text-[#3F509E]">Per Page:</span>
//               <Select defaultValue="10">
//                 <SelectTrigger className="w-[100px] border-[#E7E6EF]">
//                   <SelectValue placeholder="Select" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="10">10</SelectItem>
//                   <SelectItem value="20">20</SelectItem>
//                   <SelectItem value="50">50</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>

//             <div className="flex items-center gap-2">
//               <span className="text-[#3F509E]">Sort By:</span>
//               <Select defaultValue="best-match">
//                 <SelectTrigger className="w-[120px] border-[#E7E6EF]">
//                   <SelectValue placeholder="Select" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="best-match">Best Match</SelectItem>
//                   <SelectItem value="price-low">Price: Low to High</SelectItem>
//                   <SelectItem value="price-high">Price: High to Low</SelectItem>
//                   <SelectItem value="newest">Newest First</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>

//             <div className="flex items-center gap-2">
//               <span className="text-[#3F509E]">View:</span>
//               <ToggleGroup type="single" defaultValue="grid">
//                 <ToggleGroupItem value="grid" aria-label="Grid view">
//                   <Grid2X2 className="h-4 w-4 text-[#151875]" />
//                 </ToggleGroupItem>
//                 <ToggleGroupItem value="list" aria-label="List view">
//                   <List className="h-4 w-4 text-[#151875]" />
//                 </ToggleGroupItem>
//               </ToggleGroup>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 mb-[125px]  ">
//         <div className="mx-auto grid grid-cols-1 gap-10 ">
//           <Card className="group relative w-[270px]">
//             {/* Product Image Container */}
//             <div className="relative aspect-[270/280] bg-[#F6F7FB] mb-5">
//               <Image
//                 src="/g1.png"
//                 alt="Modern chair"
//                 fill
//                 className="object-contain p-8"
//               />
//               {/* Hover Actions */}
//               <div className="absolute left-3 top-1/2 -translate-y-1/2 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
//                 <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
//                   <ShoppingCart className="h-5 w-5" />
//                 </button>
//                 <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
//                   <Heart className="h-5 w-5" />
//                 </button>
//                 <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
//                   <Search className="h-5 w-5" />
//                 </button>
//               </div>
//             </div>

//             {/* Product Info */}
//             <div className="text-center">
//               <h3 className="text-lg font-bold text-[#151875] mb-2">
//                 Vel elit euismod
//               </h3>

//               {/* Color Options */}
//               <div className="flex justify-center gap-2 mb-3">
//                 <div className="w-3 h-3 rounded-full bg-[#DE9034]" />
//                 <div className="w-3 h-3 rounded-full bg-[#EC42A2]" />
//                 <div className="w-3 h-3 rounded-full bg-[#8568FF]" />
//               </div>

//               {/* Prices */}
//               <div className="flex justify-center gap-3 text-sm">
//                 <span className="text-[#151875]">$26.00</span>
//                 <span className="text-[#FB2E86] line-through">$42.00</span>
//               </div>
//             </div>
//           </Card>

//           <Card className="group relative w-[270px]">
//             {/* Product Image Container */}
//             <div className="relative aspect-[270/280] bg-[#F6F7FB] mb-5">
//               <Image
//                 src="/g1.png"
//                 alt="Modern chair"
//                 fill
//                 className="object-contain p-8"
//               />
//               {/* Hover Actions */}
//               <div className="absolute left-3 top-1/2 -translate-y-1/2 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
//                 <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
//                   <ShoppingCart className="h-5 w-5" />
//                 </button>
//                 <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
//                   <Heart className="h-5 w-5" />
//                 </button>
//                 <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
//                   <Search className="h-5 w-5" />
//                 </button>
//               </div>
//             </div>

//             {/* Product Info */}
//             <div className="text-center">
//               <h3 className="text-lg font-bold text-[#151875] mb-2">
//                 Vel elit euismod
//               </h3>

//               {/* Color Options */}
//               <div className="flex justify-center gap-2 mb-3">
//                 <div className="w-3 h-3 rounded-full bg-[#DE9034]" />
//                 <div className="w-3 h-3 rounded-full bg-[#EC42A2]" />
//                 <div className="w-3 h-3 rounded-full bg-[#8568FF]" />
//               </div>

//               {/* Prices */}
//               <div className="flex justify-center gap-3 text-sm">
//                 <span className="text-[#151875]">$26.00</span>
//                 <span className="text-[#FB2E86] line-through">$42.00</span>
//               </div>
//             </div>
//           </Card>

//           <Card className="group relative w-[250px]">
//             {/* Product Image Container */}
//             <div className="relative aspect-[270/280] bg-[#F6F7FB] mb-5">
//               <Image
//                 src="/g3.png"
//                 alt="Modern chair"
//                 fill
//                 className="object-contain p-8"
//               />
//               {/* Hover Actions */}
//               <div className="absolute left-3 top-1/2 -translate-y-1/2 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
//                 <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
//                   <ShoppingCart className="h-5 w-5" />
//                 </button>
//                 <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
//                   <Heart className="h-5 w-5" />
//                 </button>
//                 <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
//                   <Search className="h-5 w-5" />
//                 </button>
//               </div>
//             </div>

//             {/* Product Info */}
//             <div className="text-center">
//               <h3 className="text-lg font-bold text-[#151875] mb-2">
//                 Vel elit euismod
//               </h3>

//               {/* Color Options */}
//               <div className="flex justify-center gap-2 mb-3">
//                 <div className="w-3 h-3 rounded-full bg-[#DE9034]" />
//                 <div className="w-3 h-3 rounded-full bg-[#EC42A2]" />
//                 <div className="w-3 h-3 rounded-full bg-[#8568FF]" />
//               </div>

//               {/* Prices */}
//               <div className="flex justify-center gap-3 text-sm">
//                 <span className="text-[#151875]">$26.00</span>
//                 <span className="text-[#FB2E86] line-through">$42.00</span>
//               </div>
//             </div>
//           </Card>

//           <Card className="group relative w-[250px]">
//             {/* Product Image Container */}
//             <div className="relative aspect-[270/280] bg-[#F6F7FB] mb-5">
//               <Image
//                 src="/g4.png"
//                 alt="Modern chair"
//                 fill
//                 className="object-contain p-8"
//               />
//               {/* Hover Actions */}
//               <div className="absolute left-3 top-1/2 -translate-y-1/2 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
//                 <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
//                   <ShoppingCart className="h-5 w-5" />
//                 </button>
//                 <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
//                   <Heart className="h-5 w-5" />
//                 </button>
//                 <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
//                   <Search className="h-5 w-5" />
//                 </button>
//               </div>
//             </div>

//             {/* Product Info */}
//             <div className="text-center">
//               <h3 className="text-lg font-bold text-[#151875] mb-2">
//                 Vel elit euismod
//               </h3>

//               {/* Color Options */}
//               <div className="flex justify-center gap-2 mb-3">
//                 <div className="w-3 h-3 rounded-full bg-[#DE9034]" />
//                 <div className="w-3 h-3 rounded-full bg-[#EC42A2]" />
//                 <div className="w-3 h-3 rounded-full bg-[#8568FF]" />
//               </div>

//               {/* Prices */}
//               <div className="flex justify-center gap-3 text-sm">
//                 <span className="text-[#151875]">$26.00</span>
//                 <span className="text-[#FB2E86] line-through">$42.00</span>
//               </div>
//             </div>
//           </Card>

//           <Card className="group relative w-[250px]">
//             {/* Product Image Container */}
//             <div className="relative aspect-[270/280] bg-[#F6F7FB] mb-5">
//               <Image
//                 src="/g5.png"
//                 alt="Modern chair"
//                 fill
//                 className="object-contain p-8"
//               />
//               {/* Hover Actions */}
//               <div className="absolute left-3 top-1/2 -translate-y-1/2 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
//                 <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
//                   <ShoppingCart className="h-5 w-5" />
//                 </button>
//                 <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
//                   <Heart className="h-5 w-5" />
//                 </button>
//                 <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
//                   <Search className="h-5 w-5" />
//                 </button>
//               </div>
//             </div>

//             {/* Product Info */}
//             <div className="text-center">
//               <h3 className="text-lg font-bold text-[#151875] mb-2">
//                 Vel elit euismod
//               </h3>

//               {/* Color Options */}
//               <div className="flex justify-center gap-2 mb-3">
//                 <div className="w-3 h-3 rounded-full bg-[#DE9034]" />
//                 <div className="w-3 h-3 rounded-full bg-[#EC42A2]" />
//                 <div className="w-3 h-3 rounded-full bg-[#8568FF]" />
//               </div>

//               {/* Prices */}
//               <div className="flex justify-center gap-3 text-sm">
//                 <span className="text-[#151875]">$26.00</span>
//                 <span className="text-[#FB2E86] line-through">$42.00</span>
//               </div>
//             </div>
//           </Card>

//           <Card className="group relative w-[250px]">
//             {/* Product Image Container */}
//             <div className="relative aspect-[270/280] bg-[#F6F7FB] mb-5">
//               <Image
//                 src="/g6.png"
//                 alt="Modern chair"
//                 fill
//                 className="object-contain p-8"
//               />
//               {/* Hover Actions */}
//               <div className="absolute left-3 top-1/2 -translate-y-1/2 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
//                 <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
//                   <ShoppingCart className="h-5 w-5" />
//                 </button>
//                 <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
//                   <Heart className="h-5 w-5" />
//                 </button>
//                 <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
//                   <Search className="h-5 w-5" />
//                 </button>
//               </div>
//             </div>

//             {/* Product Info */}
//             <div className="text-center">
//               <h3 className="text-lg font-bold text-[#151875] mb-2">
//                 Vel elit euismod
//               </h3>

//               {/* Color Options */}
//               <div className="flex justify-center gap-2 mb-3">
//                 <div className="w-3 h-3 rounded-full bg-[#DE9034]" />
//                 <div className="w-3 h-3 rounded-full bg-[#EC42A2]" />
//                 <div className="w-3 h-3 rounded-full bg-[#8568FF]" />
//               </div>

//               {/* Prices */}
//               <div className="flex justify-center gap-3 text-sm">
//                 <span className="text-[#151875]">$26.00</span>
//                 <span className="text-[#FB2E86] line-through">$42.00</span>
//               </div>
//             </div>
//           </Card>

//           <Card className="group relative w-[250px]">
//             {/* Product Image Container */}
//             <div className="relative aspect-[270/280] bg-[#F6F7FB] mb-5">
//               <Image
//                 src="/g7.png"
//                 alt="Modern chair"
//                 fill
//                 className="object-contain p-8"
//               />
//               {/* Hover Actions */}
//               <div className="absolute left-3 top-1/2 -translate-y-1/2 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
//                 <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
//                   <ShoppingCart className="h-5 w-5" />
//                 </button>
//                 <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
//                   <Heart className="h-5 w-5" />
//                 </button>
//                 <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
//                   <Search className="h-5 w-5" />
//                 </button>
//               </div>
//             </div>

//             {/* Product Info */}
//             <div className="text-center">
//               <h3 className="text-lg font-bold text-[#151875] mb-2">
//                 Vel elit euismod
//               </h3>

//               {/* Color Options */}
//               <div className="flex justify-center gap-2 mb-3">
//                 <div className="w-3 h-3 rounded-full bg-[#DE9034]" />
//                 <div className="w-3 h-3 rounded-full bg-[#EC42A2]" />
//                 <div className="w-3 h-3 rounded-full bg-[#8568FF]" />
//               </div>

//               {/* Prices */}
//               <div className="flex justify-center gap-3 text-sm">
//                 <span className="text-[#151875]">$26.00</span>
//                 <span className="text-[#FB2E86] line-through">$42.00</span>
//               </div>
//             </div>
//           </Card>

//           <Card className="group relative w-[250px]">
//             {/* Product Image Container */}
//             <div className="relative aspect-[270/280] bg-[#F6F7FB] mb-5">
//               <Image
//                 src="/g8.png"
//                 alt="Modern chair"
//                 fill
//                 className="object-contain p-8"
//               />
//               {/* Hover Actions */}
//               <div className="absolute left-3 top-1/2 -translate-y-1/2 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
//                 <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
//                   <ShoppingCart className="h-5 w-5" />
//                 </button>
//                 <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
//                   <Heart className="h-5 w-5" />
//                 </button>
//                 <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
//                   <Search className="h-5 w-5" />
//                 </button>
//               </div>
//             </div>

//             {/* Product Info */}
//             <div className="text-center">
//               <h3 className="text-lg font-bold text-[#151875] mb-2">
//                 Vel elit euismod
//               </h3>

//               {/* Color Options */}
//               <div className="flex justify-center gap-2 mb-3">
//                 <div className="w-3 h-3 rounded-full bg-[#DE9034]" />
//                 <div className="w-3 h-3 rounded-full bg-[#EC42A2]" />
//                 <div className="w-3 h-3 rounded-full bg-[#8568FF]" />
//               </div>

//               {/* Prices */}
//               <div className="flex justify-center gap-3 text-sm">
//                 <span className="text-[#151875]">$26.00</span>
//                 <span className="text-[#FB2E86] line-through">$42.00</span>
//               </div>
//             </div>
//           </Card>

//           <Card className="group relative w-[250px]">
//             {/* Product Image Container */}
//             <div className="relative aspect-[270/280] bg-[#F6F7FB] mb-5">
//               <Image
//                 src="/g9.png"
//                 alt="Modern chair"
//                 fill
//                 className="object-contain p-8"
//               />
//               {/* Hover Actions */}
//               <div className="absolute left-3 top-1/2 -translate-y-1/2 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
//                 <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
//                   <ShoppingCart className="h-5 w-5" />
//                 </button>
//                 <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
//                   <Heart className="h-5 w-5" />
//                 </button>
//                 <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
//                   <Search className="h-5 w-5" />
//                 </button>
//               </div>
//             </div>

//             {/* Product Info */}
//             <div className="text-center">
//               <h3 className="text-lg font-bold text-[#151875] mb-2">
//                 Vel elit euismod
//               </h3>

//               {/* Color Options */}
//               <div className="flex justify-center gap-2 mb-3">
//                 <div className="w-3 h-3 rounded-full bg-[#DE9034]" />
//                 <div className="w-3 h-3 rounded-full bg-[#EC42A2]" />
//                 <div className="w-3 h-3 rounded-full bg-[#8568FF]" />
//               </div>

//               {/* Prices */}
//               <div className="flex justify-center gap-3 text-sm">
//                 <span className="text-[#151875]">$26.00</span>
//                 <span className="text-[#FB2E86] line-through">$42.00</span>
//               </div>
//             </div>
//           </Card>

//           <Card className="group relative w-[250px]">
//             {/* Product Image Container */}
//             <div className="relative aspect-[270/280] bg-[#F6F7FB] mb-5">
//               <Image
//                 src="/g10.png"
//                 alt="Modern chair"
//                 fill
//                 className="object-contain p-8"
//               />
//               {/* Hover Actions */}
//               <div className="absolute left-3 top-1/2 -translate-y-1/2 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
//                 <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
//                   <ShoppingCart className="h-5 w-5" />
//                 </button>
//                 <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
//                   <Heart className="h-5 w-5" />
//                 </button>
//                 <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
//                   <Search className="h-5 w-5" />
//                 </button>
//               </div>
//             </div>

//             {/* Product Info */}
//             <div className="text-center">
//               <h3 className="text-lg font-bold text-[#151875] mb-2">
//                 Vel elit euismod
//               </h3>

//               {/* Color Options */}
//               <div className="flex justify-center gap-2 mb-3">
//                 <div className="w-3 h-3 rounded-full bg-[#DE9034]" />
//                 <div className="w-3 h-3 rounded-full bg-[#EC42A2]" />
//                 <div className="w-3 h-3 rounded-full bg-[#8568FF]" />
//               </div>

//               {/* Prices */}
//               <div className="flex justify-center gap-3 text-sm">
//                 <span className="text-[#151875]">$26.00</span>
//                 <span className="text-[#FB2E86] line-through">$42.00</span>
//               </div>
//             </div>
//           </Card>


//           <Card className="group relative w-[250px]">
//             {/* Product Image Container */}
//             <div className="relative aspect-[270/280] bg-[#F6F7FB] mb-5">
//               <Image
//                 src="/g11.png"
//                 alt="Modern chair"
//                 fill
//                 className="object-contain p-8"
//               />
//               {/* Hover Actions */}
//               <div className="absolute left-3 top-1/2 -translate-y-1/2 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
//                 <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
//                   <ShoppingCart className="h-5 w-5" />
//                 </button>
//                 <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
//                   <Heart className="h-5 w-5" />
//                 </button>
//                 <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
//                   <Search className="h-5 w-5" />
//                 </button>
//               </div>
//             </div>

//             {/* Product Info */}
//             <div className="text-center">
//               <h3 className="text-lg font-bold text-[#151875] mb-2">
//                 Vel elit euismod
//               </h3>

//               {/* Color Options */}
//               <div className="flex justify-center gap-2 mb-3">
//                 <div className="w-3 h-3 rounded-full bg-[#DE9034]" />
//                 <div className="w-3 h-3 rounded-full bg-[#EC42A2]" />
//                 <div className="w-3 h-3 rounded-full bg-[#8568FF]" />
//               </div>

//               {/* Prices */}
//               <div className="flex justify-center gap-3 text-sm">
//                 <span className="text-[#151875]">$26.00</span>
//                 <span className="text-[#FB2E86] line-through">$42.00</span>
//               </div>
//             </div>
//           </Card>

//           <Card className="group relative w-[250px]">
//             {/* Product Image Container */}
//             <div className="relative aspect-[270/280] bg-[#F6F7FB] mb-5">
//               <Image
//                 src="/g12.png"
//                 alt="Modern chair"
//                 fill
//                 className="object-contain p-8"
//               />
//               {/* Hover Actions */}
//               <div className="absolute left-3 top-1/2 -translate-y-1/2 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
//                 <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
//                   <ShoppingCart className="h-5 w-5" />
//                 </button>
//                 <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
//                   <Heart className="h-5 w-5" />
//                 </button>
//                 <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
//                   <Search className="h-5 w-5" />
//                 </button>
//               </div>
//             </div>

//             {/* Product Info */}
//             <div className="text-center">
//               <h3 className="text-lg font-bold text-[#151875] mb-2">
//                 Vel elit euismod
//               </h3>

//               {/* Color Options */}
//               <div className="flex justify-center gap-2 mb-3">
//                 <div className="w-3 h-3 rounded-full bg-[#DE9034]" />
//                 <div className="w-3 h-3 rounded-full bg-[#EC42A2]" />
//                 <div className="w-3 h-3 rounded-full bg-[#8568FF]" />
//               </div>

//               {/* Prices */}
//               <div className="flex justify-center gap-3 text-sm">
//                 <span className="text-[#151875]">$26.00</span>
//                 <span className="text-[#FB2E86] line-through">$42.00</span>
//               </div>
//             </div>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// }
