"use client";

import AgentCard from "../../../Components/Molecule/AgentCard";
import ViewButtonAtom from "../../../Components/Atoms/ViewButtonAtom";
import PagingButtons from "../../../Components/Molecule/PagingButtons";
import { useRouter } from "next/navigation";
import NotFound from "@/Components/Atoms/NotFound";
import { AgentInterface } from "@/Interface/AgentInterface";
import { Dispatch, SetStateAction } from "react";

interface AgentsCardInterface {
  agents?: AgentInterface[];
  isPage?: boolean;
  currentPage?: number;
  onPageChange?: Dispatch<SetStateAction<number>>;
  totalPages?: number;
}

const AgentsCards: React.FC<AgentsCardInterface> = ({
  agents = [],
  isPage = false,
  currentPage,

  onPageChange,
  totalPages,
}) => {
  const router = useRouter();

  return (
    <>
      {agents.length !== 0 ? (
        <div className="flex flex-col items-center sm:p-2 ">
          <div className="grid lg:grid-cols-4  md:grid-cols-2 min-[1000px]:grid-cols-2 sm:grid-cols-1 w-full  mt-10 gap-6">
            {agents?.map((a, index) => (
              <AgentCard key={index} agent={a} />
            ))}
          </div>
          {!isPage ? (
            <div className="mt-8 ">
              <ViewButtonAtom
                onClick={() => router.push("/agents")}
                title={"View All Agents"}
                color={"#FFFFFF"}
                hoverColor={"#0B3557"}
                textColor={"#0B3557"}
                hoverTextColor={"#FFFFFF"}
              />
            </div>
          ) : (
            <>
              {currentPage && onPageChange && totalPages && (
                <PagingButtons
                  currentPage={currentPage}
                  onPageChange={onPageChange}
                  totalPages={totalPages}
                />
              )}
            </>
          )}
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default AgentsCards;
