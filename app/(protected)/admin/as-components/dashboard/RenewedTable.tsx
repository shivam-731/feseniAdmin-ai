import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function RenewedTable({ data }: { data: any[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Customer Name</TableHead>
          <TableHead>Plan Name</TableHead>
          <TableHead>Renewal Date</TableHead>
          <TableHead>Renewal Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((c) => (
          <TableRow key={c.name + c.date}>
            <TableCell>{c.name}</TableCell>
            <TableCell>{c.plan}</TableCell>
            <TableCell>{c.date}</TableCell>
            <TableCell>${c.amount.toLocaleString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
