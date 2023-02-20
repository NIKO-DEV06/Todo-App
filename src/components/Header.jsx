import React from "react";

import moonSvg from "../assets/icon-moon.svg";
import sunSvg from "../assets/icon-sun.svg";

const Header = (props) => {
  const toggleTheme = (mode) => {
    props.onToggleTheme(mode);
  };
  return (
    <section className="">
      <div className="w-[85%] flex justify-between mx-auto items-center my-16 mb-8 md:w-1/2 md:mx-auto lg:w-[40%] lg:mx-auto">
        <h1 className="text-white tracking-widest text-[1.4rem] md:text-[2rem] font-semibold uppercase">
          Todo
        </h1>
        <div>
          <img
            src={props.theme === "light" ? moonSvg : sunSvg}
            alt=""
            className=" cursor-pointer"
            onClick={toggleTheme}
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
