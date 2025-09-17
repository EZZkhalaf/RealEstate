import React from "react";
import ViewButtonAtom from "../../Atoms/ViewButtonAtom";
import InputGray from "../../Atoms/InputGray";
import ListSelect from "../../Atoms/ListSelect";
import { MessageFormInterface } from "@/Interface/InvestInterface";

const MessageForm: React.FC<MessageFormInterface> = ({
  formTitle,
  properties,
  buttonText,
  formPlaceholder,
}) => {
  return (
    <div>
      <form className=" bg-white p-3 lg:p-8 mt-20 rounded-lg shadow-2xl max-w-full ">
        <h1 className="text-xl font-semibold py-4">{formTitle}</h1>
        <div className="flex flex-col gap-3">
          <InputGray type={"text"} placeholder={formPlaceholder[0]} />
          <div className="flex justify-between gap-2 w-full">
            <InputGray type={"email"} placeholder={formPlaceholder[1]} />

            <InputGray type={"Number"} placeholder={formPlaceholder[2]} />
          </div>

          <ListSelect list={properties} width={"w-full"} />

          <textarea
            rows={4}
            placeholder={formPlaceholder[3]}
            className="bg-white p-2 rounded-lg w-full border border-gray-300"
          />
          <ViewButtonAtom
            title={buttonText || "send Message"}
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
