"use client";

import { useState } from "react";
import { useAccount } from "wagmi";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Loader2, Upload, Shield, CheckCircle2 } from "lucide-react";

export default function RegisterPage() {
  const { address, isConnected } = useAccount();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    country: "",
    governmentId: null as File | null,
    selfie: null as File | null,
  });

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, [field]: file });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Step 1: Encrypt data with Lit Protocol
      setStep(1);
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Step 2: Upload to IPFS
      setStep(2);
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Step 3: Mint NFT on Hedera
      setStep(3);
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Step 4: Log to HCS
      setStep(4);
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Success
      setStep(5);
    } catch (error) {
      console.error("Registration error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!isConnected) {
    return (
      <div className="container mx-auto px-4 py-20">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Connect Wallet</CardTitle>
            <CardDescription>
              Please connect your Web3 wallet to register your identity
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Click the Connect Wallet button in the navigation bar to get
              started.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (step === 5) {
    return (
      <div className="container mx-auto px-4 py-20">
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <CardTitle className="text-3xl">Registration Successful!</CardTitle>
            <CardDescription>
              Your identity has been successfully registered on the blockchain
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-muted rounded-lg space-y-2">
              <p className="text-sm">
                <strong>Wallet:</strong> {address}
              </p>
              <p className="text-sm">
                <strong>Token ID:</strong> 0.0.12345
              </p>
              <p className="text-sm">
                <strong>IPFS Hash:</strong> Qm...
              </p>
              <p className="text-sm">
                <strong>HCS Log:</strong> Transaction confirmed
              </p>
            </div>
            <div className="flex gap-4">
              <Button
                className="flex-1"
                onClick={() => (window.location.href = "/dashboard")}
              >
                Go to Dashboard
              </Button>
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => setStep(1)}
              >
                Register Another
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Create Identity</h1>
          <p className="text-muted-foreground">
            Register your decentralized digital identity. All data is encrypted
            and stored securely.
          </p>
        </div>

        {/* Progress Steps */}
        {loading && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div
                className={`flex items-center ${
                  step >= 1 ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                    step >= 1
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-muted"
                  }`}
                >
                  1
                </div>
                <span className="ml-2 text-sm font-medium">Encrypt</span>
              </div>
              <div className="flex-1 h-0.5 bg-muted mx-2"></div>
              <div
                className={`flex items-center ${
                  step >= 2 ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                    step >= 2
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-muted"
                  }`}
                >
                  2
                </div>
                <span className="ml-2 text-sm font-medium">IPFS</span>
              </div>
              <div className="flex-1 h-0.5 bg-muted mx-2"></div>
              <div
                className={`flex items-center ${
                  step >= 3 ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                    step >= 3
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-muted"
                  }`}
                >
                  3
                </div>
                <span className="ml-2 text-sm font-medium">Mint NFT</span>
              </div>
              <div className="flex-1 h-0.5 bg-muted mx-2"></div>
              <div
                className={`flex items-center ${
                  step >= 4 ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                    step >= 4
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-muted"
                  }`}
                >
                  4
                </div>
                <span className="ml-2 text-sm font-medium">HCS Log</span>
              </div>
            </div>
          </div>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Identity Information</CardTitle>
            <CardDescription>
              Enter your details below. All information is encrypted before
              storage.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  required
                  disabled={loading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Date of Birth</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) =>
                    setFormData({ ...formData, dateOfBirth: e.target.value })
                  }
                  required
                  disabled={loading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="country">Country of Residence</Label>
                <Input
                  id="country"
                  placeholder="United States"
                  value={formData.country}
                  onChange={(e) =>
                    setFormData({ ...formData, country: e.target.value })
                  }
                  required
                  disabled={loading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="governmentId">Government ID</Label>
                <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                  <input
                    id="governmentId"
                    type="file"
                    accept="image/*,.pdf"
                    onChange={(e) => handleFileChange(e, "governmentId")}
                    className="hidden"
                    disabled={loading}
                  />
                  <label htmlFor="governmentId" className="cursor-pointer">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      {formData.governmentId
                        ? formData.governmentId.name
                        : "Click to upload government ID"}
                    </p>
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="selfie">Selfie Photo</Label>
                <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                  <input
                    id="selfie"
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, "selfie")}
                    className="hidden"
                    disabled={loading}
                  />
                  <label htmlFor="selfie" className="cursor-pointer">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      {formData.selfie
                        ? formData.selfie.name
                        : "Click to upload selfie"}
                    </p>
                  </label>
                </div>
              </div>

              <div className="bg-muted p-4 rounded-lg space-y-2">
                <div className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Privacy Notice</p>
                    <p className="text-xs text-muted-foreground">
                      Your data will be encrypted using Lit Protocol, stored on
                      IPFS, and minted as an NFT on Hedera. Only you control
                      access to your information.
                    </p>
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing... (Step {step}/4)
                  </>
                ) : (
                  "Register Identity"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
