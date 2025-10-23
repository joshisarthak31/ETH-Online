"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Activity, Calendar, CheckCircle, TrendingUp, Clock, Database, Zap } from "lucide-react";
import { Identity } from "@/types";
import { useState, useEffect } from "react";

interface OverviewProps {
  identity: Identity;
}

export function Overview({ identity }: OverviewProps) {
  const [animatedCount, setAnimatedCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      let current = 0;
      const increment = identity.verificationCount / 30;
      const counter = setInterval(() => {
        current += increment;
        if (current >= identity.verificationCount) {
          setAnimatedCount(identity.verificationCount);
          clearInterval(counter);
        } else {
          setAnimatedCount(Math.floor(current));
        }
      }, 50);
      return () => clearInterval(counter);
    }, 500);
    return () => clearTimeout(timer);
  }, [identity.verificationCount]);

  return (
    <div className="space-y-6">
      {/* Main Stats Grid */}
      <div className="grid md:grid-cols-4 gap-6">
        {/* Token ID Card */}
        <Card className="group relative overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <CardHeader className="pb-3 relative z-10">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-wide">
                Token ID
              </CardTitle>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Shield className="w-5 h-5 text-white" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              {identity.tokenId}
            </div>
            <div className="flex items-center space-x-2">
              <Database className="w-4 h-4 text-purple-500" />
              <p className="text-sm text-gray-800 dark:text-gray-200 font-medium">Hedera NFT</p>
            </div>
          </CardContent>
        </Card>

        {/* Status Card */}
        <Card className="group relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <CardHeader className="pb-3 relative z-10">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-wide">
                Status
              </CardTitle>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
              {identity.status}
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-sm text-gray-800 dark:text-gray-200 font-medium">Identity Active</p>
            </div>
          </CardContent>
        </Card>

        {/* Verifications Card */}
        <Card className="group relative overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <CardHeader className="pb-3 relative z-10">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-wide">
                Verifications
              </CardTitle>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Activity className="w-5 h-5 text-white" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
              {isVisible ? animatedCount : 0}
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-blue-500" />
              <p className="text-sm text-gray-800 dark:text-gray-200 font-medium">Total Requests</p>
            </div>
          </CardContent>
        </Card>

        {/* Created Date Card */}
        <Card className="group relative overflow-hidden bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <CardHeader className="pb-3 relative z-10">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-wide">
                Created
              </CardTitle>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Calendar className="w-5 h-5 text-white" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
              {identity.createdAt}
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-orange-500" />
              <p className="text-sm text-gray-800 dark:text-gray-200 font-medium">Registration Date</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Stats Row */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Security Score */}
        <Card className="group relative overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <CardContent className="p-6 relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  95%
                </div>
                <p className="text-sm text-gray-800 dark:text-gray-200">Security Score</p>
              </div>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full w-[95%] transition-all duration-1000"></div>
            </div>
          </CardContent>
        </Card>

        {/* Trust Level */}
        <Card className="group relative overflow-hidden bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-950/20 dark:to-green-950/20 border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <CardContent className="p-6 relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-green-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
                  High
                </div>
                <p className="text-sm text-gray-800 dark:text-gray-200">Trust Level</p>
              </div>
            </div>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((level) => (
                <div
                  key={level}
                  className={`h-2 flex-1 rounded-full transition-all duration-500 ${
                    level <= 4 ? 'bg-gradient-to-r from-teal-500 to-green-500' : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Last Activity */}
        <Card className="group relative overflow-hidden bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20 border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <CardContent className="p-6 relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                  2h ago
                </div>
                <p className="text-sm text-gray-800 dark:text-gray-200">Last Activity</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-sm text-gray-800 dark:text-gray-200">Active Now</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
