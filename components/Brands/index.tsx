import { Brand } from "@/types/brand";
import Image from "next/image";

const brandsData: Brand[] = [
  {
    id: 1,
    name: "Something",
    value : 290,
  },
  {
    id: 2,
    name: "Something",
    value : 290,
  },
  {
    id: 3,
    name: "Something",
    value : 290,
  },
  {
    id: 4,
    name: "Something",
    value : 290,
  },
  
];

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp flex flex-wrap items-center justify-center rounded-md bg-dark py-8 px-8 dark:bg-primary dark:bg-opacity-5 sm:px-10 md:py-[40px] md:px-[50px] xl:p-[50px] 2xl:py-[60px] 2xl:px-[70px]"
              data-wow-delay=".1s
              "
            >
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { value, name } = brand;

  return (
    <div
      // data-aos-duration={index*300}
      data-aos="fade-left"
      className="md:w-1/4 sm:w-1/2 flex justify-center items-center flex-col-reverse z-[1]"
    >
      <div
        className="Welcome-box py-[8px] px-[7px] rounded-2xl border border-[#f842428b] opacity-[0.9] mt-2"
      >
        <h1 className="Welcome-text text-[15px] mx-3 text-white">{name}</h1>
      </div>
      <div className="w-[150px] h-[150px] flex justify-center items-center rounded-full bg-gradient-to-r from-red-500 to-blue-500">
        <span className="font-large text-5xl text-white">
          {" "}
          {value}{"+"}
        </span>
      </div>
    </div>
  );
};
