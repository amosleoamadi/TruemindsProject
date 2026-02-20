import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const navLinks = ["Home", "Explore", "My Orders", "Account"];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const navigate = useNavigate();

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setMobileOpen(false);

    // Add navigation based on link
    switch (link) {
      case "Home":
        navigate("/");
        break;
      case "Explore":
        navigate("/menu");
        break;
      case "My Orders":
        navigate("/orders");
        break;
      case "Account":
        navigate("/account");
        break;
      default:
        navigate("/");
    }
  };

  const handleLoginClick = () => {
    navigate("/login");
    setMobileOpen(false);
  };

  return (
    <header className="w-full bg-white border border-[#eee] backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        {/* Logo - Clickable to home */}
        <button
          onClick={() => navigate("/")}
          className="font-cursive text-2xl italic md:text-3xl transition-all duration-200 hover:scale-105 hover:opacity-80"
          style={{
            color: "#FF7A18",
            fontFamily: "'Island Moments', cursive",
          }}
        >
          Chuks Kitchen
        </button>

        {/* Desktop Nav */}
        <nav className="hidden items-center w-[40%] justify-between gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleLinkClick(link)}
              className={`text-sm font-medium transition-all duration-200 hover:scale-105 ${
                activeLink === link
                  ? "font-semibold border-b-2 border-[hsl(30,100%,55%)]"
                  : ""
              }`}
              style={{
                color: activeLink === link ? "hsl(30,100%,55%)" : "#222",
              }}
            >
              {link}
            </button>
          ))}
        </nav>

        {/* Login Button */}
        <button
          className="hidden rounded-lg px-7 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:opacity-90 md:block"
          style={{ backgroundColor: "hsl(30, 100%, 55%)" }}
          onClick={handleLoginClick}
        >
          Login
        </button>

        {/* Mobile Toggle */}
        <button
          className="md:hidden transition-transform duration-200 hover:scale-110"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ color: "hsl(30, 100%, 55%)" }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className="flex flex-col gap-4 border-t border-border px-4 py-4 md:hidden">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleLinkClick(link)}
              className={`text-sm font-medium transition-all duration-200 hover:translate-x-2 text-left ${
                activeLink === link ? "font-semibold" : ""
              }`}
              style={{
                color: activeLink === link ? "hsl(30,100%,55%)" : "#222",
              }}
            >
              {link}
              {activeLink === link && <span className="ml-2 text-xs">✓</span>}
            </button>
          ))}
          <button
            className="mt-2 w-full rounded-lg px-7 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:opacity-90"
            style={{ backgroundColor: "hsl(30, 100%, 55%)" }}
            onClick={handleLoginClick}
          >
            Login
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
