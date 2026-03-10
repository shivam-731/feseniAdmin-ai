"use client";
import { useState } from "react";
import { AnalyticsCards } from "./AnalyticsCards";
import { AgentUsageTable } from "./AgentUsageTable";

export default function AnalyticsPage() {
  const [selected, setSelected] = useState("total");

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Analytics</h1>
      <AnalyticsCards selected={selected} onSelect={setSelected} />
      <AgentUsageTable filterStatus={selected} />
    </div>
  );
}
