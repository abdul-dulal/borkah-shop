import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../Firebaseinit";
import { useGetCartItemsbyuserQuery } from "../service/Post";
import Cartdetails from "./Cartdetails";
import { totalPrice } from "./totalPrice";

const Cartmodal = ({ toggleModal }) => {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();
  const { data } = useGetCartItemsbyuserQuery(user?.email);

  const result = totalPrice(data);

  return (
    <div>
      {data.length > 0 ? (
        <div className="">
          <div className="divide-y divide-blue-200">
            {data.map((data) => (
              <div>{<Cartdetails data={data} key={data._id} />}</div>
            ))}

            <div className="flex justify-between text-base font-semibold px-6 h-16 w-full items-center border mt-5 bg-[#FAFAFA] text-primary">
              <p>Subtotal</p>
              <p>${result}</p>
            </div>
          </div>

          <div className="px-6 py-12">
            <button
              onClick={() => [navigate("/cart"), toggleModal(false)]}
              className="bg-primary text-white uppercase w-full h-10 hover:bg-gray-600"
            >
              View Cart
            </button>
            <button
              onClick={() => [navigate("/checkout"), toggleModal(false)]}
              className="bg-primary text-white uppercase w-full h-10 mt-3 hover:bg-gray-600"
            >
              CheckOut
            </button>
          </div>
        </div>
      ) : (
        <h2 className="mt-36  flex items-center justify-center   text-xl">
          No items added to cart
        </h2>
      )}
    </div>
  );
};

export default Cartmodal;
