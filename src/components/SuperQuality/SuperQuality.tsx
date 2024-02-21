import { shoe8 } from "../../assets/images";
import Button from "../UI/Button/Button";

const SuperQuality = () => {
  return (
    <div className="max-container flex justify-between items-center max-lg:flex-col gap-10 w-full">
      <div className="flex flex-col flex-1" data-aos="fade-right">
        <h2 className="capitalize font-palanquin text-4xl font-bold lg:max-w-lg dark:text-white">
          We Provide You
          <span className="text-coral-red"> Super </span>
          <span className="text-coral-red">Quality </span> Shoes
          <br />
        </h2>
        <p className="mt-4 lg:max-w-lg info-text dark:text-slate-300">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text dark:text-slate-300">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>
      <div
        className="flex flex-1 justify-center items-center"
        data-aos="fade-left"
      >
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-cover dark:drop-shadow-[0px_0px_25px_#1c1c1c]"
        />
      </div>
    </div>
  );
};

export default SuperQuality;
