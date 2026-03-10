"use client";
import { useState, useMemo } from "react";
import { agentUsageData, geographies } from "./analytics-data";
import { Table, TableHeader, TableHead, TableRow, TableCell, TableBody } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const statusOptions = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
];

type Props = {
  filterStatus: string;
};

export function AgentUsageTable({ filterStatus }: Props) {
  const [sortKey, setSortKey] = useState<"purchaseDate" | "revenue" | "amountSpent">("purchaseDate");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
  const [status, setStatus] = useState("all");
  const [geo, setGeo] = useState("All");

  const filtered = useMemo(() => {
    return agentUsageData
      .filter((row) => {
        if (filterStatus && filterStatus !== "total") {
          if (filterStatus === "active" && row.status !== "active") return false;
          if (filterStatus === "inactive" && row.status !== "inactive") return false;
        }
        if (status !== "all" && row.status !== status) return false;
        if (geo !== "All" && row.geography !== geo) return false;
        return true;
      })
      .sort((a, b) => {
        let vA, vB;
        if (sortKey === "purchaseDate") {
          vA = new Date(a.purchaseDate).getTime();
          vB = new Date(b.purchaseDate).getTime();
        } else {
          vA = a[sortKey];
          vB = b[sortKey];
        }
        return sortDir === "asc" ? vA - vB : vB - vA;
      });
  }, [filterStatus, status, geo, sortKey, sortDir]);

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            {statusOptions.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={geo} onValueChange={setGeo}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Geography" />
          </SelectTrigger>
          <SelectContent>
            {geographies.map((g) => (
              <SelectItem key={g} value={g}>
                {g}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {/* Table */}
      <div className="rounded-xl border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Consumer Name</TableHead>
              <TableHead>Agent Name</TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => {
                  setSortKey("purchaseDate");
                  setSortDir(sortKey === "purchaseDate" && sortDir === "desc" ? "asc" : "desc");
                }}
              >
                Purchase Date {sortKey === "purchaseDate" ? (sortDir === "desc" ? "↓" : "↑") : ""}
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => {
                  setSortKey("revenue");
                  setSortDir(sortKey === "revenue" && sortDir === "desc" ? "asc" : "desc");
                }}
              >
                Revenue {sortKey === "revenue" ? (sortDir === "desc" ? "↓" : "↑") : ""}
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => {
                  setSortKey("amountSpent");
                  setSortDir(sortKey === "amountSpent" && sortDir === "desc" ? "asc" : "desc");
                }}
              >
                Amount Spent {sortKey === "amountSpent" ? (sortDir === "desc" ? "↓" : "↑") : ""}
              </TableHead>
              <TableHead>Last Interaction Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((row, i) => (
              <TableRow key={i}>
                <TableCell>{row.consumerName}</TableCell>
                <TableCell>{row.agentName}</TableCell>
                <TableCell>{row.purchaseDate}</TableCell>
                <TableCell>${row.revenue.toLocaleString()}</TableCell>
                <TableCell>${row.amountSpent.toLocaleString()}</TableCell>
                <TableCell>{row.lastInteraction}</TableCell>
              </TableRow>
            ))}
            {filtered.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} className="text-center text-muted-foreground">
                  No data found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
