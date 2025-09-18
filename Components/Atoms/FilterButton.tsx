"use client";
export const FilterButton: React.FC<{
  text: string;
  selected: boolean;
  onClick: () => void;
}> = ({ text, selected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`text-sm p-1 rounded-lg border px-3  ${
        selected
          ? "bg-gray-800 text-white"
          : "bg-white hover:bg-gray-300 border-gray-300"
      }`}
    >
      {text}
    </button>
  );
};
