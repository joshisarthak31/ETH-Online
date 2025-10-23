"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Shield,
  Lock,
  Eye,
  CheckCircle,
  ArrowRight,
  Users,
  Zap,
  FileCheck,
  Database,
  Network,
  Sparkles,
  ShieldCheck,
  Menu,
  X,
  ChevronDown,
  Play,
  Star,
  Globe,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Footer } from "@/components/footer";

// Custom hook for scroll-based animations
function useScrollAnimation(threshold: number = 0.1) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: "50px 0px -50px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible] as const;
}

// Animated Counter Component
function AnimatedCounter({
  targetValue,
  duration = 1500,
  prefix = "",
  suffix = "",
  className = "",
}: {
  targetValue: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const [currentValue, setCurrentValue] = useState(0);
  const [ref, isVisible] = useScrollAnimation(0.2);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const startValue = 0;

    const updateValue = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const newValue = startValue + (targetValue - startValue) * easeOutCubic;
      setCurrentValue(newValue);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(updateValue);
      }
    };

    const timer = setTimeout(() => {
      rafRef.current = requestAnimationFrame(updateValue);
    }, 100);

    return () => {
      clearTimeout(timer);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [targetValue, duration, isVisible]);

  const formatNumber = (num: number) => {
    return Math.floor(num).toLocaleString();
  };

  return (
    <div ref={ref}>
      <span className={className}>
        {prefix}
        {formatNumber(currentValue)}
        {suffix}
      </span>
    </div>
  );
}

