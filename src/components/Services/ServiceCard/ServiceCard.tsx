const ServiceCard: React.FC<{
  imgURL: string;
  label: string;
  subtext: string;
}> = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] shadow-2xl dark:shadow-orange-900 w-full rounded-[20px] px-10 py-16 dark:bg-neutral-900">
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
