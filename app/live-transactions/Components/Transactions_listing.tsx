"use client";
import React, { useState, useEffect } from "react";
import EstateTransaction from "../../../MockData/EstateTransaction.json";
import Transaction_Card from "./Transaction_Card";
import ViewButtonAtom from "@/Components/Atoms/ViewButtonAtom";
import TitleAtom from "@/Components/Atoms/TitleAtom";
import ParagraphDescription from "@/Components/Atoms/ParagraphDescription";
import { io } from "socket.io-client";
import { TransactionInterface } from "./Interface/transactionInterface";

const socket = io("http://localhost:3001/transactionsSocket", {
  transports: ["websocket"],
});

const Transactions_listing = () => {
  const [transactions, setTransactions] = useState<TransactionInterface[]>();

  useEffect(() => {
    socket.on("connect", () => {
      console.log("✅ Connected to WS server");
    });

    socket.on("allTransactions", (data: any[]) => {
      console.log("Received previous transactions:", data);
      setTransactions(data);
    });

    socket.on("newTransaction", (transaction: any) => {
      setTransactions((prev: any) => [transaction, ...prev]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="mt-20 flex flex-col w-full  max-w-7xl mb-5">
      <TitleAtom title="Latest Transactions" />
      <ParagraphDescription
        description={`The transaction cards section is designed to display key details about each real estate deal in a clear and structured way. Each card highlights the property type, title, and location, along with important information such as price, size, and payment options. Visual icons are used to represent different property types and statuses, making the data easy to scan at a glance. The layout is responsive, ensuring the content looks clean and organized on both small and large screens. This section helps users quickly understand the status and value of each transaction without having to read through long details.`}
        textAlignment="text-start"
        margin={false}
      />
      <div className=" flex flex-col gap-6 mt-9">
        {transactions?.map((trans: TransactionInterface, index: number) => (
          <Transaction_Card key={index} transaction={trans} />
        ))}
      </div>
      <div className="flex items-center w-full justify-center mt-9">
        <ViewButtonAtom
          title={"Load More Transactions"}
          color={"#FFFFFF"}
          hoverColor={"#0B3557"}
          textColor={"#4B5563"}
          hoverTextColor={"#FFFFFF"}
          padding="px-2 py-2  text-sm"
          border="border border-gray-400 "
        />
      </div>
    </div>
  );
};

export default Transactions_listing;
