const PercentageBar: React.FC<{ fund_percentage: number }> = ({
  fund_percentage,
}) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-3 relative">
      {/* Green filled bar */}
      <div
        className="bg-green-500 h-3 rounded-full"
        style={{
          width: `${fund_percentage >= 100 ? "100" : fund_percentage}%`,
        }}
      ></div>
    </div>
  );
};

export default PercentageBar;
