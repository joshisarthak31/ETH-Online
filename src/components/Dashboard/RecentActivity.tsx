"use client";

import { Card, CardContent } from "@/components/ui/card";
import { 
  Activity, 
  CheckCircle, 
  XCircle, 
  Clock, 
  Shield, 
  Zap, 
  Globe,
  Database,
  Eye,
  TrendingUp
} from "lucide-react";
import { useState } from "react";

interface ActivityItem {
  id: string;
  type: 'verification' | 'credential' | 'connection' | 'security';
  title: string;
  description: string;
  timestamp: string;
  status: 'success' | 'pending' | 'failed';
  icon: React.ReactNode;
  gradient: string;
  bgGradient: string;
}

export function RecentActivity() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const activities: ActivityItem[] = [
    {
      id: "1",
      type: 'verification',
      title: 'Age Verification Completed',
      description: 'Successfully verified age over 18 for DeFi Protocol',
      timestamp: '2 minutes ago',
      status: 'success',
      icon: <CheckCircle className="w-5 h-5 text-white" />,
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20'
    },
    {
      id: "2",
      type: 'credential',
      title: 'New Credential Added',
      description: 'KYC completion credential uploaded successfully',
      timestamp: '15 minutes ago',
      status: 'success',
      icon: <Shield className="w-5 h-5 text-white" />,
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20'
    },
    {
      id: "3",
      type: 'connection',
      title: 'dApp Connection',
      description: 'Connected to NFT Marketplace application',
      timestamp: '1 hour ago',
      status: 'success',
      icon: <Globe className="w-5 h-5 text-white" />,
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20'
    },
    {
      id: "4",
      type: 'security',
      title: 'Security Update',
      description: 'Identity security settings updated',
      timestamp: '2 hours ago',
      status: 'success',
      icon: <Database className="w-5 h-5 text-white" />,
      gradient: 'from-indigo-500 to-purple-500',
      bgGradient: 'from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20'
    },
    {
      id: "5",
      type: 'verification',
      title: 'Country Check Pending',
      description: 'Country verification in progress for Lending Platform',
      timestamp: '3 hours ago',
      status: 'pending',
      icon: <Clock className="w-5 h-5 text-white" />,
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20'
    },
    {
      id: "6",
      type: 'credential',
      title: 'Credential Verification Failed',
      description: 'Document verification failed - please resubmit',
      timestamp: '5 hours ago',
      status: 'failed',
      icon: <XCircle className="w-5 h-5 text-white" />,
      gradient: 'from-red-500 to-rose-500',
      bgGradient: 'from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'text-green-600 dark:text-green-400';
      case 'pending':
        return 'text-orange-600 dark:text-orange-400';
      case 'failed':
        return 'text-red-600 dark:text-red-400';
      default:
        return 'text-gray-600 dark:text-gray-400';
    }
  };

  const getStatusIndicator = (status: string) => {
    switch (status) {
      case 'success':
        return 'bg-green-500';
      case 'pending':
        return 'bg-orange-500';
      case 'failed':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Recent Activity</h2>
          <p className="text-gray-800 dark:text-gray-200">Latest updates and notifications</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Activity className="w-4 h-4" />
          <span>{activities.length} Activities</span>
        </div>
      </div>

      {/* Activity Feed */}
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <Card
            key={activity.id}
            className={`group relative overflow-hidden bg-gradient-to-br ${activity.bgGradient} border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] cursor-pointer`}
            onMouseEnter={() => setHoveredItem(activity.id)}
            onMouseLeave={() => setHoveredItem(null)}
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${activity.gradient}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            
            <CardContent className="p-4 relative z-10">
              <div className="flex items-center space-x-4">
                {/* Icon */}
                <div className="relative">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${activity.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    {activity.icon}
                  </div>
                  <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full ${getStatusIndicator(activity.status)} animate-pulse`}></div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                      {activity.title}
                    </h3>
                    <span className={`text-sm font-medium ${getStatusColor(activity.status)}`}>
                      {activity.status.charAt(0).toUpperCase() + activity.status.slice(1)}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                    {activity.description}
                  </p>
                  
                  <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{activity.timestamp}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-3 h-3" />
                      <span>#{activity.id}</span>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-8 h-8 rounded-lg bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 dark:group-hover:bg-gray-800/30 transition-all duration-300 group-hover:scale-110">
                  <Eye className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-0 shadow-lg">
          <CardContent className="p-4 text-center">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-2">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
            <p className="text-sm text-gray-800 dark:text-gray-200">Successful</p>
            <p className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              {activities.filter(a => a.status === 'success').length}
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 border-0 shadow-lg">
          <CardContent className="p-4 text-center">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mx-auto mb-2">
              <Clock className="w-4 h-4 text-white" />
            </div>
            <p className="text-sm text-gray-800 dark:text-gray-200">Pending</p>
            <p className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              {activities.filter(a => a.status === 'pending').length}
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20 border-0 shadow-lg">
          <CardContent className="p-4 text-center">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center mx-auto mb-2">
              <XCircle className="w-4 h-4 text-white" />
            </div>
            <p className="text-sm text-gray-800 dark:text-gray-200">Failed</p>
            <p className="text-xl font-bold bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
              {activities.filter(a => a.status === 'failed').length}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
