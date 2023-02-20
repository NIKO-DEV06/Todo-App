import React, { Fragment } from "react";

const Footer = (props) => {
  const handleFilterClick = (filterType) => {
    props.onFilterChange(filterType);
  };
  return (
    <Fragment>
      <div className="flex justify-center">
        <div className="flex justify-center text-darkGrayishBlue font-semibold space-x-4 p-4 w-[85%] bg-white rounded-md mt-5 md:w-1/2 lg:w-[40%]">
          <button
            onClick={() => handleFilterClick("all")}
            className=" hover:text-brightBlue duration-200"
          >
            All
          </button>
          <button
            onClick={() => handleFilterClick("active")}
            className=" hover:text-brightBlue duration-200"
          >
            Active
          </button>
          <button
            onClick={() => handleFilterClick("completed")}
            className=" hover:text-brightBlue duration-200"
          >
            Completed
          </button>
        </div>
      </div>
      <div className="text-center my-11 text-darkGrayishBlue">
        Drag and drop to reorder list
      </div>

      <p className="text-[10px] text-center">
        Challenge by
        <a
          className="ml-1  text-purple-500 underline"
          href="https://www.frontendmentor.io?ref=challenge"
        >
          Frontend Mentor
        </a>
        . Coded by
        <a
          className=" text-purple-500 underline ml-1"
          href="https://github.com/NIKO-DEV06"
        >
          Emmanuel Ayeniko
        </a>
        .
      </p>
    </Fragment>
  );
};

export default Footer;
