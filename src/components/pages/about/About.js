import React from "react";
import { useGetPostbyIdQuery } from "../../service/Post";
const About = () => {
  const responseInfo = useGetPostbyIdQuery("63639fc9e925181c69617d10");
  console.log(responseInfo);
  return (
    <div>
      <h1>this is about page</h1>
    </div>
  );
};

export default About;
