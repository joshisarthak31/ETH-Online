"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, User, Calendar, MapPin } from "lucide-react";
import { Identity } from "@/types";

interface IdentityCardProps {
  identity: Identity;
}

export function IdentityCard({ identity }: IdentityCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>Digital Identity Card</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 p-8 rounded-xl text-white space-y-6 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full translate-x-20 translate-y-20"></div>
          </div>

          <div className="relative z-10">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm opacity-80">ChainID</p>
                <p className="text-2xl font-bold">Digital Identity</p>
              </div>
              <Shield className="w-12 h-12 opacity-80" />
            </div>

            <div className="space-y-3 mt-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 opacity-80" />
                <span className="text-sm opacity-80">Name:</span>
                <span className="font-medium">****** (Encrypted)</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 opacity-80" />
                <span className="text-sm opacity-80">DOB:</span>
                <span className="font-medium">****** (Encrypted)</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 opacity-80" />
                <span className="text-sm opacity-80">Country:</span>
                <span className="font-medium">****** (Encrypted)</span>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-white/20">
              <p className="text-xs opacity-70">Token ID: {identity.tokenId}</p>
              <p className="text-xs opacity-70">
                Wallet: {identity.walletAddress?.slice(0, 6)}...
                {identity.walletAddress?.slice(-4)}
              </p>
              <p className="text-xs opacity-70 mt-1">
                Created: {identity.createdAt}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
