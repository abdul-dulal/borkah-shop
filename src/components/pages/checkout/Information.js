import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../Firebaseinit";
import { useGetCartItemsbyuserQuery } from "../../service/Post";

import PaymentInfo from "./PaymentInfo";

const Information = () => {
  const { register, handleSubmit, reset } = useForm();
  const [user] = useAuthState(auth);
  const { data: cartitem } = useGetCartItemsbyuserQuery(user?.email);
  const navigate = useNavigate();
  const price = cartitem && cartitem.map((e) => e.price);
  const totalPrice =
    price?.length > 0 &&
    price.reduce((x, y) => {
      return x + y;
    });

  const onSubmit = (data) => {
    axios
      .post("http://localhost:3000/checkout/saveAddress", {
        fname: data.fname,
        lname: data.lname,
        phone: parseFloat(data.phone),
        city: data.city,
        address: data.address,
        state: data.state,
        price: totalPrice,
        user: user.email,
        item: cartitem.length,
        country: data.country,
      })
      .then((res) => {
        if (res.data === "success") {
          toast.success("billing address added");
          navigate("/payment-method");
          reset();
        } else {
          return toast.error(res?.data?.message?.slice());
        }
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
                  placeholder="Jhon"
                  {...register("fname")}
                  className="text-gray-700 border border-gray-200 rounded py-2 px-3 w-72 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                />
              </div>

              <div>
                <label className="block my-2">
                  Last Name <span className="text-primary ml-2 text-xl">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  {...register("lname")}
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
                  placeholder="017..."
                  {...register("phone")}
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
                  {...register("zip")}
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
                  {...register("city")}
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
                  {...register("address")}
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
                  placeholder="xxx..."
                  {...register("state")}
                  className="text-gray-700 border border-gray-200 rounded py-2 px-3 w-72 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                />
              </div>

              <div>
                <label className="block my-2">
                  Country <span className="text-primary ml-2 text-xl">*</span>
                </label>
                <input
                  type="text"
                  {...register("country")}
                  placeholder="xxx..."
                  className="text-gray-700 border border-gray-200 rounded py-2 px-3 w-72 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <PaymentInfo data={cartitem} />
        </div>
      </div>
    </form>
  );
};

export default Information;
