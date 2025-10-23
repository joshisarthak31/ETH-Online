"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { VerificationEvent } from "@/types";
import { ExternalLink, Clock, CheckCircle, XCircle, Activity, Shield, Zap, Calendar } from "lucide-react";
import { useState } from "react";

interface VerificationHistoryProps {
  history: VerificationEvent[];
}

export function VerificationHistory({ history }: VerificationHistoryProps) {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  const getVerificationIcon = (type: string, result: boolean) => {
    if (result) {
      switch (type.toLowerCase()) {
        case 'age_over_18':
          return <CheckCircle className="w-6 h-6 text-white" />;
        case 'country_verification':
          return <Shield className="w-6 h-6 text-white" />;
        case 'credential_check':
          return <Zap className="w-6 h-6 text-white" />;
        default:
          return <CheckCircle className="w-6 h-6 text-white" />;
      }
    } else {
      return <XCircle className="w-6 h-6 text-white" />;
    }
  };

  const getVerificationGradient = (type: string, result: boolean) => {
    if (result) {
      switch (type.toLowerCase()) {
        case 'age_over_18':
          return 'from-blue-500 to-cyan-500';
        case 'country_verification':
          return 'from-green-500 to-emerald-500';
        case 'credential_check':
          return 'from-purple-500 to-pink-500';
        default:
          return 'from-green-500 to-emerald-500';
      }
    } else {
      return 'from-red-500 to-rose-500';
    }
  };

  const getVerificationBgGradient = (type: string, result: boolean) => {
    if (result) {
      switch (type.toLowerCase()) {
        case 'age_over_18':
          return 'from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20';
        case 'country_verification':
          return 'from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20';
        case 'credential_check':
          return 'from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20';
        default:
          return 'from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20';
      }
    } else {
      return 'from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20';
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return {
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString(),
      relative: getRelativeTime(date)
    };
  };

  const getRelativeTime = (date: Date) => {
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays}d ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-0 shadow-lg">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-800 dark:text-gray-200">Total Verifications</p>
                <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  {history.length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-0 shadow-lg">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-800 dark:text-gray-200">Successful</p>
                <p className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  {history.filter(h => h.result).length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20 border-0 shadow-lg">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center">
                <XCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-800 dark:text-gray-200">Failed</p>
                <p className="text-2xl font-bold bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
                  {history.filter(h => !h.result).length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-0 shadow-lg">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-800 dark:text-gray-200">Success Rate</p>
                <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {Math.round((history.filter(h => h.result).length / history.length) * 100)}%
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-green-200 to-purple-200 dark:from-blue-800 dark:via-green-800 dark:to-purple-800"></div>
        
        <div className="space-y-6">
          {history.map((entry, index) => {
            const timeInfo = formatTimestamp(entry.timestamp);
            return (
              <Card
                key={entry.id}
                className={`group relative overflow-hidden bg-gradient-to-br ${getVerificationBgGradient(entry.type, entry.result)} border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] cursor-pointer`}
                onMouseEnter={() => setSelectedEvent(entry.id)}
                onMouseLeave={() => setSelectedEvent(null)}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${getVerificationGradient(entry.type, entry.result)}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-start space-x-6">
                    {/* Timeline Dot */}
                    <div className="relative z-20">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${getVerificationGradient(entry.type, entry.result)} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                        {getVerificationIcon(entry.type, entry.result)}
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center shadow-lg">
                        <div className={`w-3 h-3 rounded-full ${entry.result ? 'bg-green-500' : 'bg-red-500'} animate-pulse`}></div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-3">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                              {entry.type.replace(/_/g, " ").toUpperCase()}
                            </h3>
                            <Badge
                              variant={entry.result ? "default" : "destructive"}
                              className={`text-xs px-3 py-1 ${entry.result ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'}`}
                            >
                              {entry.result ? "Verified" : "Failed"}
                            </Badge>
                          </div>
                          
                          <div className="flex items-center space-x-4 text-sm text-gray-800 dark:text-gray-200">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{timeInfo.date}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{timeInfo.time}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Activity className="w-4 h-4" />
                              <span>dApp: {entry.dapp}</span>
                            </div>
                          </div>
                        </div>

                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{timeInfo.relative}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-500">#{entry.id}</p>
                        </div>
                      </div>

                      {/* Transaction Details */}
                      {entry.txHash && (
                        <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm">
                          <div className="flex items-center justify-between">
                            <div className="space-y-1">
                              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Transaction Hash</p>
                              <p className="text-xs font-mono text-gray-800 dark:text-gray-200">
                                {entry.txHash.slice(0, 20)}...{entry.txHash.slice(-8)}
                              </p>
                            </div>
                            <button className="w-8 h-8 rounded-lg bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 dark:group-hover:bg-gray-800/30 transition-all duration-300 group-hover:scale-110">
                              <ExternalLink className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Proof Details */}
                      {entry.proof && (
                        <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm">
                          <div className="space-y-1">
                            <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Zero-Knowledge Proof</p>
                            <p className="text-xs font-mono text-gray-800 dark:text-gray-200">
                              {entry.proof.slice(0, 30)}...{entry.proof.slice(-10)}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Empty State */}
      {history.length === 0 && (
        <Card className="bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-950/20 dark:to-slate-950/20 border-0 shadow-lg">
          <CardContent className="p-12 text-center">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-400 to-slate-400 flex items-center justify-center mx-auto mb-6">
              <Activity className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No Verification History</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-6">Your verification activities will appear here once you start using your identity</p>
            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-lg">
              Start Verifying
            </button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
