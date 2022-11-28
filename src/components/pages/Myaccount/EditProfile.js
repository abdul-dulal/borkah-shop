import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../Firebaseinit";

const EditProfile = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    reset,
  } = useForm();
  const handleChange = (data) => {
    const newUser = {
      phone: data.phone,
      name: data.name,
    };
    fetch(
      `https://e-trade-server.vercel.app/user/put-userInfo/${data?.email}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      }
    )
      .then((res) => {
        toast("successfylly added");

        return res.json();
      })
      .then((data) => {});

    reset();
  };
  return (
    <div className="ml-8  md:mt-0 mt-14">
      <div className="w-24 flex lg:ml-40 md:ml-20 ml-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src={user?.photoURL} className="rounded-full" alt="" />
      </div>
      <p className=" border-2 mt-5 bg-gray-400 w-full"></p>
      <form onSubmit={handleSubmit(handleChange)}>
        <div>
          <div className=" mt-10">
            <div>
              <label className="font-semibold uppercase block">Name</label>
              <input
                {...register("name")}
                type="text"
                placeholder="Jhon"
                value={user?.displayName}
                class=" w-7/12  px-2 h-12 mt-3 focus:outline outline-none focus:outline-primary rounded-md  "
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <label className="font-semibold uppercase block">Email</label>
          <input
            {...register("email")}
            value={user?.email}
            readOnly
            type="email"
            class=" w-7/12  px-2 h-12 mt-3 focus:outline outline-none focus:outline-primary rounded-md  "
          />
        </div>
        <div className="mt-5">
          <label className="font-semibold uppercase block">Phone</label>
          <input
            {...register("phone")}
            type="number"
            class=" w-7/12 px-2 h-10 mt-3 focus:outline outline-none focus:outline-primary rounded-md  "
          />
        </div>
        <div className="flex gap-5">
          <input
            type="submit"
            value="  Save Change"
            className="bg-purple-600 hover:bg-gray-600 cursor-pointer text-white px-6 py-2 rounded-sm mt-5 font-semibold"
          />

          <button
            onClick={() => navigate("/my-account/edit-password")}
            className="bg-red-600 hover:bg-gray-600 text-white px-6 py-2 rounded-sm mt-5 font-semibold"
          >
            Change password
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
