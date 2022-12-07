import React from "react";
import {
  useAuthState,
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
import { toast } from "react-toastify";

const Sociallogin = () => {
  const [signInWithGoogle, gUser, gLoading] = useSignInWithGoogle(auth);
  const [signInWithGithub, gitUser, gitLoading] = useSignInWithGithub(auth);
  const [signInWithFacebook, fbUser, fbLoading] = useSignInWithFacebook(auth);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  if (gUser || gitUser || fbUser) {
    navigate("/");
    toast("Well come to Our application");
  }

  if (gLoading || gitLoading || fbLoading) {
    return <Loading />;
  }

  return (
    <div className="flex items-center justify-center  bg-white mb-10">
      <div className="text-center px-8 ">
        <div className=" mt-8">
          <button onClick={() => signInWithGoogle()}>
            <AiOutlineGoogle
              title="Login With Google"
              className="text-4xl bg-gray-200 text-primary p-2 hover:bg-primary hover:text-white duration-1000 rounded-full "
            />
          </button>
          <button onClick={() => signInWithFacebook()}>
            <FaFacebookF
              title="Login With Facebook"
              className="text-4xl bg-gray-200 text-[#4867AA]  p-2 hover:bg-[#4867AA] hover:text-white duration-1000 rounded-full ml-5"
            />
          </button>
          <button onClick={() => signInWithGithub()}>
            <AiOutlineGithub
              title="Login With Github"
              className="text-4xl bg-gray-200 text-[#161B22]  p-2 hover:bg-[#161B22] hover:text-white duration-1000 rounded-full ml-5 "
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sociallogin;
