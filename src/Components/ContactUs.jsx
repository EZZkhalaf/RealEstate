import React from "react";
import WebInfo from "./MainComponents/ContactUs/WebInfo";
import MessageForm from "./MainComponents/ContactUs/MessageForm";
// import WebInfo from "./MainComponents/WebInfo";
// import MessageForm from "./MainComponents/MessageForm";

const ContactUs = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mt-20 bg-[#0B3557]">
      <div className="p-8 pl-20">
        <WebInfo />
      </div>
      <div className="p-8 pr-20">
        <MessageForm />
      </div>
    </div>
  );
};

export default ContactUs;
