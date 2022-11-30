import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { AiOutlineMail } from "react-icons/ai";
import { RiLock2Line } from "react-icons/ri";
import { GiConfirmed } from "react-icons/gi";

import axios from "axios";
import Loading from "../../shere/Loading";
import auth from "../../../Firebaseinit";
import Sociallogin from "../../shere/Sociallogin";
import { toast } from "react-toastify";
const Signup = () => {
  const [agree, setAgree] = useState(false);
  const [passError, setPassError] = useState("");
  const [user] = useAuthState(auth);
  console.log(user);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [createUserWithEmailAndPassword, luser, loading] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;
    const confirmPassword = data.conPassword;

    if (password == confirmPassword) {
      createUserWithEmailAndPassword(email, password);
    } else {
      setPassError("Password do not match");
    }

    axios.post("http://localhost:3000/user/signup", {
      email: data.email,
      password: data.password,
    });

    reset();
  };

  if (luser) {
    return navigate("/");
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className=" grid lg:grid-cols-2 md:grid-cols-2 gap-[1px] lg:px-48  bg-gray-100 ">
        <div className="my-6 ">
          <Sociallogin />
        </div>
        <div className="bg-white shadow-lg my-6">
          <div className="  w-full flex items-center justify-center py-20">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 className="text-2xl font-serif text-center my-5">
                Sign Into Your Account
              </h1>

              <div className="flex relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "add special digit",
                    },
                  })}
                  className="border-2 border-gray-400 lg:w-96  w-80  h-14 px-3  my-2 text-lg  placeholder:text-[#035269] bg-white rounded-md focus:ring "
                />
                <AiOutlineMail className="text-black absolute right-3 mt-7 text-2xl" />
              </div>
              <label>
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
              <label>
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500 mt-2 text-xl">
                    {errors.email.message}
                  </span>
                )}
              </label>
              <label>
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500 ">
                    {errors.email.message}
                  </span>
                )}
              </label>

              <div className=" flex relative">
                <input
                  type="password"
                  required
                  placeholder="Password"
                  {...register("password")}
                  className="border-2 border-gray-400 lg:w-96 md:w-80 w-80  h-14 px-3 my-2   text-lg placeholder:text-[#035269]  bg-white rounded-md focus:ring "
                />
                <RiLock2Line className="text-black absolute right-3 mt-7 text-2xl" />
              </div>
              <label>
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500 text-xl">
                    {errors.password?.message}
                  </span>
                )}
              </label>
              <label className="block">
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email?.message}
                  </span>
                )}
                <div className=" flex relative">
                  <input
                    type="password"
                    required
                    placeholder="Confirm password"
                    {...register("conPassword")}
                    className="border-2 border-gray-400 lg:w-96 md:w-80 w-80  h-14 px-3 my-2   text-lg placeholder:text-[#035269]  bg-white rounded-md focus:ring "
                  />
                  <GiConfirmed className="text-black absolute right-3 mt-7 text-2xl" />
                </div>
                <label>
                  {errors.conPassword?.type === "required" && (
                    <span className="label-text-alt text-red-500 text-xl">
                      {errors.conPassword?.message}
                    </span>
                  )}
                </label>
              </label>
              <p className="text-red-700">{passError}</p>
              <label>
                <input
                  type="checkbox"
                  className="my-4"
                  onClick={() => setAgree(!agree)}
                />
                <span
                  className={`ml-3 ${
                    agree ? "text-green-700" : "text-red-700"
                  }`}
                >
                  I agree to the privacy policy
                </span>
              </label>
              <br />
              <input
                disabled={!agree}
                type="submit"
                value="Register"
                className={`lg:w-96 w-80 h-14 bg-[#FF6A00] text-white rounded-md ${
                  !agree ? "cursor-not-allowed" : "cursor-pointer"
                } `}
              />
              <p className="text-center mt-5">
                You Have Already An Account?
                <Link to={"/login"} className="text-purple-600 ml-2 ">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
