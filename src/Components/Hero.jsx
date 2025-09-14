import HeroTitle from "./MainComponents/Hero/HeroTitle";

const Hero = ({
  image,
  heroTitle1,
  heroTitle2,
  heroParagraph,
  minHeight = "min-h-screen",
  children,
}) => {
  const heroStyle = image ? { backgroundImage: `url(${image})` } : {};

  return (
    <div
      style={heroStyle}
      className={`bg-center bg-no-repeat bg-cover min-w-full ${minHeight} flex flex-col items-center justify-center ${
        image ? "bg-black/40" : "bg-black/70"
      }`}
    >
      <div
        className={`relative w-full ${minHeight} flex flex-col items-center justify-center bg-black/40`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10 text-center ">
          <HeroTitle
            title1={heroTitle1}
            title2={heroTitle2}
            paragraph={heroParagraph}
          />

          {children}
        </div>
      </div>
    </div>
  );
};

export default Hero;
