import { reviews } from "../../constants";
import ReviewCard from "./sections/ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="capitalize font-palanquin text-center text-4xl font-bold dark:text-white">
        what our <span className="text-coral-red"> customers </span> say ?
      </h3>
      <p className="info-text m-auto text-center mt-4 max-w-lg dark:text-slate-300">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
