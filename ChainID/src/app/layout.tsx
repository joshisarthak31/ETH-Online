import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { AuthProvider } from "@/contexts/AuthContext";
import { IdentityProvider } from "@/contexts/IdentityContext";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChainID - Decentralized Digital Identity",
  description:
    "Privacy-preserving, decentralized digital identity system powered by Web3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <AuthProvider>
            <IdentityProvider>
              <Navbar />
              <main className="min-h-screen">{children}</main>
            </IdentityProvider>
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}
