import { BiBookAdd, BiBookReader, BiHome } from "react-icons/bi";
import { SiMedusa } from "react-icons/si";
import { GrAnalytics, GrSettingsOption } from "react-icons/gr";

const DashboardHeader = () => {
  return (
    <nav className="">
      <div className="logo flex justify-center relative top-10 text-3xl">
        <SiMedusa className="text-blue-700" />
      </div>
      <div className="logo flex items-center h-screen shadow-2xl">
        <ul className="text-blue-700 text-2xl px-6">
          <li className="hover:animate-bounce duration-300">
            <BiHome />
          </li>
          <li className="hover:animate-bounce duration-300 mb-12 mt-12 cursor-pointer">
            <BiBookAdd />
          </li>
          <li className="hover:animate-bounce duration-300 mb-12 cursor-pointer">
            <BiBookReader />
          </li>
          <li className="hover:animate-bounce duration-300 mb-12 cursor-pointer">
            <GrAnalytics />
          </li>
          <li className="hover:animate-bounce duration-300 mt-12">
            <GrSettingsOption />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DashboardHeader;
