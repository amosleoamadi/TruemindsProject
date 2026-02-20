import jollofImg from "../../assets/fried.jpg";
import swallowImg from "../../assets/pepper-soups.jpg";
import grillsImg from "../../assets/grills.jpg";
import sweetImg from "../../assets/sweet.jpg";
import friedRiceImg from "../../assets/jellofImage.jpg";
import pepperSoupImg from "../../assets/swallow.jpg";

const categories = [
  { name: "Jollof Delights", image: jollofImg },
  { name: "Swallow & Soups", image: swallowImg },
  { name: "Grills & BBQ", image: grillsImg },
  { name: "Sweet Treats", image: sweetImg },
  { name: "Fried Rice", image: friedRiceImg },
  { name: "Pepper Soup", image: pepperSoupImg },
];

const PopularCategories = () => {
  return (
    <section className="w-full px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="mb-8 text-center text-xl font-bold text-foreground sm:text-2xl">
        Popular Categories
      </h2>
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-6">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="overflow-hidden rounded-xl bg-card shadow-sm transition-shadow hover:shadow-md cursor-pointer"
          >
            <div className="aspect-4/3 overflow-hidden">
              <img
                src={cat.image}
                alt={cat.name}
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="p-3 text-center sm:p-4">
              <span className="text-sm font-medium text-card-foreground sm:text-base">
                {cat.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;
