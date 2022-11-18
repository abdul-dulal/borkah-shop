import React from "react";
import { useGetPostbyIdQuery } from "../../service/Post";
import Featuredbanner from "../home/Featuredbanner";
import Aboutus from "./Aboutus";
import Counter from "./Counter";
const About = () => {
  return (
    <div>
      <Featuredbanner name="About Us" />
      <Aboutus />
      <Counter />
    </div>
  );
};

export default About;
