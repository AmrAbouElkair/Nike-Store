import { star } from "../../../assets/icons";

const ReviewCard: React.FC<{
  imgURL: string;
  customerName: string;
  rating: number;
  feedback: string;
  id: number;
}> = ({ imgURL, customerName, rating, feedback, id }) => {
  return (
    <div
      className="flex flex-1 flex-col justify-center items-center py-10 rounded-[20px] shadow dark:bg-neutral-900"
      data-aos={`${id === 1 ? "fade-left" : "fade-right"}`}
    >
      <img
        src={imgURL}
        alt={customerName}
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="mt-6 max-w-sm text-center info-text dark:text-slate-300">
        {feedback}
      </p>
      <div className="mt-3 flex justify-center items-center gap-2">
        <img
          src={star}
          alt="rating-star"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray dark:text-slate-300">
          ({rating})
        </p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl font-bold text-center dark:text-gray-200">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
