import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen flex items-center px-32 gap-5 text-black">
      <div className="cardcontainer h-[50vh]  w-1/2">
        <div className="card relative rounded-xl w-full h-full bg-[#214D44] flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute left-10 bottom-10 px-5 py-2 rounded-full font-thin bg-transparent border-[1px] border-[#CDEA68] text-[#CDEA68]">
            @2019-2022
          </button>
        </div>
      </div>
      <div className="cardcontainer h-[50vh] flex gap-5 w-1/2">
        <div className="card relative rounded-xl w-1/2 h-full bg-[#323131] flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute left-12 bottom-10 px-4 py-2 rounded-full  text-sm font-thin bg-transparent border-[1px] border-zinc-100 text-white">
            RATING 5.0 ON CLUCTH
          </button>
        </div>
        <div className="card relative rounded-xl w-1/2 h-full bg-[#212121] flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute left-6 bottom-10 px-4 py-2 rounded-full text-sm font-thin text-md bg-transparent border-[1px] border-zinc-100 text-white">
            BUSINESS BOOTCAMP ALUMINI
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
