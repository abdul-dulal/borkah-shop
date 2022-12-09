import React from "react";
import Title from "../../shere/Title";
import TeamDesc from "./TeamDesc";
import team1 from "../../../assets/img/about/team-member-04.jpg";
import team2 from "../../../assets/img/about/team-member-02.jpg";
import team3 from "../../../assets/img/about/team-member-01.jpg";
import team4 from "../../../assets/img/about/team-member-03.jpg";
const TeamMember = () => {
  return (
    <div className="max-w-screen-2xl  mx-auto">
      <Title title="Our Team Members" />
      <div className="grid md:grid-cols-4  grid-cols-2 my-14  gap-7 lg:px-20 px-10 ">
        <TeamDesc team={team1} name="Tasfia Jannat" deg="Founder" />
        <TeamDesc team={team2} name="Nusrat Jahan" deg="Designer" />
        <TeamDesc team={team3} name="Esrat Jahan" deg="Manager" />
        <TeamDesc team={team4} name="Umme Habiba" deg="Co-Founder" />
      </div>
    </div>
  );
};

export default TeamMember;
