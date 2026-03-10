import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function TopRevenueTable({ data }: { data: any[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Customer Name</TableHead>
          <TableHead>Total Revenue</TableHead>
          <TableHead>Active Plan</TableHead>
          <TableHead>Subscription Duration</TableHead>
          <TableHead>Agents Purchased</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((c) => (
          <TableRow key={c.name}>
            <TableCell>{c.name}</TableCell>
            <TableCell>${c.revenue.toLocaleString()}</TableCell>
            <TableCell>{c.plan}</TableCell>
            <TableCell>{c.duration}</TableCell>
            <TableCell>{c.agents}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
