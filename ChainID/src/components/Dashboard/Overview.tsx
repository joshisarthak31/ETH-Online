"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Activity, Calendar, CheckCircle } from "lucide-react";
import { Identity } from "@/types";

interface OverviewProps {
  identity: Identity;
}

export function Overview({ identity }: OverviewProps) {
  return (
    <div className="grid md:grid-cols-4 gap-4">
      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Token ID
            </CardTitle>
            <Shield className="w-4 h-4 text-purple-600" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-purple-600">
            {identity.tokenId}
          </div>
          <p className="text-xs text-muted-foreground mt-1">Hedera NFT</p>
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Status
            </CardTitle>
            <CheckCircle className="w-4 h-4 text-green-600" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-600">
            {identity.status}
          </div>
          <p className="text-xs text-muted-foreground mt-1">Identity Active</p>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Verifications
            </CardTitle>
            <Activity className="w-4 h-4 text-blue-600" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-blue-600">
            {identity.verificationCount}
          </div>
          <p className="text-xs text-muted-foreground mt-1">Total Requests</p>
        </CardContent>
      </Card>

      <Card className="border-2 border-pink-200 dark:border-pink-800">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Created
            </CardTitle>
            <Calendar className="w-4 h-4 text-pink-600" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-pink-600">
            {identity.createdAt}
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Registration Date
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
