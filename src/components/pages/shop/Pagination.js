import React from "react";
import ReactSlider from "react-slider";
const Pagination = ({ lowest, setlowest, highest, setHighest }) => {
  return (
    <div>
      <div>
        <p className="text-2xl font-bold my-3">Filter by price</p>
        <p className="h-[1.5px] w-20 bg-primary"></p>
        <hr className="" />
        <p className="mt-5 font-semibold">price</p>
        <p className="pb-5 tracking-wider">
          ${lowest}-${highest?.toLocaleString("en-US")}
        </p>
        <ReactSlider
          defaultValue={[lowest, highest]}
          className="cursor-pointer w-full"
          trackClassName="bg-black h-[2px]"
          min={400}
          max={8000}
          minDistance={0}
          step={500}
          withTracks={true}
          pearling={true}
          renderThumb={(props) => {
            return (
              <div
                {...props}
                className="w-3 h-3 bg-white rounded-full border-2 border-[#383838] cursor-pointer absolute -top-2 "
              ></div>
            );
          }}
          renderTrack={(props) => {
            return <div {...props} className="bg-primary h-[3px]"></div>;
          }}
          onChange={([min, max]) => {
            setlowest(min);
            setHighest(max);
          }}
        />
      </div>
    </div>
  );
};

export default Pagination;
