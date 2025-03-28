import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import axios from "axios";
import Eclipse from "../assets/eclipse.png";
import BannerImage from "../assets/Banner.png";
import SubImage from "../assets/Second.png";
import ThirdImage from "../assets/Third.png";
import SubFooter from "../Components/SubFooter";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <React.Fragment>
      <WelcomeBanner />
      <SubBanner />
      <RecentPost />
      <SecondPopularPosts />
      <SubFooter />
      <Footer />
    </React.Fragment>
  );
};

// the welcome banner
const WelcomeBanner = () => {
  return (
    <section className="welcome_banner  bg-blue-900">
      <div className="banner_text relative py-[40px]">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-24 max-w-[84%]  md:max-w-[80%] mx-auto">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-semibold leading-12 md:leading-15">
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
const SubBanner = () => {
  return (
    <section className="max-w-[90%] sm:max-w-[80%] mx-auto mt-16">
      <div className="sub_content">
        <img
          src={SubImage}
          alt=""
          className="h-60 sm:h-100 md:h-120 w-[100vw]"
        />
        <div className="flex justify-end py-8 bg-white rounded-xl relative  md:top-[-100px] lg:top-[-150px] sm:ml-28 md:ml-32 mb-24 md:mb-0 px-4 sm:px-8">
          <div>
            <div className="flex gap-8 items-center text-sm mb-4">
              <p className="text-zinc-900 font-semibold">Development</p>
              <p className="text-zinc-600 font-semibold">16th of March 2025</p>
            </div>
            <h1 className="text-zinc-900 font-semibold text-xl md:text-3xl">
              How to make a Game look more attractive with New VR & AI
              Technology
            </h1>
            <p className="text-zinc-500 font-normal py-6 text-[14px] sm:text-[16px]">
              Google has been investing in AI for many years and bringing its
              benefits to individuals, businesses and communities. Whether it’s
              publishing state-of-the-art research, building helpful products or
              developing tools and resources that enable others, we’re committed
              to making AI accessible to everyone.
            </p>
            <div className="btn_class">
              <button className="text-white text-[14px] sm:text-[16px] font-medium bg-blue-900 hover:bg-white hover:text-blue-950 border hover:border-blue-950 transition-colors duration-300 px-8 py-2 rounded-sm cursor-pointer shadow-sm">
                <Link to={"/blogs"}>Read More</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// popular post

const RecentPost = () => {
  return (
    <section className="max-w-[90%] sm:max-w-[80%] mx-auto relative top-[-50px]">
      <div className="flex gap-2 flex-row justify-between items-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl text-zinc-800 font-semibold">
          Our Recent Post
        </h1>
        <div className="btn_class">
          <button className="text-white text-[14px] sm:text-[16px] font-medium bg-blue-900 hover:bg-white hover:text-blue-950 border hover:border-blue-950 transition-colors duration-300 px-8 py-2 rounded-sm cursor-pointer shadow-sm">
            <Link to={"/blogs"}>View All</Link>
          </button>
        </div>
      </div>
      <div className="post_grid grid md:grid-cols-2 gap-8 items-center mt-8">
        <div className="image">
          <img src={ThirdImage} alt="" />
        </div>
        <div>
          <div className="flex  gap-8 items-center text-sm mb-4">
            <p className="text-zinc-900 font-semibold">Development</p>
            <p className="text-zinc-600 font-semibold">16th of March 2025</p>
          </div>
          <h1 className="text-zinc-900 font-semibold text-xl sm:text-2xl  md:text-3xl hover:text-zinc-500 duration-300 cursor-pointer">
            How to make a Game look more attractive with New VR & AI Technology
          </h1>
          <p className="text-zinc-500 font-normal py-6">
            Google has been investing in AI for many years and bringing its
            benefits to individuals, businesses and communities. Whether it’s
            publishing state-of-the-art research, building helpful products or
            developing tools and resources that enable others, we’re committed
            to making AI accessible to everyone.
          </p>
          <div className="btn_class">
            <button className="text-white text-[14px] sm:text-[16px] font-medium bg-blue-900 hover:bg-white hover:text-blue-950 border hover:border-blue-950 transition-colors duration-300 px-8 py-2 rounded-sm cursor-pointer shadow-sm">
              <Link to={"/blogs"}>Read More</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <PopularPost />
      </div>
    </section>
  );
};

// sub popular post or any other section
interface PopularPost {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  createdAt: string;
}

const PopularPost = () => {
  const [popularFetch, setPopularFetch] = useState<PopularPost[]>([]);

  const fetchPopularPosts = async () => {
    try {
      const response = await axios.get(
        "https://task-server-0xvq.onrender.com/api/tasks"
      );

      if (response.status === 200) {
        setPopularFetch(response.data.slice(0, 3));
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPopularPosts();
  }, []);

  const MAXLENGTH = 100;

  return (
    <main className="blogs_posts">
      <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        {popularFetch.map((bloggss) => (
          <div className="potss" key={bloggss._id}>
            <div className="overflow-hidden h-60">
              <img
                src={bloggss.image}
                className="w-full h-full object-cover transition-transform ease-in-out hover:scale-120 duration-500 cursor-pointer"
                alt="Zoom Image"
              />
            </div>
            <div>
              <div className="flex gap-8 items-center">
                <p
                  className={`text-sms p-2 rounded-2xl font-semibold capitalize my-4 ${
                    bloggss.subtitle === "Technology"
                      ? "text-red-700 bg-red-100"
                      : bloggss.subtitle === "Agriculture"
                      ? "text-green-700 bg-green-100"
                      : bloggss.subtitle === "Development"
                      ? "text-yellow-700 bg-yellow-100"
                      : bloggss.subtitle === "Fashion"
                      ? "text-pink-700 bg-pink-100"
                      : "text-blue-700 bg-blue-100"
                  }`}
                >
                  {bloggss.subtitle}
                </p>
                <p className="text-sm text-balance text-zinc-500 font-semibold">
                  {bloggss.createdAt}
                </p>
              </div>
              <h1 className="text-blue-900 text-xl font-bold text-balance mb-4">
                {bloggss.title}
              </h1>
              <p className="text-zinc-600 text-balance mb-4">
                {bloggss.description.length > MAXLENGTH
                  ? `${bloggss.description.slice(0, MAXLENGTH)}...`
                  : bloggss.description}
              </p>
              <div className="btn_class">
                <button className="text-blue-700 text-[14px] sm:text-[14px] font-bold cursor-pointer text-balance hover:text-purple-900 duration-200 transition-colors">
                  <Link to={`/blog/${bloggss._id}`}>Read More</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </article>
    </main>
  );
};

const SecondPopularPosts = () => {
  interface PopularPost {
    _id: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    createdAt: string;
  }
  const [popularFetch, setPopularFetch] = useState<PopularPost[]>([]);

  const fetchPopularPosts = async () => {
    try {
      const response = await axios.get(
        "https://task-server-0xvq.onrender.com/api/tasks"
      );

      if (response.status === 200) {
        setPopularFetch(response.data.slice(3, 7));
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPopularPosts();
  }, []);

  const MAXLENGTH = 100;

  return (
    <main className="blogs_posts max-w-[90%] sm:max-w-[80%] mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl sm:text-2xl md:text-3xl text-zinc-800 font-semibold">
          Popular Post
        </h1>
        <div className="btn_class">
          <button className="text-white text-[14px] sm:text-[16px] font-medium bg-blue-900 hover:bg-white hover:text-blue-950 border hover:border-blue-950 transition-colors duration-300 px-8 py-2 rounded-sm cursor-pointer shadow-sm">
            <Link to={"/blogs"}>View All</Link>
          </button>
        </div>
      </div>
      <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        {popularFetch.map((bloggss) => (
          <div className="potss" key={bloggss._id}>
            <div className="overflow-hidden h-60">
              <img
                src={bloggss.image}
                className="w-full h-full object-cover transition-transform ease-in-out hover:scale-120 duration-500 cursor-pointer"
                alt="Zoom Image"
              />
            </div>
            <div>
              <div className="flex gap-8 items-center">
                <p
                  className={`text-sms p-2 rounded-2xl font-semibold capitalize my-4 ${
                    bloggss.subtitle === "Technology"
                      ? "text-red-700 bg-red-100"
                      : bloggss.subtitle === "Agriculture"
                      ? "text-green-700 bg-green-100"
                      : bloggss.subtitle === "Development"
                      ? "text-yellow-700 bg-yellow-100"
                      : bloggss.subtitle === "Fashion"
                      ? "text-pink-700 bg-pink-100"
                      : "text-blue-700 bg-blue-100"
                  }`}
                >
                  {bloggss.subtitle}
                </p>
                <p className="text-sm text-balance text-zinc-500 font-semibold">
                  {new Date(bloggss.createdAt).toDateString()}
                </p>
              </div>
              <h1 className="text-blue-900 text-xl font-bold text-balance mb-4">
                {bloggss.title}
              </h1>
              <p className="text-zinc-600 text-balance mb-4">
                {bloggss.description.length > MAXLENGTH
                  ? `${bloggss.description.slice(0, MAXLENGTH)}...`
                  : bloggss.description}
              </p>
              <div className="btn_class">
                <button className="text-blue-700 text-[14px] sm:text-[14px] font-bold cursor-pointer text-balance hover:text-purple-900 duration-200 transition-colors">
                  <Link to={`/blog/${bloggss._id}`}>Read More</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </article>
    </main>
  );
};

export default Home;
