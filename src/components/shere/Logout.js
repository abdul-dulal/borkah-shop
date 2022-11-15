import { signOut } from "firebase/auth";
import React from "react";
import auth from "../../Firebaseinit";

const Logout = () => {
  const handleLogout = () => {
    signOut(auth);
  };
  return (
    <div>
      <button onClick={handleLogout}> Logout</button>
    </div>
  );
};

export default Logout;
