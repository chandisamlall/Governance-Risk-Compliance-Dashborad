import type { RiskSummaryEntry } from "../lib/riskSummary";

const CARD_STYLES: Record<string, string> = {
  Critical: "border-red-200 bg-red-50 text-red-800",
  High: "border-orange-200 bg-orange-50 text-orange-800",
  Medium: "border-amber-200 bg-amber-50 text-amber-800",
  Low: "border-slate-300 bg-slate-100 text-slate-700",
};

interface RiskSummaryCardsProps {
  summary: RiskSummaryEntry[];
}

export default function RiskSummaryCards({ summary }: RiskSummaryCardsProps) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {summary.map(({ level, count }) => (
        <div
          key={level}
          className={`rounded-lg border p-4 ${CARD_STYLES[level]}`}
        >
          <p className="text-2xl font-semibold">{count}</p>
          <p className="text-sm font-medium">{level} Risk</p>
        </div>
      ))}
    </div>
  );
}
