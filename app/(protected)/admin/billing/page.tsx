// "use client"
"use client";
import { useState } from "react"
import { useRouter } from "next/navigation"
import { billingData } from "./billing-data"
import { BillingTable } from "./BillingTable"
import { BillingFiltersSheet } from "./BillingFiltersSheet"
import { Sheet, SheetTrigger } from "@/components/ui/sheet"

type BillingRow = (typeof billingData)[0]

export type SortKey =
  | "invoiceId"
  | "consumerName"
  | "agentName"
  | "billingDate"
  | "amount"
  | "paymentStatus"
  | "paymentMethod"
  | "renewalType"

export default function BillingListPage() {
  const router = useRouter()

  const [filters, setFilters] = useState({
    startDate: "",
    endDate: "",
    agentName: "",
    consumerName: "",
    paymentStatus: "",
    renewalType: "",
  })

  const [sort, setSort] = useState<{
    key: SortKey
    direction: "asc" | "desc"
  }>({
    key: "billingDate",
    direction: "desc",
  })

  const [openSheet, setOpenSheet] = useState(false)

  // Filtering
  const filteredData = billingData.filter((item: BillingRow) => {
    const matchesAgent = filters.agentName
      ? item.agentName.toLowerCase().includes(filters.agentName.toLowerCase())
      : true

    const matchesConsumer = filters.consumerName
      ? item.consumerName.toLowerCase().includes(filters.consumerName.toLowerCase())
      : true

    const matchesStatus =
      filters.paymentStatus && filters.paymentStatus !== "All"
        ? item.paymentStatus === filters.paymentStatus
        : true

    const matchesRenewal =
      filters.renewalType && filters.renewalType !== "All"
        ? item.renewalType === filters.renewalType
        : true

    const matchesStartDate = filters.startDate
      ? item.billingDate >= filters.startDate
      : true

    const matchesEndDate = filters.endDate
      ? item.billingDate <= filters.endDate
      : true

    return (
      matchesAgent &&
      matchesConsumer &&
      matchesStatus &&
      matchesRenewal &&
      matchesStartDate &&
      matchesEndDate
    )
  })

  // Sorting
  const sortedData = [...filteredData].sort((a, b) => {
    let valA: any = a[sort.key]
    let valB: any = b[sort.key]

    if (sort.key === "amount") {
      valA = Number(a.amount)
      valB = Number(b.amount)
    }

    if (sort.key === "billingDate") {
      valA = new Date(a.billingDate).getTime()
      valB = new Date(b.billingDate).getTime()
    }

    if (valA < valB) return sort.direction === "asc" ? -1 : 1
    if (valA > valB) return sort.direction === "asc" ? 1 : -1

    return 0
  })

  const handleSort = (key: SortKey) => {
    setSort((prev) => ({
      key,
      direction:
        prev.key === key
          ? prev.direction === "asc"
            ? "desc"
            : "asc"
          : "asc",
    }))
  }

  const handleRowClick = (invoiceId: string) => {
    router.push(`/admin/billing/${invoiceId}`)
  }

  return (
    <div className="flex flex-col gap-6">

      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Billing</h1>

        <Sheet open={openSheet} onOpenChange={setOpenSheet}>
          <SheetTrigger asChild>{/* Button optional */}</SheetTrigger>

          <BillingFiltersSheet
            open={openSheet}
            setOpen={setOpenSheet}
            filters={filters}
            setFilters={setFilters}
          />
        </Sheet>
      </div>

      <BillingTable
        data={sortedData}
        sort={sort}
        onSort={handleSort}
        onRowClick={handleRowClick}
      />

    </div>
  )
}