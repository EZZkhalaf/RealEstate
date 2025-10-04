import IconAtom from "@/Components/Atoms/IconAtom";
import ParagraphDescription from "@/Components/Atoms/ParagraphDescription";
import TitleAtom from "@/Components/Atoms/TitleAtom";
import ViewButtonAtom from "@/Components/Atoms/ViewButtonAtom";
import {
  OpCardInterface,
  OppurtunitiesListingInterface,
} from "@/Interface/InvestInterface";
import { Icon } from "@iconify/react";

const OpCard: React.FC<OpCardInterface> = ({ op }) => {
  return (
    <div className="flex flex-col gap-3 w-full justify-center shadow-2xl p-3 rounded-lg">
      <div className="flex gap-2 lg:flex-row md:flex-row flex-col items-center ">
        <IconAtom icon={op.icon} />
        <div className="flex flex-col ">
          <TitleAtom
            title={op.title}
            textSizeDefault="xl"
            textSizeLarge="2xl"
          />
          <ParagraphDescription
            textAlignment="text-start"
            description={op.desc}
            margin={false}
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between px-2 gap-4 mt-5">
        {/* Avg ROI */}
        <div className="flex flex-row sm:flex-col items-center  t gap-1">
          <p className="font-semibold">{op.avgROI}</p>
          <p className="text-xs">Avg. ROI</p>
        </div>

        {/* Min Investment */}
        <div className="flex flex-row sm:flex-col items-center   gap-1">
          <p className="font-semibold">{op.minInvestment}</p>
          <p className="text-xs">Min. Investment</p>
        </div>

        {/* Risk Level */}
        <div className="flex flex-row sm:flex-col items-center  gap-1">
          <p
            className={`font-semibold  px-2 flex items-center text-xs rounded-xl w-fit
        ${op.riskLevel === "Low" ? "bg-green-200 text-green-600" : ""}
        ${op.riskLevel === "Medium" ? "bg-yellow-200 text-yellow-600" : ""}
        ${op.riskLevel === "Medium-High" ? "bg-orange-200 text-orange-600" : ""}
        ${op.riskLevel === "High" ? "bg-red-200 text-red-600" : ""}
      `}
          >
            {op.riskLevel}
          </p>
          <p className="text-xs">Risk Level</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-2 text-xs text-gray-700">
        {op?.highlights?.slice(0, 4).map((point, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <Icon
              icon="mdi-light:check"
              className="text-green-500"
              width={18}
              height={18}
            />
            <span>{point}</span>
          </div>
        ))}
      </div>
      <ViewButtonAtom
        color={"#0B3557"}
        hoverColor={"#0B3557"}
        title={"Explore Properties"}
        // navigateTo={"idk"}
        textColor={"#FFFFFF"}
        padding="p-3"
      />
    </div>
  );
};

export const OppurtunitiesListing: React.FC<OppurtunitiesListingInterface> = ({
  opportunities,
}) => {
  return (
    <div className="grid grid-col-1 lg:grid-cols-2 md:grid-cols-2 gap-5">
      {opportunities?.map((op, indx) => (
        <OpCard key={indx} op={op} />
      ))}
    </div>
  );
};
