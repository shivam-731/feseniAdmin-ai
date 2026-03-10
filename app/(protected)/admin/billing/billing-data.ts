// Dummy billing data for Billing Transactions
export const billingData = [
  {
    invoiceId: "INV-1001",
    consumerName: "John Doe",
    agentName: "Alice Smith",
    billingDate: "2026-03-01",
    amount: 120.5,
    paymentStatus: "Paid",
    paymentMethod: "Credit Card",
    renewalType: "Renewal",
  },
  {
    invoiceId: "INV-1002",
    consumerName: "Jane Lee",
    agentName: "Bob Johnson",
    billingDate: "2026-02-25",
    amount: 99.99,
    paymentStatus: "Pending",
    paymentMethod: "Bank Transfer",
    renewalType: "New",
  },
  {
    invoiceId: "INV-1003",
    consumerName: "Mike Chan",
    agentName: "Alice Smith",
    billingDate: "2026-02-20",
    amount: 150.0,
    paymentStatus: "Failed",
    paymentMethod: "PayPal",
    renewalType: "Upgrade",
  },
  // ...more dummy data
];

export const paymentStatuses = ["All", "Paid", "Pending", "Failed"];
export const renewalTypes = ["All", "New", "Renewal", "Upgrade"];
export const paymentStatusColors = {
  Paid: "success",
  Pending: "warning",
  Failed: "destructive",
};
