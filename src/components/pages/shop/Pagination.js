import React from "react";
import MultiRangeSlider from "multi-range-slider-react";
const Pagination = ({ lowest, setlowest, highest, setHighest }) => {
  const handleInput = (e) => {
    setlowest(e.minValue);
    setHighest(e.maxValue);
  };
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
        <div className="">
          <MultiRangeSlider
            min={400}
            max={7400}
            step={500}
            ruler={false}
            label={false}
            minValue={400}
            maxValue={8000}
            barInnerColor={"#F766AD"}
            onInput={(e) => {
              handleInput(e);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
