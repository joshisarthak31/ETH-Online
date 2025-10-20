// Network configurations
export const HEDERA_TESTNET = {
  chainId: 296,
  name: "Hedera Testnet",
  rpcUrl: "https://testnet.hashio.io/api",
  explorerUrl: "https://hashscan.io/testnet",
};

// Contract addresses (update with actual deployed addresses)
export const CONTRACTS = {
  CHAIN_ID: "0x...", // ChainID main contract
  IDENTITY_VERIFIER: "0x...", // IdentityVerifier contract
  IDENTITY_REGISTRY: "0x...", // IdentityRegistry contract
};

// API endpoints
export const API_ENDPOINTS = {
  REGISTER: "/api/identity/register",
  GET_IDENTITY: "/api/identity",
  REVOKE: "/api/identity/revoke",
  VERIFY_REQUEST: "/api/verify/request",
  VERIFY_HISTORY: "/api/verify/history",
};

// Attribute types
export const ATTRIBUTE_TYPES = [
  { value: "age_over_18", label: "Age Over 18+" },
  { value: "age_over_21", label: "Age Over 21+" },
  { value: "country_verification", label: "Country Verification" },
  { value: "kyc_complete", label: "KYC Completion" },
  { value: "credential_check", label: "Credential Check" },
] as const;

// Status colors
export const STATUS_COLORS = {
  Active: "bg-green-500",
  Revoked: "bg-red-500",
  Suspended: "bg-yellow-500",
  Verified: "bg-green-500",
  Pending: "bg-yellow-500",
  Expired: "bg-gray-500",
} as const;
