
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectContent, SelectItem } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { MoreVertical } from 'lucide-react';
const users = [
  {
    avatar: '/media/avatars/300-1.png',
    name: 'Ava Smith',
    email: 'ava.smith@ai-platform.com',
    plan: 'Pro',
    status: 'Active',
    tokenUsage: 12000,
    joined: '2025-12-01',
  },
  {
    avatar: '/media/avatars/300-2.png',
    name: 'John Doe',
    email: 'john.doe@ai-platform.com',
    plan: 'Trial',
    status: 'Trial',
    tokenUsage: 3000,
    joined: '2026-01-15',
  },
  {
    avatar: '/media/avatars/300-3.png',
    name: 'Sara Lee',
    email: 'sara.lee@ai-platform.com',
    plan: 'Enterprise',
    status: 'Active',
    tokenUsage: 50000,
    joined: '2025-10-20',
  },
  {
    avatar: '/media/avatars/300-4.png',
    name: 'Mike Brown',
    email: 'mike.brown@ai-platform.com',
    plan: 'Pro',
    status: 'Cancelled',
    tokenUsage: 8000,
    joined: '2025-08-05',
  },
  {
    avatar: '/media/avatars/300-5.png',
    name: 'Emily Clark',
    email: 'emily.clark@ai-platform.com',
    plan: 'Trial',
    status: 'Trial',
    tokenUsage: 1500,
    joined: '2026-02-01',
  },
];

const stats = [
  { label: 'Total Users', value: 5 },
  { label: 'Active Users', value: 2 },
  { label: 'Trial Users', value: 2 },
  { label: 'Churned Users', value: 1 },
];

function UsersPageContent() {
  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        <h1 className="text-3xl font-bold text-foreground">Users</h1>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <Input placeholder="Search users..." className="w-48" />
          <Select>
            <SelectTrigger className="w-36">
              <span>All</span>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="trial">Trial</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-gradient-to-r from-[#8419D1] to-[#ED1ACA] text-white font-semibold shadow-md hover:scale-105 transition-transform duration-150">
            Add User
          </Button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <Card key={stat.label} className="bg-muted/50 dark:bg-muted/80 border-none shadow-sm">
            <CardContent className="flex flex-col items-center py-4">
              <span className="text-lg font-semibold text-foreground">{stat.value}</span>
              <span className="text-xs text-muted-foreground mt-1">{stat.label}</span>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Table */}
      <div className="bg-background rounded-xl shadow-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-border">
          <thead className="bg-muted/60">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Avatar</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Name</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Email</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Plan</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Status</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Token Usage</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Joined</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Action</th>
            </tr>
          </thead>
          <tbody className="bg-background">
            {users.map((user, idx) => (
              <tr key={user.email} className="hover:bg-muted/40 transition-colors">
                <td className="px-4 py-3">
                  <img src={user.avatar} alt={user.name} className="w-9 h-9 rounded-full border shadow-sm" />
                </td>
                <td className="px-4 py-3 font-medium text-foreground">{user.name}</td>
                <td className="px-4 py-3 text-muted-foreground">{user.email}</td>
                <td className="px-4 py-3">
                  <Badge className="bg-gradient-to-r from-[#8419D1] to-[#ED1ACA] text-white font-medium">{user.plan}</Badge>
                </td>
                <td className="px-4 py-3">
                  <Badge className={
                    user.status === 'Active'
                      ? 'bg-green-500 text-white'
                      : user.status === 'Trial'
                      ? 'bg-yellow-500 text-white'
                      : 'bg-red-500 text-white'
                  }>
                    {user.status}
                  </Badge>
                </td>
                <td className="px-4 py-3 text-center text-foreground">{user.tokenUsage.toLocaleString()}</td>
                <td className="px-4 py-3 text-muted-foreground">{user.joined}</td>
                <td className="px-4 py-3">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="p-2 rounded-full hover:bg-muted">
                      <MoreVertical className="w-5 h-5 text-muted-foreground" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Suspend</DropdownMenuItem>
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

export default function UsersPage() {
  return <UsersPageContent />;
}
