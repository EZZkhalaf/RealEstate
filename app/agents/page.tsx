import Footer from "@/Components/Footer";
import AgentPageWrapper from "./Components/AgentPageWrapper";
import { getStaticFooter } from "@/API/OtherApi";
import { getStaticLocationsAndSpecialties } from "@/API/AgnetsApi";

export default async function Agents() {
  const footerData = await getStaticFooter();
  const AreasAndCities = await getStaticLocationsAndSpecialties();
  return (
    <div className="flex flex-col items-center  w-full ">
      <AgentPageWrapper locationsAndAreas={AreasAndCities} />
      <Footer footerData={footerData} />
    </div>
  );
}
