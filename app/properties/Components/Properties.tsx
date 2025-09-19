"use client";

import TitleAtom from "../../../Components/Atoms/TitleAtom";
import ParagraphDescription from "../../../Components/Atoms/ParagraphDescription";
import ScrollAnimation from "../../../Animation/ScrollAnimation";
import SingleEstateEelement from "../../../Components/Molecule/Properties/SingleEstateEelement";
import Footer from "../../../Components/Footer";
import SmallTitle from "../../../Components/Atoms/SmallTitle";
import { useEffect, useState } from "react";
import EstatePopUpInfo from "../../../Components/Molecule/Properties/EstatePopUpInfo";
import { useRouter } from "next/navigation";
import { getStaticEstates, getStaticEstatesFiltered } from "@/API/EstatesApi";
import { EstateInterface } from "@/Interface/EstateInterface";
import PagingButtons from "@/Components/Molecule/PagingButtons";
import { FiltersInterface } from "@/app/properties/page";

const Properties: React.FC<{
  filters?: FiltersInterface;
}> = ({ filters }) => {
  const totalCount: number = 9002;
  const router = useRouter();

  const [estates, setEstates] = useState<EstateInterface[]>([]);
  const [selectedEstate, setSelectedEstate] = useState<EstateInterface | null>(
    null
  );

  const [currentPage, onPageChange] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  const fetchEstates = async () => {
    const response = await getStaticEstatesFiltered(
      currentPage,
      filters?.homeType || "All Properties",
      filters?.sort || "Low to High",
      filters
    );
    console.log(response);
    setEstates(response.data);
    setTotalPages(response?.pagination?.totalPages as number);
  };
  useEffect(() => {
    fetchEstates();
  }, [filters, currentPage]);

  // console.log(estates);
  return (
    <div className="flex flex-col lg:mt-15 md:mt-15 mt-50 px-5 py-5 max-h-[100vh] overflow-auto">
      <div className="flex flex-col gap-1 items-start ">
        <TitleAtom title="Real Estates & Homes For Sale" />
        <ParagraphDescription
          description={`${totalCount} Properties for Sale in Saudi , explore hundreds of available and good structure estates.`}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 w-full mb-10 py-6 ">
        {estates?.map((e: EstateInterface, index: number) => (
          <div
            key={index}
            // onClick={() => setSelectedEstate(e)}
            className="rounded-2xl"
          >
            <ScrollAnimation>
              <SingleEstateEelement
                estate={e}
                viewDetailsClick={() => setSelectedEstate(e)}
              />
            </ScrollAnimation>
          </div>
        ))}
      </div>
      <PagingButtons
        currentPage={currentPage}
        onPageChange={onPageChange}
        totalPages={totalPages}
      />

      {selectedEstate && (
        <EstatePopUpInfo
          estate_id={selectedEstate.id}
          onClose={() => setSelectedEstate(null)}
        />
      )}

      <SmallTitle title="Similar Results Nearby" additionalCss="text-3xl p-0" />
      <p className="text-xs px-4 mt-2">Results Within 4 miles</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full mb-10 py-6 ">
        {estates?.map((e, index: number) => (
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
