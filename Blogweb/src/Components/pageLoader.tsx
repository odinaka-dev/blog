import { BiLoader } from "react-icons/bi";

const pageloader = () => {
  return (
    <div className="text-5xl md:text-8xl text-blue-900">
      <div className="flex justify-center items-center animate-spin mt-24">
        <BiLoader />
      </div>
    </div>
  );
};

export default pageloader;
