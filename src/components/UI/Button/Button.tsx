const Button: React.FC<{
  label: string;
  iconURL?: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  fullWidth?: boolean;
}> = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`border flex justify-center text-center rounded-full ${
        fullWidth && "w-full"
      } px-7 py-4 font-montserrat text-lg gap-2 leading-none ${
        backgroundColor
          ? `${backgroundColor} ${borderColor} ${textColor} hover:bg-coral-red hover:text-white hover:border-coral-red`
          : "text-white bg-coral-red  border-coral-red"
      }`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow-right-icon"
          className="ml-2 rounded-full w-5 h-50"
        />
      )}
    </button>
  );
};

export default Button;
