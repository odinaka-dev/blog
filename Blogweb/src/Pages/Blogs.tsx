import React from "react";
import { Link } from "react-router";
import Rules from "../assets/Rules.png";
import Build from "../assets/build.png";
import FootBall from "../assets/football.png";
import SubFooter from "../Components/SubFooter";
import Footer from "../Components/Footer";
import { BiSearch } from "react-icons/bi";

const Blogs = () => {
  return (
    <React.Fragment>
      <BlogsBanner />
      <BlogsPosts />
      <SubFooter />
      <Footer />
    </React.Fragment>
  );
};

const BlogsBanner = () => {
  return (
    <section className="">
      <div className="text-center my-16 max-w-[90%]  sm:max-w-[80%] mx-auto">
        <h1 className="text-blue-950 text-[18px] font-semibold uppercase">
          our blogs
        </h1>
        <h1 className="text-blue-950 text-2xl  sm:text-2xl  md:text-4xl font-bold my-4">
          Find all our Blogs from here
        </h1>
        <p className="text-zinc-600 text-balance leading-7">
          our blogs are written from very seasoned researchers and well talented
          writers so that we can provide you the best blogs and articles posts
          for you to read them all along.
        </p>
        <div className="search_Icon flex items-center gap-4 text-lg bg-white rounded-3xl mt-4 py-4 px-8 shadow-2xl">
          <BiSearch />
          <input
            type="text"
            className="bg-none text-zinc-900 outline-none w-full"
            placeholder="Search your favorite blog..."
          />
        </div>
      </div>
    </section>
  );
};

const BlogsPosts = () => {
  const DummyPosts = [
    {
      id: 1,
      Imagess: Rules,
      title: "8 Rules of Travelling In Sea You Need To Know",
      Description:
        "Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs ",
      subTitle: "Travel",
      dates: "13 March 2023",
    },
    {
      id: 2,
      Imagess: Build,
      title: "How to build strong portfolio and get a Job in UI/UX",
      Description:
        "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from ",
      subTitle: "Development",
      dates: "11 March 2023",
    },
    {
      id: 3,
      Imagess: FootBall,
      title: "How to Be a Professional Footballer in 2023",
      Description:
        "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive",
      subTitle: "Sports",
      dates: "16 March 2023",
    },
    {
      id: 4,
      Imagess: Rules,
      title: "8 Rules of Travelling In Sea You Need To Know",
      Description:
        "Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs ",
      subTitle: "Travel",
      dates: "13 March 2023",
    },
    {
      id: 5,
      Imagess: Build,
      title: "How to build strong portfolio and get a Job in UI/UX",
      Description:
        "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from ",
      subTitle: "Development",
      dates: "11 March 2023",
    },
    {
      id: 6,
      Imagess: FootBall,
      title: "How to Be a Professional Footballer in 2023",
      Description:
        "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive",
      subTitle: "Sports",
      dates: "16 March 2023",
    },
    {
      id: 7,
      Imagess: Rules,
      title: "8 Rules of Travelling In Sea You Need To Know",
      Description:
        "Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs ",
      subTitle: "Travel",
      dates: "13 March 2023",
    },
    {
      id: 8,
      Imagess: Build,
      title: "How to build strong portfolio and get a Job in UI/UX",
      Description:
        "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from ",
      subTitle: "Development",
      dates: "11 March 2023",
    },
    {
      id: 9,
      Imagess: FootBall,
      title: "How to Be a Professional Footballer in 2023",
      Description:
        "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive",
      subTitle: "Sports",
      dates: "16 March 2023",
    },
  ];

  return (
    <main className="blogs_posts max-w-[90%] mx-auto">
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
                <button className="text-purple-900 text-[14px] sm:text-[16px] font-bold underline cursor-pointer text-balance">
                  <Link to={`/blog/${bloggss.id}`}>Read More</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </article>
    </main>
  );
};

export default Blogs;
