import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../Firebaseinit";

const EditAddress = () => {
  const [billing, setbilling] = useState();
  const [city, setCity] = useState();
  const [address, setAddress] = useState();
  const [state, setstate] = useState();
  const [country, setCountry] = useState();
  const [user] = useAuthState(auth);

  useEffect(() => {
    axios
      .get(
        `https://borkha-shop.onrender.com/checkout/billingDetails?user=${user?.email}`
      )
      .then((res) => setbilling(res.data[0]));
  }, [user?.email]);

  useEffect(() => {
    setCity(billing?.city);
    setstate(billing?.state);
    setAddress(billing?.address);
    setCountry(billing?.country);
  }, [billing]);
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(
        `https://borkha-shop.onrender.com/checkout/updatebillingDetails/${billing._id}`,
        // eslint-disable-next-line no-dupe-keys
        { city, address, country, address }
      )
      .then((res) => {
        if (res.status == 200) {
          toast.success("Address successfully updated");
        }
      });
  };
  return (
    <div className="lg:ml-0 ml-10 md:mt-0 mt-14">
      <form onSubmit={handleUpdate}>
        <div className="sm:flex lg:gap-10 gap-3 px-3">
          <div>
            <label className="font-semibold uppercase">Zip Code</label> <br />
            <input
              type="text"
              class=" w-full  px-2 h-12 mt-3 focus:outline outline-none focus:outline-primary rounded-md  "
            />
          </div>
          <div>
            <label className="font-semibold uppercase">City</label> <br />
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              class=" w-full  px-2 h-12 mt-3 focus:outline outline-none focus:outline-primary rounded-md  "
            />
          </div>
        </div>
        <div className="sm:flex px-3 lg:gap-10 gap-3  mt-5">
          <div>
            <label className="font-semibold uppercase">State</label> <br />
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              class=" w-full px-2 h-12 mt-3 focus:outline outline-none focus:outline-primary rounded-md  "
            />
          </div>
          <div>
            <label className="font-semibold uppercase">State Address</label>{" "}
            <br />
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              class=" w-full px-2 h-12 mt-3 focus:outline outline-none focus:outline-primary rounded-md  "
            />
          </div>
        </div>
        <div className=" px-3 mt-5">
          <label className="font-semibold uppercase block">Country</label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            class=" sm:w-80 w-full px-2 h-12 mt-3 focus:outline outline-none focus:outline-primary rounded-md  "
          />
        </div>

        <input
          type="submit"
          value="Update "
          className="bg-primary ml-2 hover:bg-gray-600 cursor-pointer text-white px-7 py-3 rounded-sm mt-5 font-semibold "
        />
      </form>
    </div>
  );
};

export default EditAddress;
