import React from "react";
import Featuredbanner from "../home/Featuredbanner";
import Feedback from "../home/Feedback";
import Aboutus from "./Aboutus";
import Condition from "./Condition";
import Counter from "./Counter";

import OurMission from "./OurMission";
import TeamMember from "./TeamMember";
const About = () => {
  return (
    <div>
      <Featuredbanner name="About Us" />
      <Aboutus />
      <Counter />
      <OurMission />
      <Feedback />
      <TeamMember />
      <Condition />
    </div>
  );
};

export default About;
