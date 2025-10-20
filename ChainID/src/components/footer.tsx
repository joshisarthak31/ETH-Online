import Link from "next/link";
import {
  Twitter,
  Linkedin,
  Github,
  Sparkles,
  Globe,
  Shield,
  Zap,
  ArrowRight,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-purple-800 via-purple-900 to-pink-900 overflow-hidden">
      {/* Diagonal Stripes Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              rgba(255,255,255,0.1) 0px,
              rgba(255,255,255,0.1) 2px,
              transparent 2px,
              transparent 20px
            )`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Logo and tagline section */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
              <Shield className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="text-3xl font-bold text-white">ChainID</h3>
          </div>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto leading-relaxed">
            Your privacy-preserving, decentralized digital identity system. The
            Web3 alternative to traditional identity management.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Platform Column */}
          <div className="group">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <h3 className="font-bold text-white text-lg">Platform</h3>
            </div>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/#features"
                  className="text-purple-200 hover:text-white transition-colors duration-300 text-sm"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-purple-200 hover:text-white transition-colors duration-300 text-sm"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="text-purple-200 hover:text-white transition-colors duration-300 text-sm"
                >
                  Create Identity
                </Link>
              </li>
              <li>
                <Link
                  href="/verify"
                  className="text-purple-200 hover:text-white transition-colors duration-300 text-sm"
                >
                  Verify Credentials
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="group">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <h3 className="font-bold text-white text-lg">Solutions</h3>
            </div>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#individuals"
                  className="text-purple-200 hover:text-white transition-colors duration-300 text-sm"
                >
                  For Individuals
                </Link>
              </li>
              <li>
                <Link
                  href="#dapps"
                  className="text-purple-200 hover:text-white transition-colors duration-300 text-sm"
                >
                  For dApps
                </Link>
              </li>
              <li>
                <Link
                  href="#enterprises"
                  className="text-purple-200 hover:text-white transition-colors duration-300 text-sm"
                >
                  For Enterprises
                </Link>
              </li>
              <li>
                <Link
                  href="#developers"
                  className="text-purple-200 hover:text-white transition-colors duration-300 text-sm"
                >
                  For Developers
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="group">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg flex items-center justify-center">
                <Globe className="w-4 h-4 text-white" />
              </div>
              <h3 className="font-bold text-white text-lg">Resources</h3>
            </div>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#docs"
                  className="text-purple-200 hover:text-white transition-colors duration-300 text-sm"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="#help"
                  className="text-purple-200 hover:text-white transition-colors duration-300 text-sm"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#community"
                  className="text-purple-200 hover:text-white transition-colors duration-300 text-sm"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="#blog"
                  className="text-purple-200 hover:text-white transition-colors duration-300 text-sm"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="group">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <h3 className="font-bold text-white text-lg">Legal</h3>
            </div>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#privacy"
                  className="text-purple-200 hover:text-white transition-colors duration-300 text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#terms"
                  className="text-purple-200 hover:text-white transition-colors duration-300 text-sm"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#security"
                  className="text-purple-200 hover:text-white transition-colors duration-300 text-sm"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  href="#compliance"
                  className="text-purple-200 hover:text-white transition-colors duration-300 text-sm"
                >
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-purple-200 mb-4 md:mb-0 text-sm">
              © {currentYear} ChainID. All rights reserved.
            </div>

            <div className="flex items-center space-x-6">
              <a
                href="https://twitter.com/chainid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-200 hover:text-white transition-colors duration-300"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/chainid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-200 hover:text-white transition-colors duration-300"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/chainid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-200 hover:text-white transition-colors duration-300"
              >
                <span className="sr-only">GitHub</span>
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Brand statement */}
        <div className="text-center mt-8 pt-8 border-t border-white/10">
          <p className="text-xs text-purple-200 max-w-4xl mx-auto leading-relaxed">
            ChainID is a revolutionary decentralized identity platform that
            empowers users with complete control over their personal data. Using
            Lit Protocol encryption, IPFS storage, and Hedera NFTs, ChainID
            enables privacy-preserving identity verification with zero-knowledge
            proofs. Your identity, your control - no corporations, no central
            servers, just pure Web3 sovereignty.
          </p>
        </div>
      </div>
    </footer>
  );
}
