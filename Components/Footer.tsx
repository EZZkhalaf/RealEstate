"use client";
import React, { useEffect, useState } from "react";
import TermsAndPolicies from "./MainComponents/Footer/TermsAndPolicies";
import FooterIconsAndLocation from "./MainComponents/Footer/FooterIconsAndLocation";
import FooterColumns from "./MainComponents/Footer/FooterColumns";
import { MenuData, UpperFooterInterface } from "@/Interface/ServicesInterface";
import { getStaticFooter } from "@/API/OtherApi";

const UpperFooterPart: React.FC<UpperFooterInterface> = ({
  menuData = [],
  locationAndIconsTitle,
  icons,
}) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 gap-4 px-4">
      <FooterIconsAndLocation
        title={locationAndIconsTitle || ""}
        icons={icons}
      />
      {menuData.map((col: MenuData, index: number) => (
        <FooterColumns key={index} title={col.title} elements={col.items} />
      ))}
    </div>
  );
};

const Footer = () => {
  const [menuData, setMenuData] = useState<MenuData[]>([]);
  const [termsAndPolicies, setTermsAndPolicies] = useState<any>(null);
  const [locationAndIconsTitle, setLocationAndIconsTitle] =
    useState<string>("");
  const [icons, setIcons] = useState<string[]>([]);

  const fetchFooter = async () => {
    try {
      const response = await getStaticFooter();

      setMenuData(response?.topdata || []);
      setTermsAndPolicies(response?.termsAndPolicies ?? null);
      setLocationAndIconsTitle(response?.termsAndPolicies?.footerLeftTop ?? "");

      const iconsCleared: string[] =
        response?.termsAndPolicies?.icons?.blocks?.map(
          (block: any) => block.data?.text ?? ""
        ) ?? [];

      setIcons(iconsCleared);
    } catch (error) {
      console.error("Error fetching footer:", error);
    }
  };

  useEffect(() => {
    fetchFooter();
  }, []);
  return (
    <div className="bg-gray-900 text-white py-16 min-w-full flex justify-center px-5 lg:px-12">
      <div className="flex flex-col justify-center">
        <UpperFooterPart
          menuData={menuData}
          locationAndIconsTitle={locationAndIconsTitle}
          icons={icons}
        />

        <TermsAndPolicies termsAndPolicies={termsAndPolicies} />
      </div>
    </div>
  );
};

export default Footer;
