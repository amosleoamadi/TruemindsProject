import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#62412E] text-white py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold text-[#D4A574] mb-4 italic">
              Chuk's Kitchen
            </h2>
            <p className="text-gray-200 text-sm w-[45%] leading-relaxed">
              Bringing the authentic flavors of Nigerian home cooking to your
              table, with passion and care.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-[#D4A574] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-[#D4A574] transition-colors"
                >
                  Explore
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-[#D4A574] transition-colors"
                >
                  My Order
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-[#D4A574] transition-colors"
                >
                  Account
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-[#D4A574] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <div className="space-y-3">
              <p className="text-gray-200">+234 801 234 5678</p>
              <p className="text-gray-200">hello@chukskitchen.com</p>
              <p className="text-gray-200">123 Taste Blvd, Lagos, Nigeria</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-[#D4A574] transition-colors flex items-center gap-2"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-[#D4A574] transition-colors flex items-center gap-2"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-[#D4A574] transition-colors flex items-center gap-2"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-[#D4A574] transition-colors flex items-center gap-2"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 pt-8">
          <p className="text-gray-400 text-sm">
            © 2020 Lift Media. All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 shadow-lg transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;
