import { botiumCompliance } from "../data/botiumCompliance";
import Badge from "../components/Badge";
import { complianceStatusStyles, riskStyles } from "../lib/badgeStyles";

export default function Compliance() {
  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm font-medium text-brand-700">Compliance Checklist</p>
        <h1 className="mt-1 text-2xl font-semibold text-slate-900">
          Regulatory Compliance
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">
          Botium Toys must consider three frameworks based on how it does
          business: accepting online payments (PCI DSS), serving customers
          in the E.U. (GDPR), and maintaining sound internal controls (SOC).
        </p>
      </section>

      {botiumCompliance.map((framework) => (
        <section
          key={framework.id}
          className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-slate-900">
              {framework.name}{" "}
              <span className="text-sm font-normal text-slate-500">
                ({framework.fullName})
              </span>
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              {framework.whyItApplies}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="py-2 pr-4 font-medium">Best Practice</th>
                  <th className="py-2 pr-4 font-medium">Status</th>
                  <th className="py-2 pr-4 font-medium">Risk</th>
                  <th className="py-2 font-medium">Recommendation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {framework.requirements.map((req) => (
                  <tr key={req.id}>
                    <td className="py-3 pr-4 text-slate-800">{req.practice}</td>
                    <td className="py-3 pr-4">
                      <Badge
                        label={req.status}
                        className={complianceStatusStyles[req.status]}
                      />
                    </td>
                    <td className="py-3 pr-4">
                      <Badge label={req.risk} className={riskStyles[req.risk]} />
                    </td>
                    <td className="py-3 text-slate-600">{req.recommendation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}
    </div>
  );
}
