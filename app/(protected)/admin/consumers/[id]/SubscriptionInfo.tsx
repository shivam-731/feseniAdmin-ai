import { Badge } from "@/components/ui/badge";

export default function SubscriptionInfo({ consumer }: { consumer: any }) {
  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <h3 className="text-lg font-medium mb-4">Subscription</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <div className="text-sm text-muted-foreground">Subscription Status</div>
          <div className="mt-1"><Badge variant={consumer.status === "Active" ? "success" : "destructive"}>{consumer.status}</Badge></div>
        </div>
        <div>
          <div className="text-sm text-muted-foreground">Subscription Duration</div>
          <div className="font-medium">{consumer.duration || "—"}</div>
        </div>
        <div>
          <div className="text-sm text-muted-foreground">Start Date</div>
          <div className="font-medium">{consumer.startDate || "—"}</div>
        </div>
        <div>
          <div className="text-sm text-muted-foreground">Expiry Date</div>
          <div className="font-medium">{consumer.expiryDate || "—"}</div>
        </div>
        <div className="sm:col-span-2">
          <div className="text-sm text-muted-foreground">Renewal Status</div>
          <div className="font-medium">{consumer.renewalStatus || "—"}</div>
        </div>
      </div>
    </div>
  );
}
