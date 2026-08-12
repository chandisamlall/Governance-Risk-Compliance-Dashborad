// Centralized styling so status/risk/priority colors are defined once and
// stay consistent across every table, card, and modal in the app.

import type { ControlStatus, RiskLevel, Priority, ComplianceStatus } from "../types";

export const statusStyles: Record<ControlStatus, string> = {
  Implemented: "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Not Implemented": "bg-rose-50 text-rose-700 border-rose-200",
};

export const complianceStatusStyles: Record<ComplianceStatus, string> = {
  Met: "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Not Met": "bg-rose-50 text-rose-700 border-rose-200",
};

export const riskStyles: Record<RiskLevel, string> = {
  Low: "bg-slate-100 text-slate-700 border-slate-300",
  Medium: "bg-amber-50 text-amber-700 border-amber-200",
  High: "bg-orange-50 text-orange-700 border-orange-200",
  Critical: "bg-red-100 text-red-800 border-red-300",
};

export const priorityStyles: Record<Priority, string> = {
  Maintain: "bg-slate-100 text-slate-700 border-slate-300",
  Monitor: "bg-blue-50 text-blue-700 border-blue-200",
  High: "bg-orange-50 text-orange-700 border-orange-200",
  Immediate: "bg-red-100 text-red-800 border-red-300",
};

// Order used anywhere risk levels are displayed together (summary cards,
// bar chart, legends) so Critical always leads and Low always trails.
export const riskOrder: RiskLevel[] = ["Critical", "High", "Medium", "Low"];

// Bar-chart fill colors, aligned with the risk badge palette above.
export const riskBarColor: Record<RiskLevel, string> = {
  Critical: "bg-red-500",
  High: "bg-orange-500",
  Medium: "bg-amber-400",
  Low: "bg-slate-400",
};
