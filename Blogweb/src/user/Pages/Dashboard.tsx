import React from "react";
import { BsPerson } from "react-icons/bs";
import { BiBookReader } from "react-icons/bi";
import { MdWebStories } from "react-icons/md";
import { GrLike } from "react-icons/gr";
import CardTableData from "../Components/CardTable";

const Dashboard = () => {
  return (
    <React.Fragment>
      <section className="mx-2 sm:mx-4 md:mx-8">
        <SubHeader />
        <DashboardComponent />
        <CardTableData />
      </section>
    </React.Fragment>
  );
};

const SubHeader = () => {
  return (
    <div className="relative top-0">
      <div className="border-b border-b-zinc-300 bg-white py-4 px-2 sm:px-6 flex justify-between items-center text-blue-800">
        <div className="capitalize font-bold">Dashboard</div>
        <div className="flex items-center gap-2">
          <p>Uchechukwu Peter</p>
          <div className="p-2 bg-blue-400 text-white rounded-[50%]">
            <BsPerson />
          </div>
        </div>
      </div>
    </div>
  );
};

const DashboardComponent = () => {
  const DummyData = [
    {
      count: "20",
      label: "Blogs",
      icon: <BsPerson />,
    },
    {
      count: "200+",
      label: "Readers",
      icon: <BiBookReader />,
    },
    {
      count: "200+",
      label: "Likes",
      icon: <GrLike />,
    },
    {
      count: "10",
      label: "Stories",
      icon: <MdWebStories />,
    },
  ];

  return (
    <section className="">
      <div className="dashboard mx-2 my-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {DummyData.map((data) => (
          <div className="bg-white shadow-md p-6 border-t-4 border-t-blue-900 flex flex-col justify-center items-center">
            <div className="text-xl text-blue-900 bg-blue-100 p-4 rounded-[50%] font-bold">
              {data.icon}
            </div>
            <h1 className="text-4xl font-bold text-blue-950">{data.count}</h1>
            <p className="text-zinc-700 font-medium text-base">{data.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Dashboard;
