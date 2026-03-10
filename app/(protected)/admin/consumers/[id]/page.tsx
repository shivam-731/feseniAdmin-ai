import Link from "next/link";
import ConsumersBasicInfo from "./ConsumerBasicInfo";
import SubscriptionInfo from "./SubscriptionInfo";
import AgentsTable from "./AgentsTable";
import BillingTable from "./BillingTable";
import { consumers as consumersList } from "../../_consumers/consumers-data";

// Next.js 16: Use async function with destructured params
interface PageProps {
params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
 const { id } = await params;

  // find consumer from central list, then extend with structured dummy data for details
  const base = consumersList.find((c: any) => c.id === id) || null;

  const consumer = base
    ? {
        ...base,
        email: (base.name || "").toLowerCase().replace(/\s+/g, "") + "@example.com",
        phone: "+1 (555) 123-4567",
        organization: base.name || "",
        developerEmails: ["dev1@" + (base.name || "example").toLowerCase().replace(/\s+/g, "") + ".com"],
        promoChannel: base.promoChannel || "Email",
        signupDate: "2023-01-15",
        startDate: "2023-01-15",
        // example agents purchased
        agentsPurchased: [
          { id: "a1", name: "Agent Alpha", purchaseDate: "2023-02-10", amount: 1200, status: "Active" },
          { id: "a2", name: "Agent Beta", purchaseDate: "2024-01-05", amount: 800, status: "Inactive" },
        ],
        // example billing
        billing: [
          { id: "inv_1001", date: "2023-02-10", amount: 1200, status: "Paid", method: "Credit Card", renewalType: "Auto" },
          { id: "inv_1002", date: "2024-01-05", amount: 800, status: "Pending", method: "Bank Transfer", renewalType: "Manual" },
        ],
      }
    : {
        id,
        name: "Unknown Customer",
        email: "unknown@example.com",
        phone: "",
        organization: "",
        developerEmails: [],
        promoChannel: "Email",
        signupDate: "",
        agentsPurchased: [],
        billing: [],
        status: "Inactive",
        duration: "-",
        expiryDate: "-",
        renewalStatus: "-",
      };

  return (
    <div className="space-y-8 max-w-5xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <Link href="/admin/consumers">
            <button
              type="button"
              className="inline-flex items-center gap-1 px-4 py-2 text-blue-600 bg-white border border-blue-600 rounded-lg hover:bg-blue-50 transition text-base font-semibold shadow-md"
            >
              <span className="mr-1">←</span> Back to Consumers
            </button>
          </Link>
          <h1 className="text-3xl font-bold mt-4 mb-1 text-gray-900 dark:text-white tracking-tight">{consumer.name}</h1>
          <p className="text-base text-gray-500 dark:text-gray-300 mb-2">{consumer.email}</p>
        </div>
      </div>
      

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ConsumersBasicInfo consumer={consumer} />
        <SubscriptionInfo consumer={consumer} />
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-medium">Agents Purchased</h2>
        <AgentsTable agents={consumer.agentsPurchased || []} />
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-medium">Billing</h2>
        <BillingTable bills={consumer.billing || []} />
      </div>
    </div>
  );
}
