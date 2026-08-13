import InfoCard from "../components/InfoCard";

const SUMMARY_CARDS = [
  { label: "Organization", value: "Botium Toys" },
  { label: "Assessment", value: "Internal IT Audit" },
  { label: "Framework", value: "NIST CSF" },
  { label: "Focus", value: "Security, Risk & Compliance" },
  { label: "Business Environment", value: "Physical + Online" },
  { label: "Regulatory Focus", value: "PCI DSS + GDPR + SOC" },
];

export default function Overview() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <div>
          <p className="text-sm font-medium text-brand-700">Audit Overview</p>
          <h1 className="mt-1 text-2xl font-semibold text-slate-900">
            Botium Toys Internal IT Audit
          </h1>
        </div>

        <div className="space-y-6 rounded-lg border border-slate-200 bg-white p-6 text-sm leading-relaxed text-slate-700 shadow-sm">
          <div>
            <h2 className="mb-2 font-semibold text-slate-900">
              Company Overview
            </h2>
            <p>
              Botium Toys is a small U.S.-based toy company that develops and
              sells toys. It has one physical location that serves as its main
              office, storefront, and warehouse. As the company has expanded
              its online presence, it has gained customers across the U.S. and
              internationally, increasing the demands on its IT department.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-semibold text-slate-900">
              Audit Purpose
            </h2>
            <p>
              The IT manager is conducting an internal IT audit to evaluate the
              company’s current security posture, maintain compliance, and
              protect business operations. The audit will help identify
              potential risks, threats, and vulnerabilities affecting critical
              assets.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-semibold text-slate-900">Goals</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Identify cybersecurity risks and vulnerabilities.</li>
              <li>Protect critical company and customer assets.</li>
              <li>Maintain compliance with applicable regulations.</li>
              <li>
                Evaluate security related to online payment processing.
              </li>
              <li>
                Review compliance requirements for conducting business in the
                European Union (EU).
              </li>
              <li>
                Reduce the potential for security incidents, financial losses,
                and regulatory fines.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 font-semibold text-slate-900">
              Overall Audit Goal
            </h2>
            <p className="font-medium text-slate-900">
              The goal of the audit is to provide an overview of the risks
              and/or fines that the company might experience due to the current
              state of its security posture.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
          At a Glance
        </h2>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {SUMMARY_CARDS.map((card) => (
            <InfoCard
              key={card.label}
              label={card.label}
              value={card.value}
            />
          ))}
        </div>
      </section>
    </div>
  );
}