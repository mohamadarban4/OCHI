import React from "react";

function About() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.37"
      className="w-full p-20  bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black "
    >
      <h1 className="font-['Neue_Montreal'] text-[3vw] tracking-tight leading-[3vw]">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full flex gap-5 border-t-[2px] pt-10 border-[#697345] mt-20">
        <div className="w-1/2 ">
          <h1 className="text-7xl">Our approach :</h1>
          <button className="flex justify-between items-center gap-5 px-10 py-4 mt-10 bg-zinc-900 rounded-full text-white">
            Read More
            <div className=" w-2 h-2 rounded-full bg-zinc-100"></div>
          </button>
        </div>
        <div className=" w-1/2 h-[70vh] bg-[#CDEA68] rounded-3xl">
          <img
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            className="rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
