import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 100;

      setIsNavbarFixed(scrollPosition > threshold);

      // Detectar dirección del scroll
      if (scrollPosition > lastScrollTop) {
        // Scrolling hacia abajo
        setOpen(false);
      } else {
        // Scrolling hacia arriba
      }

      setLastScrollTop(scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <header
      className={`${
        isNavbarFixed ? "fixed top-0 left-0 w-full z-50 bg-blue-500 bg-opacity-90" : "bg-blue-500 bg-opacity-90"
      } flex w-full items-center text-white dark:bg-dark`}
    >
      <div className="container px-10 flex justify-center items-center"> {/* Ajuste del padding a 10px y centrado */}
        <div className="flex flex-col w-full lg:flex-row items-center justify-between">
          <div className="lg:hidden self-end ml-auto">
            <button
              onClick={() => setOpen(!open)}
              id="navbarToggler"
              className={`${
                open ? "navbarTogglerActive text-transparent bg-opacity-50" : ""
              } focus:outline-none text-white text-xl`}
            >
              <span className="block w-8 h-1 bg-white mb-1"></span>
              <span className="block w-8 h-1 bg-white mb-1"></span>
              <span className="block w-8 h-1 bg-white"></span>
            </button>
          </div>
          <nav
            id="navbarCollapse"
            className={`${
              open ? "block" : "hidden"
            } lg:flex lg:items-center lg:w-auto`}
          >
            <ul className="lg:flex justify-center items-center w-full lg:w-auto">
              <ListItem NavLink="/#">Quien soy</ListItem>
              <ListItem NavLink="/#">Tecnologías</ListItem>
              <ListItem NavLink="/#">Trabajos</ListItem>
              <ListItem NavLink="/#" className="ml-auto lg:ml-0">Contacto</ListItem>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

const ListItem = ({ children, NavLink, className }) => {
  return (
    <li className={`mr-4 lg:mr-6 ${className || ""}`}>
      <a
        href={NavLink}
        className="flex py-2 text-base font-medium relative group transition-colors duration-300 hover:text-yellow-500"
      >
        {children}
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-dark transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
      </a>
    </li>
  );
};

export default Navbar;
