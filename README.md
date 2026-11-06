# Botium Toys GRC Risk & Compliance Dashboard

A small, interactive dashboard that presents a simulated internal IT audit and GRC (Governance, Risk, and Compliance) assessment for **Botium Toys**, a fictional U.S. toy company with a growing online business.

> **This is a simulated academic/portfolio project.** Botium Toys is a fictional company. Nothing in this dashboard comes from a real organization, a real scan, or a real audit.

---

## Overview

Botium Toys is a small business with a single physical location (office, storefront, and warehouse) and a fast-growing online store serving customers in the U.S. and abroad. The IT manager wants an internal audit to understand the company's security posture and the risks or fines it could face, particularly around online payments and doing business in the European Union.

This project turns the audit's controls and compliance checklists into a simple, risk-focused dashboard that an IT manager could read at a glance.

## Purpose

The goal is to show how a basic audit checklist can be translated into clear GRC reporting:

- Which security controls are in place, and which are missing?
- Which gaps create the most risk?
- Where is the company out of step with PCI DSS, GDPR, and SOC expectations?
- What should be fixed first?

It is intentionally **not** a security product. There is no scanning, monitoring, login, or backend. It is a static reporting dashboard built from structured assessment data.

## What the Dashboard Shows

| Tab | What it contains |
|---|---|
| **Overview** | Background on Botium Toys, the reason for the audit, and a summary of the assessment's framework and regulatory focus. |
| **Tasks** | The audit task, a link to the IT manager's scope, goals, and risk assessment report, and a six-step audit process. |
| **Controls** | A risk summary, a risk distribution bar chart, and a controls checklist (status, risk, priority). Click any control for details and a recommendation. |
| **Compliance** | PCI DSS, GDPR, and SOC best practices, each with a status, risk rating, and recommendation. |
| **Recommendations** | Actions grouped as Immediate, Near-Term, and Ongoing, tied back to the related control and risk. |

The risk summary cards and bar chart are **calculated automatically** from the controls data. No totals are hard-coded.

## Frameworks and Regulations

- **NIST Cybersecurity Framework (NIST CSF):** the framework the IT manager adopted to structure the audit
- **PCI DSS:** relevant because Botium Toys accepts and processes online payments
- **GDPR:** relevant because Botium Toys serves customers in the European Union
- **SOC (SOC 1 / SOC 2):** relevant to user access policies and overall data safety

## Key GRC Concepts Demonstrated

- Security controls (administrative, technical, and physical)
- Risk assessment and risk rating
- Compliance gap analysis
- Control-to-compliance mapping
- Risk prioritization
- Remediation recommendations

## How the Assessment Works

### Where the data comes from

- **Implemented / Not Implemented** (controls) and **Met / Not Met** (compliance) come from the Botium Toys audit scenario's controls and compliance checklist.
- **Risk and priority ratings** are the auditor's judgment, applied consistently using the scale below. They are not scores produced by any tool.

### Rating scale

| Risk | How it was applied |
|---|---|
| **Critical** | The gap directly exposes customer or payment data (e.g., all employees can access cardholder data; data is not encrypted). |
| **High** | A significant security or continuity gap that is not itself a direct data exposure (e.g., no IDS, no backups, no disaster recovery plan). |
| **Medium** | A meaningful gap with less immediate impact (e.g., separation of duties, legacy system monitoring). |
| **Low** | The control is already in place. |

| Priority | Meaning |
|---|---|
| **Immediate** | Fix first. Tied to direct regulatory, financial, or data-exposure risk. |
| **High** | Important; should follow the Immediate items. |
| **Monitor** | In place, but should be reviewed or tested periodically. |
| **Maintain** | In place; keep it working as-is. |

### Limitations

- The checklist answers reflect the audit scenario as commonly completed in public case-study write-ups. Verify them against the official scope, goals, and risk assessment report linked on the Tasks tab, and edit the data files if anything differs.
- No statistics, employee counts, revenue figures, incident histories, or compliance certifications are included, because none are specified in the scenario.
- Anything not covered by the scenario is left out rather than guessed.

## Technology

- React
- TypeScript
- Vite
- Tailwind CSS
- Git / GitHub

No backend, database, authentication, or external APIs are used.

## Getting Started

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project Structure

```text
src/
├── data/                         # Assessment content: edit these to update the dashboard
│   ├── botiumControls.ts
│   ├── botiumCompliance.ts
│   └── botiumRecommendations.ts
├── types/index.ts                # Shared TypeScript types
├── lib/
│   ├── badgeStyles.ts            # Badge colors for status / risk / priority
│   └── riskSummary.ts            # Risk totals calculated from the controls data
├── components/                   # Navbar, Badge, ControlModal, RiskBarChart, etc.
├── pages/                        # One file per tab
├── App.tsx                       # Tab navigation (simple state, no router library)
└── main.tsx
```

## Editing the Assessment Data

The UI never hard-codes assessment content. Everything on the dashboard is read from three files:

| File | Controls |
|---|---|
| `src/data/botiumControls.ts` | Each control's `status`, `risk`, `priority`, "why it matters" text, related compliance areas, and recommendation |
| `src/data/botiumCompliance.ts` | PCI DSS, GDPR, and SOC best practices with `status`, `risk`, and recommendation |
| `src/data/botiumRecommendations.ts` | Recommendations grouped into Immediate, Near-Term, and Ongoing |

Allowed values:

- Control `status`: `"Implemented"` or `"Not Implemented"`
- Compliance `status`: `"Met"` or `"Not Met"`
- `risk`: `"Low"`, `"Medium"`, `"High"`, or `"Critical"`
- `priority`: `"Maintain"`, `"Monitor"`, `"High"`, or `"Immediate"`

For example, change a control from `"Not Implemented"` to `"Implemented"` and the risk summary cards, bar chart, and tables update automatically. TypeScript will flag any value that isn't in the allowed list.

## Disclaimer

This project is for educational and portfolio purposes only. It is not a real audit, a compliance determination, or professional security advice.
