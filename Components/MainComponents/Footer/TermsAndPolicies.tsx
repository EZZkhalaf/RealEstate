import React from "react";

interface PolicyBlock {
  id: string;
  type: string;
  data: {
    text: string;
  };
}

interface TermsAndPoliciesInterface {
  header?: string;
  privacyAndTerms?: {
    blocks: PolicyBlock[];
  };
}

const TermsAndPolicies: React.FC<{
  termsAndPolicies: TermsAndPoliciesInterface;
}> = ({ termsAndPolicies }) => {
  if (!termsAndPolicies) return null;

  return (
    <div className="border-t border-gray-400 flex justify-between mt-8">
      {/* Header */}
      <p className="text-sm text-gray-400 mt-4">
        {termsAndPolicies.header ?? ""}
      </p>

      {/* Privacy & Terms Links */}
      <div className="flex gap-2 mt-4">
        {termsAndPolicies.privacyAndTerms?.blocks?.map((block, index) => (
          <p key={block.id || index} className="text-sm text-gray-400">
            {block.data?.text ?? ""}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TermsAndPolicies;
