import React from "react";
import WebInfo from "./MainComponents/ContactUs/WebInfo";
import MessageForm from "./MainComponents/ContactUs/MessageForm";
import ScrollAnimation from "../Animation/ScrollAnimation";

const ContactUs = () => {
  return (
    <div
      className="grid sm:grid-cols-1 md:grid-cols-1  lg:grid-cols-2 mt-20 bg-[#0B3557] w-full "
      style={{ boxSizing: "border-box" }}
    >
      <div className="lg:p-8 p-2">
        <ScrollAnimation type="fade-left">
          <WebInfo />
        </ScrollAnimation>
      </div>
      <div className="lg:p-8 p-2  w-full">
        <ScrollAnimation type="fade-right">
          <MessageForm />
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default ContactUs;
