"use client";

import { useAccount } from "wagmi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Activity, User } from "lucide-react";
import { ConnectWallet } from "@/components/Auth/ConnectWallet";
import { Overview } from "@/components/Dashboard/Overview";
import { VerificationHistory } from "@/components/Dashboard/VerificationHistory";
import { CredentialsList } from "@/components/Dashboard/CredentialsList";
import { IdentityCard } from "@/components/Identity/IdentityCard";

export default function DashboardPage() {
  const { address, isConnected } = useAccount();

  // Mock data
  const identityData = {
    tokenId: "0.0.12345",
    walletAddress: address || "",
    ipfsHash: "QmYwAPJzv5CZsnA625s3Xf2nemtYgPpHdWEz79ojWnPbdG",
    createdAt: "2025-01-15",
    verificationCount: 42,
    status: "Active" as const,
  };

  const credentials = [
    {
      id: "1",
      type: "Age Verification",
      status: "Verified",
      date: "2025-01-15",
      dapp: "DeFi Protocol",
    },
    {
      id: "2",
      type: "Country Check",
      status: "Verified",
      date: "2025-01-16",
      dapp: "NFT Marketplace",
    },
    {
      id: "3",
      type: "KYC Completion",
      status: "Verified",
      date: "2025-01-18",
      dapp: "Lending Platform",
    },
  ];

  const verificationHistory = [
    {
      id: "1",
      type: "age_over_18",
      dapp: "defi-protocol-xyz",
      result: true,
      timestamp: "2025-01-20T10:30:00Z",
      txHash: "0xabc123def456...",
      proof: "zkp_proof_12345...",
    },
    {
      id: "2",
      type: "country_verification",
      dapp: "nft-marketplace",
      result: true,
      timestamp: "2025-01-19T15:45:00Z",
      txHash: "0xdef456abc789...",
      proof: "zkp_proof_67890...",
    },
    {
      id: "3",
      type: "credential_check",
      dapp: "lending-platform",
      result: true,
      timestamp: "2025-01-18T08:20:00Z",
      txHash: "0x789abc123def...",
      proof: "zkp_proof_11111...",
    },
  ];

  if (!isConnected) {
    return (
      <div className="container mx-auto px-4 py-20">
        <ConnectWallet />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">
            Manage your decentralized identity and view verification history
          </p>
        </div>

        {/* Identity Overview Cards */}
        <div className="mb-8">
          <Overview identity={identityData} />
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="credentials" className="space-y-4">
          <TabsList>
            <TabsTrigger value="credentials">
              <FileText className="w-4 h-4 mr-2" />
              Credentials
            </TabsTrigger>
            <TabsTrigger value="history">
              <Activity className="w-4 h-4 mr-2" />
              Verification History
            </TabsTrigger>
            <TabsTrigger value="identity">
              <User className="w-4 h-4 mr-2" />
              Identity Card
            </TabsTrigger>
          </TabsList>

          <TabsContent value="credentials" className="space-y-4">
            <CredentialsList credentials={credentials} />
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            <VerificationHistory history={verificationHistory} />
          </TabsContent>

          <TabsContent value="identity" className="space-y-4">
            <IdentityCard identity={identityData} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
