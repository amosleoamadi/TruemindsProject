import { Search } from "lucide-react";
import image from "../../assets/bg.png";
import "../../index.css";

const HeroSection = () => {
  return (
    <div
      className="relative w-full h-screen bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        fontFamily: "'Inter', san-serif",
      }}
    >
      <div className="w-full h-full OverlayContainer"></div>

      <div className="absolute w-full h-full top-0 right-0 left-0 p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col gap-5 sm:gap-5 md:gap-5 items-start justify-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-white w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] font-bold">
          The Heart of Nigerian Home Cooking
        </h1>
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-white font-bold">
          Handcrafted with passion, delivered with care.
        </h3>
        <button className="p-2 sm:p-3 md:p-4 bg-[#FF7A18] rounded-[10px] sm:rounded-[10px] cursor-pointer text-white text-sm sm:text-base">
          Discover what's new
        </button>
      </div>

      <div className="absolute z-50 mx-auto left-1/2 transform -translate-x-1/2 -bottom-6 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] max-w-2xl">
        <div className="flex items-center gap-3 rounded-2xl bg-white px-4 sm:px-5 py-3 sm:py-4 shadow-lg">
          <Search className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="What are you craving for today?"
            className="w-full bg-transparent text-xs sm:text-sm text-card-foreground placeholder:text-muted-foreground focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
