import React from "react";
import TitleAtom from "../Atoms/TitleAtom";
import ParagraphDescription from "../Atoms/ParagraphDescription";

interface ImageWithParagraphInterafce {
  image?: string;
  paragraph: string;
  title: string;
  imageLeft?: boolean;
}
const ImageWithParagraph: React.FC<ImageWithParagraphInterafce> = ({
  image,
  paragraph,
  title,
  imageLeft = false,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-center  md:items-center  gap-30 mb-12 ${
        imageLeft ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Text Section */}
      <div className=" max-w-xl ">
        <TitleAtom title={title} textSizeDefault="lg" textSizeLarge="2xl" />
        <ParagraphDescription description={paragraph} />
      </div>

      {/* Image Section */}
      <div className="flex justify-center w-fit">
        <img
          src={image}
          alt={title}
          className="w-full max-w-xl rounded-xl shadow-md object-cover"
        />
      </div>
    </div>
  );
};

export default ImageWithParagraph;
