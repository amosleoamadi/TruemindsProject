import { Timer, X } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { allMeals } from "../../global/data";

const ProductDetail = () => {
  const { id } = useParams();
  const meal = allMeals.find((m) => m.id === Number(id));
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen" style={{ background: "#F5F5FA" }}>
      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Product Image */}
          <div className="flex h-full items-center justify-center">
            <img
              src={meal?.image}
              alt={meal?.name}
              className="w-full h-full rounded-lg object-cover"
            />
          </div>

          {/* Right: Product Details */}
          <div className="flex flex-col bg-white p-4 rounded-2xl">
            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <button
                className="bg-black text-white rounded-full p-2 hover:bg-gray-800 transition-colors"
                onClick={handleBack}
              >
                <X size={20} />
              </button>
            </div>

            {/* Product Title and Price */}
            <h1 className="text-4xl font-bold mb-4">{meal?.name}</h1>
            <p className="text-3xl font-bold text-orange-500 mb-6">
              {meal?.price}
            </p>

            {/* Description */}
            <p className="text-gray-700 mb-6 leading-relaxed">
              {meal?.category}
            </p>

            {/* Info Badges */}
            <div className="flex gap-4 mb-8 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="text-orange-500">
                  <Timer />
                </span>
                <span className="text-gray-600">Mildly spicy</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-500">
                  <Timer />
                </span>
                <span className="text-gray-600">
                  Vegetarian option available
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-500 cursor-pointer flex items-center gap-2 hover:underline">
                  <Timer /> View Allergies
                </span>
              </div>
            </div>

            {/* Choose Your Protein */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Choose Your Protein</h2>
              <div className="space-y-3">
                <label className="flex items-center p-4 border-2 border-orange-500 rounded-lg cursor-pointer">
                  <input
                    type="radio"
                    name="protein"
                    defaultChecked
                    className="w-6 h-6 cursor-pointer"
                    style={{ accentColor: "#FF8C00" }}
                  />
                  <span className="ml-3 flex-1 font-medium text-gray-900">
                    Fried Chicken
                    <span className="ml-2 text-gray-500 font-normal">
                      (Default)
                    </span>
                  </span>
                </label>
                <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-orange-500 transition-colors">
                  <input
                    type="radio"
                    name="protein"
                    className="w-6 h-6 cursor-pointer"
                    style={{ accentColor: "#FF8C00" }}
                  />
                  <span className="ml-3 flex-1 font-medium text-gray-900">
                    Grilled Fish
                  </span>
                  <span className="font-semibold text-gray-900">+₦500</span>
                </label>
                <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-orange-500 transition-colors">
                  <input
                    type="radio"
                    name="protein"
                    className="w-6 h-6 cursor-pointer"
                    style={{ accentColor: "#FF8C00" }}
                  />
                  <span className="ml-3 flex-1 font-medium text-gray-900">
                    Beef
                  </span>
                  <span className="font-semibold text-gray-900">+₦700</span>
                </label>
              </div>
            </div>

            {/* Extra Sides */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Extra Sides (Optional)</h2>
              <div className="space-y-3">
                <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-orange-500 transition-colors">
                  <input
                    type="checkbox"
                    className="w-6 h-6 rounded cursor-pointer"
                    style={{ accentColor: "#FF8C00" }}
                  />
                  <span className="ml-3 flex-1 font-medium text-gray-900">
                    Fried Plantain
                  </span>
                  <span className="font-semibold text-gray-900">+₦700</span>
                </label>
                <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-orange-500 transition-colors">
                  <input
                    type="checkbox"
                    className="w-6 h-6 rounded cursor-pointer"
                    style={{ accentColor: "#FF8C00" }}
                  />
                  <span className="ml-3 flex-1 font-medium text-gray-900">
                    Coleslaw
                  </span>
                  <span className="font-semibold text-gray-900">+₦500</span>
                </label>
                <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-orange-500 transition-colors">
                  <input
                    type="checkbox"
                    className="w-6 h-6 rounded cursor-pointer"
                    style={{ accentColor: "#FF8C00" }}
                  />
                  <span className="ml-3 flex-1 font-medium text-gray-900">
                    Extra Pepper Sauce
                  </span>
                  <span className="font-semibold text-gray-900">+₦300</span>
                </label>
              </div>
            </div>

            {/* Special Instructions */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Special Instructions</h2>
              <textarea
                placeholder="E.g no onion, food is too spicy, food is too hot hhhhhhhhhh food is tasty"
                className="w-full p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 transition-colors resize-none"
                rows={4}
              />
            </div>

            {/* Add to Cart Button */}
            <button className="w-full bg-orange-500 text-white font-bold py-4 rounded-lg hover:bg-orange-600 transition-colors text-lg">
              Add to Cart - ₦2,800
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
