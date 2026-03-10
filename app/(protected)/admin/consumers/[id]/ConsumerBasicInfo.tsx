export default function ConsumerBasicInfo({ consumer }: { consumer: any }) {
  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <h3 className="text-lg font-medium mb-4">Basic Information</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <div className="text-sm text-muted-foreground">Full Name</div>
          <div className="font-medium">{consumer.name}</div>
        </div>
        <div>
          <div className="text-sm text-muted-foreground">Email</div>
          <div className="font-medium">{consumer.email}</div>
        </div>

        <div>
          <div className="text-sm text-muted-foreground">Phone</div>
          <div className="font-medium">{consumer.phone || "—"}</div>
        </div>
        <div>
          <div className="text-sm text-muted-foreground">Organization</div>
          <div className="font-medium">{consumer.organization || "—"}</div>
        </div>

        <div className="sm:col-span-2">
          <div className="text-sm text-muted-foreground">Developer Emails</div>
          <div className="font-medium">{(consumer.developerEmails || []).join(", ") || "—"}</div>
        </div>

        <div>
          <div className="text-sm text-muted-foreground">Promotional Channel</div>
          <div className="font-medium">{consumer.promoChannel || consumer.promotionalChannel || "—"}</div>
        </div>
        <div>
          <div className="text-sm text-muted-foreground">Signup Date</div>
          <div className="font-medium">{consumer.signupDate || "—"}</div>
        </div>
      </div>
    </div>
  );
}
