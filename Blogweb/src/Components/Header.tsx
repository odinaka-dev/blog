import { useState } from "react";
import Logo from "./Logo";
import { Link, useNavigate } from "react-router";
import { LuSquareMenu } from "react-icons/lu";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/pageloader");
    setTimeout(() => {
      navigate("/about");
    }, 3000);
  };

  const handleHome = () => {
    navigate("/pageloader");
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  const handleContact = () => {
    navigate("/pageloader");
    setTimeout(() => {
      navigate("/contact");
    }, 3000);
  };

  const handleBlogs = () => {
    navigate("/pageloader");
    setTimeout(() => {
      navigate("/blogs");
    }, 3000);
  };

  return (
    <nav className="relative py-4 bg-white shadow-lg z-50">
      <div className="flex justify-between items-center max-w-[90%] mx-auto">
        <div className="logo">
          <Link to={"/"}>
            <Logo />
          </Link>
        </div>
        <ul className="hidden md:flex items-center space-x-10">
          <li
            onClick={handleHome}
            className="cursor-pointer text-zinc-900 font-light hover:text-blue-950 hover:font-normal duration-300 transition-colors"
          >
            Home
          </li>
          <li
            onClick={handleNavigate}
            className="cursor-pointer text-zinc-900 font-light hover:text-blue-950 hover:font-normal duration-300 transition-colors"
          >
            About
          </li>
          <li
            onClick={handleBlogs}
            className="cursor-pointer text-zinc-900 font-light hover:text-blue-950 hover:font-normal duration-300 transition-colors"
          >
            Blogs
          </li>
          <li
            onClick={handleContact}
            className="cursor-pointer text-white bg-blue-700 py-2 px-8 rounded-sm font-normal hover:text-white hover:bg-blue-950 duration-300 transition-colors"
          >
            Contact Us
          </li>
        </ul>
        <div
          className="flex md:hidden text-2xl cursor-pointer hover:text-blue-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <LuSquareMenu />
        </div>
      </div>
      {/* mobile menu styles */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="absolute shadow-xl md:hidden flex flex-col items-center space-y-4 bg-white py-8 z-[1000] w-full"
          >
            <li
              onClick={() => {
                setMenuOpen(false);
                handleHome();
              }}
              className="cursor-pointer text-zinc-900 font-light hover:text-blue-950 hover:font-normal duration-300 transition-colors"
            >
              Home
            </li>
            <li
              onClick={() => {
                setMenuOpen(false);
                handleNavigate();
              }}
              className="cursor-pointer text-zinc-900 font-light hover:text-blue-950 hover:font-normal duration-300 transition-colors"
            >
              About
            </li>
            <li
              onClick={() => {
                setMenuOpen(false);
                handleBlogs();
              }}
              className="cursor-pointer text-zinc-900 font-light hover:text-blue-950 hover:font-normal duration-300 transition-colors"
            >
              Blogs
            </li>
            <li
              onClick={() => {
                handleContact();
                setMenuOpen(false);
              }}
              className="cursor-pointer text-white bg-blue-700 py-2 px-8 rounded-sm font-normal hover:text-white hover:bg-blue-950 duration-300 transition-colors"
            >
              Contact Us
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
