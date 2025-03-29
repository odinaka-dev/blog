import DashboardHeader from "./DashboardHeader";
import { Outlet } from "react-router";
const DashboardLayout = () => {
  return (
    <section className="grid sm:grid-cols-[12%_88%] md:grid-cols-[10%_90%] lg:grid-cols-[5%_95%] w-full h-[100vh]">
      <DashboardHeader />
      <Outlet />
    </section>
  );
};

export default DashboardLayout;
