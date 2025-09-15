import React from "react";

const TypesListing = ({ types }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {types.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
        >
          <img
            src={item.img}
            alt={item.title}
            className="h-40 w-full object-cover"
          />
          <div className="p-4 flex justify-center">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            {/* <p className="text-gray-600 text-sm mt-2">{item.desc}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TypesListing;
