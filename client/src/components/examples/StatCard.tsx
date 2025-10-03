import { StatCard } from "../StatCard";
import { FileText, Clock, CheckCircle, AlertTriangle } from "lucide-react";

export default function StatCardExample() {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      <StatCard
        title="Total DPRs"
        value="1,234"
        description="All time submissions"
        icon={FileText}
        trend={{ value: 12, isPositive: true }}
      />
      <StatCard
        title="Pending Review"
        value="42"
        description="Awaiting assessment"
        icon={Clock}
      />
      <StatCard
        title="Approved"
        value="856"
        description="This quarter"
        icon={CheckCircle}
        trend={{ value: 8, isPositive: true }}
      />
      <StatCard
        title="Avg Quality Score"
        value="76.5"
        description="Current average"
        icon={AlertTriangle}
        trend={{ value: 3, isPositive: false }}
      />
    </div>
  );
}
