const SmallFeature = ({
  text,
  bgColor = "bg-gray-300",
}: {
  text: string;
  bgColor: string;
}) => {
  return (
    <div
      className={`px-2 py-0.5 ${bgColor} rounded-lg text-xs font-medium text-white`}
    >
      {text}
    </div>
  );
};

export const TransactionFeatures = ({
  type,
  featured,
  propertyType,
}: {
  type: string;
  featured: boolean;
  propertyType: string;
}) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-row gap-1">
        <SmallFeature
          text={type}
          bgColor={type === "sale" ? "bg-blue-600" : "bg-green-600"}
        />
        {featured && <SmallFeature text="Featured" bgColor="bg-green-500" />}
      </div>
      <p className="text-lg font-medium">{propertyType}</p>
    </div>
  );
};
