import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../Firebaseinit";
import { useGetCartItemsbyuserQuery } from "../../service/Post";
import CartTable from "./CartTable";
const Cart = () => {
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const { data } = useGetCartItemsbyuserQuery(user?.email);
  return (
    <div className="lg:px-20 px-10">
      {user ? (
        <>
          <div class="overflow-x-auto  mt-6">
            <table class="table w-full ">
              <thead className="">
                <tr className=" ">
                  <th className="text-[15px]">Image</th>
                  <th className="text-[15px]"> Product Name</th>
                  <th className="text-[15px]">Unit Pirce</th>
                  <th className="text-[15px]">Quantity</th>
                  <th className="text-[15px]">Subtotal</th>
                  <th className="text-[15px]">Action</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((info) => (
                  <CartTable
                    key={info._id}
                    info={info}
                    total={total}
                    setTotal={setTotal}
                  />
                ))}
              </tbody>
            </table>
          </div>
          <div className="container flex justify-between py-10">
            <button
              onClick={() => navigate("/shop")}
              className="uppercase bg-gray-100 text-black rounded-full hover:bg-primary hover:text-white h-10 w-64 k"
            >
              contiune shoping
            </button>
          </div>
          <div className="container">
            <div className="bg-[#F3F4F6] h-96 w-[400px] block ml-auto rounded-lg">
              <div className="px-5">
                <h2 className="text-2xl font-semibold  py-5">Cart Total</h2>
                <p className="border-b-2 border-gray-300 h-2 w-full "></p>
                <div className="flex justify-between text-2xl py-3">
                  <p>total</p>
                  <p>{total}</p>
                </div>
                <div className="flex gap-4 py-3">
                  <input
                    type="text"
                    placeholder="Code: e-shop"
                    className="  border border-gray-400 w-44 focus:outline-none focus:outline-primary h-10 placeholder:text-black px-1 "
                  />
                  <button className="h-10 w-40 rounded-sm bg-primary text-white hover:bg-gray-600">
                    Apply Coupon
                  </button>
                </div>
                <div className="flex justify-between py-3">
                  <h2 className="text-2xl text-black font-semibold">
                    Grand Total
                  </h2>
                  <p className="text-2xl text-black font-semibold">{total}</p>
                </div>
                <Link
                  to="/checkout"
                  state={{ total, ischeck: true }}
                  className="bg-primary mt-4 text-white py-3 px-10  rounded-sm w-full
                text-xl hover:bg-gray-600 "
                >
                  Proced To Checkout
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        navigate("/")
      )}
    </div>
  );
};

export default Cart;
