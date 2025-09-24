import { TitleAtomProps } from "@/Interface/InvestInterface";

const TitleAtom: React.FC<TitleAtomProps> = ({
  title,
  textSizeLarge = "3xl",
  textSizeDefault = "2xl",
}) => {
  const lgClass = `lg:text-${textSizeLarge}`;
  const defaultClass = `text-${textSizeDefault}`;

  return (
    <h1 className={`${lgClass} ${defaultClass} font-bold text-black`}>
      {title}
    </h1>
  );
};

export default TitleAtom;
