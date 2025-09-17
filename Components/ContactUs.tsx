import React, { useEffect, useState } from "react";
import WebInfo from "./MainComponents/ContactUs/WebInfo";
import MessageForm from "./MainComponents/ContactUs/MessageForm";
import ScrollAnimation from "../Animation/ScrollAnimation";
import { getStaticContactUsInfo } from "@/API/InvestmentOptionsApi";
import { ContactInfoInterface } from "@/Interface/InvestInterface";

const ContactUs = () => {
  const [contactInfo, setContactInfo] = useState<ContactInfoInterface[]>([]);
  const [title, setTitle] = useState<string>("");
  const [properties, setProperties] = useState<string[]>([]);
  const [formTitle, setFormTitle] = useState<string>("");
  const [formPlaceHolders, setFormPlaceholders] = useState<string[]>([]);
  const [buttonText, setButtonText] = useState<string>("");

  const fetchInfo = async () => {
    const response = await getStaticContactUsInfo();
    const contact = response?.contact;
    console.log(response);
    const form = response?.form;
    setTitle(form.title || "");
    const propertiesCleared: string[] = form.properties.blocks.map(
      (block: any) => block.data.text || "none"
    );
    setProperties(propertiesCleared);

    setFormTitle(form.formTitle);
    const placeholdersCleared: string[] = form.formPlaceholder.blocks.map(
      (block: any) => block.data.text || "none"
    );
    setFormPlaceholders(placeholdersCleared);
    setContactInfo(contact);
    setButtonText(form.buttonText);
  };
  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div
      className="grid sm:grid-cols-1 md:grid-cols-1  lg:grid-cols-2 mt-20 bg-[#0B3557] w-full "
      style={{ boxSizing: "border-box" }}
    >
      <div className="lg:p-8 p-2">
        <ScrollAnimation type="fade-left">
          <WebInfo title={title} contactInfo={contactInfo} />
        </ScrollAnimation>
      </div>
      <div className="lg:p-8 p-2  w-full">
        <ScrollAnimation type="fade-right">
          <MessageForm
            properties={properties}
            formTitle={formTitle}
            formPlaceholder={formPlaceHolders}
            buttonText={buttonText}
          />
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default ContactUs;
