"use client";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { agentSummary } from "./analytics-data";
import { cn } from "@/lib/utils";

type Props = {
  selected: string;
  onSelect: (key: string) => void;
};

export function AnalyticsCards({ selected, onSelect }: Props) {
  return (
    <div className="flex flex-wrap gap-6 mb-8">
      {agentSummary.map((card) => (
        <Card
          key={card.key}
          onClick={() => onSelect(card.key)}
          className={cn(
            "cursor-pointer w-64 transition-shadow",
            selected === card.key ? "ring-2 ring-primary" : "hover:shadow-lg"
          )}
        >
          <CardContent className="py-6 flex flex-col items-center">
            <CardTitle className="mb-2 text-lg">{card.label}</CardTitle>
            <div className="text-3xl font-bold">{card.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
