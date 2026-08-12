import type { RiskSummaryEntry } from "../lib/riskSummary";
import { riskBarColor } from "../lib/badgeStyles";

interface RiskBarChartProps {
  summary: RiskSummaryEntry[];
}

export default function RiskBarChart({ summary }: RiskBarChartProps) {
  const maxCount = Math.max(...summary.map((entry) => entry.count), 1);

  return (
    <div className="space-y-3">
      {summary.map(({ level, count }) => (
        <div key={level} className="flex items-center gap-3">
          <span className="w-20 shrink-0 text-sm font-medium text-slate-700">
            {level}
          </span>
          <div className="h-4 flex-1 overflow-hidden rounded-full bg-slate-100">
            <div
              className={`h-full rounded-full ${riskBarColor[level]}`}
              style={{ width: `${(count / maxCount) * 100}%` }}
            />
          </div>
          <span className="w-6 shrink-0 text-right text-sm font-medium text-slate-700">
            {count}
          </span>
        </div>
      ))}
    </div>
  );
}
