"use client";

import { useAccount, useDisconnect } from "wagmi";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Copy, LogOut } from "lucide-react";
import { useState } from "react";

export function WalletStatus() {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    if (address) {
      navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!isConnected || !address) return null;

  return (
    <Card className="border-green-200 dark:border-green-800">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <div>
              <Badge variant="default" className="bg-green-600">
                Connected
              </Badge>
              <p className="text-sm text-muted-foreground mt-1">
                {address.slice(0, 6)}...{address.slice(-4)}
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <Button size="sm" variant="ghost" onClick={copyAddress}>
              {copied ? "Copied!" : <Copy className="w-4 h-4" />}
            </Button>
            <Button size="sm" variant="ghost" onClick={() => disconnect()}>
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
