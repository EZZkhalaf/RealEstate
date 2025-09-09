import TitleAtom from "../../Atoms/TitleAtom";
import ParagraphDescription from "../../Atoms/ParagraphDescription";
import ScrollAnimation from "../../../Animation/ScrollAnimation";
import SingleEstateEelement from "../../Molecule/Properties/SingleEstateEelement";
import { useNavigate } from "react-router-dom";

import Footer from "../../Footer";
import SmallTitle from "../../Atoms/SmallTitle";
import MockEstates from "../../../MockData/MockEstates.json";
import { useState } from "react";
import EstatePopUpInfo from "../../Molecule/Properties/EstatePopUpInfo";
const Properties = () => {
  const totalCount = 9002;

  const navigate = useNavigate();

  const [estates, setEstates] = useState(MockEstates);
  const [selectedEstate, setSelectedEstate] = useState(null);
  return (
    <div className="flex flex-col lg:mt-15 md:mt-15 mt-50 px-5 py-5 max-h-[100vh] overflow-auto">
      <div className="flex flex-col gap-1 items-start ">
        <TitleAtom title={"Real Estates & Homes For Sale"} />
        <ParagraphDescription
          description={`${totalCount} Properties for Sale in Saudi , explore hundreds of available and good structure estates.`}
        />
      </div>

      {/* found results */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 w-full mb-10 py-6 ">
        {estates.map((e, index) => (
          <div
            key={index}
            onClick={() => setSelectedEstate(e)}
            className="rounded-2xl"
          >
            <ScrollAnimation key={index}>
              <SingleEstateEelement estate={e} key={index} />
            </ScrollAnimation>
          </div>
        ))}
      </div>
      <EstatePopUpInfo estate={selectedEstate} onClose={setSelectedEstate} />

      {/* simlar results nearby */}
      <SmallTitle title={"Similar Results Nearby"} />
      <p className="text-xs px-4 mt-2">Results Within 4 miles</p>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 w-full mb-10 py-6 ">
        {estates.map((e, index) => (
          <div
            key={index}
            onClick={() => navigate(`/properties/${index}`)}
            className="rounded-2xl"
          >
            <ScrollAnimation key={index}>
              <SingleEstateEelement estate={e} key={index} />
            </ScrollAnimation>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Properties;
