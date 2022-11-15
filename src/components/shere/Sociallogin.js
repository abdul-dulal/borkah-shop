import React from "react";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import auth from "../../Firebaseinit";
import { TypeAnimation } from "react-type-animation";

const Sociallogin = () => {
  const [signInWithGoogle, gUser, gLoading] = useSignInWithGoogle(auth);
  const [signInWithGithub, gitUser, gitLoading] = useSignInWithGithub(auth);
  const [signInWithFacebook, fbUser, fbLoading] = useSignInWithFacebook(auth);
  const navigate = useNavigate();
  if (gUser || gitUser || fbUser) {
    navigate("/");
  }

  if (gLoading || gitLoading || fbLoading) {
    return <Loading />;
  }

  return (
    <div className="flex items-center justify-center h-screen  bg-white shadow-lg  ">
      <div className="text-center px-8 ">
        <TypeAnimation
          sequence={[
            "W E L C O M E T O B O R K H A S H O P ",
            1000,
            " W E L C O M E T O B O R K H A S H O P",
            1000,
          ]}
          style={{ fontSize: "1.5em" }}
          wrapper="h2"
          repeat={Infinity}
        />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when
        </p>
        <div className=" mt-8">
          <button onClick={() => signInWithGoogle()}>
            <AiOutlineGoogle className="text-4xl bg-gray-200 text-red-600  p-2 hover:bg-[#DB4437] hover:text-white duration-1000 rounded-full " />
          </button>
          <button onClick={() => signInWithFacebook()}>
            <FaFacebookF className="text-4xl bg-gray-200 text-[#4867AA]  p-2 hover:bg-[#4867AA] hover:text-white duration-1000 rounded-full ml-5" />
          </button>
          <button onClick={() => signInWithGithub()}>
            <AiOutlineGithub className="text-4xl bg-gray-200 text-[#161B22]  p-2 hover:bg-[#161B22] hover:text-white duration-1000 rounded-full ml-5 " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sociallogin;
