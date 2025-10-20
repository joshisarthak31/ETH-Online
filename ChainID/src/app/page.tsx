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
  Globe,
  Zap,
  FileCheck,
  Database,
  Network,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  Key,
  Fingerprint,
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
function useScrollAnimation(threshold = 0.1) {
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
  const rafRef = useRef<number>();

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
  const [heroRef, heroVisible] = useScrollAnimation(0.1);
  const [featuresRef, featuresVisible] = useScrollAnimation(0.1);
  const [howItWorksRef, howItWorksVisible] = useScrollAnimation(0.1);
  const [statsRef, statsVisible] = useScrollAnimation(0.1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
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
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 overflow-hidden">
        {/* Geometric Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 transform rotate-45 animate-pulse opacity-20">
            <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-2xl"></div>
          </div>

          <div
            className="absolute top-40 right-32 w-24 h-24 transform -rotate-12 animate-pulse opacity-30"
            style={{ animationDelay: "1s" }}
          >
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-xl"></div>
          </div>

          <div
            className="absolute bottom-32 left-32 w-40 h-40 transform rotate-12 animate-pulse opacity-15"
            style={{ animationDelay: "2s" }}
          >
            <div className="w-full h-full bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl shadow-2xl"></div>
          </div>

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
          <div className="max-w-6xl mx-auto text-center">
            {/* Announcement Badge */}
            <div
              className={`inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-blue-200 rounded-full text-sm font-medium mb-8 border border-white/20 transition-all duration-1000 ease-out ${
                isLoaded
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-4 scale-95"
              }`}
            >
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              Introducing: Web3 Decentralized Identity
              <ArrowRight className="w-4 h-4 ml-2" />
            </div>

            {/* Main Headline */}
            <AnimatedText
              text="Your Identity, Your Control"
              className={`text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight transition-all duration-1200 ease-out ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              delay={200}
            />

            {/* Subtitle */}
            <p
              className={`text-xl lg:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 ease-out ${
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

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-1000 ease-out ${
                isLoaded
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <Link href="/register">
                <Button
                  size="lg"
                  className="group relative inline-flex items-center px-8 py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-bold text-lg rounded-2xl hover:from-purple-500 hover:via-pink-500 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg border border-purple-400/30"
                >
                  <Shield className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  Create Your Identity
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>

              <Link href="/verify">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 rounded-2xl text-lg font-bold transition-all duration-300 hover:scale-105"
                >
                  <CheckCircle className="w-6 h-6 mr-3" />
                  Verify Credentials
                </Button>
              </Link>
            </div>

            {/* Three Main Feature Cards */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div
                className={`group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/10 hover:scale-105 hover:shadow-xl ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "1000ms" }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Lock className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Encrypt</h3>
                <p className="text-gray-300 text-left">
                  Your data is encrypted with Lit Protocol before leaving your
                  device. True privacy by design.
                </p>
              </div>

              <div
                className={`group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/10 hover:scale-105 hover:shadow-xl ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "1200ms" }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Database className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Store</h3>
                <p className="text-gray-300 text-left">
                  Decentralized storage on IPFS means no corporation controls
                  your identity data.
                </p>
              </div>

              <div
                className={`group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/10 hover:scale-105 hover:shadow-xl ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "1400ms" }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Verify</h3>
                <p className="text-gray-300 text-left">
                  Prove attributes with zero-knowledge proofs. Share proof, not
                  personal data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto" ref={statsRef}>
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center transition-all duration-1000 ease-out ${
                    statsVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <AnimatedCounter
                    targetValue={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    duration={2000}
                    className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block mb-2"
                  />
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16" ref={featuresRef}>
              <div
                className={`inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-4 transition-all duration-1000 ${
                  featuresVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                ✨ Features
              </div>
              <AnimatedText
                text="Why ChainID is Different"
                className="text-4xl lg:text-5xl font-bold mb-6"
                delay={100}
              />
              <p
                className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 ${
                  featuresVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                Built on cutting-edge Web3 technology to ensure your privacy,
                security, and sovereignty
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className={`hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-2 hover:border-purple-300 group overflow-hidden relative ${
                    featuresVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <CardHeader className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <feature.icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="group-hover:text-purple-600 transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16" ref={howItWorksRef}>
              <div
                className={`inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4 transition-all duration-1000 ${
                  howItWorksVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                💡 How It Works
              </div>
              <AnimatedText
                text="Simple Steps to Decentralized Identity"
                className="text-4xl lg:text-5xl font-bold mb-6"
                delay={100}
              />
              <p
                className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 ${
                  howItWorksVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                Create your privacy-preserving digital identity in four simple
                steps
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorksSteps.map((step, index) => (
                <div
                  key={index}
                  className={`text-center transition-all duration-1000 ${
                    howItWorksVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${400 + index * 150}ms` }}
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-lg">
                      <step.icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 animate-gradient bg-[length:200%_200%]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>

        <div className="container mx-auto px-4 text-center space-y-8 relative z-10">
          <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            🚀 Get Started Today
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white max-w-4xl mx-auto">
            Ready to Take Control of Your Digital Identity?
          </h2>

          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join thousands of users who have reclaimed their privacy with
            ChainID. No fees, complete control, and privacy guaranteed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/register">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 font-bold text-lg px-8 py-6"
              >
                <Shield className="w-6 h-6 mr-2" />
                Create Identity Now
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
            </Link>

            <Link href="/dashboard">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-6"
              >
                <Users className="w-6 h-6 mr-2" />
                View Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
