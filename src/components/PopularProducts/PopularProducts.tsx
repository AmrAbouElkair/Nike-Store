import { products } from "../../constants";
import PopularProductCard from "./sections/PopularProductCard";

const PopularProducts = () => {
  return (
    <div className="max-container max-sm:mt-12">
      <div
        className="flex flex-col justify-start items-center"
        data-aos="fade-down"
      >
        <h2 className="text-4xl font-palanquin font-bold dark:text-white">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray dark:text-slate-300">
          Lorem cupidatat non velit et consequat duis sint aliqua elit mollit.
          Eiusmod ex excepteur enim cupidatat cupidatat qui.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-14 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
