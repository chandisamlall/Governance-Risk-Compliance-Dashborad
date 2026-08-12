export type TabId =
  | "overview"
  | "tasks"
  | "controls"
  | "compliance"
  | "recommendations";

const TABS: { id: TabId; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "tasks", label: "Tasks" },
  { id: "controls", label: "Controls" },
  { id: "compliance", label: "Compliance" },
  { id: "recommendations", label: "Recommendations" },
];

interface NavbarProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

export default function Navbar({ activeTab, onTabChange }: NavbarProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-700 text-sm font-semibold text-white">
            BT
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">
              Botium Toys
            </p>
            <p className="text-xs text-slate-500">
              Internal IT Audit &amp; GRC Dashboard
            </p>
          </div>
        </div>

        <nav
          aria-label="Main navigation"
          className="flex flex-wrap gap-1 rounded-lg border border-slate-200 bg-slate-50 p-1"
        >
          {TABS.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onTabChange(tab.id)}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-white text-brand-700 shadow-sm ring-1 ring-slate-200"
                    : "text-slate-600 hover:bg-white/60 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
