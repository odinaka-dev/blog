import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Pages/Home";
import Layout from "./Components/Layout";
import Error from "./Pages/Error";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Pageloader from "./Components/pageLoader";
// users imports
import Dashboard from "./user/Pages/Dashboard";
import AddBlogs from "./user/Pages/AddBlogs";
import AllBlogs from "./user/Pages/AllBlogs";
import Analytics from "./user/Pages/Analytics";
import Settings from "./user/Pages/Settings";
import DashboardLayout from "./user/Components/DashboardLayout";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "blogs", element: <Blogs /> },
      { path: "blog/:id", element: <Blog /> },
      { path: "contact", element: <Contact /> },
      { path: "pageloader", element: <Pageloader /> },
      // Registered users Dashboard
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "add", element: <AddBlogs /> },
      { path: "all", element: <AllBlogs /> },
      { path: "analytics", element: <Analytics /> },
      { path: "settings", element: <Settings /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
