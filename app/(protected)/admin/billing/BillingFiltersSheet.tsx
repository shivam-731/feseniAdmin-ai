// import { Input } from "@/components/ui/input";
// import { Select, SelectItem, SelectContent } from "@/components/ui/select";
// import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetBody } from "@/components/ui/sheet";
// import { Button } from "@/components/ui/button";
// import { SlidersHorizontal } from "lucide-react";
// import { paymentStatuses, renewalTypes } from "./billing-data";

// export function BillingFiltersSheet({ open, setOpen, filters, setFilters }) {
//   return (
//     <Sheet open={open} onOpenChange={setOpen}>
//       <SheetTrigger asChild>
//         <Button variant="outline" size="sm" className="gap-2">
//           <SlidersHorizontal className="w-4 h-4" /> Filters
//         </Button>
//       </SheetTrigger>
//       <SheetContent side="right" className="max-w-sm w-full p-6">
//         <SheetHeader>
//           <SheetTitle>Filters</SheetTitle>
//         </SheetHeader>
//         <SheetBody>
//           <div className="flex flex-col gap-6">
//             {/* Date Range */}
//             <div className="flex flex-col gap-2">
//               <label className="text-sm font-medium">Date Range</label>
//               <div className="flex gap-2">
//                 <Input
//                   type="date"
//                   value={filters.startDate}
//                   onChange={(e) => setFilters((f) => ({ ...f, startDate: e.target.value }))}
//                   className="w-full"
//                   placeholder="Start Date"
//                 />
//                 <Input
//                   type="date"
//                   value={filters.endDate}
//                   onChange={(e) => setFilters((f) => ({ ...f, endDate: e.target.value }))}
//                   className="w-full"
//                   placeholder="End Date"
//                 />
//               </div>
//             </div>
//             {/* Agent Name */}
//             <div className="flex flex-col gap-2">
//               <label className="text-sm font-medium">Agent Name</label>
//               <Input
//                 value={filters.agentName}
//                 onChange={(e) => setFilters((f) => ({ ...f, agentName: e.target.value }))}
//                 className="w-full"
//                 placeholder="Agent Name"
//               />
//             </div>
//             {/* Consumer Name */}
//             <div className="flex flex-col gap-2">
//               <label className="text-sm font-medium">Consumer Name</label>
//               <Input
//                 value={filters.consumerName}
//                 onChange={(e) => setFilters((f) => ({ ...f, consumerName: e.target.value }))}
//                 className="w-full"
//                 placeholder="Consumer Name"
//               />
//             </div>
//             {/* Payment Status */}
//             <div className="flex flex-col gap-2">

//               <Select
//                 value={filters.paymentStatus}
//                 onValueChange={(val) => setFilters((f) => ({ ...f, paymentStatus: val }))}
//               >
//                 <SelectContent>
//                   {paymentStatuses.map((status) => (
//                     <SelectItem key={status} value={status}>{status}</SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>
//             {/* Renewal Type */}
//             <div className="flex flex-col gap-2">
             
//               <Select
//                 value={filters.renewalType}
//                 onValueChange={(val) => setFilters((f) => ({ ...f, renewalType: val }))}
//               >
//                 <SelectContent>
//                   {renewalTypes.map((type) => (
//                     <SelectItem key={type} value={type}>{type}</SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>
//           </div>
//         </SheetBody>
//         <SheetFooter className="mt-8 flex items-center justify-between gap-4">
//           <Button
//             variant="outline"
//             onClick={() => setFilters({ startDate: "", endDate: "", agentName: "", consumerName: "", paymentStatus: "All", renewalType: "All" })}
//           >
//             Reset Filters
//           </Button>
//           <Button
//             variant="default"
//             onClick={() => setOpen(false)}
//           >
//             Apply Filters
//           </Button>
//         </SheetFooter>
//       </SheetContent>
//     </Sheet>
//   );
// }

import { Input } from "@/components/ui/input"
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { SlidersHorizontal } from "lucide-react"
import { paymentStatuses, renewalTypes } from "./billing-data"

type BillingFilters = {
  startDate: string
  endDate: string
  agentName: string
  consumerName: string
  paymentStatus: string
  renewalType: string
}

type BillingFiltersSheetProps = {
  open: boolean
  setOpen: (open: boolean) => void
  filters: BillingFilters
  setFilters: React.Dispatch<React.SetStateAction<BillingFilters>>
}

export function BillingFiltersSheet({
  open,
  setOpen,
  filters,
  setFilters
}: BillingFiltersSheetProps) {

  const resetFilters = () => {
    setFilters({
      startDate: "",
      endDate: "",
      agentName: "",
      consumerName: "",
      paymentStatus: "All",
      renewalType: "All"
    })
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <SlidersHorizontal className="w-4 h-4" />
          Filters
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="max-w-sm w-full p-6 overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-6 mt-6">

          {/* Date Range */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Date Range</label>

            <div className="flex gap-2">
              <Input
                type="date"
                value={filters.startDate}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFilters((f) => ({
                    ...f,
                    startDate: e.target.value
                  }))
                }
              />

              <Input
                type="date"
                value={filters.endDate}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFilters((f) => ({
                    ...f,
                    endDate: e.target.value
                  }))
                }
              />
            </div>
          </div>

          {/* Agent Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Agent Name</label>

            <Input
              value={filters.agentName}
              placeholder="Agent Name"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFilters((f) => ({
                  ...f,
                  agentName: e.target.value
                }))
              }
            />
          </div>

          {/* Consumer Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Consumer Name</label>

            <Input
              value={filters.consumerName}
              placeholder="Consumer Name"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFilters((f) => ({
                  ...f,
                  consumerName: e.target.value
                }))
              }
            />
          </div>

          {/* Payment Status */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Payment Status</label>

            <Select
              value={filters.paymentStatus}
              onValueChange={(val) =>
                setFilters((f) => ({
                  ...f,
                  paymentStatus: val
                }))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>

              <SelectContent>
                {paymentStatuses.map((status) => (
                  <SelectItem key={status} value={status}>
                    {status}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Renewal Type */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Renewal Type</label>

            <Select
              value={filters.renewalType}
              onValueChange={(val) =>
                setFilters((f) => ({
                  ...f,
                  renewalType: val
                }))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Type" />
              </SelectTrigger>

              <SelectContent>
                {renewalTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

        </div>

        <SheetFooter className="mt-8 flex items-center justify-between gap-4">
          <Button variant="outline" onClick={resetFilters}>
            Reset Filters
          </Button>

          <Button onClick={() => setOpen(false)}>
            Apply Filters
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}