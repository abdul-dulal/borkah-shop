import React from "react";
import Loading from "../../shere/Loading";

const AuthorDetails = ({ data, isloadng }) => {
  return (
    <div>
      {isloadng ? (
        <div className="flex">
          <h1>helo</h1>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default AuthorDetails;
