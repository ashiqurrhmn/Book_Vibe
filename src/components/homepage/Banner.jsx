import React from "react";
import BannerImg from "../../../src/assets/pngwing 1.png";

const Banner = () => {
  return (
    <div className="hero bg-base-200 py-10 px-5 lg:py-30 lg:px-40 w-9/12 mx-auto my-20 rounded-2xl ">
      <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full">
        <img 
          src={BannerImg} className="animate-pulse"
        />
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
          
          <button className="btn bg-green-500 text-white mt-10">View the List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
