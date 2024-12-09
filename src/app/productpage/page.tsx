import FilterSection from "@/components/FilterSection";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Vel elit euismod",
    price: "$26.00 ",
    prevPrice: "$42.00",
    img: "/g1.png",
  },
  {
    id: 2,
    name: "Ultricies condimentum imperdiet",
    price: "$26.00 ",
    prevPrice: "$42.00",
    img: "/g2.png",
  },
  {
    id: 3,
    name: "Vitae suspendisse sed",
    price: "$26.00 ",
    prevPrice: "$42.00",
    img: "/g3.png",
  },
  {
    id: 4,
    name: "Sed at fermentum",
    price: "$26.00 ",
    prevPrice: "$42.00",
    img: "/g4.png",
  },
  {
    id: 5,
    name: "Fusce pellentesque at",
    price: "$26.00 ",
    prevPrice: "$42.00",
    img: "/g5.png",
  },
  {
    id: 6,
    name: "Vestibulum magna laoreet",
    price: "$26.00 ",
    prevPrice: "$42.00",
    img: "/g6.png",
  },
  {
    id: 7,
    name: "Sollicitudin amet orci",
    price: "$26.00 ",
    prevPrice: "$42.00",
    img: "/g7.png",
  },
  {
    id: 8,
    name: "Ultrices mauris sit",
    price: "$26.00 ",
    prevPrice: "$42.00",
    img: "/g8.png",
  },
  {
    id: 9,
    name: "Pellentesque condimentum ac",
    price: "$26.00 ",
    prevPrice: "$42.00",
    img: "/g9.png",
  },
  {
    id: 10,
    name: "Lectus vulputate faucibus",
    price: "$26.00 ",
    prevPrice: "$42.00",
    img: "/g10.png",
  },
  {
    id: 11,
    name: "Purus risus, ut",
    price: "$26.00 ",
    prevPrice: "$42.00",
    img: "/g11.png",
  },
  {
    id: 4,
    name: "Sed at fermentum",
    price: "$26.00 ",
    prevPrice: "$42.00",
    img: "/g12.png",
  },
];
const Page = () => {
  return (
    <main className="mt-10">
      <FilterSection
        textTitle={"Shop Grid Default"}
        textNavigation={"Home . Pages . "}
        pageName={"Shop Grid Default"}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 place-self-center mx-10 mt-16">
        {products.map((item, index) => (
          <Link href={`/${item.id}`} key={index}>
            <div className="bg-slate-100 w-[270px] h-[280px] flex justify-center items-center">
              <Image
                src={item.img}
                alt={item.name}
                width={201}
                height={201}
                className="w-auto h-auto"
              />
            </div>
            <div className="flex justify-center items-center flex-col">
              <h1 className="text-lg text-center font-bold text-1 text-indigo-950 mt-4">
                {item.name}
              </h1>
              <Image
                src={"/sl2.png"}
                alt="pagination-img"
                width={42}
                height={10}
                className="mt-2"
              />
              <div className="flex justify-center gap-x-3 mt-3 text-1 text-sm">
                <p className="text-indigo-900">{item.price}</p>
                <p className="text-red-600 line-through">{item.prevPrice}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center items-center mt-14">
        <Image
          src={"/sl7.png"}
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

