interface FundProgressProps {
  fund_percentage: number; // 0 to 100
}

const PercentageBar: React.FC<FundProgressProps> = ({ fund_percentage }) => {
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
