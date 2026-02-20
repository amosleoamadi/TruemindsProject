import { X, Plus, Minus } from "lucide-react";
import images from "../../assets/EgusiSoup.png";

const CartPage = () => {
  const cartItems = [
    {
      id: 1,
      name: "Jollof Rice & Fried Chicken",
      description: "With plantain, extra pepper sauce",
      price: 3200,
      quantity: 1,
      image: images,
    },
    {
      id: 2,
      name: "Jollof Rice & Fried Chicken",
      description: "With plantain, extra pepper sauce",
      price: 3200,
      quantity: 1,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Desktop-97u40lMYyyrqibrRgvklS9Y73LE1Sc.png",
    },
    {
      id: 3,
      name: "Jollof Rice & Fried Chicken",
      description: "With plantain, extra pepper sauce",
      price: 3200,
      quantity: 1,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Desktop-97u40lMYyyrqibrRgvklS9Y73LE1Sc.png",
    },
    {
      id: 4,
      name: "Jollof Rice & Fried Chicken",
      description: "With plantain, extra pepper sauce",
      price: 3200,
      quantity: 1,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Desktop-97u40lMYyyrqibrRgvklS9Y73LE1Sc.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white p-4 md:p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 lg:mb-8">
          Your Cart
        </h1>

        {/* Cart Items */}
        <div className="space-y-2 md:space-y-3">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-lg p-3 md:p-4 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6"
            >
              {/* Product Image */}
              <div className="shrink-0 w-full md:w-auto">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full md:w-32 lg:w-40 h-48 md:h-32 lg:h-40 object-cover rounded-lg"
                />
              </div>

              {/* Product Details */}
              <div className="grow w-full md:w-auto">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">
                  {item.name}
                </h2>
                <p className="text-gray-500 text-base md:text-lg">
                  {item.description}
                </p>
              </div>

              {/* Mobile Row: Quantity and Price */}
              <div className="flex flex-row items-center justify-between w-full md:w-auto gap-4">
                {/* Quantity Controls */}
                <div className="flex items-center gap-2 md:gap-4">
                  <button className="bg-gray-300 hover:bg-gray-400 text-gray-900 rounded-lg p-1.5 md:p-2 transition-colors">
                    <Plus size={16} className="md:w-5 md:h-5" />
                  </button>
                  <span className="text-xl md:text-2xl font-bold text-gray-900 w-8 md:w-12 text-center">
                    {item.quantity}
                  </span>
                  <button className="bg-gray-300 hover:bg-gray-400 text-gray-900 rounded-lg p-1.5 md:p-2 transition-colors">
                    <Minus size={16} className="md:w-5 md:h-5" />
                  </button>
                </div>

                {/* Price */}
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-orange-500">
                  ₦{item.price.toLocaleString()}
                </div>
              </div>

              {/* Delete Button */}
              <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg p-2 md:p-3 transition-colors shrink-0 w-full md:w-auto">
                <X size={16} className="md:w-5 md:h-5" />
              </button>
            </div>
          ))}
        </div>

        {/* Add More Items Link */}
        <div className="mt-6 md:mt-8 flex items-center justify-center md:justify-start gap-2">
          <Plus size={16} className="md:w-5 md:h-5 text-blue-500" />
          <a
            href="#"
            className="text-blue-500 text-base md:text-lg font-medium hover:underline"
          >
            Add more items from Chuks Kitchen
          </a>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
