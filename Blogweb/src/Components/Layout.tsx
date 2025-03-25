import { Outlet } from "react-router";
import Header from "./Header";
const Layout = () => {
  return (
    <section>
      <Header />
      <Outlet />
    </section>
  );
};

export default Layout;
