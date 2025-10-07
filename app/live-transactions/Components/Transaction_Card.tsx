import React from "react";
import {
  MapPin,
  TrendingUp,
  TrendingDown,
  Search,
  Filter,
  Download,
  Home,
  Building2,
  Building,
  Calendar,
  DollarSign,
  Users,
  Clock,
  ArrowUpRight,
  CheckCircle2,
  Activity,
  BarChart3,
  Layers,
  Bed,
  XCircle,
  AlertTriangle,
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { IconComponent } from "./Transaction_Card/IconComponent";
import { TransactionFeatures } from "./Transaction_Card/TransactionFeatures";
import { IconWithText } from "./Transaction_Card/IconWithText";
import { TransactionInterface } from "./Interface/transactionInterface";
import ViewButtonAtom from "./Transaction_Card/ViewButtonAtom";

const Transaction_Card: React.FC<{ transaction: TransactionInterface }> = ({
  transaction,
}) => {
  const propertyIcons: Record<string, React.ReactNode> = {
    Villa: <Home size={24} className="text-white" />,
    Apartment: <Building2 size={24} className="text-white" />,
    Penthouse: <Building size={24} className="text-white" />,
    Office: <Layers size={24} className="text-white" />,
    Studio: <Activity size={24} className="text-white" />,
    Townhouse: <Home size={24} className="text-white" />,
    Retail: <Building2 size={24} className="text-white" />,
    Warehouse: <Layers size={24} className="text-white" />,
    Land: <Activity size={24} className="text-white" />,
    Hotel: <Building size={24} className="text-white" />,
  };
  const estateIcon = propertyIcons[transaction.propertyType] || (
    <Home size={24} className="text-blue-500 " />
  );

  const statusIcons: Record<string, React.ReactNode> = {
    completed: <CheckCircle2 size={16} className="text-green-600" />,
    pending: <Clock size={16} className="text-yellow-500" />,
    cancelled: <XCircle size={16} className="text-red-500" />,
    warning: <AlertTriangle size={16} className="text-orange-500" />,
  };
  return (
    <div className="grid grid-cols-1  lg:grid-cols-4 p-6 justify-between  gap-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full">
      {/* icon and type  */}
      <div className="flex flex-row items-center gap-4">
        <div>
          <IconComponent icon={estateIcon} />
        </div>
        <TransactionFeatures
          type={transaction.type}
          featured={transaction.featured}
          propertyType={transaction.propertyType}
        />
      </div>
      {/* title and location  */}
      <div className="flex flex-col justify-center gap-2 ">
        <p className="text-medium font-semibold text-gray-900">
          {transaction.title}
        </p>
        <div className=" flex flex-row gap-2  text-xs text-gray-500">
          <IconWithText
            text={transaction.location}
            icon={<MapPin size={15} className="text-gray-500" />}
          />
          {transaction.beds > 1 && (
            <IconWithText
              text={transaction.beds + " beds"}
              icon={<Bed size={15} className="text-gray-500" />}
            />
          )}
          <IconWithText
            text={transaction.sqft + " sqft"}
            icon={<Building size={15} className="text-gray-500" />}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
        {/* price and intrest */}
        <div className="text-left lg:text-right gap-2">
          <div className="flex items-baseline justify-start lg:justify-end">
            <p className="text-xl text-[#0B3557] font-semibold">
              ₹{transaction.price}
            </p>
            {transaction.installmentPayment && (
              <p className="text-gray-400 text-sm">/mo</p>
            )}
          </div>

          <div className="flex items-baseline justify-start lg:justify-end">
            <IconWithText
              text={transaction.sqft + " sqft"}
              icon={<TrendingUp size={15} className="text-green-600" />}
              textColor="text-green-600"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <IconWithText
            text={transaction.buyer + " ← " + transaction.seller}
            icon={<Users size={15} className="text-gray-500" />}
          />
          <IconWithText
            text={
              formatDistanceToNow(new Date(transaction.date), {
                addSuffix: true,
              }) || "no Date"
            }
            icon={<Clock size={15} className="text-gray-500" />}
          />
          <IconWithText
            text={transaction.status || "In Progress"}
            icon={statusIcons[transaction.status || "pending"]}
          />
        </div>
      </div>

      {/* last data before the button */}
      <div className="lg:flex lg:items-center lg:w-full lg:justify-end">
        <ViewButtonAtom
          //   onClick={() => console.log("any")}
          title={"View Details"}
          color={"#FFFFFF"}
          hoverColor={"#0B3557"}
          textColor={"#4B5563"}
          hoverTextColor={"#FFFFFF"}
          padding="px-2 py-2  text-sm"
          border="border border-gray-200 "
        />
      </div>
    </div>
  );
};

export default Transaction_Card;
