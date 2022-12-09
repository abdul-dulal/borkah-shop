import { signOut } from "firebase/auth";
import React from "react";
import auth from "../../Firebaseinit";

const Logout = () => {
  const handleLogout = () => {
    signOut(auth);
  };
  return (
    <div className="ml-6  py-3 px-2 hover:bg-primary hover:text-white">
      <button onClick={handleLogout}> Logout</button>
    </div>
  );
};

export default Logout;
