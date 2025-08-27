import React from "react";
import WebInfoElement from "../../Molecule/WebInfoElement";

const WebInfo = () => {
  const contactInfo = [
    {
      type: "Call Us",
      value: "+966 11 123 4567",
      icon: "mdi:phone",
    },
    {
      type: "Email Us",
      value: "info@premiumrealestate.sa",
      icon: "mdi:email",
    },
    {
      type: "Visit Us",
      value: "King Fahd Road, Riyadh",
      icon: "mdi:map-marker",
    },
  ];

  return (
    <div className="flex flex-col  py-20 px-20">
      <h1 className="text-white text-3xl font-bold mb-6">
        Ready to Get Started?
      </h1>
      <p className="text-white text-lg font-semibold">
        Connect with our experts today and take the first step towards your real
        estate goals.
      </p>
      <div className="flex flex-col">
        {contactInfo.map((c) => (
          <WebInfoElement info={c} />
        ))}
      </div>
    </div>
  );
};

export default WebInfo;
