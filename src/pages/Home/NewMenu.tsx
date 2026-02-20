import image from "../../assets/bg2.png";
import "../../index.css";

const NewMenu = () => {
  return (
    <div
      className="relative w-full h-[90vh] bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        fontFamily: "'Inter', san-serif",
      }}
    >
      <div className="w-full h-full OverlayContainer"></div>

      <div className="absolute w-full h-full top-0 right-0 left-0 p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col gap-5 sm:gap-5 md:gap-5 items-start justify-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-white font-bold">
          Introducing Our New Menu Additions!
        </h1>
        <h3 className="text-sm sm:text-xl md:text-xl lg:text-[20px] w-[35%] text-white">
          Explore exciting new dishes, crafted with the freshest ingredients and
          authentic Nigerian flavors. Limited time offer!
        </h3>
        <button className="p-2 sm:p-3 md:p-4 bg-[#FF7A18] rounded-[10px] sm:rounded-[10px] cursor-pointer text-white text-sm sm:text-base">
          Discover what's new
        </button>
      </div>
    </div>
  );
};

export default NewMenu;
