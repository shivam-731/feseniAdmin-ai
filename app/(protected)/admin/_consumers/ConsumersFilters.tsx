"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const geographies = [
  "All",
  "United States / North America",
  "Germany / Europe",
  "India / Asia",
  "Brazil / South America",
  "South Africa / Africa",
];

const statuses = ["All", "Active", "Inactive"];
const expiryStatuses = ["All", "Expiring Soon", "Expired", "Active"];
const promoChannels = ["All", "Email", "Webinar", "Referral", "Adwords", "Event"];
const durations = ["All", "6 mo", "12 mo", "18 mo", "24 mo"];

export function ConsumersFilters({
  filters,
  setFilters,
}: {
  filters: any;
  setFilters: (f: any) => void;
}) {
  return (
    <div className="flex flex-col gap-6 pb-20">
      {/* Search */}
      <div className="flex flex-col gap-2">
        <label className="text-sm text-muted-foreground">
          Search by Customer Name
        </label>
        <Input
          placeholder="Search by Customer Name"
          value={filters.search || ""}
          onChange={(e) =>
            setFilters((f: any) => ({
              ...f,
              search: e.target.value,
            }))
          }
          className="w-full"
        />
      </div>

      {/* Geography */}
      <div className="flex flex-col gap-2">
        <label className="text-sm text-muted-foreground">Geography</label>
        <Select
          value={filters.geography}
          onValueChange={(v) =>
            setFilters((f: any) => ({
              ...f,
              geography: v,
            }))
          }
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Geography" />
          </SelectTrigger>
          <SelectContent>
            <SelectContent className="max-h-72 overflow-y-auto">
              {geographies.map((g) => (
                <SelectItem key={g} value={g}>
                  {g}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectContent>
        </Select>
      </div>

      {/* Subscription Status */}
      <div className="flex flex-col gap-2">
        <label className="text-sm text-muted-foreground">
          Subscription Status
        </label>
        <Select
          value={filters.status}
          onValueChange={(v) =>
            setFilters((f: any) => ({
              ...f,
              status: v,
            }))
          }
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectContent className="max-h-72 overflow-y-auto">
              {statuses.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectContent>
        </Select>
      </div>

      {/* Number of Agents */}
      {/* <div className="flex flex-col gap-2">
        <label className="text-sm text-muted-foreground">
          Number of Agents
        </label>
        <div className="flex gap-2">
          <Input
            type="number"
            min={0}
            placeholder="Min"
            value={filters.agentsMin || ""}
            onChange={(e) =>
              setFilters((f: any) => ({
                ...f,
                agentsMin: e.target.value,
              }))
            }
            className="w-full"
          />

          <Input
            type="number"
            min={0}
            placeholder="Max"
            value={filters.agentsMax || ""}
            onChange={(e) =>
              setFilters((f: any) => ({
                ...f,
                agentsMax: e.target.value,
              }))
            }
            className="w-full"
          />
        </div>
      </div> */}

      {/* Subscription Duration */}
      {/* <div className="flex flex-col gap-2">
        <label className="text-sm text-muted-foreground">
          Subscription Duration
        </label>
        <Select
          value={filters.duration}
          onValueChange={(v) =>
            setFilters((f: any) => ({
              ...f,
              duration: v,
            }))
          }
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Duration" />
          </SelectTrigger>
          <SelectContent>
            {durations.map((d) => (
              <SelectItem key={d} value={d}>
                {d}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div> */}

      {/* Expiry Status */}
      <div className="flex flex-col gap-2">
        <label className="text-sm text-muted-foreground">Expiry Status</label>
        <Select
          value={filters.expiryStatus || "All"}
          onValueChange={(v) =>
            setFilters((f: any) => ({
              ...f,
              expiryStatus: v,
            }))
          }
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Expiry Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectContent className="max-h-72 overflow-y-auto">
              {expiryStatuses.map((e) => (
                <SelectItem key={e} value={e}>
                  {e}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectContent>
        </Select>
      </div>

      {/* Promotional Channel */}
      <div className="bg-white dark:bg-card border border-border rounded-xl shadow-sm p-4 flex flex-col gap-3">
        <label className="text-sm text-muted-foreground font-medium mb-1 pl-1">Promotional Channel</label>
        <Select
          value={filters.promoChannel || "All"}
          onValueChange={(v) =>
            setFilters((f: any) => ({
              ...f,
              promoChannel: v,
            }))
          }
        >
          <SelectTrigger className="w-full h-10 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-500 transition-all">
            <SelectValue placeholder="Promotional Channel" />
          </SelectTrigger>
          <SelectContent className="rounded-lg shadow-md">
            <SelectContent className="rounded-lg shadow-md max-h-72 overflow-y-auto">
              {promoChannels.map((p) => (
                <SelectItem key={p} value={p} className="px-3 py-2 text-base hover:bg-blue-50 cursor-pointer rounded">
                  {p}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectContent>
        </Select>
      </div>

      {/* Agent Filter */}
      <div className="flex flex-col gap-2">
        <label className="text-sm text-muted-foreground">
          Agent Filter
        </label>
        <Input
          placeholder="Agent Filter"
          value={filters.agentFilter || ""}
          onChange={(e) =>
            setFilters((f: any) => ({
              ...f,
              agentFilter: e.target.value,
            }))
          }
          className="w-full"
        />
      </div>
    </div>
  );
}