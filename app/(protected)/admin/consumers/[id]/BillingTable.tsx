"use client";
import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function BillingTable({ bills }: { bills: any[] }) {
  const [sortKey, setSortKey] = useState<string>("date");
  const [asc, setAsc] = useState(true);

  const handleSort = (key: string) => {
    if (sortKey === key) setAsc(!asc);
    else {
      setSortKey(key);
      setAsc(true);
    }
  };

  const sorted = [...(bills || [])].sort((a: any, b: any) => {
    const aVal = a[sortKey] ?? "";
    const bVal = b[sortKey] ?? "";
    if (sortKey === "amount") return asc ? a.amount - b.amount : b.amount - a.amount;
    return asc ? String(aVal).localeCompare(String(bVal)) : String(bVal).localeCompare(String(aVal));
  });

  return (
    <div className="bg-card border border-border rounded-xl p-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead onClick={() => handleSort("id")} className="cursor-pointer">Invoice ID</TableHead>
            <TableHead onClick={() => handleSort("date")} className="cursor-pointer">Billing Date</TableHead>
            <TableHead onClick={() => handleSort("amount")} className="cursor-pointer">Amount Paid</TableHead>
            <TableHead onClick={() => handleSort("status")} className="cursor-pointer">Payment Status</TableHead>
            <TableHead onClick={() => handleSort("method")} className="cursor-pointer">Payment Method</TableHead>
            <TableHead onClick={() => handleSort("renewalType")} className="cursor-pointer">Renewal Type</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sorted.map((b) => (
            <TableRow key={b.id} className="hover:bg-muted transition">
              <TableCell>{b.id}</TableCell>
              <TableCell>{b.date}</TableCell>
              <TableCell>${(b.amount || 0).toLocaleString()}</TableCell>
              <TableCell>{b.status}</TableCell>
              <TableCell>{b.method}</TableCell>
              <TableCell>{b.renewalType}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
