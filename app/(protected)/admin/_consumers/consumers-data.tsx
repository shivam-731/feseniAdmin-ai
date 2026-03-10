export type Consumer = {
  id: string;
  name: string;
  geography: string;
  status: "Active" | "Inactive";
  agents: number;
  duration: string;
  expiryDate: string;
  renewalStatus: "Renewed" | "Not Renewed";
  revenue: number;
  promotionalChannel: string;
};

export const consumers: Consumer[] = [
  {
    id: "1",
    name: "Acme Corp",
    geography: "United States / North America",
    status: "Active",
    agents: 25,
    duration: "12 mo",
    expiryDate: "2026-03-10",
    renewalStatus: "Renewed",
    revenue: 12000,
    promotionalChannel: "Email",
  },
  {
    id: "2",
    name: "Beta LLC",
    geography: "Germany / Europe",
    status: "Inactive",
    agents: 10,
    duration: "6 mo",
    expiryDate: "2026-02-15",
    renewalStatus: "Not Renewed",
    revenue: 4000,
    promotionalChannel: "Webinar",
  },
  {
    id: "3",
    name: "Gamma Inc",
    geography: "India / Asia",
    status: "Active",
    agents: 40,
    duration: "24 mo",
    expiryDate: "2026-12-01",
    renewalStatus: "Renewed",
    revenue: 25000,
    promotionalChannel: "Referral",
  },
  {
    id: "4",
    name: "Delta Ltd",
    geography: "Brazil / South America",
    status: "Active",
    agents: 15,
    duration: "18 mo",
    expiryDate: "2026-08-20",
    renewalStatus: "Renewed",
    revenue: 9000,
    promotionalChannel: "Adwords",
  },
  {
    id: "5",
    name: "Epsilon GmbH",
    geography: "South Africa / Africa",
    status: "Inactive",
    agents: 8,
    duration: "6 mo",
    expiryDate: "2026-01-30",
    renewalStatus: "Not Renewed",
    revenue: 3500,
    promotionalChannel: "Event",
  },
];
