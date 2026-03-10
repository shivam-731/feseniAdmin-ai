"use client";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ArrowUp, ArrowDown } from "lucide-react";
import { useState } from "react";

// Dummy data for agent overview
const agent = {
  id: "a1",
  name: "Agent Alpha",
  purchaseDate: "2023-02-10",
  status: "Active",
  version: "v2.3.1",
};

// Dummy data for usage analytics
const usageMetrics = {
  totalApiCalls: 12450,
  activeApiKeys: 3,
  avgDailyUsage: 42,
};

const heatmapData = [
  // Array of { date: 'YYYY-MM-DD', count: number }
  // For demo, fill with 30 days
  ...Array.from({ length: 30 }, (_, i) => {
    const date = new Date(2024, 1, i + 1);
    return {
      date: date.toISOString().slice(0, 10),
      count: Math.floor(Math.random() * 10),
    };
  }),
];

const apiKeys = [
  { name: "Key Alpha", daily: 12, total: 320, status: "Active" },
  { name: "Key Beta", daily: 8, total: 210, status: "Inactive" },
  { name: "Key Gamma", daily: 22, total: 540, status: "Active" },
];

const billing = [
  { date: "2024-02-10", invoice: "INV-1001", plan: "Pro", amount: 120, renewal: "New", status: "Paid" },
  { date: "2024-03-10", invoice: "INV-1002", plan: "Pro", amount: 120, renewal: "Renewal", status: "Paid" },
  { date: "2024-04-10", invoice: "INV-1003", plan: "Pro", amount: 120, renewal: "Renewal", status: "Pending" },
];

const revenue = {
  total: 360,
  monthly: 120,
  renewals: 2,
  avgPerCycle: 120,
};

