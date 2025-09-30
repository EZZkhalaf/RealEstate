"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import ButtonCustomize from "./Atoms/ButtonCustomize";
import NavigationButtons from "./MainComponents/Navigation/NavigationButtons";
import Image from "next/image";
import Group from "../public/assets/Group.png";
const Navigation: React.FC<{
  authOpen: boolean;
  setAuthOpen: any;
}> = ({ setAuthOpen, authOpen = false }) => {
  return (
    // <div
    //   className="fixed top-0 left-0 right-0 flex justify-around items-center sm:h-10 md:h-15 lg:h-20   bg-gray-100 p-4 shadow-lg z-999 w-screen  overflow-auto max-w-7xl"
    //   style={{ fontFamily: "Newsreader" }}
    // >
    //   <div className="hidden lg:flex">{"                        "}</div>
    //   {/* <div className="hidden lg:flex"></div> */}

    //   <NavigationButtons />

    //   <div className="grid grid-cols-2 gap-6">
    //     <ButtonCustomize
    //       onClick={setAuthOpen}
    //       text="Sign In"
    //       color="#FFFFFF"
    //       hoverColor="#0B355780"
    //       textColor="#0B3557"
    //       hoverTextColor="#FFFFFF"
    //     />

    //     <ButtonCustomize
    //       text="Get Started"
    //       color="#0b3557e6"
    //       hoverColor="#144b7d"
    //       textColor="#FFFFFF"
    //       hoverTextColor="#FFFFFF"
    //     />
    //   </div>
    // </div>
    <div
      className="fixed top-0 left-0 right-0 bg-gray-100 shadow-lg z-50"
      style={{ fontFamily: "Newsreader" }}
    >
      {/* Centered inner container with max width */}
      <div className="flex justify-between items-center max-w-7xl mx-auto sm:h-10 md:h-15 lg:h-20  py-3 px-1">
        <div className=" lg:flex">
          <Image src="/assets/Group.png" width={100} height={100} alt={"iii"} />
        </div>

        <NavigationButtons />

        <div className="grid grid-cols-2 gap-6">
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
        </div>
      </div>
    </div>
  );
};

export default Navigation;
