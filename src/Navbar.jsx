import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
// import { Context } from "../Context";
import { Menu, X, CodeXml } from "lucide-react";
import React from "react";

const NavbarLandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  //   const { user } = useContext(Context);

  const location = useLocation();
  // const navigate = useNavigate();
  // const isLandingPage = location.pathname === "/";

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = document.querySelector("nav").offsetHeight;
      const sectionTop =
        section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    }
    if (isMenuOpen) setIsMenuOpen(false);
  };

  // const handleLoginClick = () => navigate("/login");

  return (
    <div className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <nav className="items-center justify-between p-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center gap-4">
            {/* Logo and standard navigation */}
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <CodeXml className="text-blue-950" size={25} />
                <NavLink
                  to={"/"}
                  //   className="text-xl font-bold flex items-left gap-1"
                  //   aria-label="Go to Dashboard Home"
                >
                  {/* <img src={ring} alt="" className="w-11 h-7 mt-2" /> */}

                  <span
                    style={{ fontFamily: "Montserrat" }}
                    className="text-4xl font-light flex flex-col"
                  >
                    Web Developer
                  </span>
                </NavLink>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 items-center">
              <a
                href="#about"
                onClick={(e) => scrollToSection(e, "about")}
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                onClick={(e) => scrollToSection(e, "skills")}
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                Skills
              </a>
              <a
                href="#experience"
                onClick={(e) => scrollToSection(e, "experience")}
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, "projects")}
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "contact")}
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded hover:bg-gray-700"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-2 pt-2 border-t border-gray-700">
              <div className="flex flex-col space-y-2">
                <a
                  href="#about"
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    scrollToSection(e, "about");
                  }}
                  className="text-gray-600 hover:text-pink-500 py-2 transition-colors"
                >
                  About
                </a>
                <a
                  href="#skills"
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    scrollToSection(e, "skills");
                  }}
                  className="text-gray-600 hover:text-pink-500 py-2 transition-colors"
                >
                  Skills
                </a>
                <a
                  href="#experience"
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    scrollToSection(e, "experience");
                  }}
                  className="text-gray-600 hover:text-pink-500 py-2 transition-colors"
                >
                  Experience
                </a>
                <a
                  href="#projects"
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    scrollToSection(e, "projects");
                  }}
                  className="text-gray-600 hover:text-pink-500 py-2 transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    scrollToSection(e, "contact");
                  }}
                  className="text-gray-600 hover:text-pink-500 py-2 transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavbarLandingPage;
