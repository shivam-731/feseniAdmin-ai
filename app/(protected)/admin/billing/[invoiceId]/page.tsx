"use client";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

// Dummy billing detail data
const billingDetail = {
  invoiceId: "INV-1001",
  billingDate: "2026-03-01",
  dueDate: "2026-03-15",
  paymentStatus: "Paid",
  paymentMethod: "Credit Card",
  transactionId: "TXN-789456123",
  consumer: {
    name: "John Doe",
    email: "john.doe@email.com",
    organization: "Acme Corp",
    contact: "+1 555-1234",
  },
  agent: {
    name: "Alice Smith",
    planType: "Pro",
    duration: "12 months",
    version: "v2.1",
    renewalType: "Renewal",
  },
  paymentBreakdown: {
    baseAmount: 100.0,
    taxes: 15.0,
    discounts: 5.0,
    totalPaid: 110.0,
  },
};

const paymentStatusColors = {
  Paid: "success",
  Pending: "warning",
  Failed: "destructive",
};

export default function BillingDetailPage() {
  const router = useRouter();
  return (
    <div className="p-6 space-y-6">
      {/* Back Button */}
      <Button
        variant="ghost"
        className="mb-2 flex items-center gap-2"
        onClick={() => router.push("/admin/billing")}
      >
        <span className="text-lg">←</span> Back to Billing
      </Button>
      {/* SECTION 1 — Billing Information */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Billing Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="text-xs text-muted-foreground">Invoice ID</div>
            <div className="font-medium">{billingDetail.invoiceId}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Billing Date</div>
            <div className="font-medium">{billingDetail.billingDate}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Due Date</div>
            <div className="font-medium">{billingDetail.dueDate}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Payment Status</div>
            <Badge
              variant={
                (paymentStatusColors[billingDetail.paymentStatus as keyof typeof paymentStatusColors] ?? "secondary") as
                  "success" | "warning" | "destructive" | "primary" | "secondary" | "outline" | "info" | undefined
              }
            >
              {billingDetail.paymentStatus}
            </Badge>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Payment Method</div>
            <div className="font-medium">{billingDetail.paymentMethod}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Transaction ID</div>
            <div className="font-medium">{billingDetail.transactionId}</div>
          </div>
        </div>
      </Card>
      {/* SECTION 2 — Consumer Information */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Consumer Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="text-xs text-muted-foreground">Name</div>
            <div className="font-medium">{billingDetail.consumer.name}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Email</div>
            <div className="font-medium">{billingDetail.consumer.email}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Organization</div>
            <div className="font-medium">{billingDetail.consumer.organization}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Contact Number</div>
            <div className="font-medium">{billingDetail.consumer.contact}</div>
          </div>
        </div>
      </Card>
      {/* SECTION 3 — Agent & Subscription Information */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Agent & Subscription Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="text-xs text-muted-foreground">Agent Name</div>
            <div className="font-medium">{billingDetail.agent.name}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Plan Type</div>
            <div className="font-medium">{billingDetail.agent.planType}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Subscription Duration</div>
            <div className="font-medium">{billingDetail.agent.duration}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Version</div>
            <div className="font-medium">{billingDetail.agent.version}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Renewal Type</div>
            <div className="font-medium">{billingDetail.agent.renewalType}</div>
          </div>
        </div>
      </Card>
      {/* SECTION 4 — Payment Breakdown */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Payment Breakdown</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="text-xs text-muted-foreground">Base Amount</div>
            <div className="font-medium">${billingDetail.paymentBreakdown.baseAmount.toFixed(2)}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Taxes</div>
            <div className="font-medium">${billingDetail.paymentBreakdown.taxes.toFixed(2)}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Discounts</div>
            <div className="font-medium">-${billingDetail.paymentBreakdown.discounts.toFixed(2)}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Total Amount Paid</div>
            <div className="font-bold text-primary">${billingDetail.paymentBreakdown.totalPaid.toFixed(2)}</div>
          </div>
        </div>
      </Card>
      {/* SECTION 5 — Actions */}
      <Card className="p-6 flex flex-wrap gap-4">
        <h2 className="text-lg font-semibold mb-4 w-full">Actions</h2>
        <Button variant="outline">Download Invoice (PDF)</Button>
        <Button variant="outline">Resend Invoice Email</Button>
        <Button variant="outline">Mark as Paid</Button>
        <Button variant="destructive">Refund Payment</Button>
      </Card>
    </div>
  );
}
