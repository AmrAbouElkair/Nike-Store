import { arrowRight } from "../../assets/icons";
import { offer } from "../../assets/images";
import Button from "../UI/Button/Button";

const SpecialOffer = () => {
  return (
    <div className="max-container flex justify-center items-center max-xl:flex-col-reverse gap-10">
      <div className="flex-1" data-aos="fade-right">
        <img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="object-cover w-full"
        />
      </div>
      <div className="flex flex-col flex-1" data-aos="fade-left">
        <h2 className="capitalize font-palanquin text-4xl font-bold lg:max-w-lg dark:text-white">
          <span className="text-coral-red">special</span> offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text dark:text-slate-300">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text dark:text-slate-300">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate=gray"
          />
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
