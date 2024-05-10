import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [active, setActive] = useState("");

  return (
    <nav
      className={`{styles.paddindx}  w-full flex items-center py-5 fixed top-0 z-20 bg-primary `}
    >
      <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
        <Link
          to="/"
          className="flex items-center gap-2 "
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="object-contain w-20 h-12" />
          <p className=" text-white text-[18px] font-bold cursor-pointer">Abdul <span>| Rehman</span></p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
