import { star } from "../../../assets/icons";

const PopularProductCard: React.FC<{
  imgURL: string;
  name: string;
  price: string;
}> = ({ imgURL, name, price }) => {
  return (
    <div
      className="flex flex-col w-full dark:drop-shadow-[12px_12px_40px_#1c1c1c]"
      data-aos="fade-up"
    >
      <img src={imgURL} alt={name} />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating-star" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray dark:text-slate-300">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin dark:text-gray-300">
        {name}
      </h3>
      <p className="mt-2 font-montserrat text-coral-red text-2xl leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
