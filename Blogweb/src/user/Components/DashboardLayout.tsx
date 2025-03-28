import DashboardHeader from "./DashboardHeader";
import { Outlet } from "react-router";
const DashboardLayout = () => {
  return (
    <section className="grid grid-cols-[5%_95%] w-full h-[100vh]">
      <DashboardHeader />
      <Outlet />
    </section>
  );
};

export default DashboardLayout;
