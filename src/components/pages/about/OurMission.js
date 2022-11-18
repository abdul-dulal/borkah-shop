import React from "react";
import { useNavigate } from "react-router-dom";
import mission from "../../../assets/img/about/DZT9I6QWkAc9O8i.jpg";

const OurMission = () => {
  const navigate = useNavigate();
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 lg:px-20 px-10 my-20 gap-6  items-center">
      <div>
        <img src={mission} className="p-5" alt="" />
      </div>

      <div>
        <p className="text-primary">About us</p>
        <h1 className="text-3xl font-bold my-2">Our Mission & Vision</h1>
        <p>
          The more we drive the car the better they seem to operate operate. No
          noise, just stopping power! Quis autem vel eum iure.
        </p>
        <h2 className="text-xl font-bold text-primary my-3">
          Easy To Customize
        </h2>
        <p>
          The more we drive the car the better they seem to operate operate. No
          noise, just stopping power! Quis autem vel eum iure.{" "}
        </p>
        <h2 className="text-xl font-bold text-primary my-3">
          Amazing Features
        </h2>
        <p>
          he more we drive the car the better they seem to operate operate. No
          noise, just stopping power! Quis autem vel eum iure.
        </p>
        <button
          className="bg-primary w-44 h-12 rounded text-white mt-8"
          onClick={() => navigate("/shop")}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default OurMission;
