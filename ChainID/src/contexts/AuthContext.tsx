"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useAccount } from "wagmi";

interface AuthContextType {
  isAuthenticated: boolean;
  walletAddress: string | null;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  walletAddress: null,
  isLoading: true,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { address, isConnected } = useAccount();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [isConnected]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: isConnected,
        walletAddress: address || null,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
