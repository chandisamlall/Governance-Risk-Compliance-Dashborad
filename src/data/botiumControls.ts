// ---------------------------------------------------------------------------
// BOTIUM TOYS — CONTROLS ASSESSMENT DATA
// ---------------------------------------------------------------------------
// This is the single source of truth for the Controls tab. Every card, table
// row, badge, and the risk summary/bar chart on the dashboard are calculated
// from this file — nothing about status, risk, or priority is hard-coded
// into the UI components.
//
// HOW TO EDIT:
//   - status: "Implemented" | "Not Implemented"
//   - risk:   "Low" | "Medium" | "High" | "Critical"
//   - priority: "Maintain" | "Monitor" | "High" | "Immediate"
//   - Change any field below and the dashboard updates automatically.
//
// These entries reflect the controls assessment from the Botium Toys
// Scope, Goals, and Risk Assessment Report (the internal audit scenario).
// Risk and priority ratings are the auditor's judgment call, applied
// consistently: gaps tied directly to cardholder data or account access
// are rated Critical/Immediate; other unimplemented controls are rated
// High/Medium based on their impact on operations or fraud risk; controls
// already in place are rated Low.
// ---------------------------------------------------------------------------

import type { Control } from "../types";

export const botiumControls: Control[] = [
  {
    id: "least-privilege",
    name: "Least Privilege",
    category: "Administrative",
    status: "Not Implemented",
    risk: "Critical",
    priority: "Immediate",
    whyItMatters:
      "Employees should only have access to the systems and information required for their roles. Currently, all staff can access customer and payment data regardless of job function.",
    compliance: ["PCI DSS", "GDPR", "SOC"],
    recommendation:
      "Implement role-based access controls and periodically review user permissions.",
  },
  {
    id: "disaster-recovery",
    name: "Disaster Recovery Plans",
    category: "Administrative",
    status: "Not Implemented",
    risk: "High",
    priority: "High",
    whyItMatters:
      "A disaster recovery plan keeps the business running after an outage, cyber incident, or physical event by defining how systems and data are restored.",
    compliance: ["SOC"],
    recommendation:
      "Create a documented disaster recovery plan covering hardware, connectivity, applications, and data restoration.",
  },
  {
    id: "password-policies",
    name: "Password Policies",
    category: "Administrative",
    status: "Not Implemented",
    risk: "High",
    priority: "Immediate",
    whyItMatters:
      "Strong password rules (length, complexity, expiration) reduce the chance of accounts being compromised through guessing or brute-force attacks.",
    compliance: ["PCI DSS", "SOC"],
    recommendation:
      "Adopt and enforce a formal password policy across all systems and accounts.",
  },
  {
    id: "separation-of-duties",
    name: "Separation of Duties",
    category: "Administrative",
    status: "Not Implemented",
    risk: "Medium",
    priority: "High",
    whyItMatters:
      "Dividing sensitive tasks among different employees prevents any single person from having enough access to commit or conceal fraud or errors.",
    compliance: ["SOC"],
    recommendation:
      "Define role responsibilities so no single employee controls an entire critical process end-to-end.",
  },
  {
    id: "firewall",
    name: "Firewall",
    category: "Technical",
    status: "Implemented",
    risk: "Low",
    priority: "Maintain",
    whyItMatters:
      "A firewall filters incoming and outgoing network traffic, blocking unauthorized or malicious connections to internal systems.",
    compliance: ["PCI DSS"],
    recommendation:
      "Keep firewall rules and firmware current, and review rule sets on a regular schedule.",
  },
  {
    id: "ids",
    name: "Intrusion Detection System (IDS)",
    category: "Technical",
    status: "Not Implemented",
    risk: "High",
    priority: "High",
    whyItMatters:
      "An IDS monitors network traffic for suspicious activity, giving the IT team visibility into potential intrusions so they can respond quickly.",
    compliance: ["PCI DSS", "SOC"],
    recommendation:
      "Deploy an IDS to monitor network traffic and alert on anomalous activity.",
  },
  {
    id: "backups",
    name: "Backups",
    category: "Technical",
    status: "Not Implemented",
    risk: "High",
    priority: "High",
    whyItMatters:
      "Regular backups ensure data can be restored after loss, corruption, or a ransomware event, and support the disaster recovery plan.",
    compliance: ["SOC"],
    recommendation:
      "Establish a regular backup schedule, including offsite or cloud backup copies.",
  },
  {
    id: "antivirus",
    name: "Antivirus Software",
    category: "Technical",
    status: "Implemented",
    risk: "Low",
    priority: "Maintain",
    whyItMatters:
      "Antivirus software detects and quarantines known malware before it can damage systems or expose data.",
    compliance: ["PCI DSS"],
    recommendation:
      "Keep antivirus definitions and endpoint coverage up to date across all devices.",
  },
  {
    id: "legacy-monitoring",
    name: "Manual Monitoring, Maintenance, and Intervention for Legacy Systems",
    category: "Technical",
    status: "Not Implemented",
    risk: "Medium",
    priority: "High",
    whyItMatters:
      "Legacy (end-of-life) systems no longer receive vendor security updates, so they need structured, human-led monitoring to catch issues automated tools would normally flag.",
    compliance: ["SOC"],
    recommendation:
      "Establish a routine manual monitoring and maintenance schedule for legacy systems.",
  },
  {
    id: "encryption",
    name: "Encryption",
    category: "Technical",
    status: "Not Implemented",
    risk: "Critical",
    priority: "Immediate",
    whyItMatters:
      "Encryption makes sensitive data unreadable to anyone without the correct key, protecting payment transactions and stored customer data. It is currently not applied.",
    compliance: ["PCI DSS", "GDPR", "SOC"],
    recommendation:
      "Encrypt sensitive data both at rest and in transit, prioritizing payment transactions.",
  },
  {
    id: "password-mgmt-system",
    name: "Password Management System",
    category: "Technical",
    status: "Not Implemented",
    risk: "High",
    priority: "Immediate",
    whyItMatters:
      "A password management system securely stores credentials and supports resets and lockout notifications, reducing password-related breaches.",
    compliance: ["PCI DSS"],
    recommendation:
      "Deploy a password management system for secure storage, reset, and lockout handling.",
  },
  {
    id: "physical-locks",
    name: "Physical Locks",
    category: "Physical",
    status: "Implemented",
    risk: "Low",
    priority: "Maintain",
    whyItMatters:
      "Locks on the office, storefront, and warehouse restrict physical access to spaces containing sensitive equipment and inventory.",
    compliance: ["SOC"],
    recommendation:
      "Continue restricting and auditing who holds keys or access credentials to secured areas.",
  },
  {
    id: "cctv",
    name: "Closed-Circuit Television (CCTV) Surveillance",
    category: "Physical",
    status: "Implemented",
    risk: "Low",
    priority: "Monitor",
    whyItMatters:
      "CCTV deters unauthorized activity at the physical location and provides footage for investigating incidents after the fact.",
    compliance: ["SOC"],
    recommendation:
      "Periodically review camera coverage and footage retention practices.",
  },
  {
    id: "fire-detection",
    name: "Fire Detection/Prevention",
    category: "Physical",
    status: "Implemented",
    risk: "Low",
    priority: "Monitor",
    whyItMatters:
      "Fire alarms and sprinkler systems protect inventory, servers, and employees at the single physical office/storefront/warehouse location.",
    compliance: ["SOC"],
    recommendation:
      "Schedule routine inspection and testing of fire alarm and sprinkler systems.",
  },
];
