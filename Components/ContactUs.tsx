"use client";
import React, { useEffect, useState } from "react";
import WebInfo from "./MainComponents/ContactUs/WebInfo";
import MessageForm from "./MainComponents/ContactUs/MessageForm";
import ScrollAnimation from "../Animation/ScrollAnimation";
import { getStaticContactUsInfo } from "@/API/InvestmentOptionsApi";
import { ContactInfoInterface } from "@/Interface/InvestInterface";

const ContactUs: React.FC<{ contactUsData: any }> = ({ contactUsData }) => {
  const contactInfo: ContactInfoInterface[] = contactUsData?.contact;
  const title: string = contactUsData?.form?.title || "";
  const properties: string[] = contactUsData.form.properties.blocks.map(
    (block: any) => block.data.text || "none"
  );
  const formTitle: string = title;
  const formPlaceHolders: string[] =
    contactUsData.form.formPlaceholder.blocks.map(
      (block: any) => block.data.text || "none"
    );
  const buttonText: string = contactUsData.form.buttonText || "Click Here";

  // const fetchInfo = async () => {
  //   const response = await getStaticContactUsInfo();
  //   const contact = response?.contact;
  //   const form = response?.form;
  //   setTitle(form.title || "");
  // const propertiesCleared: string[] = form.properties.blocks.map(
  //   (block: any) => block.data.text || "none"
  // );
  //   setProperties(propertiesCleared);

  //   setFormTitle(form.formTitle);
  // const placeholdersCleared: string[] = form.formPlaceholder.blocks.map(
  //   (block: any) => block.data.text || "none"
  // );
  //   setFormPlaceholders(placeholdersCleared);
  //   setContactInfo(contact);
  //   setButtonText(form.buttonText);
  // };
  // useEffect(() => {
  //   fetchInfo();
  // }, []);

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
