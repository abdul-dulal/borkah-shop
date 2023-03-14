import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../Firebaseinit";
import {
  useDeleteManyMutation,
  useGetWishlistItemsbyuserQuery,
} from "../../service/Post";
import WishlistTable from "./WishlistTable";

const Wishlist = () => {
  const [user] = useAuthState(auth);
  const { data } = useGetWishlistItemsbyuserQuery(user);
  const [deleteItem] = useDeleteManyMutation();

  const navigate = useNavigate();

  const ids = data?.map((e) => e._id);
  const handleId = () => {
    deleteItem(ids);
  };

  return (
    <div className="md:px-20 px-10">
      <>
        {user ? (
          <div class="overflow-x-auto my-10">
            {data?.length > 0 ? (
              <div>
                <table class="table w-full">
                  <thead>
                    <tr className=" ">
                      <th className="text-[15px]">Image</th>
                      <th className="text-[15px]"> Product Name</th>
                      <th className="text-[15px]">Unit Pirce</th>
                      <th className="text-[15px]">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map((e) => (
                      <WishlistTable key={e._id} data={e} />
                    ))}
                  </tbody>
                </table>
                <div className="flex justify-between my-6">
                  <Link
                    to="/shop"
                    className="text-base font-normal uppercase border px-3 py-2 bg-primary text-white rounded"
                  >
                    continue shoping
                  </Link>
                  <button
                    onClick={handleId}
                    className="text-base font-normal uppercase border px-6 py-2 text-primary border-primary rounded"
                  >
                    Clear wishlist
                  </button>
                </div>
              </div>
            ) : (
              <div className=" my-20 space-y-4">
                <h2 className="text-base font-normal  text-center">
                  No items found in wishlist
                </h2>

                <div className="flex justify-center">
                  <Link
                    to="/"
                    className="uppercase border px-5 py-1 font-serif"
                  >
                    add item
                  </Link>
                </div>
              </div>
            )}
          </div>
        ) : (
          navigate("/")
        )}
      </>
    </div>
  );
};

export default Wishlist;
