export async function encryptWithLit(data: any, accessControlConditions: any) {
  // Mock Lit Protocol encryption
  return {
    encryptedData: btoa(JSON.stringify(data)),
    encryptedSymmetricKey: "sym_key_" + Math.random().toString(36),
    accessControlConditions,
  };
}

export async function decryptWithLit(
  encryptedData: string,
  encryptedSymmetricKey: string
) {
  // Mock Lit Protocol decryption
  return JSON.parse(atob(encryptedData));
}

export function generateAccessControlConditions(walletAddress: string) {
  return [
    {
      contractAddress: "",
      standardContractType: "",
      chain: "hedera",
      method: "",
      parameters: [":userAddress"],
      returnValueTest: {
        comparator: "=",
        value: walletAddress,
      },
    },
  ];
}
