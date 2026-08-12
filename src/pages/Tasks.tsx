const SCOPE_DOC_URL =
  "https://docs.google.com/document/d/1s2u_RuhRAI40JSh-eZHvaFsV1ZMxcNSWXifHDTOsgFc/template/preview#heading=h.evidx83t54sc";

const AUDIT_STEPS = [
  {
    step: "1. Review",
    description:
      "Review the IT manager's scope, goals, assets, and risk assessment.",
  },
  {
    step: "2. Assess Controls",
    description:
      "Determine whether the identified security controls are currently in place.",
  },
  {
    step: "3. Assess Compliance",
    description:
      "Determine whether Botium Toys currently follows the relevant compliance best practices.",
  },
  {
    step: "4. Identify Gaps",
    description: "Identify controls and compliance practices that are missing.",
  },
  {
    step: "5. Prioritize Risks",
    description: "Determine which gaps should receive the most attention.",
  },
  {
    step: "6. Recommend Actions",
    description:
      "Provide practical recommendations for improving the organization's security posture.",
  },
];

export default function Tasks() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <div>
          <p className="text-sm font-medium text-brand-700">Audit Tasks</p>
          <h1 className="mt-1 text-2xl font-semibold text-slate-900">
            Task Overview
          </h1>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm leading-relaxed text-slate-700">
            Your task is to review the IT manager's scope, goals, and risk
            assessment report. Then, perform an internal audit by completing
            a controls and compliance checklist.
          </p>

          <a
            href={SCOPE_DOC_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-md bg-brand-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-900"
          >
            View Scope, Goals &amp; Risk Assessment
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
          Audit Process
        </h2>
        <div className="space-y-3">
          {AUDIT_STEPS.map((item) => (
            <div
              key={item.step}
              className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
            >
              <p className="text-sm font-semibold text-slate-900">
                {item.step}
              </p>
              <p className="mt-1 text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
