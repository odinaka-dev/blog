import { useState } from "react";
import { BsPerson } from "react-icons/bs";
import axios from "axios";

const AddBlogs = () => {
  return (
    <div className="h-[100vh] w-full">
      <AdminBody />
    </div>
  );
};

const AdminBody = () => {
  // state for the post request
  const [blogTitle, setBlogTitle] = useState("");
  const [blogSubTitle, setBlogSubTitle] = useState("");
  const [blogImage, setBlogImage] = useState("");
  const [blogAuthor, setBlogAuthor] = useState("");
  const [blogDescription, setBlogDescription] = useState("");

  const PostContents = async (e: { preventDefault: () => void }) => {
    e.preventDefault(); // Prevent page reload

    const items = {
      title: blogTitle,
      subtitle: blogSubTitle,
      image: blogImage,
      author: blogAuthor,
      description: blogDescription,
    };

    // POST request for the blogs.
    try {
      const request = await axios.post(
        "https://task-server-0xvq.onrender.com/api/tasks",
        items,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (request.status === 200) {
        console.log("Post successful:", request.data);
      }
    } catch (error) {
      console.error("Could not upload your blog successfully");
    }
  };

  return (
    <section>
      <div>
        <SubHeader />
      </div>
      <div className="products_body bg-gray-50 p-2">
        <section className="add_form mt-2 bg-white p-4 rounded-lg shadow-sm">
          <form onSubmit={PostContents}>
            <div className="product_info grid grid-cols-2 gap-4 items-center">
              <div className="product_name flex flex-col items-start gap-2">
                <label className="text-black font-medium text-sm">
                  Blog Title
                </label>
                <input
                  type="text"
                  placeholder="Blog title"
                  className="outline-none border border-zinc-400 w-full p-2 rounded-lg text-sm"
                  required
                  value={blogTitle}
                  onChange={(e) => setBlogTitle(e.target.value)}
                />
              </div>
              <div className="product_name">
                <label className="text-black font-medium text-sm">
                  Subtitle
                </label>
                <input
                  type="text"
                  placeholder="Technology, Development, etc."
                  className="outline-none border border-zinc-400 w-full p-2 rounded-lg text-sm"
                  required
                  value={blogSubTitle}
                  onChange={(e) => setBlogSubTitle(e.target.value)}
                />
              </div>
            </div>

            <div className="product_info grid grid-cols-2 gap-4 items-center my-4">
              <div className="product_name flex flex-col items-start gap-2">
                <label className="text-black font-medium text-sm">
                  Image Link
                </label>
                <input
                  type="text"
                  placeholder="Input Image link"
                  className="outline-none border border-zinc-400 w-full p-2 rounded-lg text-sm"
                  required
                  value={blogImage}
                  onChange={(e) => setBlogImage(e.target.value)}
                />
              </div>
              <div className="product_name">
                <label className="text-black font-medium text-sm">Author</label>
                <input
                  type="text"
                  placeholder="Name of author"
                  className="outline-none border border-zinc-400 w-full p-2 rounded-lg text-sm"
                  required
                  value={blogAuthor}
                  onChange={(e) => setBlogAuthor(e.target.value)}
                />
              </div>
            </div>

            {/* rich text functionality */}
            <div className="desc flex flex-col gap-8 items-start">
              <label className="text-black font-medium text-sm mt-2">
                Blog Description
              </label>
              <textarea
                cols={30}
                rows={10}
                className="outline-none border border-zinc-400 w-full rounded-lg py-4 px-2 text-sm"
                required
                value={blogDescription}
                onChange={(e) => setBlogDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="my-2 text-right">
              <button
                type="button"
                className="py-2 px-8 rounded-lg bg-blue-200 text-white text-sm mt-2 mr-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="py-2 px-8 rounded-lg bg-blue-800 text-white text-sm mt-2"
              >
                Upload Blog
              </button>
            </div>
          </form>
        </section>
      </div>
    </section>
  );
};

const SubHeader = () => {
  return (
    <div className="relative top-0">
      <div className="border-b border-b-zinc-300 bg-white py-4 px-2 sm:px-6 flex justify-between items-center text-blue-800">
        <div className="capitalize font-bold">Add New Blogs</div>
        <div className="flex items-center gap-2">
          <p>Uchechukwu Peter</p>
          <div className="p-2 bg-blue-400 text-white rounded-full">
            <BsPerson />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlogs;
