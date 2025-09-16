"use client";

import TitleAtom from "../../Atoms/TitleAtom";
import ParagraphDescription from "../../Atoms/ParagraphDescription";
import ScrollAnimation from "../../../Animation/ScrollAnimation";
import SingleEstateEelement from "../../Molecule/Properties/SingleEstateEelement";
import Footer from "../../Footer";
import SmallTitle from "../../Atoms/SmallTitle";
import { useEffect, useState } from "react";
import EstatePopUpInfo from "../../Molecule/Properties/EstatePopUpInfo";
import { useRouter } from "next/navigation";
import { getStaticEstates } from "@/API/EstatesApi";
import { EstateInterface } from "@/Interface/EstateInterface";

const Properties = () => {
  const totalCount: number = 9002;
  const router = useRouter();

  const [estates, setEstates] = useState<EstateInterface[]>([]);
  const [selectedEstate, setSelectedEstate] = useState<EstateInterface | null>(
    null
  );

  useEffect(() => {
    const fetchEstates = async () => {
      const response = await getStaticEstates();
      setEstates(response);
    };
    fetchEstates();
  }, []);

  return (
    <div className="flex flex-col lg:mt-15 md:mt-15 mt-50 px-5 py-5 max-h-[100vh] overflow-auto">
      <div className="flex flex-col gap-1 items-start ">
        <TitleAtom title="Real Estates & Homes For Sale" />
        <ParagraphDescription
          description={`${totalCount} Properties for Sale in Saudi , explore hundreds of available and good structure estates.`}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 w-full mb-10 py-6 ">
        {estates?.map((e, index) => (
          <div
            key={index}
            onClick={() => setSelectedEstate(e)}
            className="rounded-2xl"
          >
            <ScrollAnimation>
              <SingleEstateEelement estate={e} />
            </ScrollAnimation>
          </div>
        ))}
      </div>

      {selectedEstate && (
        <EstatePopUpInfo
          estate_id={selectedEstate.id}
          onClose={() => setSelectedEstate(null)}
        />
      )}

      <SmallTitle title="Similar Results Nearby" additionalCss="text-3xl p-0" />
      <p className="text-xs px-4 mt-2">Results Within 4 miles</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full mb-10 py-6 ">
        {estates.map((e, index) => (
          <div
            key={index}
            onClick={() => router.push(`/properties/${index}`)}
            className="rounded-2xl"
          >
            <ScrollAnimation>
              <SingleEstateEelement estate={e} />
            </ScrollAnimation>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Properties;
