import React from "react";
import ViewButtonAtom from "../../Atoms/ViewButtonAtom";
import InputGray from "../../Atoms/InputGray";

const MessageForm = () => {
  const properties = [
    "Buy Property",
    "Sell Property",
    "Investment Consultation",
    "Property Valluation",
  ];
  return (
    <div>
      <form className=" bg-white p-8 mt-20 rounded-lg shadow-2xl max-w-full ">
        <h1 className="text-xl font-semibold py-4">Send us a message</h1>
        <div className="flex flex-col gap-3">
          <InputGray type={"text"} placeholder={"full Name"} />
          <div className="flex justify-between gap-2 w-full">
            <InputGray type={"email"} placeholder={"Email"} />

            <InputGray type={"Number"} placeholder={"Phone"} />
          </div>

          <select className="bg-gray-300 p-2 rounded-lg w-full">
            {properties.map((p, index) => (
              <option key={index}>{p}</option>
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
