import { useState } from "react";

import { arrowRight } from "../../assets/icons";
import Button from "../UI/Button/Button";
import { shoes, statistics } from "../../constants";
import { bigShoe1 } from "../../assets/images";
import ShoeCard from "./sections/ShoeCard";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <div className="w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 ">
        <p className="capitalize text-xl font-montserrat text-coral-red">
          our summer collection
        </p>
        <h1 className="capitalize mt-10 font-palanquin text-8xl max-sm:text-[72px] font-bold dark:text-white">
          <span className="xl:bg-white dark:xl:bg-black rounded-3xl xl:whitespace-nowrap relative z-10 pr-10">
            the new arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3 dark:text-coral-red">
            nike
          </span>{" "}
          shoes
        </h1>
        <p className="font-montserrat text-slate-gray dark:text-slate-300 text-lg leading-8 mt-6 mb-14 sm:max-w-max">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className="flex justify-start items-start gap-16 flex-wrap w-full mt-20">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold dark:text-coral-red">
                {stat.value}
              </p>
              <p className="font-montserrat leading-7 text-slate-gray dark:text-slate-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex flex-1 justify-center items-center bg-center bg-primary bg-hero bg-cover xl:min-h-screen max-xl:py-40 mt-[100px] rounded-lg">
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-cover relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-10 max-sm:px-6">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
