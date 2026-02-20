import { useState } from "react";
import { Mail, Phone, Lock, EyeOff, Eye } from "lucide-react";
import heroBanner from "../../assets/registerBg.png";
import { Footer } from "../../components";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  return (
    <>
      <div className="min-h-screen flex">
        {/* Left Panel - Image/Branding (hidden on mobile) */}
        <div
          className="hidden lg:flex lg:w-1/2 relative items-center justify-center"
          style={{
            backgroundImage: `url(${heroBanner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[#FF7A18B2]" />

          <div className="relative z-10 text-center px-12">
            <h2
              className="text-5xl text-white mb-4"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Chuks Kitchen
            </h2>
            <p className="text-white/80 text-lg leading-relaxed max-w-md mx-auto">
              Your journey to delicious, authentic Nigerian meals starts here.
              Sign up or log in to order your favorites today!
            </p>
          </div>
        </div>

        {/* Right Panel - Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-4 py-8">
          <div className="w-full max-w-md">
            {/* Brand */}
            <h1
              className="text-center text-3xl mb-1"
              style={{
                fontFamily: "'Dancing Script', cursive",
                color: "#E8732A",
              }}
            >
              Chuks Kitchen
            </h1>
            <h2 className="text-center text-xl font-bold text-black mb-8">
              Create Your Account
            </h2>

            {/* Email */}
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3 mb-4">
              <Mail size={18} className="text-gray-400 mr-3" />
              <input
                type="email"
                placeholder="name@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 outline-none text-sm text-black bg-transparent placeholder:text-gray-400"
              />
            </div>

            {/* Phone */}
            <label className="block text-sm text-gray-700 mb-1">
              Phone number
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3 mb-4">
              <Phone size={18} className="text-gray-400 mr-3" />
              <input
                type="tel"
                placeholder="8123340690"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="flex-1 outline-none text-sm text-black bg-transparent placeholder:text-gray-400"
              />
            </div>

            {/* Password */}
            <label className="block text-sm text-gray-700 mb-1">Password</label>
            <div
              className="flex items-center border border-gray-300 rounded-lg px-3 py-3 mb-4"
              style={password ? { borderColor: "#E8732A" } : {}}
            >
              <Lock size={18} className="text-gray-400 mr-3" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex-1 outline-none text-sm text-black bg-transparent placeholder:text-gray-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <Eye size={18} className="text-gray-400" />
                ) : (
                  <EyeOff size={18} className="text-gray-400" />
                )}
              </button>
            </div>

            {/* Confirm Password */}
            <label className="block text-sm text-gray-700 mb-1">
              Confirm password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3 mb-4">
              <Lock size={18} className="text-gray-400 mr-3" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="flex-1 outline-none text-sm text-black bg-transparent placeholder:text-gray-400"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <Eye size={18} className="text-gray-400" />
                ) : (
                  <EyeOff size={18} className="text-gray-400" />
                )}
              </button>
            </div>

            {/* Terms */}
            <label className="flex items-center gap-2 mb-6 cursor-pointer">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="w-5 h-5 rounded accent-blue-600"
              />
              <span className="text-sm text-gray-700">
                I agree to the{" "}
                <a href="#" className="text-blue-600 font-medium">
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-600 font-medium">
                  Privacy Policy
                </a>
              </span>
            </label>

            {/* Continue Button */}
            <button
              className="w-full py-3 rounded-full text-white font-semibold text-base mb-4"
              style={{ backgroundColor: "#E8732A" }}
            >
              Continue
            </button>

            <p className="text-center text-sm text-gray-500 mb-4">
              Or continue with
            </p>

            {/* Google */}
            <button className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-3 mb-3 bg-white">
              <svg width="20" height="20" viewBox="0 0 48 48" className="mr-2">
                <path
                  fill="#FFC107"
                  d="M43.6 20.1H42V20H24v8h11.3C33.9 33.6 29.4 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.2-2.7-.4-3.9z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.3 14.7l6.6 4.8C14.5 15.5 18.8 12 24 12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
                />
                <path
                  fill="#4CAF50"
                  d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.2 26.7 36 24 36c-5.4 0-9.9-3.4-11.3-8.2l-6.5 5C9.5 39.6 16.2 44 24 44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.5l6.2 5.2C37 39.1 44 34 44 24c0-1.3-.2-2.7-.4-3.9z"
                />
              </svg>
              <span className="text-sm font-medium text-gray-700">
                Continue with Google
              </span>
            </button>

            {/* Apple */}
            <button className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-3 mb-6 bg-white">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="#1877F2"
                className="mr-2"
              >
                <path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.875V12h3.328l-.532 3.47h-2.796v8.385C19.612 22.954 24 17.99 24 12z" />
              </svg>
              <span className="text-sm font-medium text-gray-700">
                Continue with Apple
              </span>
            </button>

            {/* Sign in link */}
            <p className="text-center text-sm text-gray-500 pb-6">
              Already have an account?{" "}
              <NavLink
                to={"/login"}
                className="font-medium"
                style={{ color: "#E8732A" }}
              >
                Sign In
              </NavLink>
            </p>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <Footer />
      </div>
    </>
  );
};

export default SignUp;
