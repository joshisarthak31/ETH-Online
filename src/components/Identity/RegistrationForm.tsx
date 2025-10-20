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
import { Loader2, Upload, Shield } from "lucide-react";
import { validateRegistrationForm } from "@/utils/validation";

interface RegistrationFormProps {
  onSubmit: (data: any) => Promise<void>;
  isLoading?: boolean;
}

export function RegistrationForm({
  onSubmit,
  isLoading = false,
}: RegistrationFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    country: "",
    governmentId: null as File | null,
    selfie: null as File | null,
  });
  const [errors, setErrors] = useState<any>({});

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

    const validationErrors = validateRegistrationForm(formData);
    if (validationErrors.length > 0) {
      const errorObj: any = {};
      validationErrors.forEach((err) => {
        errorObj[err.field] = err.message;
      });
      setErrors(errorObj);
      return;
    }

    setErrors({});
    await onSubmit(formData);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Identity Information</CardTitle>
        <CardDescription>
          Enter your details below. All information is encrypted before storage.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              disabled={isLoading}
              className={errors.fullName ? "border-red-500" : ""}
            />
            {errors.fullName && (
              <p className="text-sm text-red-500">{errors.fullName}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="dateOfBirth">Date of Birth *</Label>
            <Input
              id="dateOfBirth"
              type="date"
              value={formData.dateOfBirth}
              onChange={(e) =>
                setFormData({ ...formData, dateOfBirth: e.target.value })
              }
              disabled={isLoading}
              className={errors.dateOfBirth ? "border-red-500" : ""}
            />
            {errors.dateOfBirth && (
              <p className="text-sm text-red-500">{errors.dateOfBirth}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="country">Country of Residence *</Label>
            <Input
              id="country"
              placeholder="United States"
              value={formData.country}
              onChange={(e) =>
                setFormData({ ...formData, country: e.target.value })
              }
              disabled={isLoading}
              className={errors.country ? "border-red-500" : ""}
            />
            {errors.country && (
              <p className="text-sm text-red-500">{errors.country}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="governmentId">Government ID</Label>
            <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-purple-300 transition-colors cursor-pointer">
              <input
                id="governmentId"
                type="file"
                accept="image/*,.pdf"
                onChange={(e) => handleFileChange(e, "governmentId")}
                className="hidden"
                disabled={isLoading}
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
            <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-purple-300 transition-colors cursor-pointer">
              <input
                id="selfie"
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, "selfie")}
                className="hidden"
                disabled={isLoading}
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

          <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg space-y-2">
            <div className="flex items-start gap-2">
              <Shield className="w-5 h-5 text-purple-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Privacy Notice</p>
                <p className="text-xs text-muted-foreground">
                  Your data will be encrypted using Lit Protocol, stored on
                  IPFS, and minted as an NFT on Hedera. Only you control access
                  to your information.
                </p>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              "Register Identity"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
