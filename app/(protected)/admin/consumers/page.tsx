"use client";
import { useState, useEffect } from "react";
import ConsumersTable from "../_consumers/ConsumersTable";
import FiltersSheet from "../_consumers/FiltersSheet";
import { consumers as localConsumers } from "../_consumers/consumers-data";

export default function ConsumersPage() {
  const [filters, setFilters] = useState({
    search: "",
    geography: "All",
    status: "All",
    agentsMax: "",
    duration: "All",
    expiryStatus: "All",
    promoChannel: "All",
    agentFilter: "",
  });
  const [data, setData] = useState(localConsumers); // Default to local data
  const [loading, setLoading] = useState(false);

  function buildQueryParams(filters: any) {
    const params = new URLSearchParams();
    if (filters.search) params.append("search", filters.search);
    if (filters.geography && filters.geography !== "All") params.append("geography", filters.geography);
    if (filters.status && filters.status !== "All") params.append("status", filters.status);
    if (filters.agentsMax) params.append("agentsMax", filters.agentsMax);
    if (filters.duration && filters.duration !== "All") params.append("duration", filters.duration);
    return params.toString();
  }

  useEffect(() => {
    setLoading(true);
    const params = buildQueryParams(filters);
    fetch(`/api/consumers?${params}`)
      .then(res => res.ok ? res.json() : Promise.reject())
      .then(json => setData(json))
      .catch(() => {
        // Fallback: filter localConsumers client-side
        let filtered = localConsumers.filter((c) => {
          if (filters.search && !c.name.toLowerCase().includes(filters.search.toLowerCase())) return false;
          if (filters.geography && filters.geography !== "All" && c.geography !== filters.geography) return false;
          if (filters.status && filters.status !== "All" && c.status !== filters.status) return false;
          if (filters.agentsMax && c.agents > parseInt(filters.agentsMax)) return false;
          if (filters.duration && filters.duration !== "All" && c.duration !== filters.duration) return false;
          if (filters.expiryStatus && filters.expiryStatus !== "All") {
            if (filters.expiryStatus === "Expiring Soon") {
              // Example: Expiring soon = expiryDate within next 30 days
              const now = new Date();
              const expiry = new Date(c.expiryDate);
              const diff = (expiry.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);
              if (diff > 30 || diff < 0) return false;
            } else if (filters.expiryStatus === "Expired") {
              if (new Date(c.expiryDate) > new Date()) return false;
            } else if (filters.expiryStatus === "Active") {
              if (c.status !== "Active") return false;
            }
          }
          if (filters.promoChannel && filters.promoChannel !== "All" && c.promoChannel !== filters.promoChannel) return false;
          if (filters.agentFilter && !c.name.toLowerCase().includes(filters.agentFilter.toLowerCase())) return false;
          return true;
        });
        setData(filtered);
      })
      .finally(() => setLoading(false));
  }, [filters]);

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-xl font-semibold">Consumers</h1>
          <p className="text-sm text-muted-foreground">Manage customers and subscriptions</p>
        </div>
        <div>
          <FiltersSheet filters={filters} setFilters={setFilters} />
        </div>
      </div>

      {loading ? (
        <div className="text-center py-8">Loading...</div>
      ) : (
        <ConsumersTable data={data} />
      )}
    </div>
  );
}
// Consumers Page for Admin Panel
// Route: /admin/consumers
// Modular, scalable, clean SaaS design
