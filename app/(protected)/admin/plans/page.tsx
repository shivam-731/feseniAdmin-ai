"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Check, Edit, Copy, X, Users, DollarSign, Star, Calendar, Shield, BarChart } from 'lucide-react';

const plansData = [
  {
    name: 'Basic',
    description: 'For individuals getting started with AI agents.',
    monthly: 19,
    yearly: 190,
    features: ['1 AI Agent', '5,000 Tokens/mo', '10,000 API Calls/mo', 'Standard Support'],
    tokenLimit: 5000,
    apiLimit: 10000,
    prioritySupport: false,
    status: 'Active',
    subscribers: 120,
    revenue: 2280,
  },
  {
    name: 'Pro',
    description: 'For growing teams and businesses.',
    monthly: 49,
    yearly: 490,
    features: ['5 AI Agents', '50,000 Tokens/mo', '100,000 API Calls/mo', 'Priority Support'],
    tokenLimit: 50000,
    apiLimit: 100000,
    prioritySupport: true,
    status: 'Active',
    subscribers: 340,
    revenue: 16660,
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with custom needs.',
    monthly: 129,
    yearly: 1290,
    features: ['Unlimited AI Agents', '500,000 Tokens/mo', '1,000,000 API Calls/mo', 'Priority Support'],
    tokenLimit: 500000,
    apiLimit: 1000000,
    prioritySupport: true,
    status: 'Active',
    subscribers: 45,
    revenue: 5805,
  },
  {
    name: 'Custom',
    description: 'Tailored solutions for your business.',
    monthly: 0,
    yearly: 0,
    features: ['Custom AI Agents', 'Custom Tokens', 'Custom API Calls', 'Dedicated Support'],
    tokenLimit: null,
    apiLimit: null,
    prioritySupport: true,
    status: 'Draft',
    subscribers: 5,
    revenue: 0,
  },
];

const stats = [
  { label: 'Total Plans', value: plansData.length, icon: Calendar },
  { label: 'Active Plans', value: plansData.filter(p => p.status === 'Active').length, icon: Shield },
  { label: 'Most Popular Plan', value: 'Pro', icon: Star },
  { label: 'Total Subscribers', value: plansData.reduce((acc, p) => acc + p.subscribers, 0), icon: Users },
];

const tableData = plansData.map(plan => ({
  name: plan.name,
  price: `$${plan.monthly}/mo`,
  billing: 'Monthly',
  subscribers: plan.subscribers,
  revenue: `$${plan.revenue}`,
  status: plan.status,
}));

const statusColors = {
  Active: 'bg-green-500 text-white',
  Draft: 'bg-gray-400 text-white',
  Paused: 'bg-yellow-500 text-white',
  Beta: 'bg-blue-500 text-white',
  Inactive: 'bg-red-500 text-white',
};

export default function SaaSPlansPage() {
  const [cycle, setCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Subscription Plans</h1>
          <p className="text-muted-foreground text-sm mt-1">Manage pricing tiers and feature limits</p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="flex items-center gap-2">
            <Button
              variant={cycle === 'monthly' ? 'primary' : 'outline'}
              className={cycle === 'monthly' ? 'bg-primary text-white' : ''}
              onClick={() => setCycle('monthly')}
            >
              Monthly
            </Button>
            <Button
              variant={cycle === 'yearly' ? 'primary' : 'outline'}
              className={cycle === 'yearly' ? 'bg-primary text-white' : ''}
              onClick={() => setCycle('yearly')}
            >
              Yearly
            </Button>
          </div>
          <Button className="bg-gradient-to-r from-[#8419D1] to-[#ED1ACA] text-white font-semibold shadow-md hover:scale-105 transition-transform duration-150">
            Create Plan
          </Button>
        </div>
      </div>

      {/* Stats Row */}
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

      {/* Plans Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {plansData.map((plan) => (
          <Card key={plan.name} className="rounded-xl border border-border bg-background shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform">
            <CardContent className="flex flex-col gap-3 p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl font-semibold text-foreground">{plan.name}</span>
                {plan.mostPopular && (
                  <Badge className="bg-gradient-to-r from-[#8419D1] to-[#ED1ACA] text-white">Most Popular</Badge>
                )}
                <Badge className={statusColors[plan.status as keyof typeof statusColors] || 'bg-gray-400 text-white'}>{plan.status}</Badge>
                <DropdownMenu>
                  <DropdownMenuTrigger className="p-2 rounded-full hover:bg-muted">
                    <Edit className="w-5 h-5 text-muted-foreground" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Disable</DropdownMenuItem>
                    <DropdownMenuItem>Duplicate</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{plan.description}</p>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl font-bold text-primary">{plan.monthly === 0 && plan.yearly === 0 ? 'Custom' : `$${cycle === 'monthly' ? plan.monthly : plan.yearly}`}</span>
                <span className="text-xs text-muted-foreground">{cycle === 'monthly' ? '/mo' : '/yr'}</span>
              </div>
              <ul className="mb-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-foreground mb-1">
                    <Check className="w-4 h-4 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <BarChart className="w-4 h-4 text-primary" />
                  <span>Tokens: {plan.tokenLimit !== null ? plan.tokenLimit.toLocaleString() : 'Custom'}</span>
                </div>
                <div className="flex items-center gap-1">
                  <BarChart className="w-4 h-4 text-primary" />
                  <span>API Calls: {plan.apiLimit !== null ? plan.apiLimit.toLocaleString() : 'Custom'}</span>
                </div>
                {plan.prioritySupport && (
                  <Shield className="w-4 h-4 text-primary" />
                  )}
                <span>{plan.prioritySupport ? 'Priority Support' : 'Standard Support'}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Table Section */}
      <div className="bg-background rounded-xl shadow-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-border">
          <thead className="bg-muted/60">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Plan Name</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Price</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Billing Cycle</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Subscribers</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Revenue</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Status</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Action</th>
            </tr>
          </thead>
          <tbody className="bg-background">
            {tableData.map((row, idx) => (
              <tr key={row.name} className="hover:bg-muted/40 transition-colors">
                <td className="px-4 py-3 font-medium text-foreground">{row.name}</td>
                <td className="px-4 py-3 text-primary">{row.price}</td>
                <td className="px-4 py-3 text-muted-foreground">{row.billing}</td>
                <td className="px-4 py-3 text-center text-foreground">{row.subscribers}</td>
                <td className="px-4 py-3 text-primary">{row.revenue}</td>
                <td className="px-4 py-3">
                   <Badge className={statusColors[row.status as keyof typeof statusColors] || 'bg-gray-400 text-white'}>{row.status}</Badge>
                </td>
                <td className="px-4 py-3">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="p-2 rounded-full hover:bg-muted">
                      <Edit className="w-5 h-5 text-muted-foreground" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-500">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
