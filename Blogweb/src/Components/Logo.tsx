import { SiMedusa } from "react-icons/si";

const Logo = () => {
  return (
    <section className="text-blue-900">
      <div className="flex items-center space-x-2 text-2xl font-bold">
        <SiMedusa className="text-blue-700" />
        <h1 className="">BlogSpot</h1>
      </div>
    </section>
  );
};

export default Logo;
