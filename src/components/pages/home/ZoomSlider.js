import React from "react";
import { useState } from "react";
import Reviews from "./Reviews";

const ZoomSlider = () => {
  const [desc, setDesc] = useState("des");
  return (
    <div>
      <div>
        <button
          className={`bg-black text-white h-12 w-36 ${
            desc === "des" ? "bg-[#F766AD] text-white h-12 w-36" : ""
          }`}
          onClick={() => setDesc("des")}
        >
          Description
        </button>
        <button
          className={`bg-black text-white h-12 w-36 ml-6 ${
            desc === "review" ? "bg-[#F766AD] text-white h-12 w-36" : ""
          }`}
          onClick={() => setDesc("review")}
        >
          Reviews
        </button>
      </div>
      <hr />
      {desc === "des" ? (
        <div className="bg-gray-100 mt-10 py-8">
          <h1 className="px-5 text-base tracking-wider ">
            The Borka Is An Islamic Dress. Simple, Loose Over-Garment,
            Essentially A Robe-Like Dress, Worn By Some Women In Parts Of The
            Muslim People. Borka Is The Largest Online Retailer Of Modest
            Islamic Clothing. It Is A Venture That Has Been Woven Out Of A
            Passion To Bring Modest Clothing At Affordable Prices To Our Sisters
            Around The Globe. The Traditional Burka Is Black And May Be Either A
            Large Square Of Fabric Draped. Islamic Modest Fashionable Clothes
            Offering Hijab Kurti Abaya Wear Kaftan Shrug Gown Jilbab Top Nida
            Kaftan Caftan Wedding Party Sleeves Duabai Pakistani Indian Hijabi
            Style Cape Khimar Niqab Transformer Traditional Borkha Wear Long
            Hija Georg Party Sleeves Duabai Pakistani Indian Hijabi Style Cape
            Khimar Niqab
          </h1>
        </div>
      ) : (
        <Reviews />
      )}
    </div>
  );
};

export default ZoomSlider;
