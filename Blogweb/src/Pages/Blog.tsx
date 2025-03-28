import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import { useParams } from "react-router";
import Footer from "../Components/Footer";

const Blog = () => {
  return (
    <React.Fragment>
      <SingleBlogPost />
      <PopularPost />
      <Footer />
    </React.Fragment>
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

const SingleBlogPost = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<Blog>({} as Blog);

  useEffect(() => {
    const fetchSingle = async () => {
      try {
        const response = await axios.get(
          `https://task-server-0xvq.onrender.com/api/tasks/${id}`
        );
        if (response.status === 200) {
          setBlog(response.data);
          console.log(response.data);
        } else {
          console.error("could not fetch this blog");
        }
      } catch (error) {
        console.error("failed to fetch this blog from the server");
      }
    };

    fetchSingle();
  }, [id]);

  return (
    <section className="single_posts max-w-[90%] sm:max-w-[80%] mx-auto">
      <div
        className="my-12 mt-18 pb-8 border-b border-b-zinc-300"
        key={blog._id}
      >
        <div className="flex  gap-8 items-center text-sm mb-4">
          <p
            className={`text-sms p-2 rounded-2xl font-semibold capitalize my-4 ${
              blog.subtitle === "Technology"
                ? "text-red-700 bg-red-100"
                : blog.subtitle === "Agriculture"
                ? "text-green-700 bg-green-100"
                : blog.subtitle === "Development"
                ? "text-yellow-700 bg-yellow-100"
                : blog.subtitle === "Fashion"
                ? "text-pink-700 bg-pink-100"
                : "text-blue-700 bg-blue-100"
            }`}
          >
            {blog.subtitle}
          </p>
          <p className="text-zinc-600 font-semibold">
            {new Date(blog.createdAt).toDateString()}
          </p>
        </div>
        <div className="headerBlog">
          <h1 className="text-blue-950 font-semibold text-xl sm:text-2xl  md:text-3xl">
            {blog.title}
          </h1>
        </div>
        <div className="my-2 mt-8">
          <img src={blog.image} alt="" className="w-250 h-80" />
        </div>
        <div className="content_texts">
          <div className="max-w-[100%] md:max-w-[90%] mx-auto text-zinc-500 text-balance mt-8">
            {blog.description}
          </div>
        </div>
      </div>
    </section>
  );
};

// define the type of data you are fetching
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

export default Blog;
