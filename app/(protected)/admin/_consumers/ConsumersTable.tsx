// "use client";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import { Badge } from "@/components/ui/badge";
// import { ArrowUp, ArrowDown } from "lucide-react";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import type { Consumer } from "./consumers-data";

// const columns = [
//   { key: "name", label: "Customer Name", sortable: true },
//   { key: "geography", label: "Geography", sortable: false },
//   { key: "status", label: "Subscription Status", sortable: false },
//   { key: "agents", label: "Number of Agents", sortable: true },
//   { key: "duration", label: "Subscription Duration", sortable: true },
//   { key: "expiryDate", label: "Expiry Date", sortable: true },
//   { key: "renewalStatus", label: "Renewal Status", sortable: true },
//   { key: "revenue", label: "Total Revenue", sortable: true },
//   { key: "promoChannel", label: "Promotional Channel", sortable: false },
// ];

// const statusColor = {
//   Active: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
//   Inactive: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
// };
// const renewalColor = {
//   Renewed: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
//   "Not Renewed": "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300",
// };

// function sortData(data: Consumer[], sortKey: string, direction: "asc" | "desc") {
//   return [...data].sort((a, b) => {
//     switch (sortKey) {
//       case "revenue":
//         return direction === "asc" ? a.revenue - b.revenue : b.revenue - a.revenue;
//       case "agents":
//         return direction === "asc" ? a.agents - b.agents : b.agents - a.agents;
//       case "expiryDate":
//         return direction === "asc"
//           ? new Date(a.expiryDate).getTime() - new Date(b.expiryDate).getTime()
//           : new Date(b.expiryDate).getTime() - new Date(a.expiryDate).getTime();
//       case "duration": {
//         const getMonths = (d: string) => parseInt(d.split(" ")[0], 10);
//         return direction === "asc"
//           ? getMonths(a.duration) - getMonths(b.duration)
//           : getMonths(b.duration) - getMonths(a.duration);
//       }
//       case "name":
//         return direction === "asc"
//           ? a.name.localeCompare(b.name)
//           : b.name.localeCompare(a.name);
//       case "geography":
//         return direction === "asc"
//           ? a.geography.localeCompare(b.geography)
//           : b.geography.localeCompare(a.geography);
//       case "status":
//         return direction === "asc"
//           ? a.status.localeCompare(b.status)
//           : b.status.localeCompare(a.status);
//       case "renewalStatus":
//         return direction === "asc"
//           ? a.renewalStatus.localeCompare(b.renewalStatus)
//           : b.renewalStatus.localeCompare(a.renewalStatus);
//       case "promoChannel":
//         return direction === "asc"
//           ? a.promoChannel.localeCompare(b.promoChannel)
//           : b.promoChannel.localeCompare(a.promoChannel);
//       default:
//         return 0;
//     }
//   });
// }

// export default function ConsumersTable({ data }: { data: Consumer[] }) {
//   const [sortKey, setSortKey] = useState<string>("name");
//   const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
//   const [page, setPage] = useState(1);
//   const pageSize = 10;
//   const sorted: Consumer[] = sortData(data, sortKey, sortDir);
//   const totalPages = Math.ceil(sorted.length / pageSize);
//   const paginated = sorted.slice((page - 1) * pageSize, page * pageSize);
//   const router = useRouter();

//   const handleSort = (key: string) => {
//     if (sortKey === key) {
//       setSortDir(sortDir === "asc" ? "desc" : "asc");
//     } else {
//       setSortKey(key);
//       setSortDir("asc");
//     }
//   };

//   const handleRowClick = (id: string) => {
//     router.push(`/admin/consumers/${id}`);
//   };

