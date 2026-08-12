// Shared types for the Botium Toys GRC Dashboard.
// Keeping these separate from data/UI makes it easy to see the exact
// "shape" of information the dashboard expects.

export type ControlStatus = "Implemented" | "Not Implemented";

export type RiskLevel = "Low" | "Medium" | "High" | "Critical";

export type Priority = "Maintain" | "Monitor" | "High" | "Immediate";

export type ControlCategory = "Administrative" | "Technical" | "Physical";

export interface Control {
  id: string;
  name: string;
  category: ControlCategory;
  status: ControlStatus;
  risk: RiskLevel;
  priority: Priority;
  whyItMatters: string;
  compliance: string[];
  recommendation: string;
}

export type ComplianceStatus = "Met" | "Not Met";

export interface ComplianceRequirement {
  id: string;
  practice: string;
  status: ComplianceStatus;
  risk: RiskLevel;
  recommendation: string;
}

export interface ComplianceFramework {
  id: string;
  name: string;
  fullName: string;
  whyItApplies: string;
  requirements: ComplianceRequirement[];
}

export type RecommendationTier = "Immediate" | "Near-Term" | "Ongoing";

export interface Recommendation {
  id: string;
  tier: RecommendationTier;
  recommendation: string;
  relatedControl: string;
  riskAddressed: RiskLevel;
  priority: Priority;
}
