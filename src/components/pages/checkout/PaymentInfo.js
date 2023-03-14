import React from "react";

import { totalPrice } from "../../shere/totalPrice";

const PaymentInfo = ({ data, billing }) => {
  const total = totalPrice(data);

  return (
    <div>
      <h2 className="text-2xl  my-3  font-semibold"> Your order</h2>
      <div className="bg-gray-200 px-5 py-8 rounded-md ">
        <div className="flex justify-between  mb-8">
          <h2 className="text-xl font-semibold">Product</h2>
          <p className="text-xl font-semibold">Price</p>
        </div>
        <p className="border-solid border border-gray-300 mb-5"></p>
        <div className="">
          {data?.map((e) => (
            <div
              className="flex items-center justify-between space-y-6"
              key={e._id}
            >
              <h2 className="mt-6 line-clamp-1">{e.name}</h2>
              <p>$ {e.price * e.quantity}</p>
            </div>
          ))}
        </div>
        <p className="border-solid border border-gray-300 my-5"></p>
        <div className="flex  justify-between">
          <p className="">Shiping</p>
          <p className=" ">Free Shiping</p>
        </div>
        <p className="border-solid border border-gray-300 my-5"></p>
        <div className="flex  justify-between">
          <p className="text-2xl">Total</p>
          <p className="text-2xl">$ {total}</p>
        </div>

        {billing ? (
          <button
            type="submit"
            className="uppercase bg-primary mt-6 cursor-pointer h-12 w-6/12 block mx-auto rounded text-white hover:bg-black"
          >
            Place order
          </button>
        ) : (
          <button
            type="sumbmit"
            className="uppercase bg-primary mt-6 cursor-pointer h-12 w-6/12 block mx-auto rounded text-white hover:bg-black"
          >
            Place order
          </button>
        )}
      </div>
    </div>
  );
};

export default PaymentInfo;