//   return (
//     <div className="overflow-x-auto bg-card border border-border rounded-xl">
//       <Table>
//         <TableHeader>
//           <TableRow>
//             {columns.map((col) => (
//               <TableHead
//                 key={col.key}
//                 className={col.sortable ? "cursor-pointer select-none" : ""}
//                 onClick={col.sortable ? () => handleSort(col.key) : undefined}
//               >
//                 <span className="flex items-center gap-1">
//                   {col.label}
//                   {col.sortable && sortKey === col.key && (
//                     sortDir === "asc" ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />
//                   )}
//                 </span>
//               </TableHead>
//             ))}
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {paginated.map((c: Consumer) => (
//             <TableRow
//               key={c.id}
//               onClick={() => handleRowClick(c.id)}
//               className="cursor-pointer hover:bg-muted/60 transition"
//               style={{ userSelect: "none" }}
//             >
//               <TableCell>{c.name}</TableCell>
//               <TableCell>{c.geography}</TableCell>
//               <TableCell>
//                 <Badge className={statusColor[c.status]}>{c.status}</Badge>
//               </TableCell>
//               <TableCell>{c.agents}</TableCell>
//               <TableCell>{c.duration}</TableCell>
//               <TableCell>{c.expiryDate}</TableCell>
//               <TableCell>
//                 <span
//                   className={
//                     `inline-flex items-center justify-center rounded-full px-3 py-1 min-w-[90px] text-sm font-medium transition-all duration-200
//                     ${c.renewalStatus === "Renewed"
//                       ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
//                       : "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300"}
//                     `
//                   }
//                   style={{
//                     boxSizing: "border-box",
//                     verticalAlign: "middle",
//                     height: "2rem",
//                     lineHeight: "1.5rem",
//                     textAlign: "center",
//                     letterSpacing: "0.01em"
//                   }}
//                 >
//                   {c.renewalStatus}
//                 </span>
//               </TableCell>
//               <TableCell>${c.revenue.toLocaleString()}</TableCell>
//               <TableCell>
//                 {c.promoChannel ? (
//                   c.promoChannel
//                 ) : (
//                   <span className="text-muted-foreground italic">No Channel</span>
//                 )}
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//       {totalPages > 1 && (
//         <div className="flex justify-center items-center gap-2 py-4">
//           <button
//             className="px-3 py-1 border rounded disabled:opacity-50"
//             onClick={() => setPage(page - 1)}
//             disabled={page === 1}
//           >
//             Prev
//           </button>
//           <span>Page {page} of {totalPages}</span>
//           <button
//             className="px-3 py-1 border rounded disabled:opacity-50"
//             onClick={() => setPage(page + 1)}
//             disabled={page === totalPages}
//           >
//             Next
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ArrowUp, ArrowDown } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Consumer } from "./consumers-data";

const columns = [
  { key: "name", label: "Customer Name", sortable: true },
  { key: "geography", label: "Geography", sortable: false },
  { key: "status", label: "Subscription Status", sortable: false },
  { key: "agents", label: "Number of Agents", sortable: true },
  { key: "duration", label: "Subscription Duration", sortable: true },
  { key: "expiryDate", label: "Expiry Date", sortable: true },
  { key: "renewalStatus", label: "Renewal Status", sortable: true },
  { key: "revenue", label: "Total Revenue", sortable: true },
  { key: "promoChannel", label: "Promotional Channel", sortable: false },
];

const statusColor: Record<"Active" | "Inactive", string> = {
  Active: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
  Inactive: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
};

function sortData(data: Consumer[], sortKey: string, direction: "asc" | "desc") {
  return [...data].sort((a, b) => {
    switch (sortKey) {
      case "revenue":
        return direction === "asc" ? a.revenue - b.revenue : b.revenue - a.revenue;

      case "agents":
        return direction === "asc" ? a.agents - b.agents : b.agents - a.agents;

      case "expiryDate":
        return direction === "asc"
          ? new Date(a.expiryDate).getTime() - new Date(b.expiryDate).getTime()
          : new Date(b.expiryDate).getTime() - new Date(a.expiryDate).getTime();

      case "duration": {
        const getMonths = (d: string) => parseInt(d.split(" ")[0], 10);
        return direction === "asc"
          ? getMonths(a.duration) - getMonths(b.duration)
          : getMonths(b.duration) - getMonths(a.duration);
      }

      case "name":
        return direction === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);

      default:
        return 0;
    }
  });
}

export default function ConsumersTable({ data }: { data: Consumer[] }) {
  const [sortKey, setSortKey] = useState<string>("name");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const [page, setPage] = useState(1);

  const pageSize = 10;

  const sorted = sortData(data, sortKey, sortDir);
  const totalPages = Math.ceil(sorted.length / pageSize);
  const paginated = sorted.slice((page - 1) * pageSize, page * pageSize);

  const router = useRouter();

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  const handleRowClick = (id: string) => {
    router.push(`/admin/consumers/${id}`);
  };

  return (
    <div className="overflow-x-auto bg-card border border-border rounded-xl">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((col) => (
              <TableHead
                key={col.key}
                className={col.sortable ? "cursor-pointer select-none" : ""}
                onClick={col.sortable ? () => handleSort(col.key) : undefined}
              >
                <span className="flex items-center gap-1">
                  {col.label}
                  {col.sortable && sortKey === col.key && (
                    sortDir === "asc"
                      ? <ArrowUp className="w-3 h-3" />
                      : <ArrowDown className="w-3 h-3" />
                  )}
                </span>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {paginated.map((c) => (
            <TableRow
              key={c.id}
              onClick={() => handleRowClick(c.id)}
              className="cursor-pointer hover:bg-muted/60 transition"
            >
              <TableCell>{c.name}</TableCell>
              <TableCell>{c.geography}</TableCell>

              <TableCell>
                <Badge className={statusColor[c.status]}>
                  {c.status}
                </Badge>
              </TableCell>

              <TableCell>{c.agents}</TableCell>
              <TableCell>{c.duration}</TableCell>
              <TableCell>{c.expiryDate}</TableCell>

              <TableCell>
                {c.renewalStatus === "Renewed" ? (
                  <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                    Renewed
                  </Badge>
                ) : (
                  <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300">
                    Not Renewed
                  </Badge>
                )}
              </TableCell>

              <TableCell>${c.revenue.toLocaleString()}</TableCell>

              <TableCell>
                {c.promoChannel || (
                  <span className="text-muted-foreground italic">
                    No Channel
                  </span>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 py-4">
          <button
            className="px-3 py-1 border rounded disabled:opacity-50"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            Prev
          </button>

          <span>Page {page} of {totalPages}</span>

          <button
            className="px-3 py-1 border rounded disabled:opacity-50"
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}