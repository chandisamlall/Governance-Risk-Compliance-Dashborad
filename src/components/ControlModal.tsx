import { useEffect } from "react";
import type { Control } from "../types";
import Badge from "./Badge";
import { statusStyles, riskStyles } from "../lib/badgeStyles";

interface ControlModalProps {
  control: Control;
  onClose: () => void;
}

export default function ControlModal({ control, onClose }: ControlModalProps) {
  // Close on Escape for basic keyboard accessibility.
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="control-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 shadow-lg"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h3
            id="control-modal-title"
            className="text-lg font-semibold text-slate-900"
          >
            {control.name}
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
          >
            ✕
          </button>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          <Badge label={control.status} className={statusStyles[control.status]} />
          <Badge label={`${control.risk} Risk`} className={riskStyles[control.risk]} />
        </div>

        <div className="mt-4 space-y-4 text-sm">
          <div>
            <p className="font-medium text-slate-900">Why it matters</p>
            <p className="mt-1 text-slate-600">{control.whyItMatters}</p>
          </div>

          <div>
            <p className="font-medium text-slate-900">Related compliance areas</p>
            <p className="mt-1 text-slate-600">{control.compliance.join(" / ")}</p>
          </div>

          <div>
            <p className="font-medium text-slate-900">Recommended action</p>
            <p className="mt-1 text-slate-600">{control.recommendation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
