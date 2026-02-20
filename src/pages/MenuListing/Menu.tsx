import { useState } from "react";
import { PlusCircle } from "lucide-react";
import { menuData } from "../../global/data";
import { useNavigate } from "react-router-dom";
import HeroSection2 from "./HeroSection2";

const categories = ["Popular", "Jollof Rice & Entrees", "Swallow & Soups"];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("Popular");
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (id: number) => {
    navigate(`/foodDetail/${id}`);
  };

  const handleAddToCart = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000); // Auto-hide after 4 seconds
  };

  return (
    <div
      className="flex min-h-screen flex-col"
      style={{ background: "#F5F5FA" }}
    >
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-4 right-4 z-50 animate-in fade-in slide-in-from-top-2">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 shadow-lg">
            <p className="text-green-800 font-medium">
              Added to cart check my orders to view all orders
            </p>
          </div>
        </div>
      )}
      <HeroSection2 />

      <div className="mx-auto w-full px-4 py-8 sm:px-6 lg:px-8">
        {/* Category Sidebar Card */}
        <div className="mb-8 rounded-xl bg-white p-5 shadow-sm">
          <h3 className="mb-3 text-base font-bold text-gray-900">
            Menu Categories
          </h3>
          <div className="flex flex-col">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-left px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                  activeCategory === cat
                    ? "border-l-4 bg-orange-50 text-orange-600"
                    : "border-l-4 border-transparent text-gray-700 hover:bg-gray-50"
                }`}
                style={
                  activeCategory === cat ? { borderLeftColor: "#E8732A" } : {}
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Sections */}
        {categories
          .filter((cat) =>
            activeCategory === cat || activeCategory === "Popular"
              ? true
              : false,
          )
          .filter((cat) => menuData[cat]?.length)
          .map((cat) => {
            // When a specific category is selected, only show that one
            if (activeCategory !== "Popular" && cat !== activeCategory)
              return null;
            return (
              <section key={cat} className="mb-10">
                <h2 className="mb-5 text-xl font-bold text-gray-900">{cat}</h2>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {menuData[cat].map((meal, idx) => (
                    <div
                      key={`${meal.name}-${idx}`}
                      onClick={() => handleNavigation(meal.id)}
                      className="overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md"
                    >
                      <div className="aspect-4/3 overflow-hidden">
                        <img
                          src={meal.image}
                          alt={meal.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-sm font-bold text-gray-900">
                          {meal.name}
                        </h3>
                        <p className="mt-1 text-xs text-gray-500 leading-relaxed">
                          {meal.description}
                        </p>
                        <div className="mt-3 flex items-center justify-between">
                          <span
                            className="text-sm font-bold"
                            style={{ color: "#E8732A" }}
                          >
                            {meal.price}
                          </span>
                          <button
                            onClick={handleAddToCart}
                            className="text-orange-500 cursor-pointer hover:text-orange-600 transition-colors"
                          >
                            <PlusCircle size={24} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
      </div>
    </div>
  );
};

export default Menu;
