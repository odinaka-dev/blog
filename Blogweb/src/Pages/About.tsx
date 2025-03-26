import React from "react";
// import { Link } from "react-router";
import SubFooter from "../Components/SubFooter";
import Footer from "../Components/Footer";
import AboutImage from "../assets/Aboutbanner.png";
import { Link } from "react-router";

const About = () => {
  return (
    <React.Fragment>
      <AboutBanner />
      <SubBanner />
      <AboutInformation />
      <SubFooter />
      <Footer />
    </React.Fragment>
  );
};

// about Banner
const AboutBanner = () => {
  return (
    <section className="">
      <div className="text-center my-16 max-w-[90%]  sm:max-w-[80%] mx-auto">
        <h1 className="text-zinc-700 text-[18px] font-semibold capitalize">
          about us
        </h1>
        <h1 className="text-zinc-900 text-2xl  sm:text-2xl  md:text-4xl font-semibold my-4">
          Creative Blog Writting and Publishing site, <br /> Community and
          Space.
        </h1>
        <p className="text-zinc-600 text-balance leading-7">
          We Leverage agile blogspot frameworks to provide a robust synopsis for
          high level overviews. Iterative approaches to corporate strategy
          foster collaborative thinking to further the overall value
          proposition. Organically grow the holistic world view of disruptive
          innovation via workplace diversity and empowerment. Always creating a
          space that fosters amazing stories.
        </p>
        <div className="about_image mt-12">
          <img src={AboutImage} alt="" />
        </div>
      </div>
    </section>
  );
};

// sub about banner
const SubBanner = () => {
  return (
    <section className="max-w-[80%] mx-auto">
      <div className="banner_text">
        <h1 className="text-zinc-700 font-bold uppercase">How we work</h1>
        <div className="grid grid-cols-1  md:grid-cols-2 items-center gap-8  md:gap-24 my-8">
          <div className="sub_header">
            <h1 className="text-zinc-700 text-3xl font-semibold capitalize text-balance">
              This is How Blogspot works for our Bloggers.
            </h1>
          </div>
          <div className="sub_content">
            <p className="text-zinc-500 text-balance">
              We Bring and provide to our bloggers a win-win market strategies
              to ensure perfect articles, blogs, stories from our bloggers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// about information
const AboutInformation = () => {
  const HowWeWork = [
    {
      firstHeader: "01",
      SecondHeader: "Brainstorming",
      paragraph:
        "Bring to the table win-win blogspot strategies to ensure proactive domination. At the end of the day, the very best stories are given the opportunity to showcase talents. The process of brainstorming is paramount to all our bloggers.",
    },
    {
      firstHeader: "02",
      SecondHeader: "Analysing",
      paragraph:
        "We Analyze the idea you send to blogspot, we make sure the best is fed to all our users, readers and blog lovers. What you have might just be the best that another user needs to read. Whether it's a blog story, article, or more, we gat you covered.",
    },
    {
      firstHeader: "03",
      SecondHeader: "Blogs Publishing",
      paragraph:
        "After the process of analyzing we provide the avenue to showcase your works to multiple readers, you can also post your books, stories and thought out well planned ideas on Blogspot, we provide the readers and the views. Blogspot.",
    },
  ];
  return (
    <section className="max-w-[80%] mx-auto text-zinc-600">
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
        {HowWeWork.map((work) => (
          <div
            className="01 cursor-pointer hover:bg-blue-900 hover:text-white  p-4 py-8 rounded-sm transition-colors duration-300"
            key={work.firstHeader}
          >
            <h1 className="text-5xl my-6 font-bold">{work.firstHeader}</h1>
            <p className=" font-bold text-xl mb-4">{work.SecondHeader}</p>
            <p className="text-balance">{work.paragraph}</p>
            <button className="mt-4 font-bold underline">
              <Link to={"/"}>Learn More</Link>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
