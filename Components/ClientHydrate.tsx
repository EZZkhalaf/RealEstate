"use client";
import { Hydrate } from "@tanstack/react-query/hydration";

export default function ClientHydrate({ state, children }) {
  return <Hydrate state={state}>{children}</Hydrate>;
}
