import React from "react";
import counterbanner from "../../../assets/img/about/ne-bg-bnr-img.jpg";

import CounterUp from "./CounterUp";
import skill from "../../../assets/img/about/woman.png";
import client from "../../../assets/img/about/client.png";
import exprience from "../../../assets/img/about/experience.png";
import award from "../../../assets/img/about/award.png";
const Counter = () => {
  return (
    <div
      className="lg:py-2 md:py-8 py-16 lg:px-20 px-10 mt-20 "
      style={{
        background: `url(${counterbanner})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="grid md:grid-cols-4 grid-cols-2 items-center  h-60  justify-center">
        <CounterUp end="20" img={skill} title="Skill Specialist" />
        <CounterUp end="120" img={client} title="happy clients" />
        <CounterUp end="10" img={exprience} title=" years exprienced " />
        <CounterUp end="230" img={award} title="finish projects" />
      </div>
    </div>
  );
};

export default Counter;
