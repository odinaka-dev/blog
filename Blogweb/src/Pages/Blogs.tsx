import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router";
import SubFooter from "../Components/SubFooter";
import Footer from "../Components/Footer";
import { BiSearch } from "react-icons/bi";
import Load from "../Components/Load";

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

interface Blog {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  createdAt: string;
}

const BlogsPosts = () => {
  const [fetchBlogs, setFetchBlogs] = useState<Blog[]>([]);

  const fetchingBlogs = async () => {
    try {
      const response = await axios.get(
        "https://task-server-0xvq.onrender.com/api/tasks"
      );
      if (response.status === 200) {
        setFetchBlogs(response.data);
        console.log(response.data[0].subtitle);
      }
    } catch (error) {
      console.error("error fetching the data");
    }
  };

  useEffect(() => {
    fetchingBlogs();
  }, []);

  const MAX_LENGTH = 100;

  return (
    <main className="blogs_posts max-w-[90%] mx-auto">
      {fetchBlogs.length > 0 ? (
        <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:;grid-cols-4 gap-4 mt-12">
          {fetchBlogs.map((bloggss) => (
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
                <h1 className="text-blue-950 text-lg font-bold text-balance mb-4">
                  {bloggss.title}
                </h1>
                <p className="text-zinc-600 text-balance mb-4">
                  {bloggss.description.length > MAX_LENGTH
                    ? `${bloggss.description.slice(0, MAX_LENGTH)}...`
                    : bloggss.description}
                </p>
                <div className="btn_class">
                  <button className="text-blue-800 text-[16px] sm:text-[14px] font-semibold cursor-pointer text-balance hover:text-purple-900 duration-300 transition-colors">
                    <Link to={`/blog/${bloggss._id}`}>Read More</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </article>
      ) : (
        <div className="grid grid-cols-3 gap-8 items-center my-8">
          <Load />
          <Load />
          <Load />
          <Load />
          <Load />
          <Load />
          <Load />
          <Load />
          <Load />
        </div>
      )}
    </main>
  );
};

export default Blogs;
