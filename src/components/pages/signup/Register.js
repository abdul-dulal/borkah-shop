import React, { useState } from "react";
import remove from "../../../assets/img/delete.png";
import { AiOutlineMail, AiOutlineEye, AiOutlineUser } from "react-icons/ai";

import Sociallogin from "../../shere/Sociallogin";
import login from "../../../assets/img/login-vector.png";
import "react-toastify/dist/ReactToastify.css";

import { Formik, Form, Field } from "formik";
import { validationSchema } from "../../../lib/Valided";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

import axios from "axios";
import { toast } from "react-toastify";
import auth from "../../../Firebaseinit";

const initialValues = {
  user_name: "",
  email: "",
  password: "",
};

const Register = ({ openRegister, setOpenRegister }) => {
  const [show, setShow] = useState(false);
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, signupUser, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const onSubmit = (values) => {
    const { user_name, email, password } = values;
    createUserWithEmailAndPassword(email, password);

    axios
      .post("https://borkha-shop.onrender.com/user/signup", {
        user_name,
        email,
        password,
      })
      .then((res) => {
        toast(res?.data);
      });
  };

  return (
    <div>
      {openRegister ? (
        <>
          <div className="overflow-x-hidden overflow-y-auto fixed inset-0   z-50 pt-8 bg-[rgba(0,0,0,0.4)] ">
            <div className=" lg:w-10/12 md:w-4/5 m-auto mt-10">
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
                    <div className="flex  items-center justify-center gap-1">
                      <p className="h-[1px]  w-2/6 bg-primary"></p>
                      <p className=" ">Or Email Account</p>
                      <p className="h-[1px] w-2/6 bg-primary"></p>
                    </div>

                    <div className="w-full flex items-center justify-center mt-3">
                      <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                      >
                        {({ errors, touched }) => (
                          <Form>
                            <div className="flex relative">
                              <Field
                                name="user_name"
                                type="text"
                                placeholder="Name"
                                className="border-2 border-gray-400 lg:w-96  w-80  h-14 px-3  my-2 text-lg  placeholder:text-[#035269] bg-white rounded-md focus:ring  focus:outline-none"
                              />
                              <AiOutlineUser className="text-black absolute right-3 mt-7 text-2xl" />
                            </div>
                            <span className="text-red-700">
                              {errors.user_name && touched.user_name && (
                                <div>{errors.user_name}</div>
                              )}
                            </span>
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

                            <span className="text-red-700">
                              {error?.message}
                            </span>
                            <div>
                              <label className="">
                                <input
                                  type="checkbox"
                                  className="my-4 cursor-pointer"
                                  onClick={() => setAgree(!agree)}
                                />
                                <span
                                  className={`ml-3 cursor-pointer ${
                                    agree ? "text-green-700" : "text-red-700"
                                  }`}
                                >
                                  I agree to the privacy policy
                                </span>
                              </label>
                            </div>
                            <button
                              disabled={!agree}
                              type="submit"
                              className={`lg:w-96 w-80 h-14 bg-primary text-white rounded-md ${
                                !agree ? "cursor-not-allowed" : "cursor-pointer"
                              } `}
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

export default Register;
