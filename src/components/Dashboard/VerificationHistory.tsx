"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { VerificationEvent } from "@/types";
import { ExternalLink } from "lucide-react";

interface VerificationHistoryProps {
  history: VerificationEvent[];
}

export function VerificationHistory({ history }: VerificationHistoryProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Verification History</CardTitle>
        <CardDescription>
          Complete audit trail of all identity verifications
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {history.map((entry) => (
            <div
              key={entry.id}
              className="flex items-center justify-between p-4 border-2 rounded-lg hover:border-purple-300 dark:hover:border-purple-700 transition-colors group"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-medium">
                    {entry.type.replace(/_/g, " ").toUpperCase()}
                  </p>
                  <Badge
                    variant={entry.result ? "default" : "destructive"}
                    className="text-xs"
                  >
                    {entry.result ? "Verified" : "Failed"}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  dApp: {entry.dapp}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {new Date(entry.timestamp).toLocaleString()}
                </p>
                {entry.txHash && (
                  <div className="flex items-center gap-1 mt-2">
                    <p className="text-xs text-muted-foreground">
                      TX: {entry.txHash.slice(0, 10)}...
                    </p>
                    <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-purple-600" />
                  </div>
                )}
              </div>

              <div className="ml-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                  {entry.result ? "✓" : "✗"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
