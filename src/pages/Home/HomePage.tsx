import ChefsSpecials from "./ChefSpecial";
import HeroSection from "./HeroSection";
import NewMenu from "./NewMenu";
import PopularCategories from "./PopularFoods";

const HomePage = () => {
  return (
    <div className="w-full h-screen min-h-max">
      <HeroSection />
      <PopularCategories />
      <ChefsSpecials />
      <NewMenu />
    </div>
  );
};

export default HomePage;
