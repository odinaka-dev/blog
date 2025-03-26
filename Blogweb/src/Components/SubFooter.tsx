import Eclipse from "../assets/eclipse.png";

const SubFooter = () => {
  return (
    <section className="bg-blue-900 text-white py-[100px] text-center mt-16">
      <div className="relative">
        <div className="max-w-[90%] sm:max-w-[70%] md:max-w-[50%] mx-auto">
          <h1 className="text-4xl font-semibold">
            Get updated stories delivered to your inbox weekly.
          </h1>
          <p className="font-light mt-2 text-balance">
            Get a response on latest blog posts if you submit your mail today.
            receive the very best stories, blogs, and amazing author drops.
          </p>
          <div className="email_letter mt-8 sm:mt-4">
            <form action="">
              <input
                type="email"
                name="email"
                id=""
                placeholder="Your Email"
                className="border border-white py-2 px-4 rounded-sm outline-none cursor-pointer mb-2 sm:mb-0"
              />
              <input
                value="Get started"
                type="submit"
                className="bg-white px-16 sm:px-8 py-2 text-blue-900 rounded-sm"
              />
            </form>
          </div>
        </div>
        <div className="absolute top-[-100px] left-[-220px]  transform rotate-310">
          <img src={Eclipse} alt="" className="" />
        </div>
      </div>
    </section>
  );
};

export default SubFooter;
