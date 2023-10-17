import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { FaXmark, FaBars } from "react-icons/fa6";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"; // react-scroll'den Link'i içe aktarın

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  // Menüyü açma/kapatma işlevi
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Event dinleyiciyi temizle
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "/home" },
    { link: "Service", path: "/service" },
    { link: "About", path: "/about" },
    { link: "Product", path: "/product" },
    { link: "Testimonial", path: "testimonialSection" },
    { link: "FAQ", path: "faqSection" }, 
  ];

  return (
    <header className={`w-full bg-white md:bg-transparent fixed top-0 left-0 right-0`}>
      <nav className={`p-4 lg:px-14 px-4 ${sticky ? "sticky top-0 left-0 right-0 border bg-white duration-300" : ""}`}>
        <div className="flex justify-between items-center text-base gap-8">
          <div className="flex items-center space-x-3">
            {/* Logo sol köşede */}
            <a href="" className="text-2xl font-semibold flex items-center space-x-3">
              <img src={logo} alt="" className="w-10 inline-block items-center" />
              <span className="text-[#263238]">NEXCENT</span>
            </a>
          </div>

          {/* Sadece mobil cihazlar için menü düğmesi sağ köşede */}
          <div className="md:hidden flex-grow text-right">
            <button className="text-neutralDGrey focus:outline-none focus:text-gray-500" onClick={toggleMenu}>
              {menuOpen ? (
                <FaXmark className="h-6 w-6 text-neutralDGrey" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Büyük ekranlar için gezinme öğeleri */}
          <ul className="md:flex space-x-12 hidden justify-start">
            {navItems.map(({ link, path }) => (
              <li key={path}>
                <ScrollLink to={path} spy={true} smooth={true} offset={-100} className="block cursor-pointer text-base text-gray-900 hover:text-brandPrimary first:font-medium">
                  {link}
                </ScrollLink>
              </li>
            ))}
          </ul>

          {/* Büyük cihazlar için düğmeler */}
          <div className="hidden lg:flex items-center space-x-12">
            <a href="/" className="text-brandPrimary hover:text-gray-900">Login</a>
            <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralGrey">
              Sign Up
            </button>
          </div>
        </div>

        {/* Küçük ekranlar için gezinme öğeleri */}
        {menuOpen && (
          <div className="md:hidden bg-brandPrimary text-white py-4 px-4">
            {navItems.map(({ link, path }) => (
              <ScrollLink
                to={path}
                key={path}
                spy={true}
                smooth={true}
                offset={-100} // Buradaki offset değerini ayarlayabilirsiniz
                className="block text-base text-white hover:text-gray-900 my-2"
              >
                {link}
              </ScrollLink>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
