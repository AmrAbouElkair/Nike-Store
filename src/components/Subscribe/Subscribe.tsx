import Button from "../UI/Button";

const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h3 className="capitalize font-palanquin text-center text-4xl leading-[68px] font-bold lg:max-w-xl dark:text-white">
        sign up for<span className="text-coral-red"> updates </span> &
        newsletter
      </h3>
      <div className="flex items-center lg:max-w-[40%] w-full max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-300 rounded-full">
        <input
          type="email"
          placeholder="subscribe@nike.com"
          className="input dark:bg-black"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
