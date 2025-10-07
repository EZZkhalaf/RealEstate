import React from "react";
import { CiLocationOn } from "react-icons/ci";
import FeatureElement from "../Atoms/FeatureElement";
import CardTitle from "../Atoms/CardTitle";
import CardLocation from "../Atoms/CardLocation";
import ButtonCustomize from "../Atoms/ButtonCustomize";
import { EstateInterface } from "@/Interface/EstateInterface";

interface CardBodyInterface {
  estate: EstateInterface;
  viewDetailsClick?: any;
}

const FeatureElementListing: React.FC<{ estate: EstateInterface }> = ({
  estate,
}) => {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-3 mt-3">
      {estate?.estate_features?.blocks
        ?.slice(0, 3)
        .map((e: any, index: number) => (
          <FeatureElement key={index} text={e.data.text} />
        ))}
    </div>
  );
};

const CardBodyButtons: React.FC<{ viewDetailsClick: (e: any) => void }> = ({
  viewDetailsClick,
}) => {
  return (
    <div className="flex flex-col lg:flex-row text-2xl  gap-1 w-full pt-3">
      <ButtonCustomize
        text="View Details"
        onClick={viewDetailsClick}
        color="#D1D5DB"
        hoverColor="#0B3557E6"
        textColor="#000000"
        hoverTextColor="#FFFFFF"
      />

      <ButtonCustomize
        text="Contact Agent"
        color="#0B3557"
        hoverColor="#0B355780"
        textColor="#FFFFFF"
        hoverTextColor="#FFFFFF"
      />
    </div>
  );
};

// const CardBodyArea: React.FC<CardBodyInterface> = ({
//   estate,
//   viewDetailsClick,
// }) => {
//   return (
//     <div>
//       <div className="flex flex-col h-full px-4 py-6 rounded-lg transform transition-transform gap-2 duration-300 ">
//         <CardTitle title={estate.title} />
//         <CardLocation
//           location={
//             estate?.estate_city?.area.name + ", " + estate?.estate_city?.name
//           }
//         />
//         <div className="flex items-center gap-4 text-gray-600 mt-2 text-sm">
//           <div className="flex flex-row gap-1 ">
//             <p className="font-bold text-md">{estate.beds}</p>
//             beds
//           </div>
//           <div className="flex flex-row gap-1 ">
//             <p className="font-bold text-md">{estate.baths}</p>
//             baths
//           </div>
//           <div className="flex flex-row gap-1 ">
//             <p className="font-bold text-md">{estate.area}</p>
//             sqft
//           </div>
//         </div>

//         <FeatureElementListing estate={estate} />

//         <CardBodyButtons viewDetailsClick={viewDetailsClick} />
//       </div>
//     </div>
//   );
// };

const CardBodyArea: React.FC<CardBodyInterface> = ({
  estate,
  viewDetailsClick,
}) => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex flex-col flex-grow px-4 py-6 rounded-lg transform transition-transform gap-2 duration-300">
        <CardTitle title={estate.title} />
        <CardLocation
          location={
            estate?.estate_city?.area.name + ", " + estate?.estate_city?.name
          }
        />
        <div className="flex items-center gap-4 text-gray-600 mt-2 text-sm">
          <div className="flex flex-row gap-1">
            <p className="font-bold text-md">{estate.beds}</p>
            beds
          </div>
          <div className="flex flex-row gap-1">
            <p className="font-bold text-md">{estate.baths}</p>
            baths
          </div>
          <div className="flex flex-row gap-1">
            <p className="font-bold text-md">{estate.area}</p>
            sqft
          </div>
        </div>

        <FeatureElementListing estate={estate} />

        {/* Spacer pushes the buttons down */}
        <div className="flex-grow" />

        {/* Buttons stay at bottom */}
        <CardBodyButtons viewDetailsClick={viewDetailsClick} />
      </div>
    </div>
  );
};

export default CardBodyArea;
