// "use client";

// import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
// import ButtonCustomize from "./Atoms/ButtonCustomize";
// import NavigationButtons from "./MainComponents/Navigation/NavigationButtons";
// import Image from "next/image";
// import Group from "../public/assets/Group.png";
// import { useSession } from "next-auth/react";
// const Navigation: React.FC<{
//   authOpen: boolean;
//   setAuthOpen: any;
// }> = ({ setAuthOpen, authOpen = false }) => {
//   const {data : session} = useSession()
//   return (
//     <div
//       className="fixed top-0 right-0 left-0  bg-gray-100 shadow-lg z-10000 min-w-screen max-w-screen"
//       style={{ fontFamily: "Newsreader" }}
//     >
//       {/* Centered inner container with max width */}
//       <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center max-w-7xl mx-auto py-3 px-2 ">
//         {/* Logo (show on all screens, but size down) */}
//         <div className="flex justify-center sm:justify-start">
//           <Image src="/assets/Group.png" width={80} height={80} alt="Logo" />
//         </div>

//         {/* Navigation buttons (hide on mobile if you plan to use hamburger) */}
//         <div className="hidden md:block">
//           <NavigationButtons />
//         </div>

//         {/* Action buttons */}
//         <div className="flex gap-3 justify-center sm:justify-end">
//           <ButtonCustomize
//             onClick={setAuthOpen}
//             text="Sign In"
//             color="#FFFFFF"
//             hoverColor="#0B355780"
//             textColor="#0B3557"
//             hoverTextColor="#FFFFFF"
//           />
//           <ButtonCustomize
//             text="Get Started"
//             color="#0b3557e6"
//             hoverColor="#144b7d"
//             textColor="#FFFFFF"
//             hoverTextColor="#FFFFFF"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navigation;

"use client";

import React from "react";
import ButtonCustomize from "./Atoms/ButtonCustomize";
import NavigationButtons from "./MainComponents/Navigation/NavigationButtons";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";

const Navigation: React.FC<{
  authOpen: boolean;
  setAuthOpen: any;
}> = ({ setAuthOpen, authOpen = false }) => {
  const { data: session } = useSession();

  return (
    <div
      className="fixed top-0 right-0 left-0 bg-gray-100 shadow-lg z-10000 min-w-screen max-w-screen"
      style={{ fontFamily: "Newsreader" }}
    >
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center max-w-7xl mx-auto py-3 px-2">
        {/* Logo */}
        <div className="flex justify-center sm:justify-start">
          <Image src="/assets/Group.png" width={80} height={80} alt="Logo" />
        </div>

        {/* Navigation buttons */}
        <div className="hidden md:block">
          <NavigationButtons />
        </div>

        {/* Action buttons / Profile */}
        <div className="flex gap-3 justify-center sm:justify-end items-center">
          {session ? (
            // User is logged in → show profile info
            <div className="flex items-center gap-2">
              {session.user?.image && (
                <Image
                  src={session.user.image}
                  alt="Profile"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              )}
              <span className="font-medium text-gray-800">
                {session.user?.name || session.user?.email}
              </span>
              <ButtonCustomize
                text="Sign Out"
                onClick={() => signOut()}
                color="#0b3557e6"
                hoverColor="#144b7d"
                textColor="#FFFFFF"
                hoverTextColor="#FFFFFF"
              />
            </div>
          ) : (
            // User is not logged in → show buttons
            <>
              <ButtonCustomize
                onClick={setAuthOpen}
                text="Sign In"
                color="#FFFFFF"
                hoverColor="#0B355780"
                textColor="#0B3557"
                hoverTextColor="#FFFFFF"
              />
              <ButtonCustomize
                text="Get Started"
                color="#0b3557e6"
                hoverColor="#144b7d"
                textColor="#FFFFFF"
                hoverTextColor="#FFFFFF"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
