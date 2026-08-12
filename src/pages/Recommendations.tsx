import { botiumRecommendations } from "../data/botiumRecommendations";
import Badge from "../components/Badge";
import { priorityStyles, riskStyles } from "../lib/badgeStyles";
import type { RecommendationTier } from "../types";

const TIERS: {
  id: RecommendationTier;
  title: string;
  description: string;
}[] = [
  {
    id: "Immediate",
    title: "Immediate",
    description:
      "Controls or compliance gaps that could create significant security, operational, financial, or regulatory risk.",
  },
  {
    id: "Near-Term",
    title: "Near-Term",
    description:
      "Important improvements that should follow the highest-priority items.",
  },
  {
    id: "Ongoing",
    title: "Ongoing",
    description:
      "Controls that should be continuously monitored or reviewed.",
  },
];

export default function Recommendations() {
  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm font-medium text-brand-700">Recommendations</p>
        <h1 className="mt-1 text-2xl font-semibold text-slate-900">
          Next Steps for Botium Toys
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">
          Recommendations are grouped by urgency, based on the gaps
          identified in the controls and compliance checklists.
        </p>
      </section>

      {TIERS.map((tier) => {
        const items = botiumRecommendations.filter((r) => r.tier === tier.id);
        if (items.length === 0) return null;

        return (
          <section key={tier.id}>
            <div className="mb-3">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                {tier.title}
              </h2>
              <p className="text-sm text-slate-600">{tier.description}</p>
            </div>

            <div className="space-y-3">
              {items.map((rec) => (
                <div
                  key={rec.id}
                  className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <p className="text-sm font-medium text-slate-900">
                    {rec.recommendation}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500">
                    <span>
                      Related control:{" "}
                      <span className="font-medium text-slate-700">
                        {rec.relatedControl}
                      </span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      Risk addressed:
                      <Badge
                        label={rec.riskAddressed}
                        className={riskStyles[rec.riskAddressed]}
                      />
                    </span>
                    <span className="flex items-center gap-1.5">
                      Priority:
                      <Badge
                        label={rec.priority}
                        className={priorityStyles[rec.priority]}
                      />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
