import { Icon } from "@iconify/react";

const WebsiteAdvantages: React.FC<{ websiteInfo: any }> = ({ websiteInfo }) => {
  return (
    <div className="w-full flex justify-around px-10 text-white mb-6">
      {websiteInfo?.map((info: any, index: number) => (
        <div className="flex flex-col items-center" key={index}>
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
            <Icon
              icon={`mdi:${info.item.icon || "account-tie"}`} // changed to mdi:
              width="24"
              height="24"
              color="white"
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg">
              {info?.item?.advantageSmalltitle || "Title"}
            </h3>
            <p className="text-xs text-white/80 font-md">
              {info?.item?.advantageSmallParagraph || "Paragraph"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WebsiteAdvantages;

// {
//   "title": "Luxury Residential Complex",
//   "type": "Apartment Complex",
//   "grade": "Grade A",
//   "price": "₹18,500,000",
//   "roi": "9.8%",
//   "location": {
//     "name": "Luxury Residential Complex",
//     "district": "Al Nakheel District",
//     "city": "Riyadh"
//   },
//   "financials": {
//     "annual_rent": "₹1,813,000",
//     "occupancy": "92%",
//     "total_units": 32,
//     "risk_level": "Low"
//   },
//   "features": [
//     "High-end finishes",
//     "Pool & gym",
//     "24/7 security"
//   ]
// }
