
// import { Card } from "@/components/ui/card";
// import { Table, TableHeader, TableRow, TableCell, TableBody } from "@/components/ui/table";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { ArrowUpDown } from "lucide-react";
// import { paymentStatusColors } from "./billing-data";

// export function BillingTable({ data, sort, onSort, onRowClick }) {
//   const columns = [
//     { key: "invoiceId", label: "Invoice ID" },
//     { key: "consumerName", label: "Consumer Name", sortable: true },
//     { key: "agentName", label: "Agent Name", sortable: true },
//     { key: "billingDate", label: "Billing Date", sortable: true },
//     { key: "amount", label: "Amount", sortable: true },
//     { key: "paymentStatus", label: "Payment Status" },
//     { key: "paymentMethod", label: "Payment Method" },
//     { key: "renewalType", label: "Renewal Type" },
//   ];

//   return (
//     <Card className="p-0">
//       <div className="overflow-x-auto">
//         <Table className="min-w-[900px]">
//           <TableHeader>
//             <TableRow>
//               {columns.map((col) => (
//                 <TableCell key={col.key} className="font-semibold">
//                   <div className="flex items-center gap-1">
//                     {col.label}
//                     {col.sortable && (
//                       <Button
//                         variant="ghost"
//                         size="icon"
//                         onClick={() =>
//                           onSort(
//                             col.key
//                           )
//                         }
//                       >
//                         <ArrowUpDown className="w-4 h-4" />
//                       </Button>
//                     )}
//                   </div>
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {data.map((item) => (
//               <TableRow
//                 key={item.invoiceId}
//                 className="cursor-pointer hover:bg-muted/40"
//                 onClick={() => onRowClick(item.invoiceId)}
//               >
//                 <TableCell>{item.invoiceId}</TableCell>
//                 <TableCell>{item.consumerName}</TableCell>
//                 <TableCell>{item.agentName}</TableCell>
//                 <TableCell>{item.billingDate}</TableCell>
//                 <TableCell>${item.amount.toFixed(2)}</TableCell>
//                 <TableCell>
//                   <Badge
//                     variant={
//                       (paymentStatusColors[item.paymentStatus as keyof typeof paymentStatusColors] ?? "secondary") as
//                         "success" | "warning" | "destructive" | "primary" | "secondary" | "outline" | "info" | undefined
//                     }
//                   >
//                     {item.paymentStatus}
//                   </Badge>
//                 </TableCell>
//                 <TableCell>{item.paymentMethod}</TableCell>
//                 <TableCell>{item.renewalType}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>
//     </Card>
//   );
// }
import { Card } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableCell, TableBody } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpDown } from "lucide-react"
import { paymentStatusColors } from "./billing-data"
import type { SortKey } from "./page";

type BillingRow = {
  invoiceId: string
  consumerName: string
  agentName: string
  billingDate: string
  amount: number
  paymentStatus: string
  paymentMethod: string
  renewalType: string
}

type BillingTableProps = {
  data: BillingRow[]
  sort: { key: string; direction: "asc" | "desc" }
  onSort: (key: SortKey) => void
  onRowClick: (id: string) => void
}

export function BillingTable({
  data,
  sort,
  onSort,
  onRowClick,
}: BillingTableProps) {

  const columns = [
    { key: "invoiceId", label: "Invoice ID" },
    { key: "consumerName", label: "Consumer Name", sortable: true },
    { key: "agentName", label: "Agent Name", sortable: true },
    { key: "billingDate", label: "Billing Date", sortable: true },
    { key: "amount", label: "Amount", sortable: true },
    { key: "paymentStatus", label: "Payment Status" },
    { key: "paymentMethod", label: "Payment Method" },
    { key: "renewalType", label: "Renewal Type" },
  ]

  return (
    <Card className="p-0">
      <div className="overflow-x-auto">
        <Table className="min-w-[900px]">

          <TableHeader>
            <TableRow>
              {columns.map((col) => (
                <TableCell key={col.key} className="font-semibold">

                  <div className="flex items-center gap-1">
                    {col.label}

                    {col.sortable && (
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onSort(col.key as SortKey)}
                      >
                        <ArrowUpDown className="w-4 h-4" />
                      </Button>
                    )}

                  </div>

                </TableCell>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {data.map((item) => (

              <TableRow
                key={item.invoiceId}
                className="cursor-pointer hover:bg-muted/40"
                onClick={() => onRowClick(item.invoiceId)}
              >

                <TableCell>{item.invoiceId}</TableCell>
                <TableCell>{item.consumerName}</TableCell>
                <TableCell>{item.agentName}</TableCell>
                <TableCell>{item.billingDate}</TableCell>

                <TableCell>
                  ${item.amount.toFixed(2)}
                </TableCell>

                <TableCell>
                  <Badge
                    variant={
                      (paymentStatusColors[item.paymentStatus as keyof typeof paymentStatusColors] ?? "secondary") as
                        | "success"
                        | "warning"
                        | "destructive"
                        | "primary"
                        | "secondary"
                        | "outline"
                        | "info"
                        | undefined
                    }
                  >
                    {item.paymentStatus}
                  </Badge>
                </TableCell>

                <TableCell>{item.paymentMethod}</TableCell>
                <TableCell>{item.renewalType}</TableCell>

              </TableRow>

            ))}
          </TableBody>

        </Table>
      </div>
    </Card>
  )
}