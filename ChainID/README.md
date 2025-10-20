# ChainID - Decentralized Digital Identity

ChainID is a privacy-preserving, decentralized digital identity system - the Web3 alternative to traditional identity management like Aadhaar.

## Features

- **Privacy-First Encryption**: Data encrypted with Lit Protocol
- **Decentralized Storage**: IPFS-based storage
- **NFT-Based Identity**: Hedera blockchain NFTs
- **Zero-Knowledge Proofs**: Verify without revealing data
- **Gasless Verification**: No transaction fees for users
- **Cross-Chain Compatible**: Multi-blockchain support

## Tech Stack

- **Frontend**: Next.js 14, React, TailwindCSS
- **Wallet**: RainbowKit, Wagmi
- **Encryption**: Lit Protocol
- **Storage**: IPFS
- **Blockchain**: Hedera, Ethereum, Polygon
- **Components**: shadcn/ui, Radix UI

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Set up environment variables:

```bash
cp .env.local.example .env.local
```

Add your WalletConnect Project ID from https://cloud.walletconnect.com/

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/              # Next.js pages
├── components/       # React components
├── contexts/         # React contexts
├── hooks/            # Custom hooks
├── lib/              # Utilities
├── types/            # TypeScript types
└── utils/            # Helper functions
```

## Key Pages

- `/` - Homepage
- `/register` - Create Identity
- `/dashboard` - User Dashboard
- `/verify` - Verify Credentials

## License

MIT
