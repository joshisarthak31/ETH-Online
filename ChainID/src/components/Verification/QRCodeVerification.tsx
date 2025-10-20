"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { QrCode, Smartphone } from "lucide-react";

export function QRCodeVerification() {
  // In a real implementation, this would generate a QR code for mobile verification
  const mockQRData = "chainid://verify?request=abc123&dapp=example";

  return (
    <Card className="border-2 border-blue-200 dark:border-blue-800">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <QrCode className="w-5 h-5 text-blue-600" />
          QR Code Verification
        </CardTitle>
        <CardDescription>
          Scan this QR code with your mobile wallet to complete verification
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Mock QR Code */}
        <div className="flex justify-center p-8 bg-white dark:bg-gray-900 rounded-lg border-2 border-dashed">
          <div className="w-48 h-48 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg flex items-center justify-center">
            <QrCode className="w-32 h-32 text-purple-400" />
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg space-y-2">
          <div className="flex items-start gap-2">
            <Smartphone className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <p className="text-sm font-medium">How to use:</p>
              <ul className="text-xs text-muted-foreground space-y-1 mt-2">
                <li>1. Open your mobile wallet app</li>
                <li>2. Scan the QR code above</li>
                <li>3. Review the verification request</li>
                <li>4. Approve with your biometric or PIN</li>
                <li>5. Verification completes instantly</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-xs text-center text-muted-foreground">
          Request ID: {mockQRData.split("=")[1]?.slice(0, 12)}...
        </p>
      </CardContent>
    </Card>
  );
}
