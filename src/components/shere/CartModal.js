import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../Firebaseinit";
import { useGetCartItemsbyuserQuery } from "../service/Post";
import Cartdetails from "./Cartdetails";

const Cartmodal = ({ cartModal }) => {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();
  const { data } = useGetCartItemsbyuserQuery(user?.email);
  const price = data?.map((e) => e.price);
  const totalPrice =
    price?.length > 0 &&
    price.reduce((x, y) => {
      return x + y;
    });

  return (
    <div>
      {cartModal && (
        <div class="origin-top-right absolute lg:right-32 md:right-12 right-5 z-50  sm:right-0 mt-2 w-80 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none transform opacity-100 scale-100">
          <div className="overflow-y-scroll h-96">
            {data?.length > 0 ? (
              <div className="">
                {data.map((data) => (
                  <div>{<Cartdetails data={data} key={data._id} />}</div>
                ))}

                <div className="flex justify-between text-base font-semibold px-6 h-16 w-full items-center border mt-5 bg-[#FAFAFA] text-primary">
                  <p>Subtotal</p>
                  <p>${totalPrice}</p>
                </div>
              </div>
            ) : (
              <h2 className=" flex justify-center items-center h-full text-xl">
                No items added to cart
              </h2>
            )}
            {price?.length > 0 && (
              <div className="px-6 py-12">
                <button
                  onClick={() => navigate("/cart")}
                  className="bg-primary text-white uppercase w-full h-10 hover:bg-gray-600"
                >
                  View Cart
                </button>
                <button
                  onClick={() => navigate("/checkout")}
                  className="bg-primary text-white uppercase w-full h-10 mt-3 hover:bg-gray-600"
                >
                  CheckOut
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cartmodal;
