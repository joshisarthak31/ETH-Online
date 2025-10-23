"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Shield, Calendar, ExternalLink, CheckCircle, Clock, Star, Zap } from "lucide-react";
import { Credential } from "@/types";
import { VerificationBadge } from "@/components/Identity/VerificationBadge";
import { useState } from "react";

interface CredentialsListProps {
  credentials: Credential[];
}

export function CredentialsList({ credentials }: CredentialsListProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const getCredentialIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'age verification':
        return <Calendar className="w-6 h-6 text-white" />;
      case 'country check':
        return <Shield className="w-6 h-6 text-white" />;
      case 'kyc completion':
        return <CheckCircle className="w-6 h-6 text-white" />;
      default:
        return <Shield className="w-6 h-6 text-white" />;
    }
  };

  const getCredentialGradient = (type: string) => {
    switch (type.toLowerCase()) {
      case 'age verification':
        return 'from-blue-500 to-cyan-500';
      case 'country check':
        return 'from-green-500 to-emerald-500';
      case 'kyc completion':
        return 'from-purple-500 to-pink-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
  };

  const getCredentialBgGradient = (type: string) => {
    switch (type.toLowerCase()) {
      case 'age verification':
        return 'from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20';
      case 'country check':
        return 'from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20';
      case 'kyc completion':
        return 'from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20';
      default:
        return 'from-gray-50 to-slate-50 dark:from-gray-950/20 dark:to-slate-950/20';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-0 shadow-lg">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-800 dark:text-gray-200">Total Credentials</p>
                <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  {credentials.length}
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
                <p className="text-sm text-gray-800 dark:text-gray-200">Verified</p>
                <p className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  {credentials.filter(c => c.status === 'Verified').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-0 shadow-lg">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-800 dark:text-gray-200">Trust Score</p>
                <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  98%
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Credentials Grid */}
      <div className="grid gap-6">
        {credentials.map((credential, index) => (
          <Card
            key={credential.id}
            className={`group relative overflow-hidden bg-gradient-to-br ${getCredentialBgGradient(credential.type)} border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] cursor-pointer`}
            onMouseEnter={() => setHoveredCard(credential.id)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${getCredentialGradient(credential.type)}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            
            <CardContent className="p-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${getCredentialGradient(credential.type)} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    {getCredentialIcon(credential.type)}
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                        {credential.type}
                      </h3>
                      <VerificationBadge status={credential.status as any} />
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-800 dark:text-gray-200">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>Verified on {credential.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ExternalLink className="w-4 h-4" />
                        <span>Used by {credential.dapp}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  {/* Status Indicator */}
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Active</span>
                  </div>

                  {/* Action Button */}
                  <button className="w-10 h-10 rounded-xl bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 dark:group-hover:bg-gray-800/30 transition-all duration-300 group-hover:scale-110">
                    <Zap className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
                  </button>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-4 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-800 dark:text-gray-200">Last used 2 days ago</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm text-gray-800 dark:text-gray-200">High Priority</span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-xs text-gray-500 dark:text-gray-500">Credential ID: {credential.id}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {credentials.length === 0 && (
        <Card className="bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-950/20 dark:to-slate-950/20 border-0 shadow-lg">
          <CardContent className="p-12 text-center">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-400 to-slate-400 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No Credentials Yet</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-6">Start by verifying your identity to get your first credential</p>
            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-lg">
              Get Started
            </button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
