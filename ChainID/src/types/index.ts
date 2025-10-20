// Identity types
export interface Identity {
  tokenId: string;
  walletAddress: string;
  ipfsHash: string;
  createdAt: string;
  status: "Active" | "Revoked" | "Suspended";
  verificationCount: number;
}

export interface IdentityData {
  fullName: string;
  dateOfBirth: string;
  country: string;
  governmentId: File | null;
  selfie: File | null;
}

// Credential types
export interface Credential {
  id: string;
  type: string;
  status: "Verified" | "Pending" | "Expired";
  date: string;
  dapp: string;
}

// Verification types
export interface VerificationRequest {
  userAddress: string;
  attributeType: string;
  dappId: string;
  sessionId?: string;
}

export interface VerificationEvent {
  id: string;
  type: string;
  dapp: string;
  result: boolean;
  timestamp: string;
  txHash?: string;
  proof?: string;
}

export interface VerificationResult {
  verified: boolean;
  proof?: string;
  timestamp?: string;
  txHash?: string;
  error?: string;
}

// Attribute types
export type AttributeType =
  | "age_over_18"
  | "age_over_21"
  | "country_verification"
  | "kyc_complete"
  | "credential_check";
