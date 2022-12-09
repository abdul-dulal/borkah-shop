import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Featuredbanner from "../home/Featuredbanner";
import Payment from "./Payment";

const CheckoutMethod = () => {
  const [open, setOpen] = useState(false);
  const amount = "2";
  const currency = "USD";
  const style = { layout: "vertical" };
  const navigate = useNavigate();
  const ButtonWrapper = ({ currency, showSpinner }) => {
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, []);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function () {
              // Your code here after capture the order
            });
          }}
        />
      </>
    );
  };
  return (
    <div className="max-w-screen-2xl  mx-auto">
      <Featuredbanner name="PaymentMethod" />
      <h1 className="text-2xl font-serif text-center my-12">Choose a method</h1>

      <div className="lg:px-20 px-10">
        <div className=" flex  justify-center  pb-5 my-10 gap-6 py-10 border ">
          <div className="border px-8 py-3">
            <PayPalScriptProvider
              options={{
                "client-id": "test",
                components: "buttons",
                currency: "USD",
                "disable-funding": "venmo",
              }}
              className="w-64 h-12"
            >
              <ButtonWrapper
                currency={currency}
                showSpinner={false}
                className="w-64 h-12"
              />
            </PayPalScriptProvider>
          </div>
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
