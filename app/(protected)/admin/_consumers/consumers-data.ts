// consumers-data.ts
// Dummy data for consumers table
// export type Consumer = {
//   id: string;
//   name: string;
//   geography: string;
//   status: string;
//   agents: number;
//   duration: string;
//   expiryDate: string;
//   renewalStatus: string;
//   revenue: number;
//   promoChannel: string;
// };
export type Consumer = {
  id: string
  name: string
  geography: string
  status: "Active" | "Inactive"
  agents: number
  duration: string
  expiryDate: string
  renewalStatus: "Renewed" | "Expired"
  revenue: number
  promoChannel?: string
}



export const consumers: Consumer[] = [
  {
    id: "1",
    name: "Acme Corp",
    geography: "United States / North America",
    status: "Active",
    agents: 12,
    duration: "12 mo",
    expiryDate: "2025-01-15",
    renewalStatus: "Renewed",
    revenue: 12000,
    promoChannel: "Email",
  },
  {
    id: "2",
    name: "Globex Inc",
    geography: "Germany / Europe",
    status: "Inactive",
    agents: 8,
    duration: "6 mo",
    expiryDate: "2024-08-10",
    renewalStatus: "Expired",
    revenue: 8000,
    promoChannel: "Webinar",
  },
  {
    id: "3",
    name: "Soylent Ltd",
    geography: "India / Asia",
    status: "Active",
    agents: 20,
    duration: "18 mo",
    expiryDate: "2025-06-30",
    renewalStatus: "Renewed",
    revenue: 18000,
    promoChannel: "Referral",
  },
  {
    id: "4",
    name: "Initech",
    geography: "Brazil / South America",
    status: "Inactive",
    agents: 5,
    duration: "6 mo",
    expiryDate: "2024-09-15",
    renewalStatus: "Expired",
    revenue: 5000,
    promoChannel: "Adwords",
  },
  {
    id: "5",
    name: "Umbrella Corp",
    geography: "South Africa / Africa",
    status: "Active",
    agents: 30,
    duration: "24 mo",
    expiryDate: "2026-01-01",
    renewalStatus: "Renewed",
    revenue: 30000,
    promoChannel: "Event",
  },
  {
    id: "6",
    name: "Wayne Enterprises",
    geography: "United States / North America",
    status: "Active",
    agents: 15,
    duration: "12 mo",
    expiryDate: "2025-03-20",
    renewalStatus: "Renewed",
    revenue: 15000,
    promoChannel: "Email",
  },
  {
    id: "7",
    name: "Stark Industries",
    geography: "Germany / Europe",
    status: "Inactive",
    agents: 10,
    duration: "6 mo",
    expiryDate: "2024-11-10",
    renewalStatus: "Expired",
    revenue: 9000,
    promoChannel: "Webinar",
  },
  {
    id: "8",
    name: "Oscorp",
    geography: "India / Asia",
    status: "Active",
    agents: 22,
    duration: "18 mo",
    expiryDate: "2025-08-30",
    renewalStatus: "Renewed",
    revenue: 20000,
    promoChannel: "Referral",
  },
  {
    id: "9",
    name: "LexCorp",
    geography: "Brazil / South America",
    status: "Inactive",
    agents: 7,
    duration: "6 mo",
    expiryDate: "2024-12-15",
    renewalStatus: "Expired",
    revenue: 6000,
    promoChannel: "Adwords",
  },
  {
    id: "10",
    name: "Daily Planet",
    geography: "South Africa / Africa",
    status: "Active",
    agents: 35,
    duration: "24 mo",
    expiryDate: "2026-03-01",
    renewalStatus: "Renewed",
    revenue: 35000,
    promoChannel: "Event",
  },
  {
    id: "11",
    name: "Pied Piper",
    geography: "United States / North America",
    status: "Active",
    agents: 18,
    duration: "12 mo",
    expiryDate: "2025-05-10",
    renewalStatus: "Renewed",
    revenue: 17000,
    promoChannel: "Email",
  },
  {
    id: "12",
    name: "Hooli",
    geography: "Germany / Europe",
    status: "Inactive",
    agents: 9,
    duration: "6 mo",
    expiryDate: "2024-10-20",
    renewalStatus: "Expired",
    revenue: 8500,
    promoChannel: "Webinar",
  },
  {
    id: "13",
    name: "Massive Dynamic",
    geography: "India / Asia",
    status: "Active",
    agents: 25,
    duration: "18 mo",
    expiryDate: "2025-09-30",
    renewalStatus: "Renewed",
    revenue: 21000,
    promoChannel: "Referral",
  },
  {
    id: "14",
    name: "Tyrell Corp",
    geography: "Brazil / South America",
    status: "Inactive",
    agents: 6,
    duration: "6 mo",
    expiryDate: "2024-08-15",
    renewalStatus: "Expired",
    revenue: 5500,
    promoChannel: "Adwords",
  },
  {
    id: "15",
    name: "Cyberdyne Systems",
    geography: "South Africa / Africa",
    status: "Active",
    agents: 40,
    duration: "24 mo",
    expiryDate: "2026-05-01",
    renewalStatus: "Renewed",
    revenue: 40000,
    promoChannel: "Event",
  },
];