export default function AgentDetailsPage() {
  const [sortKey, setSortKey] = useState("date");
  const [sortDir, setSortDir] = useState("desc");

  // Sort billing table
  const sortedBilling = [...billing].sort((a, b) => {
    if (sortKey === "date") {
      return sortDir === "asc"
        ? new Date(a.date).getTime() - new Date(b.date).getTime()
        : new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    if (sortKey === "amount") {
      return sortDir === "asc" ? a.amount - b.amount : b.amount - a.amount;
    }
    return 0;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      <button
        type="button"
        onClick={() => window.history.back()}
        className="inline-flex items-center gap-1 px-4 py-2 text-blue-600 bg-white border border-blue-600 rounded-lg hover:bg-blue-50 transition text-base font-semibold shadow-md mb-4"
      >
        <span className="mr-1">←</span> Back
      </button>
      {/* Agent Overview */}
      <Card className="p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-bold mb-4">Agent Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="text-sm text-muted-foreground">Agent Name</div>
            <div className="font-medium text-lg">{agent.name}</div>
          </div>
          <div className="space-y-2">
            <div className="text-sm text-muted-foreground">Agent ID</div>
            <div className="font-medium">{agent.id}</div>
          </div>
          <div className="space-y-2">
            <div className="text-sm text-muted-foreground">Purchase Date</div>
            <div className="font-medium">{agent.purchaseDate}</div>
          </div>
          <div className="space-y-2 flex items-center gap-2">
            <div className="text-sm text-muted-foreground">Current Status</div>
            <Badge className={agent.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}>{agent.status}</Badge>
          </div>
          <div className="space-y-2">
            <div className="text-sm text-muted-foreground">Version in Use</div>
            <div className="font-medium">{agent.version}</div>
          </div>
        </div>
      </Card>

      {/* Usage & Activity Tracking */}
      <Card className="p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-bold mb-4">Usage Analytics</h2>
        <div className="flex flex-col md:flex-row gap-8 mb-6">
          <div className="flex flex-col gap-2 min-w-[200px]">
            <div className="font-semibold text-lg">{usageMetrics.totalApiCalls.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground">Total API Calls</div>
            <div className="font-semibold text-lg">{usageMetrics.activeApiKeys}</div>
            <div className="text-xs text-muted-foreground">Active API Keys</div>
            <div className="font-semibold text-lg">{usageMetrics.avgDailyUsage}</div>
            <div className="text-xs text-muted-foreground">Avg Daily Usage</div>
          </div>
          {/* Heatmap */}
          <div className="flex-1">
            <div className="mb-2 text-sm font-medium text-muted-foreground">Monthly Usage Heatmap</div>
            <div className="grid grid-cols-7 gap-1">
              {heatmapData.map((block, i) => (
                <TooltipProvider key={block.date + i}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div
                        className={`w-6 h-6 rounded transition-all duration-200 cursor-pointer ${block.count === 0
                          ? "bg-gray-100"
                          : block.count < 4
                          ? "bg-blue-100"
                          : block.count < 7
                          ? "bg-blue-400"
                          : "bg-blue-700"}`}
                        title={block.date}
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <span className="text-xs">{block.date}: {block.count} uses</span>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </div>
        </div>
        {/* API Key Usage Table */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2">API Key Usage</h3>
          <Table className="rounded-xl overflow-hidden">
            <TableHeader>
              <TableRow>
                <TableHead>API Key Name</TableHead>
                <TableHead>Daily Usage</TableHead>
                <TableHead>Total Usage</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {apiKeys.map((key) => (
                <TableRow key={key.name}>
                  <TableCell>{key.name}</TableCell>
                  <TableCell>{key.daily}</TableCell>
                  <TableCell>{key.total}</TableCell>
                  <TableCell>
                    <Badge className={key.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}>{key.status}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>

      {/* Billing Information */}
      <Card className="p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-bold mb-4">Billing Information</h2>
        <Table className="rounded-xl overflow-hidden">
          <TableHeader>
            <TableRow>
              <TableHead className="cursor-pointer" onClick={() => setSortKey("date")}>Billing Date {sortKey === "date" && (sortDir === "asc" ? <ArrowUp className="inline w-3 h-3" /> : <ArrowDown className="inline w-3 h-3" />)}</TableHead>
              <TableHead>Invoice ID</TableHead>
              <TableHead>Plan Type</TableHead>
              <TableHead className="cursor-pointer" onClick={() => setSortKey("amount")}>Amount {sortKey === "amount" && (sortDir === "asc" ? <ArrowUp className="inline w-3 h-3" /> : <ArrowDown className="inline w-3 h-3" />)}</TableHead>
              <TableHead>Renewal Type</TableHead>
              <TableHead>Payment Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedBilling.map((row) => (
              <TableRow key={row.invoice}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.invoice}</TableCell>
                <TableCell>{row.plan}</TableCell>
                <TableCell>${row.amount}</TableCell>
                <TableCell>{row.renewal}</TableCell>
                <TableCell>
                  <Badge className={row.status === "Paid" ? "bg-blue-100 text-blue-700" : "bg-orange-100 text-orange-700"}>{row.status}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* Revenue Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center">
          <div className="text-xs text-muted-foreground mb-1">Total Revenue</div>
          <div className="text-2xl font-bold text-blue-700">${revenue.total.toLocaleString()}</div>
        </Card>
        <Card className="p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center">
          <div className="text-xs text-muted-foreground mb-1">Monthly Revenue</div>
          <div className="text-2xl font-bold text-green-700">${revenue.monthly.toLocaleString()}</div>
        </Card>
        <Card className="p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center">
          <div className="text-xs text-muted-foreground mb-1">Number of Renewals</div>
          <div className="text-2xl font-bold text-orange-700">{revenue.renewals}</div>
        </Card>
        <Card className="p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center">
          <div className="text-xs text-muted-foreground mb-1">Avg Revenue/Cycle</div>
          <div className="text-2xl font-bold text-gray-700">${revenue.avgPerCycle.toLocaleString()}</div>
        </Card>
      </div>
    </div>
  );
}
