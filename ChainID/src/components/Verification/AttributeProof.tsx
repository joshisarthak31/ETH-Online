"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, XCircle, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VerificationResult } from "@/types";
import { useState } from "react";

interface AttributeProofProps {
  result: VerificationResult;
}

export function AttributeProof({ result }: AttributeProofProps) {
  const [copied, setCopied] = useState(false);

  const copyProof = () => {
    if (result.proof) {
      navigator.clipboard.writeText(result.proof);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Card
      className={`border-2 ${
        result.verified
          ? "border-green-300 dark:border-green-800"
          : "border-red-300 dark:border-red-800"
      }`}
    >
      <CardHeader>
        <div className="flex items-center gap-2">
          {result.verified ? (
            <CheckCircle2 className="w-6 h-6 text-green-600" />
          ) : (
            <XCircle className="w-6 h-6 text-red-600" />
          )}
          <CardTitle>
            {result.verified
              ? "Verification Successful"
              : "Verification Failed"}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {result.verified ? (
          <>
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-green-900 dark:text-green-100">
                  <strong>Result:</strong> Verified ✓
                </p>
              </div>

              {result.proof && (
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-medium text-green-900 dark:text-green-100">
                      Zero-Knowledge Proof:
                    </p>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={copyProof}
                      className="h-6 px-2"
                    >
                      {copied ? "Copied!" : <Copy className="w-3 h-3" />}
                    </Button>
                  </div>
                  <p className="text-xs text-green-800 dark:text-green-200 break-all font-mono bg-green-100 dark:bg-green-900/30 p-2 rounded">
                    {result.proof}
                  </p>
                </div>
              )}

              {result.timestamp && (
                <p className="text-sm text-green-800 dark:text-green-200">
                  <strong>Timestamp:</strong>{" "}
                  {new Date(result.timestamp).toLocaleString()}
                </p>
              )}

              {result.txHash && (
                <p className="text-sm text-green-800 dark:text-green-200 break-all">
                  <strong>TX Hash:</strong> {result.txHash}
                </p>
              )}
            </div>

            <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg">
              <p className="text-xs text-muted-foreground">
                <strong>Privacy Protected:</strong> The user meets the requested
                criteria. No personal data was exposed during this verification.
                Only a cryptographic proof was generated using zero-knowledge
                technology.
              </p>
            </div>
          </>
        ) : (
          <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg">
            <p className="text-sm text-red-700 dark:text-red-300">
              {result.error || "User does not meet the requested criteria"}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
