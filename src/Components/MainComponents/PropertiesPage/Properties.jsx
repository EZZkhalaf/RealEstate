import TitleAtom from "../../Atoms/TitleAtom";
import ParagraphDescription from "../../Atoms/ParagraphDescription";
import estate1 from "../../../assets/estate1.avif";
import ScrollAnimation from "../../../Animation/ScrollAnimation";
import SingleEstateEelement from "../../Molecule/Properties/SingleEstateEelement";
import { useNavigate } from "react-router-dom";
import inside1 from "../../../assets/inside1.jpg";
import inside2 from "../../../assets/inside2.jpg";
import inside3 from "../../../assets/inside3.jpg";
import inside4 from "../../../assets/inside4.webp";
const Properties = () => {
  const totalCount = 9002;
  const anyList = ["first", "second", "third"];
  const estates = [
    {
      price: "$4,500,000",
      title: "Family Compound in Al Malqa",
      location: "Riyadh, Saudi Arabia",
      beds: 6,
      baths: 5,
      area: "6000 sqft",
      image: [estate1, inside1, inside2, inside3, inside4],
      features: ["Multiple Villas", "Garden", "Pool"],
      actions: ["View Details", "Contact Agent"],
      type: "compound",
    },
    {
      price: "$3,200,000",
      title: "Luxury Villa in Al Nakheel",
      location: "Riyadh, Saudi Arabia",
      beds: 5,
      baths: 4,
      image: [estate1, inside1, inside2, inside3, inside4],
      area: "4500 sqft",
      features: ["Garden", "Private Pool", "Garage"],
      actions: ["View Details", "Contact Agent"],
      type: "compound",
    },
    {
      price: "$5,100,000",
      title: "Modern Compound in Al Yasmin",
      location: "Riyadh, Saudi Arabia",
      beds: 7,
      baths: 6,
      image: [estate1, inside1, inside2, inside3, inside4],
      area: "7000 sqft",
      features: ["Multiple Villas", "Gym", "Pool", "Garden"],
      actions: ["View Details", "Contact Agent"],
      type: "townhouse",
    },
    {
      price: "$2,800,000",
      title: "Elegant Villa in Al Rawdah",
      location: "Riyadh, Saudi Arabia",
      beds: 4,
      baths: 3,
      image: [estate1, inside1, inside2, inside3, inside4],
      area: "3800 sqft",
      features: ["Garden", "Pool"],
      actions: ["View Details", "Contact Agent"],
      type: "Villa",
    },
    {
      price: "$6,000,000",
      title: "Premium Family Compound in Al Malqa",
      location: "Riyadh, Saudi Arabia",
      beds: 8,
      baths: 7,
      image: [estate1, inside1, inside2, inside3, inside4],
      area: "8500 sqft",
      features: ["Multiple Villas", "Garden", "Pool", "Tennis Court"],
      actions: ["View Details", "Contact Agent"],
      type: "penthouse",
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="flex flex-col px-10 py-5">
      <div className="flex flex-col gap-1 items-start ">
        <TitleAtom title={"Real Estates & Homes For Sale"} />
        <ParagraphDescription
          description={`${totalCount} Properties for Sale in Saudi , explore hundreds of available and good structure estates.`}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full mb-10 py-6 ">
        {estates.map((e, index) => (
          <div
            key={index}
            onClick={() => navigate(`/properties/${index}`)}
            className="rounded-2xl"
          >
            <ScrollAnimation key={index}>
              <SingleEstateEelement estate={e} key={index} />
            </ScrollAnimation>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;
