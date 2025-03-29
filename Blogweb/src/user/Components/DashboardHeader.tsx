import { BiBookAdd, BiBookReader, BiHome } from "react-icons/bi";
import { SiMedusa } from "react-icons/si";
import { GrAnalytics, GrSettingsOption } from "react-icons/gr";
import { BsMenuApp } from "react-icons/bs";
import { Link } from "react-router";

const DashboardHeader = () => {
  return (
    <nav className="bg-blue-950 hidden sm:block">
      <div className="logo flex relative top-10 left-4 text-3xl">
        <SiMedusa className="text-white" />
      </div>
      <div className="logo flex items-center h-screen shadow-2xl">
        <ul className="text-white text-2xl px-6">
          <li className="hover:animate-bounce duration-300">
            <BsMenuApp />
          </li>
          <li className="hover:animate-bounce duration-300 mb-12 mt-12 cursor-pointer">
            <Link to={"/dashboard"}>
              <BiHome />
            </Link>
          </li>
          <li className="hover:animate-bounce duration-300 mb-12 mt-12 cursor-pointer">
            <Link to={"/dashboard/add"}>
              <BiBookAdd />
            </Link>
          </li>
          <li className="hover:animate-bounce duration-300 mb-12 cursor-pointer">
            <Link to={"/dashboard/all"}>
              <BiBookReader />
            </Link>
          </li>
          <li className="hover:animate-bounce duration-300 mb-12 cursor-pointer">
            <Link to={"/dashboard/analytics"}>
              <GrAnalytics />
            </Link>
          </li>
          <li className="hover:animate-bounce duration-300 mt-12">
            <Link to={"/dashboard/settings"}>
              <GrSettingsOption />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DashboardHeader;
