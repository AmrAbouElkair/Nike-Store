const ShoeCard: React.FC<{
  imgURL: { thumbnail: string; bigShoe: string };
  changeBigShoeImage: (imgURL: string) => void;
  bigShoeImg: string;
}> = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) changeBigShoeImage(imgURL.bigShoe);
  };
  return (
    <div
      className={`
      border-2 rounded-xl ${
        bigShoeImg === imgURL.bigShoe
          ? "border-coral-red scale-110"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1 duration-200 ease-linear`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-center bg-card bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
