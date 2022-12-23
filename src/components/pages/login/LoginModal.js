import { useForm } from "react-hook-form";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { RiLock2Line } from "react-icons/ri";
import {
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import axios from "axios";
import auth from "../../../Firebaseinit";
import Loading from "../../shere/Loading";
import Sociallogin from "../../shere/Sociallogin";
import { useState } from "react";
import { toast } from "react-toastify";
import remove from "../../../assets/img/delete.png";
import login from "../../../assets/img/login-vector.png";
const LoginModal = ({ openLogin, setOpenLogin }) => {
  const [email, setEmail] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let errorElement = "";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const actionCodeSettings = {
    url: "http://localhost:3001/login",
  };

  if (error) {
    errorElement = error.message;
  }
  const onSubmit = async (data) => {
    setEmail(data.email);
    signInWithEmailAndPassword(data.email, data.password);
    const { data: result } = await axios.post(
      "https://borkha-shop.onrender.com/user/login",
      {
        email: data.email,
        password: data.password,
      }
    );
    toast("Well to our application");
    console.log(result);

    localStorage.setItem("token", result);
  };
  if (user) {
    navigate(from, { replace: true });
  }

  if (loading) {
    // return <Loading />;
  }
  return (
    <div>
      {openLogin ? (
        <>
          <div className="overflow-x-hidden overflow-y-auto fixed inset-0   z-50 pt-10 bg-[rgba(0,0,0,0.4)] ">
            <div className=" lg:w-7/12 md:w-4/5 m-auto mt-10">
              <img
                src={remove}
                onClick={() => setOpenLogin(false)}
                className="cursor-pointer border-2 border-white"
                alt=""
              />
              <div className=" rounded   bg-white  ">
                <div className="grid lg:grid-cols-2    ">
                  <div
                    className="bg-[#0D6EFD] p-4  py-20  text-white
                   "
                  >
                    <h1 className="text-3xl font-serif">Login</h1>
                    <p className="text-[18px] mt-2">
                      To keep connected with us please login with your personal
                      info
                    </p>
                    <img src={login} alt="" />
                  </div>
                  <div className="lg:my-20">
                    <div>
                      <p className="text-2xl font-serif text-center lg:mt-0 md:mt-5 mt-5">
                        Login with Social Profile
                      </p>
                      <Sociallogin />
                    </div>
                    <div class="divider">Or Email Account</div>
                    <div className="w-full flex items-center justify-center">
                      <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <label>
                            {errors.name?.type === "required" && (
                              <span className="label-text-alt text-red-500">
                                {errors.name.message}
                              </span>
                            )}
                          </label>

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
                          </label>
                          <p className="text-xl text-red-700">{errorElement}</p>
                          <label>
                            <div className="flex justify-between my-3">
                              <p>Remember Me</p>
                              <button
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
                          </label>
                          <br />
                          <input
                            type="submit"
                            value="Login"
                            className={`lg:w-96 w-80 h-14 bg-primary text-white rounded-md cursor-pointer `}
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
  );
};

export default LoginModal;
