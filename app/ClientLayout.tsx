"use client";

import { useState } from "react";
import Navigation from "@/Components/Navigation";
import AuthDialog from "@/Components/MainComponents/Auth/AuthDialog";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authOpen, setAuthOpen] = useState<boolean>(false);

  return (
    <>
      <Navigation authOpen={authOpen} setAuthOpen={() => setAuthOpen(true)} />
      {children}
      {authOpen && <AuthDialog onClose={() => setAuthOpen(false)} />}
    </>
  );
}
