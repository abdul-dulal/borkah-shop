import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Featuredbanner from "../home/Featuredbanner";
import Payment from "./Payment";

const CheckoutMethod = () => {
  const [open, setOpen] = useState(false);

  const currency = "USD";

  const navigate = useNavigate();

  return (
    <div className="max-w-screen-2xl  mx-auto">
      <Featuredbanner name="PaymentMethod" />
      <h1 className="text-2xl font-serif text-center my-12">Choose a method</h1>

      <div className="lg:px-20 px-10">
        <div className=" flex  justify-center items-center pb-5 my-10 gap-6 py-10 border ">
          <div className="border px-8 py-3">
            <button
              onClick={() => setOpen(true)}
              className=" bg-primary px-20 py-2 rounded hover:bg-black  text-white"
            >
              Stripe
            </button>
          </div>
        </div>
      </div>
      <Payment open={open} setOpen={setOpen} />
    </div>
  );
};

export default CheckoutMethod;
