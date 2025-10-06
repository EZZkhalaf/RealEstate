import Footer from "@/Components/Footer";
import Transactions_listing from "./Components/Transactions_listing";
import { getStaticFooter } from "@/API/OtherApi";
const page = async () => {
  const footerData = await getStaticFooter();

  return (
    <div className="flex flex-col items-center w-full bg-gray-100">
      <Transactions_listing />
      <Footer footerData={footerData} />
    </div>
  );
};

export default page;
