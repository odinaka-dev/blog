import Logo from "./Logo";
import { Link } from "react-router";

const Header = () => {
  return (
    <nav className="py-4 bg-white shadow-lg">
      <div className="flex justify-between items-center max-w-[90%] mx-auto">
        <div className="logo">
          <Logo />
        </div>
        <ul className="flex items-center space-x-10">
          <li className="cursor-pointer text-zinc-900 font-light hover:text-blue-950 hover:font-normal duration-300 transition-colors">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="cursor-pointer text-zinc-900 font-light hover:text-blue-950 hover:font-normal duration-300 transition-colors">
            <Link to={"/blogs"}>Blogs</Link>
          </li>
          <li className="cursor-pointer text-white bg-blue-700 py-2 px-8 rounded-sm font-normal hover:text-white hover:bg-blue-950 duration-300 transition-colors">
            <Link to={"/"}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
