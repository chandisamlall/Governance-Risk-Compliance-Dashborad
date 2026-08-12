import { useMemo, useState } from "react";
import { botiumControls } from "../data/botiumControls";
import { getRiskSummary } from "../lib/riskSummary";
import RiskSummaryCards from "../components/RiskSummaryCards";
import RiskBarChart from "../components/RiskBarChart";
import Badge from "../components/Badge";
import ControlModal from "../components/ControlModal";
import { statusStyles, riskStyles, priorityStyles } from "../lib/badgeStyles";
import type { Control } from "../types";

export default function Controls() {
  const [selectedControl, setSelectedControl] = useState<Control | null>(null);
  const riskSummary = useMemo(() => getRiskSummary(botiumControls), []);

  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm font-medium text-brand-700">Controls Assessment</p>
        <h1 className="mt-1 text-2xl font-semibold text-slate-900">
          Security Controls
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">
          Risk totals below are calculated automatically from the controls
          data — nothing here is a fixed or invented number.
        </p>
      </section>

      <section className="space-y-4">
        <RiskSummaryCards summary={riskSummary} />
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-sm font-semibold text-slate-900">
            Risk Distribution
          </h2>
          <RiskBarChart summary={riskSummary} />
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
          Controls Checklist
        </h2>
        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-4 py-3 font-medium">Control</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium">Risk</th>
                  <th className="px-4 py-3 font-medium">Priority</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {botiumControls.map((control) => (
                  <tr
                    key={control.id}
                    onClick={() => setSelectedControl(control)}
                    className="cursor-pointer transition-colors hover:bg-slate-50"
                  >
                    <td className="px-4 py-3 font-medium text-slate-900">
                      {control.name}
                    </td>
                    <td className="px-4 py-3">
                      <Badge
                        label={control.status}
                        className={statusStyles[control.status]}
                      />
                    </td>
                    <td className="px-4 py-3">
                      <Badge
                        label={control.risk}
                        className={riskStyles[control.risk]}
                      />
                    </td>
                    <td className="px-4 py-3">
                      <Badge
                        label={control.priority}
                        className={priorityStyles[control.priority]}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="mt-2 text-xs text-slate-500">
          Click any row to see why the control matters and the recommended
          action.
        </p>
      </section>

      {selectedControl && (
        <ControlModal
          control={selectedControl}
          onClose={() => setSelectedControl(null)}
        />
      )}
    </div>
  );
}
