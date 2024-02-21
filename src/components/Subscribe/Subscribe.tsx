import Button from "../UI/Button/Button";

const Subscribe = () => {
  return (
    <div className="max-container flex items-center justify-between gap-10 max-lg:flex-col">
      <h3 className="text-center font-palanquin text-4xl font-bold capitalize leading-[68px] dark:text-white lg:max-w-xl">
        sign up for<span className="text-coral-red"> updates </span> &
        newsletter
      </h3>
      <div className="flex w-full items-center gap-5 rounded-full p-2.5 max-sm:flex-col sm:border sm:border-slate-300 lg:max-w-[40%]">
        <input
          type="email"
          placeholder="subscribe@nike.com"
          className="input dark:bg-black"
        />
        <div className="flex items-center max-sm:w-full max-sm:justify-end">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
