import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import CheckoutForm from "./CheckoutForm";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebaseinit";
import { useState } from "react";
const stripePromise = loadStripe(
  "pk_test_51L1b9uAW02sEs2eFqZYg1H3qKbEJVkPQC0P1uTbrFO3D8dUwxPCrAiVYHOZdBT26OMNq3envTLGVRCyx5qA75Br200PIJSjcIR"
);
const Payment = ({ open, setOpen }) => {
  const [order, setOrder] = useState();

  const [user] = useAuthState(auth);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/checkout/orderItem?user=${user?.email}`)
      .then((res) => setOrder(res.data[0]));
  }, [user?.email]);

  return (
    <div>
      {open ? (
        <div className="z-[9999]  overflow-x-hidden overflow-y-auto inset-0  -top-2 left-0 fixed  absulate right-0 mt-2 w-full h-screen px-10 rounded-md shadow-lg py-1 bg-[rgba(0,0,0,0.9)] ">
          <div className="flex justify-center items-center h-screen">
            <div class="card w-96 bg-base-200 shadow">
              <p
                className="flex justify-end cursor-pointer text-2xl font-bold mr-3"
                onClick={() => setOpen(false)}
              >
                X
              </p>
              <div class="card-body">
                <h2 class="text-base ">Payment with stripe test card</h2>
                <p>{order?.item} items</p>
                <p> Total Price : $ {order?.price} </p>
              </div>
              <div class="my-3  px-8">
                <Elements stripe={stripePromise}>
                  <CheckoutForm order={order} />
                </Elements>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Payment;
<h1>hello</h1>;
