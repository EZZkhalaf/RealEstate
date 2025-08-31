import React, { useState } from "react";
import ButtonCustomize from "./Atoms/ButtonCustomize";
import NavigationButtons from "./MainComponents/Navigation/NavigationButtons";

const Navigation = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div
      className="fixed top-0 left-0 right-0 flex justify-around items-center sm:h-10 md:h-15 lg:h-20   bg-gray-200 p-4 shadow-lg z-50 w-screen  overflow-auto "
      style={{ fontFamily: "Newsreader" }}
    >
      <div className="hidden lg:flex">{"                        "}</div>
      <div className="hidden lg:flex"></div>

      <NavigationButtons />

      <div className="grid grid-cols-2 gap-6">
        <ButtonCustomize
          text="Sign In"
          // icon="email"
          color="#FFFFFF"
          hoverColor="#0B355780"
          textColor="#0B3557"
          hoverTextColor="#FFFFFF"
        />

        <ButtonCustomize
          text="Get Started"
          // icon="email"
          color="#0b3557e6"
          hoverColor="#144b7d"
          textColor="#FFFFFF"
          hoverTextColor="#FFFFFF"
        />
      </div>
    </div>
  );
};

export default Navigation;
