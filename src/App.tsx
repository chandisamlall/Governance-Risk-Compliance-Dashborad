import { useState } from "react";
import Navbar, { type TabId } from "./components/Navbar";
import Overview from "./pages/Overview";
import Tasks from "./pages/Tasks";
import Controls from "./pages/Controls";
import Compliance from "./pages/Compliance";
import Recommendations from "./pages/Recommendations";

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        {activeTab === "overview" && <Overview />}
        {activeTab === "tasks" && <Tasks />}
        {activeTab === "controls" && <Controls />}
        {activeTab === "compliance" && <Compliance />}
        {activeTab === "recommendations" && <Recommendations />}
      </main>

      <footer className="border-t border-slate-200 bg-white py-6">
        <div className="mx-auto max-w-6xl px-4 text-xs text-slate-500 sm:px-6">
          Simulated internal audit for a fictional company (Botium Toys),
          built as a cybersecurity/GRC portfolio project.
        </div>
      </footer>
    </div>
  );
}
