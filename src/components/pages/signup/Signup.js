import React, { useState } from "react";

import Register from "../signup/Register";
import LoginModal from "../login/LoginModal";
const LoginRegister = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  return (
    <div
      className={`flex justify-center items-center h-[500px] ${
        openLogin || openRegister ? "bg-gray-100" : ""
      }`}
    >
      <div className="space-y-3">
        <h1 className="text-3xl font-serif"> Well come to borkha-shop</h1>
        <p>Clicking the button below for open in Modal.</p>
        <button
          className="bg-primary w-36 h-14 rounded-sm font-bold text-white "
          onClick={() => setOpenLogin(true)}
        >
          Login
        </button>
        <button
          className="bg-black  w-36 h-14 rounded-sm font-bold text-white ml-8"
          onClick={() => setOpenRegister(true)}
        >
          Register
        </button>
      </div>
      <LoginModal openLogin={openLogin} setOpenLogin={setOpenLogin} />
      <Register openRegister={openRegister} setOpenRegister={setOpenRegister} />
    </div>
  );
};

export default LoginRegister;
