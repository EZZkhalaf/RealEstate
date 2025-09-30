"use client";

import TitleAtom from "../../../Components/Atoms/TitleAtom";
import ParagraphDescription from "../../../Components/Atoms/ParagraphDescription";
import ScrollAnimation from "../../../Animation/ScrollAnimation";
import SingleEstateEelement from "../../../Components/Molecule/Properties/SingleEstateEelement";
import Footer from "../../../Components/Footer";
import SmallTitle from "../../../Components/Atoms/SmallTitle";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import EstatePopUpInfo from "../../../Components/Molecule/Properties/EstatePopUpInfo";
import { useRouter } from "next/navigation";
import { getStaticEstates, getStaticEstatesFiltered } from "@/API/EstatesApi";
import { EstateInterface } from "@/Interface/EstateInterface";
import PagingButtons from "@/Components/Molecule/PagingButtons";
import { FiltersInterface } from "@/Interface/ServicesInterface";
import FailedMessage from "@/Components/Atoms/FailedMessage";

export interface PropertiesInterface {
  // filters?: FiltersInterface;
  totalCount: number;
  router: any;
  estates: EstateInterface[];
  selectedEstate: EstateInterface | null;
  setSelectedEstate: Dispatch<SetStateAction<EstateInterface | null>>;
  currentPage: number;
  onPageChange: Dispatch<SetStateAction<number>>;
  totalPages: number;
  pressedEstate: EstateInterface | null;
  setPressedEstate: Dispatch<SetStateAction<EstateInterface | null>>;
}

const Properties: React.FC<PropertiesInterface> = ({
  totalCount,
  router,
  estates,
  selectedEstate,
  setSelectedEstate,
  currentPage,
  onPageChange,
  totalPages,
  pressedEstate,
  setPressedEstate,
}) => {
  return (
    <div className="flex flex-col lg:mt-15 md:mt-15 mt-50 px-5 py-5 max-h-[100vh] overflow-auto">
      <div className="flex flex-col gap-1 items-start ">
        <TitleAtom title="Real Estates & Homes For Sale" />
        <ParagraphDescription
          description={`${totalCount} Properties for Sale in Saudi , explore hundreds of available and good structure estates.`}
        />
      </div>

      {estates && estates.length > 0 ? (
        <div
          className={`grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 w-full mb-10 py-6 `}
        >
          {estates?.map((e: EstateInterface, index: number) => (
            <div key={index} className="rounded-2xl">
              <ScrollAnimation>
                <SingleEstateEelement
                  estate={e}
                  onClick={() => setPressedEstate(e)}
                  viewDetailsClick={() => setSelectedEstate(e)}
                />
              </ScrollAnimation>
            </div>
          ))}
        </div>
      ) : (
        <FailedMessage title="No Estates Found" />
      )}
      <PagingButtons
        currentPage={currentPage}
        onPageChange={onPageChange}
        totalPages={totalPages}
      />

      {selectedEstate && (
        <EstatePopUpInfo
          estate_id={selectedEstate.id}
          onClose={() => setSelectedEstate(null)}
          setSelectedEstate={setSelectedEstate}
          // estates={estates?.slice(0, 4)}
        />
      )}
    </div>
  );
};

export default Properties;
