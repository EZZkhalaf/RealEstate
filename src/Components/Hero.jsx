// import React from "react";
// // import HeroImage from "../assets/HeroImage.jpg";
// import HeroTitle from "./MainComponents/Hero/HeroTitle";
// import PriceHero from "./MainComponents/Hero/PriceHero";
// import HeroSummary from "./MainComponents/Hero/HeroSummary";
// import ScrollAnimation from "../Animation/ScrollAnimation";

// const Hero = ({
//   image,
//   heroTitle1,
//   heroTitle2,
//   heroParagraph,
//   priceHeroExist = true,
//   component,
//   summary,
// }) => {
//   return (
//     <div
//       style={{ backgroundImage: `url(${image})` }}
//       className=" bg-center bg-no-repeat min-w-full bg-fit min-h-screen flex flex-col items-center justify-center bg-black/40"
//     >
//       <div className="relative bg-center bg-no-repeat w-full min-h-screen flex flex-col items-center justify-center bg-black/40">
//         <div className="flex flex-col items-center justify-center h-full gap-10">
//           <HeroTitle
//             title1={heroTitle1}
//             title2={heroTitle2}
//             paragraph={heroParagraph}
//           />
//           {priceHeroExist && (
//             <div className="w-full px-2">
//               <ScrollAnimation type="zoom-in" delay={1.5}>
//                 <PriceHero />
//               </ScrollAnimation>
//             </div>
//           )}
//           <ScrollAnimation type="fade-up" delay={2}>
//             {component}
//           </ScrollAnimation>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from "react";
// import HeroImage from "../assets/HeroImage.jpg";
import HeroTitle from "./MainComponents/Hero/HeroTitle";
import PriceHero from "./MainComponents/Hero/PriceHero";
import HeroSummary from "./MainComponents/Hero/HeroSummary";
import ScrollAnimation from "../Animation/ScrollAnimation";

const Hero = ({
  image,
  heroTitle1,
  heroTitle2,
  heroParagraph,
  // priceHeroExist = true,
  // component2,
  minHeight = "min-h-screen",
  // summary,
  // component1,
  children,
}) => {
  const heroStyle = image ? { backgroundImage: `url(${image})` } : {}; // no background image if none provided

  return (
    <div
      style={heroStyle}
      className={`bg-center bg-no-repeat bg-cover min-w-full ${minHeight} flex flex-col items-center justify-center ${
        image ? "bg-black/40" : "bg-black/70"
      }`}
    >
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black/40">
        <div className="flex flex-col items-center justify-center h-full gap-10 text-center">
          <HeroTitle
            title1={heroTitle1}
            title2={heroTitle2}
            paragraph={heroParagraph}
          />
          {/* <div className="w-full px-2">
            <ScrollAnimation type="zoom-in" delay={1.5}>
              {component1}
            </ScrollAnimation>
          </div>

          <ScrollAnimation type="fade-up" delay={2}>
            {component2}
          </ScrollAnimation> */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Hero;
