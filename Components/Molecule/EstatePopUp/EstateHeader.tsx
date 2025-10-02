// import React, { Dispatch, SetStateAction } from "react";
// import IconWithText from "../../Atoms/IconWithText";
// import Image from "next/image";

// const EstateHeader: React.FC<{
//   onClose: any;
//   imagesOpen: boolean;
//   setImagesOpen: Dispatch<SetStateAction<boolean>>;
// }> = ({ onClose, imagesOpen = false, setImagesOpen }) => {
//   return (
//     <div className="w-full p-4 bg-white sticky top-0 z-10 border-b border-gray-200 mb-3 mt-15 ">
//       <div className="flex items-center justify-between">
//         {/* Left side */}
//         <div className="flex items-center">
//           {imagesOpen ? (
//             <button
//               onClick={() => setImagesOpen(false)}
//               className="text-md text-blue-500 hover:underline"
//             >
//               {"<"} Back
//             </button>
//           ) : (
//             <button
//               onClick={() => onClose(null)}
//               className="text-md text-blue-500 hover:underline"
//             >
//               {"<"} Back
//             </button>
//           )}
//         </div>

//         {/* Center logo */}
//         <div className="flex-1 flex justify-center">
//           <Image
//             src="/assets/Group.png"
//             width={80}
//             height={80}
//             alt="Logo"
//             className="object-contain"
//           />
//         </div>

//         {/* Right side */}
//         <div className="flex gap-2 justify-end">
//           <IconWithText icon={"heart"} text={"Save"} />
//           <IconWithText icon={"share-variant"} text={"Share"} />
//           <IconWithText icon={"eye-off-outline"} text={"Hide"} />
//           <IconWithText icon={"dots-vertical"} text={"More"} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EstateHeader;

import React, { Dispatch, SetStateAction } from "react";
import IconWithText from "../../Atoms/IconWithText";
import Image from "next/image";

const EstateHeader: React.FC<{
  onClose: any;
  imagesOpen: boolean;
  setImagesOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ onClose, imagesOpen = false, setImagesOpen }) => {
  return (
    <div className="w-full p-3 sm:p-4 bg-white sticky top-0 z-10 border-b border-gray-200 mb-3 lg:mt-0 md:mt-0 mt-10">
      <div className="flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center">
          {imagesOpen ? (
            <button
              onClick={() => setImagesOpen(false)}
              className="text-sm sm:text-md text-blue-500 hover:underline"
            >
              {"<"} Back
            </button>
          ) : (
            <button
              onClick={() => onClose(null)}
              className="text-sm sm:text-md text-blue-500 hover:underline"
            >
              {"<"} Back
            </button>
          )}
        </div>

        {/* Center logo */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/assets/Group.png"
            width={60}
            height={60}
            alt="Logo"
            className="object-contain sm:w-20 sm:h-20"
          />
        </div>

        {/* Right side */}
        <div className="flex items-center gap-1 sm:gap-2 justify-end">
          {/* On mobile: show only icons, hide text */}
          <IconWithText
            icon={"heart"}
            text={"Save"}
            textClass="hidden sm:inline"
          />
          <IconWithText
            icon={"share-variant"}
            text={"Share"}
            textClass="hidden sm:inline"
          />
          <IconWithText
            icon={"eye-off-outline"}
            text={"Hide"}
            textClass="hidden sm:inline"
          />
          <IconWithText
            icon={"dots-vertical"}
            text={"More"}
            textClass="hidden sm:inline"
          />
        </div>
      </div>
    </div>
  );
};

export default EstateHeader;
