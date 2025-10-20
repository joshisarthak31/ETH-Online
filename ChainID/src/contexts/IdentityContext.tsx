"use client";

import React, { createContext, useContext, useState } from "react";
import { Identity } from "@/types";

interface IdentityContextType {
  identity: Identity | null;
  setIdentity: (identity: Identity | null) => void;
  isLoading: boolean;
}

const IdentityContext = createContext<IdentityContextType>({
  identity: null,
  setIdentity: () => {},
  isLoading: false,
});

export function IdentityProvider({ children }: { children: React.ReactNode }) {
  const [identity, setIdentity] = useState<Identity | null>({
    tokenId: "0.0.12345",
    walletAddress: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb7",
    ipfsHash: "QmYwAPJzv5CZsnA625s3Xf2nemtYgPpHdWEz79ojWnPbdG",
    createdAt: "2025-01-15",
    status: "Active",
    verificationCount: 42,
  });
  const [isLoading, setIsLoading] = useState(false);

  return (
    <IdentityContext.Provider value={{ identity, setIdentity, isLoading }}>
      {children}
    </IdentityContext.Provider>
  );
}

export const useIdentityContext = () => useContext(IdentityContext);
