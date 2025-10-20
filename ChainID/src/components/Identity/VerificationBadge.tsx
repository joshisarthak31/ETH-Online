"use client";

import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, Clock } from "lucide-react";

interface VerificationBadgeProps {
  status: "Verified" | "Pending" | "Expired" | "Revoked";
  className?: string;
}

export function VerificationBadge({
  status,
  className,
}: VerificationBadgeProps) {
  const getStatusConfig = () => {
    switch (status) {
      case "Verified":
        return {
          icon: CheckCircle2,
          className:
            "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400",
        };
      case "Pending":
        return {
          icon: Clock,
          className:
            "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400",
        };
      case "Expired":
        return {
          icon: XCircle,
          className:
            "bg-gray-100 text-gray-700 dark:bg-gray-900/20 dark:text-gray-400",
        };
      case "Revoked":
        return {
          icon: XCircle,
          className:
            "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400",
        };
      default:
        return {
          icon: Clock,
          className: "bg-gray-100 text-gray-700",
        };
    }
  };

  const config = getStatusConfig();
  const Icon = config.icon;

  return (
    <Badge
      className={`${config.className} ${className} flex items-center gap-1`}
    >
      <Icon className="w-3 h-3" />
      {status}
    </Badge>
  );
}
