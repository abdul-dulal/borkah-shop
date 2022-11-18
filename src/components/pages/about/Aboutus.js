import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import about from "../../../assets/img/about/about-uss.jpg";

import Fade from "react-reveal/Fade";

const Aboutus = () => {
  const navigate = useNavigate();
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 lg:px-20 px-10 mt-20 gap-6  items-center">
      <Fade left>
        <div>
          <img src={about} className="p-5" alt="" />
        </div>
      </Fade>
      <Fade right>
        <div>
          <p className="text-primary">About us</p>
          <h1 className="text-3xl font-bold my-2">
            We are proudly Australian.
          </h1>
          <p>
            The more we drive the car the better they seem to operate operate.
            No noise, just stopping power! Quis autem vel eum iure.
          </p>
          <h2 className="text-xl font-bold text-primary my-3">
            Amazing Features
          </h2>
          <div className="flex gap-10 ">
            <div className="space-y-1 ">
              <p className="flex items-center gap-2">
                <FaAngleDoubleRight className="text-primary" />
                Soft Fabric
              </p>
              <p className="flex items-center gap-2">
                <FaAngleDoubleRight className="text-primary" />
                Lightweightvv
              </p>
              <p className="flex items-center gap-2">
                <FaAngleDoubleRight className="text-primary" />
                All Day Comforts
              </p>
            </div>
            <div className="space-y-1">
              <p className="flex items-center gap-2 ">
                <FaAngleDoubleRight className="text-primary" />
                Money Guarantee
              </p>
              <p className="flex items-center gap-2">
                <FaAngleDoubleRight className="text-primary" />
                Online Support
              </p>
              <p className="flex items-center gap-2">
                <FaAngleDoubleRight className="text-primary" />
                Flexible Payments
              </p>
            </div>
          </div>
          <button
            className="bg-primary w-44 h-12 rounded text-white mt-8"
            onClick={() => navigate("/shop")}
          >
            Shop Now
          </button>
        </div>
      </Fade>
    </div>
  );
};

export default Aboutus;
