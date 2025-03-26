import React from "react";
import { Link } from "react-router";
import Eclipse from "../assets/eclipse.png";
import BannerImage from "../assets/Banner.png";
import SubImage from "../assets/Second.png";
import ThirdImage from "../assets/Third.png";
import Rules from "../assets/Rules.png";
import Build from "../assets/build.png";
import FootBall from "../assets/football.png";

const Home = () => {
  return (
    <React.Fragment>
      <WelcomeBanner />
      <SubBanner />
      <RecentPost />
      <SecondPopularPosts />
    </React.Fragment>
  );
};

// the welcome banner
const WelcomeBanner = () => {
  return (
    <section className="welcome_banner  bg-blue-900">
      <div className="banner_text relative py-[40px]">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-24 max-w-[90%]  md:max-w-[80%] mx-auto">
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
        <div className="flex justify-end py-8 bg-white rounded-xl relative top-[-100px] md:top-[-100px] lg:top-[-150px] ml-4 sm:ml-28 md:ml-32 px-8">
          <div>
            <div className="flex  gap-8 items-center text-sm mb-4">
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
              <button className="text-white font-medium bg-blue-900 hover:bg-white hover:text-blue-950 border hover:border-blue-950 transition-colors duration-300 px-8 py-2 rounded-sm cursor-pointer shadow-sm">
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
    <section className="max-w-[80%] mx-auto relative top-[-50px]">
      <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
        <h1 className="text-3xl text-zinc-800 font-semibold">
          Our Recent Post
        </h1>
        <div className="btn_class">
          <button className="text-white font-medium bg-blue-900 hover:bg-white hover:text-blue-950 border hover:border-blue-950 transition-colors duration-300 px-8 py-2 rounded-sm cursor-pointer shadow-sm">
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
          <h1 className="text-zinc-900 font-semibold text-3xl hover:text-zinc-500 duration-300 cursor-pointer">
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
            <button className="text-white font-medium bg-blue-900 hover:bg-white hover:text-blue-950 border hover:border-blue-950 transition-colors duration-300 px-8 py-2 rounded-sm cursor-pointer shadow-sm">
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
const PopularPost = () => {
  const DummyPosts = [
    {
      Imagess: Rules,
      title: "8 Rules of Travelling In Sea You Need To Know",
      Description:
        "Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs ",
      subTitle: "Travel",
      dates: "13 March 2023",
    },
    {
      Imagess: Build,
      title: "How to build strong portfolio and get a Job in UI/UX",
      Description:
        "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from ",
      subTitle: "Development",
      dates: "11 March 2023",
    },
    {
      Imagess: FootBall,
      title: "How to Be a Professional Footballer in 2023",
      Description:
        "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive",
      subTitle: "Sports",
      dates: "16 March 2023",
    },
  ];

  return (
    <main className="blogs_posts">
      <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        {DummyPosts.map((bloggss, index) => (
          <div className="potss" key={index}>
            <div className="overflow-hidden">
              <img
                src={bloggss.Imagess}
                className="w-full h-full object-cover transition-transform ease-in-out hover:scale-120 duration-500 cursor-pointer"
                alt="Zoom Image"
              />
            </div>
            <div>
              <div className="flex gap-8 items-center">
                <p className="text-sm text-zinc-700 font-semibold capitalize my-4">
                  {bloggss.subTitle}
                </p>
                <p className="text-sm text-balance text-zinc-500">
                  {bloggss.dates}
                </p>
              </div>
              <h1 className="text-zinc-900 text-xl font-bold text-balance mb-4">
                {bloggss.title}
              </h1>
              <p className="text-zinc-600 text-balance mb-4">
                {bloggss.Description}
              </p>
              <div className="btn_class">
                <button className="text-purple-900 font-bold underline cursor-pointer text-balance">
                  <Link to={"/blogs"}>Read More</Link>
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
  const DummyPosts = [
    {
      Imagess: Rules,
      title: "8 Rules of Travelling In Sea You Need To Know",
      Description:
        "Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs ",
      subTitle: "Travel",
      dates: "13 March 2023",
    },
    {
      Imagess: Build,
      title: "How to build strong portfolio and get a Job in UI/UX",
      Description:
        "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from ",
      subTitle: "Development",
      dates: "11 March 2023",
    },
    {
      Imagess: FootBall,
      title: "How to Be a Professional Footballer in 2023",
      Description:
        "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive",
      subTitle: "Sports",
      dates: "16 March 2023",
    },
    {
      Imagess: Rules,
      title: "8 Rules of Travelling In Sea You Need To Know",
      Description:
        "Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs ",
      subTitle: "Travel",
      dates: "13 March 2023",
    },
    {
      Imagess: Build,
      title: "How to build strong portfolio and get a Job in UI/UX",
      Description:
        "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from ",
      subTitle: "Development",
      dates: "11 March 2023",
    },
    {
      Imagess: FootBall,
      title: "How to Be a Professional Footballer in 2023",
      Description:
        "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive",
      subTitle: "Sports",
      dates: "16 March 2023",
    },
  ];
  return (
    <section className="max-w-[80%] mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl text-zinc-800 font-semibold">Popular Post</h1>
        <div className="btn_class">
          <button className="text-white font-medium bg-blue-900 hover:bg-white hover:text-blue-950 border hover:border-blue-950 transition-colors duration-300 px-8 py-2 rounded-sm cursor-pointer shadow-sm">
            <Link to={"/blogs"}>View All</Link>
          </button>
        </div>
      </div>
      <main className="blogs_posts">
        <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {DummyPosts.map((bloggss, index) => (
            <div className="potss" key={index}>
              <div className="overflow-hidden">
                <img
                  src={bloggss.Imagess}
                  className="w-full h-full object-cover transition-transform ease-in-out hover:scale-120 duration-500 cursor-pointer"
                  alt="Zoom Image"
                />
              </div>
              <div>
                <div className="flex gap-8 items-center">
                  <p className="text-sm text-zinc-700 font-semibold capitalize my-4">
                    {bloggss.subTitle}
                  </p>
                  <p className="text-sm text-balance text-zinc-500">
                    {bloggss.dates}
                  </p>
                </div>
                <h1 className="text-zinc-900 text-xl font-bold mb-4">
                  {bloggss.title}
                </h1>
                <p className="text-zinc-600 w-full mb-4">
                  {bloggss.Description}
                </p>
                <div className="btn_class">
                  <button className="text-purple-900 font-bold underline cursor-pointer text-balance">
                    <Link to={"/blogs"}>Read More</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </article>
      </main>
    </section>
  );
};

export default Home;
