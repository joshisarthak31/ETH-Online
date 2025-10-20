"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Shield, Wallet } from "lucide-react";

export function ConnectWallet() {
  return (
    <Card className="max-w-md mx-auto border-2 border-purple-200 dark:border-purple-800">
      <CardHeader className="text-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
          <Wallet className="w-8 h-8 text-white" />
        </div>
        <CardTitle className="text-2xl">Connect Your Wallet</CardTitle>
        <CardDescription>
          Connect your Web3 wallet to access ChainID identity management
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-center">
          <ConnectButton />
        </div>

        <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg space-y-2">
          <div className="flex items-start gap-2">
            <Shield className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium">Secure Connection</p>
              <p className="text-xs text-muted-foreground">
                Your wallet credentials are never stored. All transactions
                require your approval.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
