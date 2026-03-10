import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, XCircle } from "lucide-react";

export default function ExpiryTable({ data }: { data: any[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Customer Name</TableHead>
          <TableHead>Subscription Plan</TableHead>
          <TableHead>Expiry Date</TableHead>
          <TableHead>Remaining Days</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((c) => (
          <TableRow key={c.name}>
            <TableCell>{c.name}</TableCell>
            <TableCell>{c.plan}</TableCell>
            <TableCell>{c.expiry}</TableCell>
            <TableCell>{c.days}</TableCell>
            <TableCell>
              {c.status === "active" ? (
                <CheckCircle className="text-green-500 size-4" />
              ) : (
                <XCircle className="text-red-500 size-4" />
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
