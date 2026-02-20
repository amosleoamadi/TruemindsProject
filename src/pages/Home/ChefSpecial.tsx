import pepperSoupTilapia from "../../assets/tilapia.jpg";
import jollofFriedChicken from "../../assets/friedChicken.jpg";
import jollofSmokedChicken from "../../assets/smokeCchicken.jpg";
import egusiPoundedYam from "../../assets/awedu.png";

const meals = [
  {
    name: "Spicy Tilapia Pepper Soup",
    description:
      "A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy.",
    price: "₦3,500",
    image: pepperSoupTilapia,
  },
  {
    name: "Jollof Rice & Fried Chicken",
    description:
      "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
    price: "₦3,500",
    image: jollofFriedChicken,
  },
  {
    name: "Jollof Rice & Fried Chicken",
    description:
      "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
    price: "₦3,500",
    image: jollofFriedChicken,
  },
  {
    name: "Jollof Rice & Smoked Chicken",
    description:
      "Our signature Jollof rice, cooked to perfection, served with succulent smoked chicken.",
    price: "₦3,500",
    image: jollofSmokedChicken,
  },
  {
    name: "Jollof Rice & Fried Chicken",
    description:
      "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
    price: "₦3,500",
    image: jollofFriedChicken,
  },
  {
    name: "Egusi Soup & Pounded Yam",
    description:
      "Rich and savory Egusi soup with assorted meats, paired with freshly pounded yam.",
    price: "₦3,500",
    image: egusiPoundedYam,
  },
];

const ChefsSpecials = () => {
  return (
    <section className="w-full px-4 py-8 sm:px-6 lg:px-8">
      <h2 className="mb-8 text-center text-xl font-bold text-foreground sm:text-2xl">
        Chef's Specials
      </h2>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {meals.map((meal, idx) => (
          <div
            key={`${meal.name}-${idx}`}
            className="flex flex-col overflow-hidden rounded-xl bg-card shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="aspect-4/3 overflow-hidden">
              <img
                src={meal.image}
                alt={meal.name}
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-4">
              <h3 className="text-base font-semibold text-card-foreground">
                {meal.name}
              </h3>
              <p className="mt-1 flex-1 text-sm text-muted-foreground">
                {meal.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-[#FF7A18] font-bold">{meal.price}</span>
                <button className="rounded-lg px-5 py-2 bg-[#FF7A18] text-sm font-medium text-white transition-colors hover:opacity-90">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChefsSpecials;
