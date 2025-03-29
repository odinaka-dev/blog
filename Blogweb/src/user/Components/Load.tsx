// import { BiLoader } from "react-icons/bi";

const Load = () => {
  return (
    <div className="text-5xl text-blue-900">
      {/* <BiLoader /> */}
      <div className="bg-zinc-300 p-8 w-full h-50 animate-pulse"></div>
      <div className="bg-zinc-300 py-4 rounded-sm w-[80%] mt-4 animate-pulse"></div>
      <div className="bg-zinc-300 py-4 rounded-sm w-[20%] mt-2 animate-pulse"></div>
    </div>
  );
};

export default Load;
