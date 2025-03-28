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
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
