// ---------------------------------------------------------------------------
// BOTIUM TOYS — RECOMMENDATIONS DATA
// ---------------------------------------------------------------------------
// Single source of truth for the Recommendations tab, grouped into
// Immediate / Near-Term / Ongoing tiers. Each entry ties back to a control
// or compliance gap identified in botiumControls.ts / botiumCompliance.ts.
// ---------------------------------------------------------------------------

import type { Recommendation } from "../types";

export const botiumRecommendations: Recommendation[] = [
  // Immediate — significant security, operational, financial, or regulatory risk
  {
    id: "rec-1",
    tier: "Immediate",
    recommendation:
      "Implement least-privilege, role-based access so employees only reach the systems and data their job requires.",
    relatedControl: "Least Privilege",
    riskAddressed: "Critical",
    priority: "Immediate",
  },
  {
    id: "rec-2",
    tier: "Immediate",
    recommendation:
      "Encrypt sensitive data and payment transactions, both at rest and in transit.",
    relatedControl: "Encryption",
    riskAddressed: "Critical",
    priority: "Immediate",
  },
  {
    id: "rec-3",
    tier: "Immediate",
    recommendation:
      "Adopt and enforce a formal password policy across all systems and accounts.",
    relatedControl: "Password Policies",
    riskAddressed: "High",
    priority: "Immediate",
  },
  {
    id: "rec-4",
    tier: "Immediate",
    recommendation:
      "Deploy a password management system for secure credential storage, resets, and lockout handling.",
    relatedControl: "Password Management System",
    riskAddressed: "High",
    priority: "Immediate",
  },

  // Near-Term — important improvements that follow the highest-priority items
  {
    id: "rec-5",
    tier: "Near-Term",
    recommendation:
      "Document a disaster recovery plan covering hardware, connectivity, applications, and data restoration.",
    relatedControl: "Disaster Recovery Plans",
    riskAddressed: "High",
    priority: "High",
  },
  {
    id: "rec-6",
    tier: "Near-Term",
    recommendation:
      "Deploy an Intrusion Detection System to monitor network traffic for suspicious activity.",
    relatedControl: "Intrusion Detection System (IDS)",
    riskAddressed: "High",
    priority: "High",
  },
  {
    id: "rec-7",
    tier: "Near-Term",
    recommendation:
      "Establish a regular backup schedule, including offsite or cloud copies of critical data.",
    relatedControl: "Backups",
    riskAddressed: "High",
    priority: "High",
  },
  {
    id: "rec-8",
    tier: "Near-Term",
    recommendation:
      "Define separation of duties so no single employee controls an entire critical process.",
    relatedControl: "Separation of Duties",
    riskAddressed: "Medium",
    priority: "High",
  },
  {
    id: "rec-9",
    tier: "Near-Term",
    recommendation:
      "Establish a routine manual monitoring and maintenance schedule for legacy systems.",
    relatedControl: "Manual Monitoring for Legacy Systems",
    riskAddressed: "Medium",
    priority: "High",
  },

  // Ongoing — controls that should be continuously monitored or reviewed
  {
    id: "rec-10",
    tier: "Ongoing",
    recommendation:
      "Keep firewall rules and firmware current; review rule sets on a regular schedule.",
    relatedControl: "Firewall",
    riskAddressed: "Low",
    priority: "Maintain",
  },
  {
    id: "rec-11",
    tier: "Ongoing",
    recommendation:
      "Keep antivirus definitions and endpoint coverage up to date across all devices.",
    relatedControl: "Antivirus Software",
    riskAddressed: "Low",
    priority: "Maintain",
  },
  {
    id: "rec-12",
    tier: "Ongoing",
    recommendation:
      "Periodically review physical access, key holders, and CCTV coverage at the office/storefront/warehouse.",
    relatedControl: "Physical Locks / CCTV",
    riskAddressed: "Low",
    priority: "Monitor",
  },
  {
    id: "rec-13",
    tier: "Ongoing",
    recommendation:
      "Schedule routine inspection and testing of fire alarm and sprinkler systems.",
    relatedControl: "Fire Detection/Prevention",
    riskAddressed: "Low",
    priority: "Monitor",
  },
];
