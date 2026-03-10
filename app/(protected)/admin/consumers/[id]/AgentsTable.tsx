"use client";
import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function AgentsTable({ agents }: { agents: any[] }) {
  const [sortKey, setSortKey] = useState<string>("name");
  const [asc, setAsc] = useState(true);

  const handleSort = (key: string) => {
    if (sortKey === key) setAsc(!asc);
    else {
      setSortKey(key);
      setAsc(true);
    }
  };

  const sorted = [...(agents || [])].sort((a: any, b: any) => {
    const aVal = a[sortKey] ?? "";
    const bVal = b[sortKey] ?? "";
    if (typeof aVal === "number") return asc ? aVal - bVal : bVal - aVal;
    return asc ? String(aVal).localeCompare(String(bVal)) : String(bVal).localeCompare(String(aVal));
  });

  return (
    <div className="bg-card border border-border rounded-xl p-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead onClick={() => handleSort("name")} className="cursor-pointer">Agent Name</TableHead>
            <TableHead onClick={() => handleSort("purchaseDate")} className="cursor-pointer">Purchase Date</TableHead>
            <TableHead onClick={() => handleSort("amount")} className="cursor-pointer">Amount Paid</TableHead>
            <TableHead onClick={() => handleSort("status")} className="cursor-pointer">Current Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sorted.map((a) => (
              <TableRow
                key={a.id}
                className="cursor-pointer hover:bg-blue-50 transition"
                onClick={() => window.location.href = `/admin/agents/${a.id}`}
              >
                <TableCell className="font-medium text-blue-700 underline">{a.name}</TableCell>
                <TableCell>{a.purchaseDate}</TableCell>
                <TableCell>${(a.amount || 0).toLocaleString()}</TableCell>
                <TableCell>{a.status}</TableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
