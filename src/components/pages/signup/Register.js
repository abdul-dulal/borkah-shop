import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { AiOutlineMail } from "react-icons/ai";
import { RiLock2Line } from "react-icons/ri";
import { GiConfirmed } from "react-icons/gi";

import axios from "axios";
import auth from "../../../Firebaseinit";
import Sociallogin from "../../shere/Sociallogin";
import { toast } from "react-toastify";
import remove from "../../../assets/img/delete.png";
import login from "../../../assets/img/login-vector.png";

const RegisterModal = ({ openRegister, setOpenRegister }) => {
  const [agree, setAgree] = useState(false);
  const [passError, setPassError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [createUserWithEmailAndPassword, signupUser, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;
    const confirmPassword = data.conPassword;

    if (password === confirmPassword) {
      createUserWithEmailAndPassword(email, password);
    } else {
      setPassError("Password do not match");
    }

    axios
      .post("https://borkha-shop.onrender.com/user/signup", {
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        if (res.data.success) {
          toast("Send email verification");
          toast("Well come to our application");
        } else {
          toast("You have already an account");
        }
      });
  };

  if (signupUser) {
    return navigate("/");
  }

  if (loading) {
    // return <Loading />;
  }

  return (
    <div>
      <div>
        {openRegister ? (
          <>
            <div className="overflow-x-hidden overflow-y-auto fixed inset-0   z-50 pt-8 bg-[rgba(0,0,0,0.4)] ">
              <div className=" lg:w-7/12 md:w-4/5 m-auto mt-10">
                <img
                  src={remove}
                  onClick={() => setOpenRegister(false)}
                  className="cursor-pointer border-2 border-white"
                  alt=""
                />
                <div className=" rounded   bg-white  ">
                  <div className="grid lg:grid-cols-2    ">
                    <div
                      className="bg-[#0D6EFD] p-4 py-16 text-white
                   "
                    >
                      <h1 className="text-3xl font-serif">Register</h1>
                      <p className="text-[18px] mt-2">
                        Enter your personal details and start journey with us
                      </p>
                      <img src={login} className="mt-12" alt="" />
                    </div>
                    <div className="lg:my-16">
                      <div className="">
                        <p className="text-2xl font-serif text-center lg:mt-0 md:mt-5 mt-4">
                          Register with Social Profile
                        </p>
                        <Sociallogin />
                      </div>
                      <div class="divider">Or Email Account</div>

                      <div className="w-full flex items-center justify-center">
                        <div>
                          <form onSubmit={handleSubmit(onSubmit)}>
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
                              className={`lg:w-96 w-80 h-14 bg-primary text-white rounded-md ${
                                !agree ? "cursor-not-allowed" : "cursor-pointer"
                              } `}
                            />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default RegisterModal;
