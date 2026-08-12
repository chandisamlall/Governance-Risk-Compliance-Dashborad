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

        <div className="space-y-4 rounded-lg border border-slate-200 bg-white p-6 text-sm leading-relaxed text-slate-700 shadow-sm">
          <p>
            Botium Toys is a small U.S. business that develops and sells
            toys. The business has a single physical location, which serves
            as their main office, storefront, and warehouse for their
            products. However, Botium Toys' online presence has grown,
            attracting customers in the U.S. and abroad. As a result, their
            information technology (IT) department is under increasing
            pressure to support their online market worldwide.
          </p>
          <p>
            The manager of the IT department has decided that an internal IT
            audit needs to be conducted. She is concerned about maintaining
            compliance and business operations as the company grows without
            a clear plan. She believes an internal audit can help secure the
            company's infrastructure and identify and mitigate potential
            risks, threats, or vulnerabilities to critical assets.
          </p>
          <p>
            The IT manager is also interested in ensuring that Botium Toys
            complies with regulations related to internally processing and
            accepting online payments and conducting business in the
            European Union (E.U.).
          </p>
          <p>
            The IT manager starts by implementing the National Institute of
            Standards and Technology Cybersecurity Framework (NIST CSF),
            establishing an audit scope and goals, listing assets currently
            managed by the IT department, and completing a risk assessment.
          </p>
          <p className="font-medium text-slate-900">
            The goal of the audit is to provide an overview of the risks
            and/or fines that the company might experience due to the
            current state of its security posture.
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
          At a Glance
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {SUMMARY_CARDS.map((card) => (
            <InfoCard key={card.label} label={card.label} value={card.value} />
          ))}
        </div>
      </section>
    </div>
  );
}
