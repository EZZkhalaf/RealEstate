import React from "react";
import { AlertTriangle } from "lucide-react";
const InvestRisks = () => {
  const risks: string[] = [
    "Market fluctuations.",
    "Property taxes & maintenance costs.",
    "Vacancies or unreliable tenants.",
    "Lower liquidity compared to stocks.",
  ];

  const caseStudy = {
    title: "Success Story: Apartment Investment in Riyadh",
    desc: "An investor purchased an apartment in Riyadh for $200,000. Within 5 years, its value rose by 35% while generating $12,000 annually in rental income.",
  };

  return (
    <section className="py-12 px-6 bg-gray-50">
      {/* Risks */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-yellow-600 w-7 h-7" />
          <h2 className="text-2xl font-bold">Risks to Consider</h2>
        </div>
        <div className="bg-yellow-50 border border-yellow-300 rounded-2xl p-6 shadow-sm">
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {risks.map((risk, index: number) => (
              <li key={index}>{risk}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Success Story */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Success Story / Case Study</h2>
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
          <h3 className="text-lg font-semibold mb-2">{caseStudy.title}</h3>
          <p className="text-gray-600">{caseStudy.desc}</p>
        </div>
      </div>
    </section>
  );
};

export default InvestRisks;
