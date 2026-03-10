
"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import GeoSubscriptionLeafletMap from "./as-components/dashboard/GeoSubscriptionLeafletMap";
import KPISummaryRow from "./as-components/dashboard/KPISummaryRow";
import ExpiryTable from "./as-components/dashboard/ExpiryTable";
import RenewedTable from "./as-components/dashboard/RenewedTable";
import TopRevenueTable from "./as-components/dashboard/TopRevenueTable";

// Dummy Data for map
import type { GeoSubscriptionDatum } from "./as-components/dashboard/GeoSubscriptionLeafletMap";
const geoData: GeoSubscriptionDatum[] = [
  { country: "United States", region: "North America", active: 120, inactive: 30, revenue: 12000, coordinates: [39, -98] },
  { country: "Germany", region: "Europe", active: 90, inactive: 20, revenue: 9000, coordinates: [51, 10] },
  { country: "India", region: "Asia", active: 150, inactive: 40, revenue: 15000, coordinates: [22, 78] },
  { country: "Brazil", region: "South America", active: 60, inactive: 15, revenue: 6000, coordinates: [-10, -51] },
  { country: "South Africa", region: "Africa", active: 40, inactive: 10, revenue: 4000, coordinates: [-29, 24] },
];

const aboutToExpire = [
  { name: "Acme Corp", plan: "Pro", expiry: "2026-03-10", days: 8, status: "active" },
  { name: "Beta LLC", plan: "Basic", expiry: "2026-03-05", days: 3, status: "inactive" },
  { name: "Gamma Inc", plan: "Enterprise", expiry: "2026-03-12", days: 10, status: "active" },
  { name: "Delta Ltd", plan: "Pro", expiry: "2026-03-07", days: 5, status: "inactive" },
];

const recentlyRenewed = [
  { name: "Acme Corp", plan: "Pro", date: "2026-02-28", amount: 1200 },
  { name: "Beta LLC", plan: "Basic", date: "2026-02-27", amount: 300 },
  { name: "Gamma Inc", plan: "Enterprise", date: "2026-02-25", amount: 5000 },
];

const topCustomers = [
  { name: "Gamma Inc", revenue: 25000, plan: "Enterprise", duration: "24 mo", agents: 50 },
  { name: "Acme Corp", revenue: 18000, plan: "Pro", duration: "18 mo", agents: 30 },
  { name: "Beta LLC", revenue: 9000, plan: "Basic", duration: "12 mo", agents: 10 },
];

const regions = ["All", "North America", "Europe", "Asia", "Africa", "South America"];
const statuses = ["All", "Active", "Inactive"];

export default function AdminDashboardPage() {
  const [dateRange, setDateRange] = useState({ from: "2026-02-01", to: "2026-03-01" });
  const [status, setStatus] = useState("All");
  const [region, setRegion] = useState("All");
  const [geoToggle, setGeoToggle] = useState<"active" | "inactive">("active");

  return (
    <div className="p-6 space-y-8">
      {/* KPI Summary Row */}
      <KPISummaryRow />

      {/* Global Filters Section */}
      <div className="w-full mb-4">
        <div
          className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between bg-card border border-border rounded-xl px-4 py-3"
        >
          {/* Left: Filters */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            {/* Date Range */}
            <div className="flex items-center gap-2">
              <span className="text-xs mt-5 text-muted-foreground">Date Range</span>
              <Input
                type="date"
                value={dateRange.from}
                onChange={(e) => setDateRange((d) => ({ ...d, from: e.target.value }))}
                className="w-32 mt-5"
              />
              <span className="mx-1 text-xs mt-5">to</span>
              <Input
                type="date"
                value={dateRange.to}
                onChange={(e) => setDateRange((d) => ({ ...d, to: e.target.value }))}
                className="w-32 mt-5"
              />
            </div>
            {/* Status */}
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground mb-1 sm:mb-0">Status</span>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  {statuses.map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {/* Region */}
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground mb-4 sm:mb-0">Region</span>
              <Select value={region} onValueChange={setRegion}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Region" />
                </SelectTrigger>
                <SelectContent>
                  {regions.map((r) => (
                    <SelectItem key={r} value={r}>{r}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          {/* Right: Toggle */}
          <div className="flex gap-2 items-center justify-end mt-2 sm:mt-0">
            <Button
              variant={geoToggle === "active" ? "primary" : "outline"}
              onClick={() => setGeoToggle("active")}
              size="sm"
            >
              Active
            </Button>
            <Button
              variant={geoToggle === "inactive" ? "primary" : "outline"}
              onClick={() => setGeoToggle("inactive")}
              size="sm"
            >
              Inactive
            </Button>
          </div>
        </div>
      </div>

      {/* Geographical Subscription Map */}
      <GeoSubscriptionLeafletMap region={region} toggle={geoToggle} data={geoData} />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Customers About to Expire */}
        <Card>
          <CardHeader>
            <CardTitle>Customers About to Expire</CardTitle>
          </CardHeader>
          <CardContent>
            <ExpiryTable data={aboutToExpire} />
          </CardContent>
        </Card>

        {/* Recently Renewed Customers */}
        <Card>
          <CardHeader>
            <CardTitle>Recently Renewed Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <RenewedTable data={recentlyRenewed} />
          </CardContent>
        </Card>

        {/* Top Customers by Revenue */}
        <Card>
          <CardHeader>
            <CardTitle>Top Customers by Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <TopRevenueTable data={topCustomers} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
