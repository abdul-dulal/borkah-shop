import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../Firebaseinit";

const EditProfile = () => {
  const [billing, setbilling] = useState();
  const [phone, setPhone] = useState();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    setPhone(billing?.phone);
  }, [billing]);

  useEffect(() => {
    axios
      .get(
        `https://borkha-shop.onrender.com/checkout/billingDetails?user=${user?.email}`
      )
      .then((res) => setbilling(res.data[0]));
  }, [user?.email]);

  const handleChange = (e) => {
    e.preventDefault();
    axios.put(
      `https://borkha-shop.onrender.com/checkout/updatebillingDetails/${billing._id}`
    );

    axios.put(
      `https://borkha-shop.onrender.com/checkout/updatebillingDetails/${billing._id}`,
      { phone }
    );
    toast.success("Successfylly updated");
  };
  return (
    <div className="ml-8  md:mt-0 mt-14">
      <div className="w-24 flex lg:ml-40 md:ml-20 ml-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src={user?.photoURL} className="rounded-full" alt="" />
      </div>
      <p className=" border-2 mt-5 bg-gray-400 w-full"></p>
      <form onSubmit={handleChange}>
        <div>
          <div className=" mt-10">
            <div>
              <label className="font-semibold uppercase block">Name</label>
              <input
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
            value={user?.email}
            readOnly
            class=" w-7/12  px-2 h-12 mt-3 focus:outline outline-none focus:outline-primary rounded-md  "
          />
        </div>
        <div className="mt-5">
          <label className="font-semibold uppercase block">Phone</label>
          <input
            type="number"
            value={phone}
            placeholder="017..."
            onChange={(e) => setPhone(e.target.value)}
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
            onClick={() => navigate("/myaccount/editPassword")}
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
