import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "react-toastify/dist/ReactToastify.css";
import Featuredbanner from "../home/Featuredbanner";
const Contact = () => {
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();
    console.log(event.target.subject.value);

    emailjs
      .sendForm(
        "service_bwqmbrj",
        "template_hrs9njg",
        form.current,
        "H3228sqp0_i-c7TfW"
      )
      .then(
        (result) => {
          if (result.status == 200) {
            toast.success("Thank For Messaging👍❤️");
            event.target.name.value = "";
            event.target.email.value = "";
            event.target.subject.value = "";
            event.target.message.value = "";
          }
        },
        (error) => {}
      );
  };

  return (
    <div className=" max-w-screen-2xl mx-auto">
      <Featuredbanner name="Contact" />
      <div className="  bg-gray-200 contact-form    md:flex justify-center items-center py-20  ">
        <div className=" lg:px-20 px-10 ">
          <form ref={form} onSubmit={sendEmail}>
            <div className="md:flex gap-10">
              <div>
                <label className="uppercase font-semibold  block"> name</label>
                <input
                  type="text"
                  name="to_name"
                  id="name"
                  className=" md:w-96 w-full px-2 shadow-lg roundedv  py-4 my-3 placeholder:ml-0 "
                  placeholder="Name"
                  required
                />
              </div>
              <div>
                <label className="uppercase font-semibold  block">e-mail</label>
                <input
                  type="email"
                  email="from_name"
                  id="email"
                  className=" md:w-96 w-full px-2 shadow-lg roundedv  py-4 my-3 placeholder:ml-0 "
                  placeholder="Email"
                  required
                />
              </div>
            </div>

            <input
              type="text"
              subject="subject"
              id="subject"
              required
              placeholder="Subject"
              className=" w-full sm: px-2  py-4 my-2 shadow rounded"
            />
            <textarea
              message="message"
              id="message"
              className="  w-full px-2 py-5 shadow rounded my-3"
              placeholder="Message"
              required
            />

            <input
              type="submit"
              value="Send Message"
              className="px-5 py-3 bg-primary rounded cursor-pointer text-white font-bold"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
