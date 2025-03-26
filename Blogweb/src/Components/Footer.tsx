import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import Logo from "./Logo";
import { Link } from "react-router";
import { FaInstagram, FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  const Navigation = [
    {
      navLabel: "Home",
      navLink: "/",
    },
    {
      navLabel: "About",
      navLink: "/about",
    },
    {
      navLabel: "Blogs",
      navLink: "/blogs",
    },
    {
      navLabel: "Contact us",
      navLink: "/contact",
    },
  ];

  return (
    <section className="">
      <div className="footer_contents flex flex-col justify-center items-center gap-8 my-8 py-10 border-b border-b-zinc-400 max-w-[90%] mx-auto">
        <div className="logo">
          <Logo />
        </div>
        <div className="nav_links">
          <ul className="flex items-center gap-4 sm:gap-12 capitalize">
            {Navigation.map((navBar) => (
              <li
                className="cursor-pointer text-zinc-700 hover:text-blue-900 transition-colors duration-300"
                key={navBar.navLabel}
              >
                <Link to={`${navBar.navLink}`}>{navBar.navLabel}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="social_links flex items-center gap-12 text-2xl text-blue-900 cursor-pointer">
          <FaFacebook />
          <FaInstagram />
          <FaSquareXTwitter />
          <FaWhatsapp />
        </div>
      </div>
      <div className="text-center text-zinc-700 pb-8">
        <p>Copyright Blogspot © 2025. All Right Reserved</p>
      </div>
    </section>
  );
};

export default Footer;
