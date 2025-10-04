import Footer from "@/Components/Footer";
import AgentPageWrapper from "./Components/AgentPageWrapper";
import { getStaticFooter } from "@/API/OtherApi";

export default async function Agents() {
  const footerData = await getStaticFooter();

  return (
    <div className="flex flex-col items-center  w-full ">
      <AgentPageWrapper />
      <Footer footerData={footerData} />
    </div>
  );
}
