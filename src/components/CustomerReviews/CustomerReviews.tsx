import { reviews } from "../../constants";
import ReviewCard from "./sections/ReviewCard";

const CustomerReviews = () => {
  return (
    <div className="max-container">
      <div data-aos="fade-down">
        <h3 className="text-center font-palanquin text-4xl font-bold capitalize dark:text-white">
          what our <span className="text-coral-red"> customers </span> say ?
        </h3>
        <p className="info-text m-auto mt-4 max-w-lg text-center dark:text-slate-300">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>
      <div className="mt-24 flex flex-1 items-center justify-evenly gap-14 max-lg:flex-col">
        {reviews.map((review, i) => (
          <ReviewCard key={review.customerName} {...review} id={i} />
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
