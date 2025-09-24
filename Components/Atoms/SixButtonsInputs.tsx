import { SixButtonsInputsInterface } from "@/Interface/ServicesInterface";

const SixButtonsInputs: React.FC<SixButtonsInputsInterface> = ({
  title,
  options,
  selected,
  setSelected,
}) => {
  return (
    <div className="flex flex-col items-start gap-2 px-4 w-full mb-3">
      <p className="font-bold text-gray-500">{title}</p>
      <div className="flex max-w-full w-full  border border-gray-300 overflow-x-auto">
        {options.map((op: any, index: number) => (
          <button
            key={index}
            onClick={() => setSelected(selected === op ? null : op)}
            className={`p-3 text-md font-semibold  w-full hover:bg-gray-200 transform-color duration-300 ${
              selected === op
                ? " border-2 border-blue-500"
                : "border border-gray-300"
            }`}
          >
            {op}
            {op !== "Any" && "+"}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SixButtonsInputs;
