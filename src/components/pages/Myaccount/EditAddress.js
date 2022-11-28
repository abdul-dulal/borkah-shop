import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../Firebaseinit";

const EditAddress = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    handleSubmit,

    reset,
  } = useForm();
  const handleAdded = (data) => {
    const newUser = {
      zip: data.zip,
      address: data.address,
      country: data.country,
      state: data.state,
      city: data.city,
      user: user?.email,
    };
    fetch("https://e-trade-server.vercel.app/user/post-userInfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => {
        toast("successfylly added");

        return res.json();
      })
      .then((data) => {});

    reset();
  };
  return (
    <div className="lg:ml-0 ml-10 md:mt-0 mt-14">
      <form onSubmit={handleSubmit(handleAdded)}>
        <div className="sm:flex lg:gap-10 gap-3 px-3">
          <div>
            <label className="font-semibold uppercase">Zip Code</label> <br />
            <input
              type="text"
              {...register("zip")}
              class=" w-full  px-2 h-12 mt-3 focus:outline outline-none focus:outline-primary rounded-md  "
            />
          </div>
          <div>
            <label className="font-semibold uppercase">City</label> <br />
            <input
              type="text"
              {...register("city")}
              class=" w-full  px-2 h-12 mt-3 focus:outline outline-none focus:outline-primary rounded-md  "
            />
          </div>
        </div>
        <div className="sm:flex px-3 lg:gap-10 gap-3  mt-5">
          <div>
            <label className="font-semibold uppercase">State</label> <br />
            <input
              type="text"
              {...register("state")}
              class=" w-full px-2 h-12 mt-3 focus:outline outline-none focus:outline-primary rounded-md  "
            />
          </div>
          <div>
            <label className="font-semibold uppercase">Country</label> <br />
            <input
              type="text"
              {...register("country")}
              class=" w-full px-2 h-12 mt-3 focus:outline outline-none focus:outline-primary rounded-md  "
            />
          </div>
        </div>
        <div className=" px-3 mt-5">
          <label className="font-semibold uppercase block">state address</label>
          <input
            type="text"
            {...register("address")}
            class=" sm:w-80 w-full px-2 h-12 mt-3 focus:outline outline-none focus:outline-primary rounded-md  "
          />
        </div>

        <input
          type="submit"
          value="Update "
          className="bg-primary ml-2 hover:bg-gray-600 cursor-pointer text-white px-7 py-3 rounded-sm mt-5 font-semibold "
        />
      </form>
    </div>
  );
};

export default EditAddress;
