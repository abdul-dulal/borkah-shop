import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebaseinit";

const OrderHistory = () => {
  const [orders, setOrder] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    axios
      .get(`https://borkha-shop.onrender.com/order/myOrder?user=${user?.email}`)
      .then((res) => setOrder(res.data));
  }, [user?.email]);
  const DATE_OPTIONS = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return (
    <div>
      {orders.length > 0 ? (
        <div class="overflow-x-auto  pr-5">
          <table class="table w-full ">
            <thead className="">
              <tr className=" ">
                <th className="text-[15px]">Order</th>
                <th className="text-[15px]"> Date</th>
                <th className="text-[15px]">Status</th>
                <th className="text-[15px]">Total</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <th>
                    {order.transactionId.slice(0, 7)}
                    {Math.random()}{" "}
                  </th>
                  <td>
                    {new Date(order.createdAt).toLocaleDateString(
                      "en-US",
                      DATE_OPTIONS
                    )}
                  </td>

                  <td>pending...</td>
                  <td>${order.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h1 className="text-xl font-semibold">No order yet...</h1>
      )}
    </div>
  );
};

export default OrderHistory;
