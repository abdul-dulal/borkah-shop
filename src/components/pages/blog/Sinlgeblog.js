import React from "react";
import { useParams } from "react-router-dom";

const Sinlgeblog = () => {
  const { blogId } = useParams();

  return (
    <div>
      <h1>helo{blogId}</h1>
    </div>
  );
};

export default Sinlgeblog;
