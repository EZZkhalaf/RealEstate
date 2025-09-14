import React from "react";
import TitleAtom from "../../Atoms/TitleAtom";
import ParagraphDescription from "../../Atoms/ParagraphDescription";
import InputGray from "../../Atoms/InputGray";
import SubmitButton from "../../Atoms/SubmitButton";
import SingleCheckBox from "../../Atoms/SingleCheckBox";

const AgentContactForm = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <TitleAtom title={"Contact a Buyer Agent"} />
      <p className="text-gray-500 text-md ">
        Connect with a local buyer’s agent who advertises with Zillow.
      </p>
      <form className="flex flex-col gap-2">
        <InputGray
          type={"text"}
          header={"Name"}
          placeholder={" "}
          additionalCss={"border border-gray-400 hover:border-blue-500"}
        />
        <div className="grid grid-cols-2 gap-2">
          <InputGray
            placeholder={""}
            header={"Phone"}
            type={"number"}
            additionalCss={"border border-gray-400 hover:border-blue-500"}
          />
          <InputGray
            placeholder={" "}
            header={"Email"}
            type={"email"}
            additionalCss={"border border-gray-400 hover:border-blue-500"}
          />
        </div>

        <div className="flex flex-col gap-3 ">
          <h1 className="font-bold">Message</h1>
          <div
            className={`flex justify-around items-center bg-gray-200 rounded-lg p-2 w-full font-semibold border border-gray-400 hover:border-blue-500`}
          >
            <textarea
              className={`bg-gray-200 rounded-lg py-1 w-full border-none `}
            />
          </div>
        </div>

        <SubmitButton text={"Contact an Agent"} />
      </form>
      <SingleCheckBox text={"I want financing information"} noPadding={true} />
      <p className="text-[10px]">
        By pressing Contact an agent, you agree that Zillow Group and its
        affiliates, and real estate professionals may call/text you about your
        inquiry, which may involve use of automated means and
        prerecorded/artificial voices. You don’t need to consent as a condition
        of buying any property, goods or services. Message/data rates may apply.
        You also agree to our Terms of Use. Zillow does not endorse any real
        estate professionals. We may share information about your recent and
        future site activity with your agent to help them understand what you’re
        looking for in a home.
      </p>
    </div>
  );
};

export default AgentContactForm;
