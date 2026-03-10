export const agentSummary = [
  { key: "total", label: "Total Agent Purchases", value: 120, status: "all" },
  { key: "active", label: "Active Agents", value: 85, status: "active" },
  { key: "inactive", label: "Inactive Agents", value: 35, status: "inactive" },
];

export const agentUsageData = [
  {
    consumerName: "John Doe",
    agentName: "Alice Smith",
    purchaseDate: "2026-03-01",
    revenue: 1200,
    amountSpent: 1200,
    lastInteraction: "2026-03-04",
    status: "active",
    geography: "USA",
  },
  {
    consumerName: "Jane Lee",
    agentName: "Bob Johnson",
    purchaseDate: "2026-02-25",
    revenue: 900,
    amountSpent: 950,
    lastInteraction: "2026-03-01",
    status: "inactive",
    geography: "Canada",
  },
  // ...more rows
];

export const geographies = ["All", "USA", "Canada", "UK", "India"];
