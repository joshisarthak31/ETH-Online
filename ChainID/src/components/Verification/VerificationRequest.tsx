"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2, Shield } from "lucide-react";
import { ATTRIBUTE_TYPES } from "@/lib/constants";

interface VerificationRequestProps {
  onSubmit: (data: any) => Promise<void>;
  isLoading?: boolean;
}

export function VerificationRequest({
  onSubmit,
  isLoading = false,
}: VerificationRequestProps) {
  const [formData, setFormData] = useState({
    userAddress: "",
    attributeType: "age_over_18",
    dappId: "",
    sessionId: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <Card className="border-2 border-purple-200 dark:border-purple-800">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-purple-600" />
          Verification Request
        </CardTitle>
        <CardDescription>
          Submit a verification request for a user's identity attribute
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="userAddress">User Wallet Address *</Label>
            <Input
              id="userAddress"
              placeholder="0x..."
              value={formData.userAddress}
              onChange={(e) =>
                setFormData({ ...formData, userAddress: e.target.value })
              }
              required
              disabled={isLoading}
            />
            <p className="text-xs text-muted-foreground">
              The wallet address of the user to verify
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="attributeType">Attribute Type *</Label>
            <select
              id="attributeType"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              value={formData.attributeType}
              onChange={(e) =>
                setFormData({ ...formData, attributeType: e.target.value })
              }
              disabled={isLoading}
            >
              {ATTRIBUTE_TYPES.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
            <p className="text-xs text-muted-foreground">
              What attribute do you want to verify?
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="dappId">dApp Identifier *</Label>
            <Input
              id="dappId"
              placeholder="your-dapp-xyz"
              value={formData.dappId}
              onChange={(e) =>
                setFormData({ ...formData, dappId: e.target.value })
              }
              required
              disabled={isLoading}
            />
            <p className="text-xs text-muted-foreground">
              Your application identifier
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="sessionId">Session ID (Optional)</Label>
            <Input
              id="sessionId"
              placeholder="session_123"
              value={formData.sessionId}
              onChange={(e) =>
                setFormData({ ...formData, sessionId: e.target.value })
              }
              disabled={isLoading}
            />
            <p className="text-xs text-muted-foreground">
              Yellow Network session identifier for gasless verification
            </p>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Verifying...
              </>
            ) : (
              <>
                <Shield className="mr-2 h-4 w-4" />
                Verify Attribute
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
