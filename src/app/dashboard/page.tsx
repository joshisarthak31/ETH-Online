"use client";

import { useAccount } from "wagmi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Activity, User, Shield, Sparkles, Zap, Globe, Lock, Database, Eye } from "lucide-react";
import { ConnectWallet } from "@/components/Auth/ConnectWallet";
import { Overview } from "@/components/Dashboard/Overview";
import { VerificationHistory } from "@/components/Dashboard/VerificationHistory";
import { CredentialsList } from "@/components/Dashboard/CredentialsList";
import { IdentityCard } from "@/components/Identity/IdentityCard";
import { QuickActions } from "@/components/Dashboard/QuickActions";
import { RecentActivity } from "@/components/Dashboard/RecentActivity";
import { useState, useEffect } from "react";

export default function DashboardPage() {
  const { address, isConnected } = useAccount();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

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
      status: "Verified" as const,
      date: "2025-01-15",
      dapp: "DeFi Protocol",
    },
    {
      id: "2",
      type: "Country Check",
      status: "Verified" as const,
      date: "2025-01-16",
      dapp: "NFT Marketplace",
    },
    {
      id: "3",
      type: "KYC Completion",
      status: "Verified" as const,
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
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 relative overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large Floating Shapes */}
          <div className="absolute top-20 left-20 w-40 h-40 transform rotate-45 animate-pulse opacity-20">
            <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl shadow-2xl"></div>
          </div>

          <div
            className="absolute top-32 right-20 w-32 h-32 transform -rotate-12 animate-pulse opacity-25"
            style={{ animationDelay: "1s" }}
          >
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl shadow-xl"></div>
          </div>

          <div
            className="absolute bottom-20 left-20 w-48 h-48 transform rotate-12 animate-pulse opacity-15"
            style={{ animationDelay: "2s" }}
          >
            <div className="w-full h-full bg-gradient-to-br from-pink-500 to-purple-500 rounded-3xl shadow-2xl"></div>
          </div>

          {/* Small Floating Particles */}
          <div className="absolute top-1/4 left-1/2 w-4 h-4 bg-white/30 rounded-full animate-ping" style={{ animationDelay: "0s" }}></div>
          <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-blue-300/40 rounded-full animate-ping" style={{ animationDelay: "1s" }}></div>
          <div className="absolute bottom-1/4 left-1/4 w-5 h-5 bg-pink-300/30 rounded-full animate-ping" style={{ animationDelay: "2s" }}></div>
          <div className="absolute bottom-1/2 right-1/2 w-2 h-2 bg-purple-300/50 rounded-full animate-ping" style={{ animationDelay: "0.5s" }}></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:120px_120px]"></div>
          
          {/* Radial Gradients */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(236,72,153,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Header */}
            <div
              className={`transition-all duration-1000 ease-out ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-blue-200 rounded-full text-sm font-medium mb-8 border border-white/20">
                <Shield className="w-5 h-5 mr-3 animate-pulse" />
                Connect Your Wallet to Access Dashboard
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                Welcome to{" "}
                <span className="bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
                  ChainID Dashboard
                </span>
              </h1>
              
              <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Manage your decentralized identity, view verification history, and control your digital credentials
              </p>
            </div>

            {/* Connect Wallet Component */}
            <div
              className={`transition-all duration-1000 ease-out ${
                isLoaded
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <ConnectWallet />
            </div>

            {/* Feature Highlights */}
            <div
              className={`grid md:grid-cols-3 gap-8 mt-20 transition-all duration-1000 ease-out ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-500 hover:bg-white/10 hover:scale-105">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Secure Identity</h3>
                <p className="text-gray-300 text-sm">Your identity is encrypted and stored securely on the blockchain</p>
              </div>

              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-500 hover:bg-white/10 hover:scale-105">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Decentralized</h3>
                <p className="text-gray-300 text-sm">No central authority controls your data - you own it completely</p>
              </div>

              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-500 hover:bg-white/10 hover:scale-105">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Zero-Knowledge</h3>
                <p className="text-gray-300 text-sm">Prove attributes without revealing personal information</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-3xl"></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-purple-300/30 rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-pink-300/40 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-blue-300/30 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-cyan-300/50 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <div
            className={`mb-12 transition-all duration-1000 ease-out ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
                  <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                  Web3 Identity Dashboard
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                  Welcome Back,{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {address?.slice(0, 6)}...{address?.slice(-4)}
                  </span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl">
                  Manage your decentralized identity, view verification history, and control your digital credentials
                </p>
              </div>
              
              {/* Status Indicator */}
              <div className="hidden lg:flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-green-100 text-green-600 px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Identity Active</span>
                </div>
                <div className="flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full">
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium">Connected</span>
                </div>
              </div>
            </div>
          </div>

          {/* Identity Overview Cards */}
          <div
            className={`mb-12 transition-all duration-1000 ease-out ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <Overview identity={identityData} />
          </div>

          {/* Quick Actions Section */}
          <div
            className={`mb-12 transition-all duration-1000 ease-out ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50">
              <QuickActions />
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Recent Activity */}
            <div
              className={`lg:col-span-1 transition-all duration-1000 ease-out ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50 h-fit">
                <RecentActivity />
              </div>
            </div>

            {/* Main Tabs Section */}
            <div
              className={`lg:col-span-2 transition-all duration-1000 ease-out ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <Tabs defaultValue="credentials" className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-gray-200/50">
                  <TabsList className="grid w-full grid-cols-3 bg-transparent">
                    <TabsTrigger 
                      value="credentials" 
                      className="flex items-center space-x-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white transition-all duration-300 hover:scale-105"
                    >
                      <FileText className="w-5 h-5" />
                      <span className="font-medium">Credentials</span>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="history"
                      className="flex items-center space-x-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white transition-all duration-300 hover:scale-105"
                    >
                      <Activity className="w-5 h-5" />
                      <span className="font-medium">History</span>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="identity"
                      className="flex items-center space-x-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white transition-all duration-300 hover:scale-105"
                    >
                      <User className="w-5 h-5" />
                      <span className="font-medium">Identity</span>
                    </TabsTrigger>
                  </TabsList>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50">
                  <TabsContent value="credentials" className="space-y-6 mt-0">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Credentials</h3>
                        <p className="text-gray-600">Manage and view your verified digital credentials</p>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Zap className="w-4 h-4" />
                        <span>{credentials.length} Active Credentials</span>
                      </div>
                    </div>
                    <CredentialsList credentials={credentials} />
                  </TabsContent>

                  <TabsContent value="history" className="space-y-6 mt-0">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Verification History</h3>
                        <p className="text-gray-600">Track all your identity verification activities</p>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Activity className="w-4 h-4" />
                        <span>{verificationHistory.length} Verifications</span>
                      </div>
                    </div>
                    <VerificationHistory history={verificationHistory} />
                  </TabsContent>

                  <TabsContent value="identity" className="space-y-6 mt-0">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Identity Card</h3>
                        <p className="text-gray-600">Your complete decentralized identity information</p>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Shield className="w-4 h-4" />
                        <span>NFT Identity</span>
                      </div>
                    </div>
                    <IdentityCard identity={identityData} />
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
