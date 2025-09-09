import AgentCard from "../../Molecule/AgentCard";

import ViewButtonAtom from "../../Atoms/ViewButtonAtom";
import { useNavigate } from "react-router-dom";
import PagingButtons from "../../Molecule/PagingButtons";
import { useState } from "react";

const AgentsCards = ({ agents, isPage = false }) => {
  const navigate = useNavigate();
  const [currentPage, onPageChange] = useState(1);
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
            navigateTo={"any url"}
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
