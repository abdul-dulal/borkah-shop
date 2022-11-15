import React from "react";
const Cartdetails = ({ data, price }) => {
  const handleRemove = () => {
    fetch(
      `https://e-trade-server.vercel.app/cart/deleteCart-item/${data._id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {});
  };
  return (
    <div>
      <div className="flex gap-4 px-3 justify-between m-2">
        <img src={data.img} className="w-16 h-16 text-primary " alt="" />
        <div>
          <h2>{data.name.slice(0, 30)}</h2>
          <p> Price ${data.price}</p>
          <p>Quantity :1 </p>
        </div>
        <p className="text-xl cursor-pointer" onClick={handleRemove}>
          x
        </p>
      </div>
    </div>
  );
};

export default Cartdetails;
