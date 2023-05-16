import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../Firebaseinit";
import {
  useCreateCheckoutMutation,
  useGetCartItemsbyuserQuery,
} from "../../service/Post";
import { totalPrice } from "../../shere/totalPrice";

import PaymentInfo from "./PaymentInfo";

const Information = () => {
  const [billing, setbilling] = useState([]);
  const [phone, setPhone] = useState();
  const [city, setCity] = useState();
  const [address, setAddress] = useState();
  const [state, setstate] = useState();
  const [country, setCountry] = useState();

  const [user] = useAuthState(auth);
  const { data: cartitem } = useGetCartItemsbyuserQuery(user?.email);

  const navigate = useNavigate();
  const total = totalPrice(cartitem);

  const name = user?.displayName.split(/\s+/);

  const fname = name?.slice(0, 1).toString().split(",").join(" ");
  const lname = name?.slice(1, name.length).toString().split(",").join(" ");

  const newbilling = {
    fname: fname,
    lname: lname,
    phone: phone,
    city: city,
    address: address,
    state: state,
    price: total,
    user: user?.email,
    item: cartitem?.length,
    country: country,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(phone);
    if (!phone) toast("phone number is required");
    if (!city) toast("city address is required");
    if (!address) toast("address  is required");
    if (!state) toast("state  is required");
    if (!country) toast("country  is required");

    axios
      .post("https://borkha-shop.onrender.com/checkout/saveAddress", newbilling)
      .then((res) => {
        if (res.data === "success") {
          toast.success("billing address added");
          navigate("/payment-method");
        }
      });
  };
  const hanleUpdate = (e) => {
    e.preventDefault();

    axios.put(
      `https://borkha-shop.onrender.com/checkout/updatebillingDetails/${billing._id}`,
      newbilling
    );
    navigate("/payment-method");
  };

  useEffect(() => {
    setPhone(billing?.phone);
    setCity(billing?.city);
    setstate(billing?.state);
    setAddress(billing?.address);
    setCountry(billing?.country);
  }, [billing]);

  useEffect(() => {
    axios
      .get(
        `https://borkha-shop.onrender.com/checkout/billingDetails?user=${user?.email}`
      )
      .then((res) => setbilling(res.data[0]));
  }, [user?.email]);

  return (
    <form
      onSubmit={billing ? hanleUpdate : handleSubmit}
      className="max-w-screen-2xl mx-auto"
    >
      <div className="grid md:grid-cols-2 grid-cols-1  my-20 lg:px-20 px-10">
        <div className=" ">
          <h1 className="text-2xl   font-semibold ">Billing details</h1>

          <div>
            <div className="flex flex-wrap gap-6 mt-1">
              <div>
                <label className="block my-3">First Name</label>
                <input
                  type="text"
                  value={fname}
                  className="border-2 border-gray-400 py-2 px-3 w-72   my-3 text-lg  placeholder:text-[#035269] bg-white rounded-md  focus:outline-none"
                />
              </div>

              <div>
                <label className="block my-3">Last Name</label>
                <input
                  type="text"
                  value={lname}
                  className="border-2 border-gray-400 py-2 px-3 w-72   my-3 text-lg  placeholder:text-[#035269] bg-white rounded-md  focus:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-6 my-3">
              <div>
                <label className="block my-[6px]">Phone</label>
                <input
                  type="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="border-2 border-gray-400 py-2 px-3 w-72   my-3 text-lg  placeholder:text-[#035269] bg-white rounded-md  focus:outline-none"
                />
              </div>

              <div>
                <label className="block my-2">
                  Zip Code
                  <span className=" ml-2 text-sm">(Optonial)</span>
                </label>
                <input
                  type="number"
                  className="border-2 border-gray-400 py-2 px-3 w-72   my-2 text-lg  placeholder:text-[#035269] bg-white rounded-md  focus:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-6 my-3">
              <div>
                <label className="block my-2">City</label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="border-2 border-gray-400 py-2 px-3 w-72   my-2 text-lg  placeholder:text-[#035269] bg-white rounded-md  focus:outline-none"
                />
              </div>

              <div>
                <label className="block my-2"> Address</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="border-2 border-gray-400 py-2 px-3 w-72   my-2 text-lg  placeholder:text-[#035269] bg-white rounded-md  focus:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-6 my-3">
              <div>
                <label className="block my-2">State</label>
                <input
                  type="text"
                  value={state}
                  onChange={(e) => setstate(e.target.value)}
                  className="border-2 border-gray-400 py-2 px-3 w-72   my-2 text-lg  placeholder:text-[#035269] bg-white rounded-md  focus:outline-none"
                />
              </div>

              <div>
                <label className="block my-2">Country</label>
                <input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="border-2 border-gray-400 py-2 px-3 w-72   my-2 text-lg  placeholder:text-[#035269] bg-white rounded-md  focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <PaymentInfo data={cartitem} billing={billing} />
        </div>
      </div>
    </form>
  );
};

export default Information;
