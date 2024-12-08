import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  originalPrice?: number;
  isNew?: boolean;
  isSale?: boolean;
};

const ProductCard = ({ product }: { product: Product }) => (
  <div key={product.id} className="group relative rounded-lg bg-white">
    <div className="relative aspect-square overflow-hidden rounded-lg">
      {product.isNew && (
        <Badge className="absolute left-3 top-3 bg-emerald-500 hover:bg-emerald-600">
          New
        </Badge>
      )}
      {product.isSale && (
        <Badge className="absolute left-3 top-3 bg-orange-500 hover:bg-orange-600">
          Sale
        </Badge>
      )}
      <Link href={`/product/${product.id}`}>
        <Image
          src={product.image}
          alt={product.title}
          height={400}
          width={400}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          aria-label={`View details of ${product.title}`}
        />
      </Link>
    </div>
    <div className="mt-4 flex items-center justify-between">
      <div>
        <h3 className="text-sm text-[#1C1B1F]">{product.title}</h3>
        <div className="mt-1 flex items-center gap-2">
          <span className="text-lg font-medium text-[#1C1B1F]">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
      </div>
      <button
        className="rounded-full bg-[#00B5A5] p-2 text-white transition-colors hover:bg-[#00A294]"
        aria-label={`Add ${product.title} to cart`}
      >
        <ShoppingCart className="h-5 w-5" />
      </button>
    </div>
  </div>
);

export default function AllProduct() {
  const products: Product[] = [
    {
      id: 1,
      title: "Library Stool Chair",
      price: 20,
      image: "/01.jpg",
      isNew: true,
    },
    {
      id: 2,
      title: "Library Stool Chair",
      price: 20,
      originalPrice: 30,
      image: "/02.jpg",
      isSale: true,
    },
    { id: 3, title: "Library Stool Chair", price: 20, image: "/03.jpg" },
    { id: 4, title: "Library Stool Chair", price: 20, image: "/04.jpg" },
    {
      id: 5,
      title: "Library Stool Chair",
      price: 20,
      image: "/05.jpg",
      isNew: true,
    },
    {
      id: 6,
      title: "Library Stool Chair",
      price: 20,
      originalPrice: 30,
      image: "/06.jpg",
      isSale: true,
    },
    { id: 7, title: "Library Stool Chair", price: 20, image: "/07.jpg" },
    { id: 8, title: "Library Stool Chair", price: 20, image: "/01.jpg" },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl text-center font-semibold text-[#1C1B1F] tracking-tight mb-8">
        Our Products
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}


















// import { Heart, Search, ShoppingCart } from 'lucide-react'
// import Image from "next/image"

// export default function ProductCard() {
//   return (
//     <div className="group relative w-[270px]">
//       {/* Product Image Container */}
//       <div className="relative aspect-[270/280] bg-[#F6F7FB] mb-5">
//         <Image
//           src="/placeholder.svg?height=280&width=270"
//           alt="Modern chair"
//           fill
//           className="object-contain p-8"
//         />
//         {/* Hover Actions */}
//         <div className="absolute left-3 top-1/2 -translate-y-1/2 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
//           <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
//             <ShoppingCart className="h-5 w-5" />
//           </button>
//           <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
//             <Heart className="h-5 w-5" />
//           </button>
//           <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
//             <Search className="h-5 w-5" />
//           </button>
//         </div>
//       </div>

//       {/* Product Info */}
//       <div className="text-center">
//         <h3 className="text-lg font-bold text-[#151875] mb-2">Vel elit euismod</h3>
        
//         {/* Color Options */}
//         <div className="flex justify-center gap-2 mb-3">
//           <div className="w-3 h-3 rounded-full bg-[#DE9034]" />
//           <div className="w-3 h-3 rounded-full bg-[#EC42A2]" />
//           <div className="w-3 h-3 rounded-full bg-[#8568FF]" />
//         </div>
        
//         {/* Prices */}
//         <div className="flex justify-center gap-3 text-sm">
//           <span className="text-[#151875]">$26.00</span>
//           <span className="text-[#FB2E86] line-through">$42.00</span>
//         </div>
//       </div>
//     </div>
//   )
// }

