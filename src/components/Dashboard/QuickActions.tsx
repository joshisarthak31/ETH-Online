"use client";

import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Plus, 
  Download, 
  Upload, 
  Settings, 
  RefreshCw, 
  Eye, 
  Lock,
  Zap,
  Star,
  Globe,
  Database
} from "lucide-react";
import { useState } from "react";

interface QuickAction {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  bgGradient: string;
  action: () => void;
}

export function QuickActions() {
  const [hoveredAction, setHoveredAction] = useState<string | null>(null);

  const actions: QuickAction[] = [
    {
      id: "verify-identity",
      title: "Verify Identity",
      description: "Complete KYC verification",
      icon: <Shield className="w-6 h-6 text-white" />,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20",
      action: () => console.log("Verify Identity clicked")
    },
    {
      id: "add-credential",
      title: "Add Credential",
      description: "Upload new credential",
      icon: <Plus className="w-6 h-6 text-white" />,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20",
      action: () => console.log("Add Credential clicked")
    },
    {
      id: "export-data",
      title: "Export Data",
      description: "Download your data",
      icon: <Download className="w-6 h-6 text-white" />,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20",
      action: () => console.log("Export Data clicked")
    },
    {
      id: "import-data",
      title: "Import Data",
      description: "Upload existing data",
      icon: <Upload className="w-6 h-6 text-white" />,
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20",
      action: () => console.log("Import Data clicked")
    },
    {
      id: "refresh-status",
      title: "Refresh Status",
      description: "Update verification status",
      icon: <RefreshCw className="w-6 h-6 text-white" />,
      gradient: "from-teal-500 to-green-500",
      bgGradient: "from-teal-50 to-green-50 dark:from-teal-950/20 dark:to-green-950/20",
      action: () => console.log("Refresh Status clicked")
    },
    {
      id: "view-proofs",
      title: "View Proofs",
      description: "Check zero-knowledge proofs",
      icon: <Eye className="w-6 h-6 text-white" />,
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20",
      action: () => console.log("View Proofs clicked")
    },
    {
      id: "security-settings",
      title: "Security Settings",
      description: "Manage security options",
      icon: <Lock className="w-6 h-6 text-white" />,
      gradient: "from-rose-500 to-pink-500",
      bgGradient: "from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20",
      action: () => console.log("Security Settings clicked")
    },
    {
      id: "connect-dapp",
      title: "Connect dApp",
      description: "Link to new application",
      icon: <Globe className="w-6 h-6 text-white" />,
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20",
      action: () => console.log("Connect dApp clicked")
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Quick Actions</h2>
          <p className="text-gray-800 dark:text-gray-200">Common tasks and shortcuts</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Zap className="w-4 h-4" />
          <span>{actions.length} Actions Available</span>
        </div>
      </div>

      {/* Actions Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {actions.map((action, index) => (
          <Card
            key={action.id}
            className={`group relative overflow-hidden bg-gradient-to-br ${action.bgGradient} border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer`}
            onMouseEnter={() => setHoveredAction(action.id)}
            onMouseLeave={() => setHoveredAction(null)}
            onClick={action.action}
            style={{
              animationDelay: `${index * 50}ms`,
            }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${action.gradient}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            
            <CardContent className="p-6 relative z-10">
              <div className="text-center space-y-4">
                {/* Icon */}
                <div className="flex justify-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${action.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    {action.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-sm text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                    {action.description}
                  </p>
                </div>

                {/* Action Indicator */}
                <div className="flex justify-center">
                  <div className="w-8 h-8 rounded-lg bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 dark:group-hover:bg-gray-800/30 transition-all duration-300 group-hover:scale-110">
                    <Zap className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Info */}
      <Card className="bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-950/20 dark:to-slate-950/20 border-0 shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Pro Tips</h3>
                <p className="text-sm text-gray-800 dark:text-gray-200">Use these shortcuts to manage your identity efficiently</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500 dark:text-gray-500">Last updated: 2 minutes ago</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
