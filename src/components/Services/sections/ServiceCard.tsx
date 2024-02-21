const ServiceCard: React.FC<{
  imgURL: string;
  label: string;
  subtext: string;
  id: number;
}> = ({ imgURL, label, subtext, id }) => {
  return (
    <div
      className="flex-1 sm:w-[350px] sm:min-w-[350px] shadow dark:shadow-[#1c1c1c] w-full rounded-[20px] px-10 py-16 dark:bg-neutral-900"
      data-aos={`${id % 2 === 1 ? "fade-up" : "fade-down"}`}
    >
      <div className="flex justify-center items-center w-14 h-14 bg-coral-red rounded-full text-3xl">
        <img src={imgURL} alt={label} height={24} width={24} />
      </div>
      <h3 className="font-palanquin text-3xl font-bold mt-5 leading-normal dark:text-white">
        {label}
      </h3>
      <p className="font-montserrat text-lg break-words mt-3 text-slate-gray dark:text-slate-300">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
