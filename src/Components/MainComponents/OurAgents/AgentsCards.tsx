import AgentCard from "../../Molecule/AgentCard";

import ViewButtonAtom from "../../Atoms/ViewButtonAtom";
import { useNavigate } from "react-router-dom";
import PagingButtons from "../../Molecule/PagingButtons";
import { useState } from "react";
import { Agent } from "../../../Pages/Agents";

// {
//   "id": 6,
//   "name": "Saleh Al-Mutairi",
//   "rating": 4.5,
//   "image": "/assets/person2.jpeg",
//   "locations": ["Al Rawdah", "Al Nakheel"],
//   "sales": "120+",
//   "experience": "3 years",
//   "specialties": ["Starter Homes", "Townhouses"]
// },

interface AgentsCardInterface {
  agents: Agent[];
  isPage?: boolean;
}

const AgentsCards: React.FC<AgentsCardInterface> = ({
  agents = [],
  isPage = false,
}) => {
  const navigate = useNavigate();
  const [currentPage, onPageChange] = useState<number>(1);
  let totalPages = 10;
  return (
    <div className="flex flex-col items-center sm:p-2 ">
      <div className="grid lg:grid-cols-4  md:grid-cols-2 min-[1000px]:grid-cols-2 sm:grid-cols-1 w-full lg:px-20  mt-10 gap-6">
        {agents.map((a, index) => (
          <AgentCard key={index} agent={a} />
        ))}
      </div>
      {!isPage ? (
        <div className="mt-8 ">
          <ViewButtonAtom
            onClick={() => navigate("/agents")}
            title={"View All Agents"}
            color={"#FFFFFF"}
            hoverColor={"#0B3557"}
            textColor={"#0B3557"}
            hoverTextColor={"#FFFFFF"}
          />
        </div>
      ) : (
        <PagingButtons
          currentPage={currentPage}
          onPageChange={onPageChange}
          totalPages={totalPages}
        />
      )}
    </div>
  );
};

export default AgentsCards;
