import React from "react";
import BannerImage from "../assets/Banner.png";
import { Link } from "react-router";
import Eclipse from "../assets/eclipse.png";

const Home = () => {
  return (
    <React.Fragment>
      <WelcomeBanner />
    </React.Fragment>
  );
};

// the welcome banner
const WelcomeBanner = () => {
  return (
    <section className="welcome_banner  bg-blue-900">
      <div className="banner_text relative py-[40px]">
        <div className="grid grid-cols-2 items-center gap-24 max-w-[80%] mx-auto">
          <div className="text-white">
            <h1 className="text-5xl font-semibold leading-15">
              BlogSpot the place for all blog contents
            </h1>
            <p className="text-white font-light leading-7 mt-4">
              The future of Blogspot will see home bloggers having enhanced
              intelligence, increased capabilities, and becoming more personal
              and possibly equipped to bring out the best. For example, home
              bloggers will take over a major part of the market.
            </p>
            <div className="btn_class">
              <button className="text-blue-950 bg-white py-2 px-8 rounded-sm mt-12 hover:bg-[#f9f9f9] duration-200 cursor-pointer">
                <Link to={"/about"}>Read More</Link>
              </button>
            </div>
          </div>
          <div className="banner_image">
            <img src={BannerImage} alt="" />
          </div>
        </div>
        <div className="absolute top-[-100px] left-[-100px]  transform rotate-330">
          <img src={Eclipse} alt="" className="" />
        </div>
      </div>
    </section>
  );
};

// the sub-welcome banner

// popular post

// sub popular post or any other section

export default Home;
