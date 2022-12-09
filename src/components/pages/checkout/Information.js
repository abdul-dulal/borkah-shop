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
  const price = cartitem && cartitem.map((e) => e.price);
  const totalPrice =
    price?.length > 0 &&
    price.reduce((x, y) => {
      return x + y;
    });

  const name = user?.displayName.split(/\s+/);

  const fname = name?.slice(0, 1).toString().split(",").join(" ");
  const lname = name?.slice(1, name.length).toString().split(",").join(" ");
  const newbilling = {
    fname: fname,
    lname: lname,
    phone: parseFloat(phone),
    city: city,
    address: address,
    state: state,
    price: totalPrice,
    user: user?.email,
    item: cartitem?.length,
    country: country,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/checkout/saveAddress", newbilling)
      .then((res) => {
        if (res.data === "success") {
          toast.success("billing address added");
          navigate("/payment-method");
        } else {
          return toast.error(res?.data?.message?.slice());
        }
      });
  };
  const hanleUpdate = (e) => {
    e.preventDefault();

    axios.put(
      `http://localhost:3000/checkout/updatebillingDetails/${billing._id}`,
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
      .get(`http://localhost:3000/checkout/billingDetails?user=${user?.email}`)
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
            <div className="flex flex-wrap gap-6 my-3">
              <div>
                <label className="block my-2">
                  First Name
                  <span className="text-primary ml-2 text-xl">*</span>
                </label>
                <input
                  type="text"
                  value={fname}
                  placeholder="Jhon"
                  className="text-gray-700 border border-gray-200 rounded py-2 px-3 w-72 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                />
              </div>

              <div>
                <label className="block my-2">
                  Last Name <span className="text-primary ml-2 text-xl">*</span>
                </label>
                <input
                  type="text"
                  value={lname}
                  placeholder="Doe"
                  className="text-gray-700 border border-gray-200 rounded py-2 px-3 w-72 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-6 my-3">
              <div>
                <label className="block my-2">
                  Phone <span className="text-primary ml-2 text-xl">*</span>
                </label>
                <input
                  type="number"
                  value={phone}
                  placeholder="017..."
                  onChange={(e) => setPhone(e.target.value)}
                  className="text-gray-700 border border-gray-200 rounded py-2 px-3 w-72 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                />
              </div>

              <div>
                <label className="block my-2">
                  Zip Code
                  <span className=" ml-2 text-sm">(Optonial)</span>
                </label>
                <input
                  type="number"
                  placeholder="123..."
                  className="text-gray-700 border border-gray-200 rounded py-2 px-3 w-72 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-6 my-3">
              <div>
                <label className="block my-2">
                  City<span className="text-primary ml-2 text-xl">*</span>
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="xxx.."
                  className="text-gray-700 border border-gray-200 rounded py-2 px-3 w-72 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                />
              </div>

              <div>
                <label className="block my-2">
                  State Address
                  <span className="text-primary ml-2 text-xl">*</span>
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="xxx.."
                  className="text-gray-700 border border-gray-200 rounded py-2 px-3 w-72 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-6 my-3">
              <div>
                <label className="block my-2">
                  State <span className="text-primary ml-2 text-xl">*</span>
                </label>
                <input
                  type="text"
                  value={state}
                  placeholder="xxx..."
                  onChange={(e) => setstate(e.target.value)}
                  className="text-gray-700 border border-gray-200 rounded py-2 px-3 w-72 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                />
              </div>

              <div>
                <label className="block my-2">
                  Country <span className="text-primary ml-2 text-xl">*</span>
                </label>
                <input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="xxx..."
                  className="text-gray-700 border border-gray-200 rounded py-2 px-3 w-72 leading-tight focus:outline-none focus:bg-white focus:border-primary"
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
