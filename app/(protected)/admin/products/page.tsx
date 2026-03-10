
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectContent, SelectItem } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { MoreVertical, Bot, Activity, BarChart, Timer } from 'lucide-react';

const stats = [
  { label: 'Total Agents', value: 12, icon: Bot },
  { label: 'Active Agents', value: 9, icon: Activity },
  { label: 'Total API Calls', value: '1,250,000', icon: BarChart },
  { label: 'Avg Response Time', value: '1.2s', icon: Timer },
];

type AgentStatus = 'Active' | 'Paused' | 'Beta' | 'Inactive';
type Agent = {
  avatar: string;
  name: string;
  description: string;
  status: AgentStatus;
  apiCalls: number;
  tokens: number;
  performance: number;
};

const agents: Agent[] = [
  {
    avatar: '/media/avatars/300-6.png',
    name: 'SupportBot',
    description: 'Handles customer queries and support tickets.',
    status: 'Active',
    apiCalls: 320000,
    tokens: 1200000,
    performance: 98,
  },
  {
    avatar: '/media/avatars/300-7.png',
    name: 'SalesAI',
    description: 'Automates sales outreach and lead qualification.',
    status: 'Beta',
    apiCalls: 150000,
    tokens: 500000,
    performance: 92,
  },
  {
    avatar: '/media/avatars/300-8.png',
    name: 'ContentGen',
    description: 'Generates blog posts and marketing content.',
    status: 'Active',
    apiCalls: 400000,
    tokens: 2000000,
    performance: 95,
  },
  {
    avatar: '/media/avatars/300-9.png',
    name: 'HRBot',
    description: 'Manages HR tasks and employee onboarding.',
    status: 'Paused',
    apiCalls: 80000,
    tokens: 300000,
    performance: 88,
  },
  {
    avatar: '/media/avatars/300-10.png',
    name: 'FinanceAI',
    description: 'Automates financial reporting and analysis.',
    status: 'Active',
    apiCalls: 30000,
    tokens: 100000,
    performance: 90,
  },
  {
    avatar: '/media/avatars/300-11.png',
    name: 'LegalBot',
    description: 'Drafts contracts and legal documents.',
    status: 'Inactive',
    apiCalls: 20000,
    tokens: 50000,
    performance: 85,
  },
];

const statusColors = {
  Active: 'bg-green-500 text-white',
  Paused: 'bg-yellow-500 text-white',
  Beta: 'bg-purple-500 text-white',
  Inactive: 'bg-gray-400 text-white',
};

function PerformanceIndicator({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-1 text-xs text-muted-foreground">
      <BarChart className="w-4 h-4 text-primary" />
      <span>{value}%</span>
    </div>
  );
}

export default function SaaSProductsPage() {
  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">AI Agents</h1>
          <p className="text-muted-foreground text-sm mt-1">Manage and monitor your deployed AI agents</p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <Input placeholder="Search agents..." className="w-48" />
          <Select>
            <SelectTrigger className="w-36">
              <span>All</span>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="beta">Beta</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-gradient-to-r from-[#8419D1] to-[#ED1ACA] text-white font-semibold shadow-md hover:scale-105 transition-transform duration-150">
            Create Agent
          </Button>
        </div>
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <Card key={stat.label} className="bg-muted/50 dark:bg-muted/80 border border-border rounded-xl shadow-sm hover:-translate-y-1 hover:shadow-lg transition-transform">
            <CardContent className="flex flex-col items-center py-4">
              <stat.icon className="w-6 h-6 mb-2 text-primary" />
              <span className="text-lg font-semibold text-foreground">{stat.value}</span>
              <span className="text-xs text-muted-foreground mt-1">{stat.label}</span>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Agents Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {agents.map((agent) => (
          <Card key={agent.name} className="rounded-xl border border-border bg-background shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform">
            <CardContent className="flex flex-col gap-3 p-5">
              <div className="flex items-center gap-3">
                <img src={agent.avatar} alt={agent.name} className="w-10 h-10 rounded-full border shadow-sm" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-semibold text-foreground">{agent.name}</span>
                    <Badge className={statusColors[agent.status] || 'bg-gray-400 text-white'}>{agent.status}</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{agent.description}</p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger className="p-2 rounded-full hover:bg-muted">
                    <MoreVertical className="w-5 h-5 text-muted-foreground" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>View Logs</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-500">Disable</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex flex-col text-xs text-muted-foreground">
                  <span>API Calls</span>
                  <span className="font-medium text-foreground">{agent.apiCalls.toLocaleString()}</span>
                </div>
                <div className="flex flex-col text-xs text-muted-foreground">
                  <span>Tokens Used</span>
                  <span className="font-medium text-foreground">{agent.tokens.toLocaleString()}</span>
                </div>
                <PerformanceIndicator value={agent.performance} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
