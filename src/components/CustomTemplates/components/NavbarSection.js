import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`z-50 p-3 w-screen flex justify-center fixed ${
        scrolling ? "bg-white" : "bg-transparent"
      }`}
    >
      <ul className="flex space-x-6">
        <li>
          <a href="/" className={`${scrolling ? "text-black" : "text-white"}`}>
            HOME
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={`${scrolling ? "text-black" : "text-white"}`}
          >
            ABOUT
          </a>
        </li>
        <li>
          <a
            href="#speakers"
            className={`${scrolling ? "text-black" : "text-white"}`}
          >
            SPEAKERS
          </a>
        </li>
        <li>
          <a
            href="#schedules"
            className={`${scrolling ? "text-black" : "text-white"}`}
          >
            SCHEDULES
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={`${scrolling ? "text-black" : "text-white"}`}
          >
            CONTACT
          </a>
        </li>
        <li>
          <a
            href="#query"
            className={`${scrolling ? "text-black" : "text-white"}`}
          >
            QUERY SUPPORT
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
