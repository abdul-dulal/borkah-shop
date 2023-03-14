import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../Firebaseinit";
import {
  useDeleteAllItemMutation,
  useDeleteManyMutation,
  useGetCartItemsbyuserQuery,
} from "../../service/Post";

const CheckoutForm = ({ order, setOpen }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transaction, setTransaction] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const navigate = useNavigate();
  const newPrice = { price: order?.price };
  const [user] = useAuthState(auth);
  const { data } = useGetCartItemsbyuserQuery(user?.email);
  const ids = data.map((e) => e._id);
  const [deletePost] = useDeleteAllItemMutation();

  useEffect(() => {
    fetch(`https://borkha-shop.onrender.com/create-payment-intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(newPrice),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [order?.price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error?.message);
      setSuccess("");
      processing(true);
    } else {
      setCardError("");
    }

    // confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: order.fname,
            email: order.user,
          },
        },
      });

    if (intentError) {
      setCardError(intentError?.message);
      setProcessing(false);
    } else {
      setCardError("");
      setTransaction(paymentIntent.id);

      setSuccess("Your Payment is Success");
      // store payment database
      const payment = {
        orderId: order._id,
        transactionId: paymentIntent.id,
      };

      axios
        .post("https://borkha-shop.onrender.com/order/myorder", {
          user: order.user,
          price: order.price,
          item: order.item,
          transactionId: paymentIntent.id,
        })

        .then((res) => {
          if (res.data.message === "Success") {
            return [deletePost(ids), navigate("/myaccount/orderHistory")];
          }
        });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-success btn-sm mt-4"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-700 py-5">{cardError}</p>}
      {success && (
        <div className="text-green-700 my-4 text-center">
          <p>{success}</p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
