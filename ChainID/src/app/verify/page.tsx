"use client";

import { useState } from "react";
import { useAccount } from "wagmi";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ConnectWallet } from "@/components/Auth/ConnectWallet";
import { VerificationRequest } from "@/components/Verification/VerificationRequest";
import { AttributeProof } from "@/components/Verification/AttributeProof";
import { QRCodeVerification } from "@/components/Verification/QRCodeVerification";
import { Shield } from "lucide-react";

export default function VerifyPage() {
  const { isConnected } = useAccount();
  const [loading, setLoading] = useState(false);
  const [verificationResult, setVerificationResult] = useState<any>(null);

  const handleVerify = async (data: any) => {
    setLoading(true);
    setVerificationResult(null);

    try {
      // Simulate verification process
      await new Promise((resolve) => setTimeout(resolve, 2500));

      // Mock verification result
      const result = {
        verified: true,
        proof: "zkp_proof_a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0",
        timestamp: new Date().toISOString(),
        txHash: "0xabc123def456789ghi012jkl345mno678pqr901stu",
      };

      setVerificationResult(result);
    } catch (error) {
      console.error("Verification error:", error);
      setVerificationResult({
        verified: false,
        error: "Verification failed. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

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
          <div className="inline-block bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            🔍 Verification
          </div>
          <h1 className="text-4xl font-bold mb-2">Verify Credentials</h1>
          <p className="text-muted-foreground">
            Request and verify identity attributes using zero-knowledge proofs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <VerificationRequest onSubmit={handleVerify} isLoading={loading} />
            <QRCodeVerification />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* How It Works */}
            <Card className="border-2 border-blue-200 dark:border-blue-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  How It Works
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <p className="font-medium text-sm">Request Sent</p>
                      <p className="text-xs text-muted-foreground">
                        dApp redirects user to ChainID with verification request
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-sm">User Reviews</p>
                      <p className="text-xs text-muted-foreground">
                        User sees what attribute is requested and who's
                        requesting
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-sm">Private Computation</p>
                      <p className="text-xs text-muted-foreground">
                        Lit Action executes on encrypted data, returns
                        true/false
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <p className="font-medium text-sm">Result Logged</p>
                      <p className="text-xs text-muted-foreground">
                        Verification result logged to HCS for audit trail
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Verification Result */}
            {verificationResult && (
              <AttributeProof result={verificationResult} />
            )}
          </div>
        </div>

        {/* Privacy Notice */}
        <Card className="mt-8 border-2 border-purple-200 dark:border-purple-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-purple-600" />
              Privacy & Security
            </CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                ✓ <strong>Zero-Knowledge Proofs:</strong> Actual data is never
                exposed, only true/false results
              </p>
              <p className="text-sm text-muted-foreground">
                ✓ <strong>Gasless UX:</strong> Users don't pay transaction fees
                for verification
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                ✓ <strong>Audit Trail:</strong> All verifications are logged to
                Hedera Consensus Service
              </p>
              <p className="text-sm text-muted-foreground">
                ✓ <strong>User Consent:</strong> Users approve each verification
                request individually
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
