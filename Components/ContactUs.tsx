import WebInfo from "./MainComponents/ContactUs/WebInfo";
import MessageForm from "./MainComponents/ContactUs/MessageForm";
import ScrollAnimation from "../Animation/ScrollAnimation";
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

  return (
    <div className="bg-[#0B3557] w-full flex items-center">
      <div className=" max-w-7xl  mx-auto">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          style={{ boxSizing: "border-box" }}
        >
          <ScrollAnimation type="fade-left">
            <WebInfo title={title} contactInfo={contactInfo} />
          </ScrollAnimation>
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
    </div>
  );
};

export default ContactUs;
