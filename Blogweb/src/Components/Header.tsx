import Logo from "./Logo";
import { Link } from "react-router";
import { LuSquareMenu } from "react-icons/lu";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="py-4 bg-white shadow-lg">
      <div className="flex justify-between items-center max-w-[90%] mx-auto">
        <div className="logo">
          <Link to={"/"}>
            <Logo />
          </Link>
        </div>
        <ul className="hidden  md:flex items-center space-x-10">
          <li className="cursor-pointer text-zinc-900 font-light hover:text-blue-950 hover:font-normal duration-300 transition-colors">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="cursor-pointer text-zinc-900 font-light hover:text-blue-950 hover:font-normal duration-300 transition-colors">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="cursor-pointer text-zinc-900 font-light hover:text-blue-950 hover:font-normal duration-300 transition-colors">
            <Link to={"/blogs"}>Blogs</Link>
          </li>
          <li className="cursor-pointer text-white bg-blue-700 py-2 px-8 rounded-sm font-normal hover:text-white hover:bg-blue-950 duration-300 transition-colors">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
        </ul>
        <div
          className="flex md:hidden text-2xl cursor-pointer hover:text-blue-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <LuSquareMenu />
        </div>
      </div>

      {/* mobile menu view */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="absolute shadow-xl md:hidden flex flex-col items-center space-y-4 bg-white py-8 z-10 w-full"
          >
            <li
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer text-zinc-900 font-light hover:text-blue-950 hover:font-normal duration-300 transition-colors"
            >
              <Link to={"/"}>Home</Link>
            </li>
            <li
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer text-zinc-900 font-light hover:text-blue-950 hover:font-normal duration-300 transition-colors"
            >
              <Link to={"/about"}>About</Link>
            </li>
            <li
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer text-zinc-900 font-light hover:text-blue-950 hover:font-normal duration-300 transition-colors"
            >
              <Link to={"/blogs"}>Blogs</Link>
            </li>
            <li
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer text-white bg-blue-700 py-2 px-8 rounded-sm font-normal hover:text-white hover:bg-blue-950 duration-300 transition-colors"
            >
              <Link to={"/contact"}>Contact Us</Link>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