// Animated Text Component
function AnimatedText({
  text,
  delay = 0,
  className = "",
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const words = useMemo(() => text.split(" "), [text]);

  return (
    <div ref={ref} className={className}>
      {words.map((word, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-600 ease-out will-change-transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
          style={{
            transitionDelay: `${delay + index * 40}ms`,
            backfaceVisibility: "hidden",
          }}
        >
          {word}
          {index < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [featuresRef, featuresVisible] = useScrollAnimation(0.1);
  const [howItWorksRef, howItWorksVisible] = useScrollAnimation(0.1);
  const [statsRef, statsVisible] = useScrollAnimation(0.1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: Lock,
      title: "Privacy-First Encryption",
      description:
        "Your identity data is encrypted using Lit Protocol before storage. Only you control access through cryptographic keys.",
      color: "purple",
    },
    {
      icon: Database,
      title: "Decentralized Storage",
      description:
        "Data stored on IPFS ensures no single point of failure. Your identity lives on a distributed network, not corporate servers.",
      color: "blue",
    },
    {
      icon: ShieldCheck,
      title: "NFT-Based Identity",
      description:
        "Your identity is minted as an NFT on Hedera, providing immutable proof of ownership and verifiable credentials.",
      color: "green",
    },
    {
      icon: Eye,
      title: "Zero-Knowledge Proofs",
      description:
        "Prove attributes without revealing data. Verify you're over 18 without sharing your birthdate.",
      color: "pink",
    },
    {
      icon: Network,
      title: "Cross-Chain Compatible",
      description:
        "Works across multiple blockchains including Ethereum, Polygon, and more through Hedera's bridge technology.",
      color: "orange",
    },
    {
      icon: Zap,
      title: "Gasless Verification",
      description:
        "Users don't pay transaction fees. Powered by Yellow Network for seamless, cost-free identity verification.",
      color: "cyan",
    },
  ];

  const howItWorksSteps = [
    {
      icon: FileCheck,
      title: "Register",
      description:
        "Submit your identity details securely through our encrypted form",
    },
    {
      icon: Lock,
      title: "Encrypt",
      description:
        "Data is encrypted with Lit Protocol using your wallet signature",
    },
    {
      icon: Database,
      title: "Store",
      description: "Encrypted data stored on IPFS for decentralized access",
    },
    {
      icon: ShieldCheck,
      title: "Mint",
      description: "NFT minted on Hedera as proof of your identity",
    },
  ];

  const stats = [
    { value: 100, suffix: "%", label: "Privacy Protected" },
    { value: 0, prefix: "$", label: "User Fees" },
    { value: 10000, suffix: "+", label: "Identities Created" },
    { value: 50000, suffix: "+", label: "Verifications" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
          : 'bg-transparent'
      }`}>
        {/* Top Announcement Bar */}
        <div className={`bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 transition-all duration-300 ${
          isScrolled ? 'hidden' : 'block'
        }`}>
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-6 text-sm font-medium">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Live: 10,000+ Identities</span>
                </div>
                <div className="w-px h-4 bg-white/30"></div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>100% Privacy Protected</span>
                </div>
                <div className="w-px h-4 bg-white/30"></div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-300">$0 Fees</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className={`text-2xl font-bold transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                ChainID
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className={`font-medium transition-colors hover:text-purple-600 flex items-center space-x-1 ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}>
                <Shield className="w-4 h-4" />
                <span>Features</span>
                <ChevronDown className="w-4 h-4" />
              </a>
              <a href="#how-it-works" className={`font-medium transition-colors hover:text-purple-600 flex items-center space-x-1 ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}>
                <Users className="w-4 h-4" />
                <span>How It Works</span>
                <ChevronDown className="w-4 h-4" />
              </a>
              <a href="#stats" className={`font-medium transition-colors hover:text-purple-600 flex items-center space-x-1 ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}>
                <span>Stats</span>
              </a>
              <Link href="/register">
                <Button className={`font-medium transition-colors hover:text-purple-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                }`}>
                  Register
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button className={`font-medium transition-colors hover:text-purple-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                }`}>
                  Dashboard
                </Button>
              </Link>
              <Link href="/verify">
                <Button className={`font-medium transition-colors hover:text-purple-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                }`}>
                  Verify
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold">
                  Connect Wallet
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/50">
              <div className="px-4 py-4 space-y-4">
                <a href="#features" className="block font-medium text-gray-700 hover:text-purple-600 flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>Features</span>
                </a>
                <a href="#how-it-works" className="block font-medium text-gray-700 hover:text-purple-600 flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>How It Works</span>
                </a>
                <a href="#stats" className="block font-medium text-gray-700 hover:text-purple-600">
                  Stats
                </a>
                <Link href="/register">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                    Register
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button className="w-full bg-blue-600 text-white">
                    Dashboard
                  </Button>
                </Link>
                <Link href="/verify">
                  <Button className="w-full bg-green-600 text-white">
                    Verify
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large Floating Shapes */}
          <div className="absolute top-10 left-10 w-40 h-40 transform rotate-45 animate-pulse opacity-20">
            <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl shadow-2xl"></div>
          </div>

          <div
            className="absolute top-32 right-20 w-32 h-32 transform -rotate-12 animate-pulse opacity-25"
            style={{ animationDelay: "1s" }}
          >
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl shadow-xl"></div>
          </div>

          <div
            className="absolute bottom-20 left-20 w-48 h-48 transform rotate-12 animate-pulse opacity-15"
            style={{ animationDelay: "2s" }}
          >
            <div className="w-full h-full bg-gradient-to-br from-pink-500 to-purple-500 rounded-3xl shadow-2xl"></div>
          </div>

          {/* Medium Floating Elements */}
          <div
            className="absolute top-1/3 right-1/4 w-24 h-24 transform rotate-45 animate-bounce opacity-20"
            style={{ animationDelay: "0.5s", animationDuration: "3s" }}
          >
            <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl"></div>
          </div>

          <div
            className="absolute bottom-1/3 left-1/3 w-20 h-20 transform -rotate-45 animate-bounce opacity-25"
            style={{ animationDelay: "1.5s", animationDuration: "4s" }}
          >
            <div className="w-full h-full bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl"></div>
          </div>

          {/* Small Floating Particles */}
          <div className="absolute top-1/4 left-1/2 w-4 h-4 bg-white/30 rounded-full animate-ping" style={{ animationDelay: "0s" }}></div>
          <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-blue-300/40 rounded-full animate-ping" style={{ animationDelay: "1s" }}></div>
          <div className="absolute bottom-1/4 left-1/4 w-5 h-5 bg-pink-300/30 rounded-full animate-ping" style={{ animationDelay: "2s" }}></div>
          <div className="absolute bottom-1/2 right-1/2 w-2 h-2 bg-purple-300/50 rounded-full animate-ping" style={{ animationDelay: "0.5s" }}></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:120px_120px]"></div>
          
          {/* Radial Gradients */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(236,72,153,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-48 pb-32">
          <div className="max-w-7xl mx-auto text-center">
            {/* Announcement Badge */}
            <div
              className={`inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-blue-200 rounded-full text-sm font-medium mb-12 border border-white/20 transition-all duration-1000 ease-out hover:bg-white/20 hover:scale-105 cursor-pointer group ${
                isLoaded
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-4 scale-95"
              }`}
            >
              <Sparkles className="w-5 h-5 mr-3 animate-pulse group-hover:rotate-12 transition-transform" />
              Introducing: Web3 Decentralized Identity
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </div>

            {/* Main Headline */}
            <AnimatedText
              text="Your Identity, Your Control"
              className={`text-7xl lg:text-8xl font-bold text-white mb-12 leading-tight transition-all duration-1200 ease-out ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              delay={200}
            />

            {/* Subtitle */}
            <p
              className={`text-2xl lg:text-3xl text-gray-300 mb-20 max-w-5xl mx-auto leading-relaxed transition-all duration-1000 ease-out ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              ChainID is the{" "}
              <span className="text-blue-400 font-semibold">
                Web3 alternative to Aadhaar
              </span>
              . A privacy-preserving, decentralized digital identity system
              where you control your data completely.
            </p>

            {/* CTA Buttons - Vertical Stack */}
            <div
              className={`flex flex-col items-center gap-6 mb-20 transition-all duration-1000 ease-out ${
                isLoaded
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <Link href="/register">
                <Button
                  size="lg"
                  className="group relative inline-flex items-center px-16 py-8 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-bold text-xl rounded-3xl hover:from-purple-500 hover:via-pink-500 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg border border-purple-400/30 overflow-hidden w-full sm:w-auto"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <Shield className="w-7 h-7 mr-4 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
                  <span className="relative z-10">Create Your Identity</span>
                  <ArrowRight className="w-7 h-7 ml-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                </Button>
              </Link>

              <Link href="/verify">
                <Button
                  size="lg"
                  variant="outline"
                  className="group px-16 py-8 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 rounded-3xl text-xl font-bold transition-all duration-300 hover:scale-105 hover:border-white/50 w-full sm:w-auto"
                >
                  <CheckCircle className="w-7 h-7 mr-4 group-hover:scale-110 transition-transform duration-300" />
                  Verify Credentials
                </Button>
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="flex flex-col items-center">
              <span className="text-white/60 text-base mb-6">Scroll to explore</span>
              <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-2 h-4 bg-white/60 rounded-full mt-3 animate-bounce"></div>
              </div>
            </div>

            {/* Three Main Feature Cards */}
            <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto mt-32">
              <div
                className={`group bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10 hover:border-white/30 transition-all duration-500 hover:bg-white/10 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "1000ms" }}
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <Lock className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-purple-200 transition-colors">Encrypt</h3>
                <p className="text-gray-300 text-left leading-relaxed group-hover:text-gray-200 transition-colors text-lg">
                  Your data is encrypted with Lit Protocol before leaving your
                  device. True privacy by design.
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-6 h-6 text-purple-300 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              <div
                className={`group bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10 hover:border-white/30 transition-all duration-500 hover:bg-white/10 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "1200ms" }}
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <Database className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-blue-200 transition-colors">Store</h3>
                <p className="text-gray-300 text-left leading-relaxed group-hover:text-gray-200 transition-colors text-lg">
                  Decentralized storage on IPFS means no corporation controls
                  your identity data.
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-6 h-6 text-blue-300 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              <div
                className={`group bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10 hover:border-white/30 transition-all duration-500 hover:bg-white/10 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "1400ms" }}
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <Eye className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-green-200 transition-colors">Verify</h3>
                <p className="text-gray-300 text-left leading-relaxed group-hover:text-gray-200 transition-colors text-lg">
                  Prove attributes with zero-knowledge proofs. Share proof, not
                  personal data.
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-6 h-6 text-green-300 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-32 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(139,92,246,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(236,72,153,0.3),transparent_50%)]"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-purple-200/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-200/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-200/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto" ref={statsRef}>
            <div className="text-center mb-16">
              <div className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                📊 Trusted by Thousands
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Our Impact in Numbers
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real metrics from our growing community of privacy-conscious users
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`group text-center transition-all duration-1000 ease-out hover:scale-105 cursor-pointer ${
                    statsVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200">
                    <AnimatedCounter
                      targetValue={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      duration={2000}
                      className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block mb-4 group-hover:scale-110 transition-transform"
                    />
                    <p className="text-gray-600 font-medium text-lg group-hover:text-purple-600 transition-colors">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 bg-white relative overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-3xl"></div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-purple-300/30 rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-pink-300/40 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-blue-300/30 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-cyan-300/50 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20" ref={featuresRef}>
              <div
                className={`inline-block bg-purple-100 text-purple-600 px-6 py-3 rounded-full text-sm font-medium mb-6 transition-all duration-1000 ${
                  featuresVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                ✨ Features
              </div>
              <AnimatedText
                text="Why ChainID is Different"
                className="text-4xl lg:text-6xl font-bold mb-8 text-gray-900"
                delay={100}
              />
              <p
                className={`text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 ${
                  featuresVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                Built on cutting-edge Web3 technology to ensure your privacy,
                security, and sovereignty. Experience the future of digital identity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className={`group hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border-2 hover:border-purple-300 overflow-hidden relative cursor-pointer bg-gradient-to-br from-white to-gray-50 ${
                    featuresVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardHeader className="relative z-10 pb-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="group-hover:text-purple-600 transition-colors text-xl font-bold">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-base leading-relaxed text-gray-600 group-hover:text-gray-700 transition-colors">
                      {feature.description}
                    </CardDescription>
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center text-purple-600 font-medium">
                        <span className="text-sm">Learn more</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-32 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-2xl"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-blue-200/20 rounded-full blur-xl animate-bounce" style={{animationDelay: '0.5s', animationDuration: '3s'}}></div>
          <div className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-purple-200/20 rounded-full blur-xl animate-bounce" style={{animationDelay: '1.5s', animationDuration: '4s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-cyan-200/30 rounded-full blur-lg animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20" ref={howItWorksRef}>
              <div
                className={`inline-block bg-blue-100 text-blue-600 px-6 py-3 rounded-full text-sm font-medium mb-6 transition-all duration-1000 ${
                  howItWorksVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                💡 How It Works
              </div>
              <AnimatedText
                text="Simple Steps to Decentralized Identity"
                className="text-4xl lg:text-6xl font-bold mb-8 text-gray-900"
                delay={100}
              />
              <p
                className={`text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 ${
                  howItWorksVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                Create your privacy-preserving digital identity in four simple
                steps. No technical knowledge required.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorksSteps.map((step, index) => (
                <div
                  key={index}
                  className={`group text-center transition-all duration-1000 hover:scale-105 cursor-pointer ${
                    howItWorksVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${400 + index * 150}ms` }}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                    <div className="relative mb-8">
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                        <step.icon className="h-12 w-12 text-white" />
                      </div>
                      <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-white flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 animate-gradient bg-[length:200%_200%]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        
        {/* Enhanced Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 rounded-full blur-lg animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Additional floating particles */}
          <div className="absolute top-1/4 left-1/3 w-6 h-6 bg-white/20 rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-white/30 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/4 w-5 h-5 bg-white/25 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-white/35 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
        </div>

        <div className="container mx-auto px-4 text-center space-y-12 relative z-10">
          <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-6 hover:bg-white/30 transition-all duration-300 cursor-pointer">
            🚀 Get Started Today
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-white max-w-5xl mx-auto leading-tight">
            Ready to Take Control of Your{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Digital Identity?
            </span>
          </h2>

          <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Join thousands of users who have reclaimed their privacy with
            ChainID. No fees, complete control, and privacy guaranteed.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Link href="/register">
              <Button
                size="lg"
                className="group bg-white text-purple-600 hover:bg-gray-100 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 font-bold text-xl px-12 py-8 rounded-2xl"
              >
                <Shield className="w-7 h-7 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                Create Identity Now
                <ArrowRight className="w-7 h-7 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>

            <Link href="/dashboard">
              <Button
                size="lg"
                variant="outline"
                className="group bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold text-xl px-12 py-8 rounded-2xl hover:border-white/50 transition-all duration-300 hover:scale-105"
              >
                <Users className="w-7 h-7 mr-3 group-hover:scale-110 transition-transform duration-300" />
                View Dashboard
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-12 opacity-80">
            <div className="flex items-center text-white/70">
              <Star className="w-5 h-5 text-yellow-300 mr-2" />
              <span className="text-sm">Trusted by 10,000+ users</span>
            </div>
            <div className="flex items-center text-white/70">
              <Globe className="w-5 h-5 text-blue-300 mr-2" />
              <span className="text-sm">Available worldwide</span>
            </div>
            <div className="flex items-center text-white/70">
              <Heart className="w-5 h-5 text-red-300 mr-2" />
              <span className="text-sm">Privacy-first approach</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
