import TitleAtom from "./Atoms/TitleAtom";
import ParagraphDescription from "./Atoms/ParagraphDescription";
import ServicesCards from "./MainComponents/OurServices/ServicesCards";
import ScrollAnimation from "../Animation/ScrollAnimation";
import GrayLine from "./Atoms/GrayLine";
import { ServiceInterface } from "@/Interface/ServicesInterface";

const OurServices: React.FC<{ ourServices: any }> = ({ ourServices }) => {
  // const [services, setServices] = useState<ServiceInterface[]>(ourServices);
  const services: ServiceInterface[] = ourServices;

  return (
    <div className="flex flex-col items-center mt-20  max-w-7xl">
      <ScrollAnimation>
        <TitleAtom title={"Our Services"} />
      </ScrollAnimation>
      <ScrollAnimation>
        <ParagraphDescription
          description={
            "Comprehensive real estate solutions tailored to your needs"
          }
        />
        <GrayLine width={"w-full"} />
      </ScrollAnimation>

      <div className="flex items-center p-5">
        <ServicesCards services={services} />
      </div>
    </div>
  );
};

export default OurServices;
