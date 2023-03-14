import React, { useState } from "react";
import remove from "../../../assets/img/delete.png";
import { AiOutlineMail, AiOutlineEye, AiOutlineUser } from "react-icons/ai";

import Sociallogin from "../../shere/Sociallogin";
import login from "../../../assets/img/login-vector.png";
import "react-toastify/dist/ReactToastify.css";

import { Formik, Form, Field } from "formik";
import { loginSchema } from "../../../lib/Valided";
import {
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "../../shere/Loading";
import auth from "../../../Firebaseinit";

const initialValues = {
  user_name: "",
  email: "",
  password: "",
};

const Login = ({ openLogin, setOpenLogin }) => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState();
  const [signInWithEmailAndPassword, loginUser, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  const navigate = useNavigate();
  const actionCodeSettings = {
    url: "http://localhost:3001/login",
  };

  const onSubmit = async (values) => {
    const { email, password } = values;
    setEmail(email);

    signInWithEmailAndPassword(email, password);
    const { data: result } = await axios.post(
      "https://borkha-shop.onrender.com/user/login",
      {
        email,
        password,
      }
    );
    localStorage.setItem("token", result);
  };

  if (loginUser) return navigate("/");

  return (
    <div>
      {openLogin ? (
        <>
          <div className="overflow-x-hidden overflow-y-auto fixed inset-0   z-50 pt-8 bg-[rgba(0,0,0,0.4)] ">
            <div className=" lg:w-10/12 md:w-4/5 m-auto mt-10">
              <img
                src={remove}
                onClick={() => setOpenLogin(false)}
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
                    <div className="flex  items-center justify-center gap-1">
                      <p className="h-[1px] w-2/6 bg-primary"></p>
                      <p className=" ">Or Email Account</p>
                      <p className="h-[1px] w-2/6 bg-primary"></p>
                    </div>

                    <div className="w-full flex items-center justify-center mt-3">
                      <Formik
                        initialValues={initialValues}
                        validationSchema={loginSchema}
                        onSubmit={onSubmit}
                      >
                        {({ errors, touched }) => (
                          <Form>
                            <div className="flex relative">
                              <Field
                                name="email"
                                type="email"
                                placeholder="Email"
                                className="border-2 border-gray-400 lg:w-96  w-80  h-14 px-3  my-2 text-lg  placeholder:text-[#035269] bg-white rounded-md focus:ring  focus:outline-none"
                              />
                              <AiOutlineMail className="text-black absolute right-3 mt-7 text-2xl" />
                            </div>
                            <span className="text-red-700">
                              {errors.email && touched.email && (
                                <div>{errors.email}</div>
                              )}
                            </span>
                            <div className="flex relative">
                              <Field
                                name="password"
                                type={`${show ? "text" : "password"}`}
                                placeholder=" Password"
                                className="border-2 border-gray-400 lg:w-96  w-80  h-14 px-3  my-2 text-lg  placeholder:text-[#035269] bg-white rounded-md focus:ring focus:outline-none "
                              />
                              <AiOutlineEye
                                onClick={() => setShow(!show)}
                                className="text-black absolute right-3 mt-7 text-2xl cursor-pointer"
                              />
                            </div>
                            <span className="text-red-700">
                              {errors.password && touched.password && (
                                <div>{errors.password}</div>
                              )}
                            </span>

                            <span className="text-red-700 mt-3">
                              {error?.message?.slice(17, -2)}
                            </span>
                            <div>
                              <button
                                className="mb-3"
                                onClick={async () => {
                                  const success = await sendPasswordResetEmail(
                                    email,
                                    actionCodeSettings
                                  );
                                  if (success) {
                                    toast("Sent email");
                                  }
                                }}
                              >
                                Forget password
                              </button>
                            </div>
                            <button
                              type="submit"
                              className={`lg:w-96 w-80 h-14 bg-primary text-white rounded-md `}
                            >
                              Submit
                            </button>
                          </Form>
                        )}
                      </Formik>
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
  );
};

export default Login;
