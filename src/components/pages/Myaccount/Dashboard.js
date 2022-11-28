import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebaseinit";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <h2 className="text-xl">
        Hello {user?.displayName}
        <span className="ml-2">
          (not {user?.email.slice(0, -10)}?
          <span className="text-purple-600 underline  cursor-pointer">
            logout
          </span>
          )
        </span>
      </h2>
    </div>
  );
};

export default Dashboard;
