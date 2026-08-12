// Computes risk totals directly from the controls data file. Nothing here
// is a hard-coded number — add, remove, or re-rate a control in
// src/data/botiumControls.ts and these totals recalculate automatically.

import type { Control, RiskLevel } from "../types";
import { riskOrder } from "./badgeStyles";

export interface RiskSummaryEntry {
  level: RiskLevel;
  count: number;
}

/**
 * Returns risk-level counts in Critical → High → Medium → Low order,
 * skipping any level that has zero controls so the UI never shows an
 * empty "0 Critical" card that isn't backed by data.
 */
export function getRiskSummary(controls: Control[]): RiskSummaryEntry[] {
  const counts = new Map<RiskLevel, number>();

  for (const control of controls) {
    counts.set(control.risk, (counts.get(control.risk) ?? 0) + 1);
  }

  return riskOrder
    .filter((level) => (counts.get(level) ?? 0) > 0)
    .map((level) => ({ level, count: counts.get(level) as number }));
}
