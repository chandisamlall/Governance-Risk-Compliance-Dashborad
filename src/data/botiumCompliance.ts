// ---------------------------------------------------------------------------
// BOTIUM TOYS — COMPLIANCE CHECKLIST DATA
// ---------------------------------------------------------------------------
// Single source of truth for the Compliance tab. Edit status/risk/
// recommendation below and the Compliance page updates automatically.
//
//   - status: "Met" | "Not Met"
//   - risk:   "Low" | "Medium" | "High" | "Critical"
//
// These reflect the compliance checklist from the Botium Toys internal
// audit scenario: whether the company currently follows each best practice
// tied to PCI DSS, GDPR, and SOC.
// ---------------------------------------------------------------------------

import type { ComplianceFramework } from "../types";

export const botiumCompliance: ComplianceFramework[] = [
  {
    id: "pci-dss",
    name: "PCI DSS",
    fullName: "Payment Card Industry Data Security Standard",
    whyItApplies:
      "Botium Toys processes and accepts online payments, including customers' credit card information, both domestically and internationally. PCI DSS governs how that cardholder data must be stored, processed, and transmitted securely.",
    requirements: [
      {
        id: "pci-1",
        practice:
          "Only authorized users have access to customers' credit card information.",
        status: "Not Met",
        risk: "Critical",
        recommendation:
          "Restrict credit card data access to specific authorized roles using least-privilege controls.",
      },
      {
        id: "pci-2",
        practice:
          "Credit card information is stored, accepted, processed, and transmitted internally in a secure environment.",
        status: "Not Met",
        risk: "Critical",
        recommendation:
          "Store and process cardholder data only within a secured, access-controlled environment.",
      },
      {
        id: "pci-3",
        practice:
          "Implement data encryption procedures to secure credit card transaction touchpoints and data.",
        status: "Not Met",
        risk: "Critical",
        recommendation:
          "Encrypt cardholder data at rest and in transit, prioritizing online transaction touchpoints.",
      },
      {
        id: "pci-4",
        practice: "Adopt secure password management policies.",
        status: "Not Met",
        risk: "High",
        recommendation:
          "Implement a password management system alongside a formal password policy.",
      },
    ],
  },
  {
    id: "gdpr",
    name: "GDPR",
    fullName: "General Data Protection Regulation",
    whyItApplies:
      "Botium Toys' online store attracts customers in the European Union. GDPR governs how the personal data of E.U. residents must be protected, and requires timely notification if that data is compromised.",
    requirements: [
      {
        id: "gdpr-1",
        practice: "E.U. customers' data is kept private and secure.",
        status: "Not Met",
        risk: "High",
        recommendation:
          "Apply encryption and access controls to protect E.U. customer data in storage and transit.",
      },
      {
        id: "gdpr-2",
        practice:
          "There is a plan to notify E.U. customers within 72 hours if their data is compromised.",
        status: "Met",
        risk: "Low",
        recommendation:
          "Keep the breach-notification plan current and test it periodically.",
      },
      {
        id: "gdpr-3",
        practice: "Data is properly classified and inventoried.",
        status: "Not Met",
        risk: "Medium",
        recommendation:
          "Classify already-inventoried data by sensitivity level to prioritize protection efforts.",
      },
      {
        id: "gdpr-4",
        practice:
          "Privacy policies, procedures, and processes are documented and maintained.",
        status: "Met",
        risk: "Low",
        recommendation:
          "Review privacy policies on a regular cadence to keep them current with practice.",
      },
    ],
  },
  {
    id: "soc",
    name: "SOC",
    fullName: "System and Organization Controls (SOC 1 / SOC 2)",
    whyItApplies:
      "SOC reports evaluate an organization's internal controls over financial reporting (SOC 1) and over security, availability, and confidentiality of data (SOC 2). Botium Toys needs appropriate user access and data protection controls to support both.",
    requirements: [
      {
        id: "soc-1",
        practice: "User access policies are established.",
        status: "Not Met",
        risk: "High",
        recommendation:
          "Establish formal user access policies built on the principle of least privilege.",
      },
      {
        id: "soc-2",
        practice: "Sensitive data (PII/SPII) is confidential/private.",
        status: "Not Met",
        risk: "High",
        recommendation:
          "Apply encryption and access restrictions to protect PII/SPII from unauthorized exposure.",
      },
      {
        id: "soc-3",
        practice:
          "Data integrity ensures data is consistent, complete, accurate, and validated.",
        status: "Met",
        risk: "Low",
        recommendation:
          "Continue existing data validation practices and monitor for changes.",
      },
      {
        id: "soc-4",
        practice: "Data is available to authorized individuals.",
        status: "Not Met",
        risk: "Medium",
        recommendation:
          "Limit data availability to individuals with a verified, role-based business need.",
      },
    ],
  },
];
