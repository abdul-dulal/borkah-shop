import React from "react";

const EditPassword = () => {
  return (
    <div className=" mt-0 px-10">
      <div className="">
        <label className="font-semibold uppercase text-sm">
          Current Password
        </label>{" "}
        <br />
        <input
          type="text"
          class=" sm:w-7/12 w-full px-2 h-12 mt-3 focus:outline rounded-md  "
        />
      </div>
      <div className="mt-5">
        <label className="font-semibold uppercase text-sm">New Password</label>{" "}
        <br />
        <input
          type="text"
          class=" sm:w-7/12 w-full px-2 h-12 mt-3 focus:outline rounded-md  "
        />
      </div>
      <div className="mt-5">
        <label className="font-semibold uppercase text-sm">
          Confirm password
        </label>{" "}
        <br />
        <input
          type="text"
          class=" sm:w-7/12 w-full px-2 h-12 mt-3 focus:outline rounded-md  "
        />
      </div>
      <button className="bg-primary hover:bg-gray-600 text-white px-6 py-3 rounded-sm mt-5 font-semibold">
        Save Change
      </button>
    </div>
  );
};

export default EditPassword;
