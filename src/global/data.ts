import jollofFriedChicken from "../assets/jellofRice&chicken.png";
import egusiPoundedYam from "../assets/FufuOkra.png";
import pepperSoupTilapia from "../assets/GrilledTilapia.png";
import jollofSmokedChicken from "../assets/JellofSmoked.png";
import friedRiceImg from "../assets/jellofRice&chicken.png";
import pepperSoupImg from "../assets/PepperedSnail.png";
import swallowImg from "../assets/Amala.png";
import jollofImg from "../assets/jellofRice&chicken.png";

export interface Meal {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

export const categories = [
  "Popular",
  "Jollof Rice & Entrees",
  "Swallow & Soups",
];

export const menuData: Record<string, Meal[]> = {
  Popular: [
    {
      id: 1,
      name: "Jollof Rice & Fried Chicken",
      description:
        "Our signature Jollof rice, served with crispy fried chicken and plantain.",
      price: "₦3,500",
      image: jollofFriedChicken,
      category: "Popular",
    },
    {
      id: 2,
      name: "Eba & Egusi Soup (Goat Meat)",
      description:
        "Hearty Egusi soup with tender goat meat, served with soft Eba.",
      price: "₦3,500",
      image: egusiPoundedYam,
      category: "Popular",
    },
    {
      id: 3,
      name: "Pounded Yam & Edikaikong",
      description: "Traditional pounded yam with rich, leafy Edikaikong soup.",
      price: "₦3,800",
      image: swallowImg,
      category: "Popular",
    },
    {
      id: 4,
      name: "Peppered Snail",
      description: "Spicy and savory peppered snail, perfect as a starter.",
      price: "₦2,500",
      image: pepperSoupImg,
      category: "Popular",
    },
    {
      id: 5,
      name: "Grilled Tilapia Fish",
      description: "Whole grilled tilapia seasoned with our special spices.",
      price: "₦4,500",
      image: pepperSoupTilapia,
      category: "Popular",
    },
  ],

  "Jollof Rice & Entrees": [
    {
      id: 6,
      name: "Jollof Rice & Smoked Fish",
      description: "Flavorful jollof rice served with perfectly smoked fish.",
      price: "₦3,500",
      image: jollofSmokedChicken,
      category: "Jollof Rice & Entrees",
    },
    {
      id: 7,
      name: "Party Jollof Rice (Turkey)",
      description: "Party-style jollof rice served with juicy turkey.",
      price: "₦2,800",
      image: jollofImg,
      category: "Jollof Rice & Entrees",
    },
    {
      id: 8,
      name: "Party Jollof Rice",
      description: "Vegetarian party jollof, full of rich flavors.",
      price: "₦3,500",
      image: friedRiceImg,
      category: "Jollof Rice & Entrees",
    },
  ],

  "Swallow & Soups": [
    {
      id: 9,
      name: "Amala with Gbegiri & Ewedu",
      description:
        "Classic Amala served with Gbegiri (beans) and Ewedu (jute leaf) soup.",
      price: "₦3,100",
      image: swallowImg,
      category: "Swallow & Soups",
    },
    {
      id: 10,
      name: "Fufu & Okra Soup (Fish)",
      description: "Light Fufu served with fresh okra soup and tilapia fish.",
      price: "₦3,300",
      image: egusiPoundedYam,
      category: "Swallow & Soups",
    },
  ],
};

export const allMeals: Meal[] = Object.values(menuData).flat();
