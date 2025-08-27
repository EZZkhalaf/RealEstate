import React from "react";
import ViewButtonAtom from "../Atoms/ViewButtonAtom";

const MessageForm = () => {
  const properties = [
    "Buy Property",
    "Sell Property",
    "Investment Consultation",
    "Property Valluation",
  ];
  return (
    <div>
      <form className=" bg-white p-8 mt-20 rounded-lg shadow-2xl  ">
        <h1 className="text-xl font-semibold py-4">Send us a message</h1>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Full Name"
            className="bg-gray-300 rounded-lg p-2"
          />
          <div className="flex justify-between gap-2 w-full">
            <input
              type="email"
              placeholder="Email"
              className="bg-gray-300 p-2 rounded-lg w-full"
            />
            <input
              type="number"
              placeholder="Phone"
              className="bg-gray-300 p-2 rounded-lg w-full"
            />
          </div>
          <select className="bg-gray-300 p-2 rounded-lg w-full">
            {properties.map((p) => (
              <option>{p}</option>
            ))}
          </select>

          <textarea
            type="text"
            rows={4}
            placeholder="Tell us about your requirments..."
            className="bg-white p-2 rounded-lg w-full border border-gray-300"
          />
          <ViewButtonAtom
            title={"Send Message"}
            navigateTo={"any url"}
            color={"#0B3557"}
            hoverColor={"#0B3557"}
            textColor={"#FFFFFF"}
            hoverTextColor={"#FFFFFF"}
          />
        </div>
      </form>
    </div>
  );
};

export default MessageForm;
