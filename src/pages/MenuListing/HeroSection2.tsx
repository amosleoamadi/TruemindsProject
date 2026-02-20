import image from "../../assets/bg3.png";

const HeroSection2 = () => {
  return (
    <div
      className="relative w-full h-[75vh] bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        fontFamily: "'Inter', san-serif",
      }}
    >
      <div className="w-full h-full OverlayContainer"></div>

      <div className="absolute w-full h-full top-0 right-0 left-0 p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col gap-4 sm:gap-4 md:gap-4 items-start justify-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[35px] text-white w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] font-bold">
          Chuks Kitchen
        </h1>
        <h3 className="text-lg sm:text-sm md:text-2xl lg:text-[24px] text-white">
          Chuks Kitchen Nigerian Home Cooking 4.8 (1.2k)
        </h3>
      </div>
    </div>
  );
};

export default HeroSection2;
