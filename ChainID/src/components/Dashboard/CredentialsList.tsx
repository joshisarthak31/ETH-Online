"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Shield } from "lucide-react";
import { Credential } from "@/types";
import { VerificationBadge } from "@/components/Identity/VerificationBadge";

interface CredentialsListProps {
  credentials: Credential[];
}

export function CredentialsList({ credentials }: CredentialsListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Credentials</CardTitle>
        <CardDescription>List of all your verified credentials</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {credentials.map((credential) => (
            <div
              key={credential.id}
              className="flex items-center justify-between p-4 border-2 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-950/10 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium">{credential.type}</p>
                  <p className="text-sm text-muted-foreground">
                    Verified on {credential.date} • Used by {credential.dapp}
                  </p>
                </div>
              </div>
              <VerificationBadge status={credential.status as any} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
