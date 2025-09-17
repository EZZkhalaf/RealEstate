import React from "react";
import WebInfoElement from "../../Molecule/WebInfo/WebInfoElement";
import {
  ContactInfoInterface,
  WebInfoInterface,
} from "@/Interface/InvestInterface";

const WebInfo: React.FC<WebInfoInterface> = ({ title, contactInfo }) => {
  return (
    <div className="flex flex-col  py-20 lg:px-20 md:text-sm sm:text-sm">
      <h1 className="text-white text-xl lg:text-3xl font-bold mb-6">{title}</h1>
      <p className="text-white text-sm lg:text-lg font-semibold">
        Connect with our experts today and take the first step towards your real
        estate goals.
      </p>
      <div className="grid grid-cols-1">
        {contactInfo?.map((c, index) => (
          <WebInfoElement key={index} info={c} />
        ))}
      </div>
    </div>
  );
};

export default WebInfo;
