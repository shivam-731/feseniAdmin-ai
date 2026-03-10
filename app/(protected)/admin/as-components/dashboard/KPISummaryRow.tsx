"use client";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Users,
  UserX,
  DollarSign,
  TrendingUp,
  ArrowDownLeft,
  ArrowUpRight,
  BarChart3,
  UserCheck,
  Activity,
  Zap,
} from "lucide-react";

// Dummy KPI data
const kpis = [
  {
    label: "Active Subscriptions",
    value: 1420,
    icon: Users,
    trend: "+5%",
    trendType: "up",
    color: "text-green-500",
  },
  {
    label: "Inactive Subscriptions",
    value: 210,
    icon: UserX,
    trend: "-2%",
    trendType: "down",
    color: "text-red-500",
  },
  {
    label: "MRR",
    value: "$18,200",
    icon: DollarSign,
    trend: "+3.2%",
    trendType: "up",
    color: "text-blue-500",
  },
  {
    label: "Revenue Growth",
    value: "8.4%",
    icon: TrendingUp,
    trend: "+1.1%",
    trendType: "up",
    color: "text-emerald-500",
  },
  {
    label: "Churn Rate",
    value: "1.9%",
    icon: ArrowDownLeft,
    trend: "-0.3%",
    trendType: "down",
    color: "text-orange-500",
  },
  {
    label: "Agents Sold",
    value: 320,
    icon: UserCheck,
    trend: "+12",
    trendType: "up",
    color: "text-purple-500",
  },
];

export default function KPISummaryRow() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-6">
      {kpis.map((kpi) => (
        <Card
          key={kpi.label}
          className={cn(
            "flex flex-col items-center justify-center h-32 bg-card border border-border transition-shadow hover:shadow-lg hover:-translate-y-0.5",
            "rounded-xl cursor-pointer"
          )}
        >
          <CardContent className="flex flex-col items-center justify-center w-full h-full p-4">
            <div className={cn("mb-2", kpi.color)}>
              <kpi.icon className="w-6 h-6" />
            </div>
            <div className="text-2xl font-bold mb-1 text-foreground">{kpi.value}</div>
            <div className="text-xs text-muted-foreground mb-1">{kpi.label}</div>
            {kpi.trend && (
              <div
                className={cn(
                  "text-xs flex items-center gap-1",
                  kpi.trendType === "up" ? "text-green-500" : "text-red-500"
                )}
              >
                {kpi.trendType === "up" ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownLeft className="w-3 h-3" />}
                {kpi.trend}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
