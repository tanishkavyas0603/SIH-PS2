import { RiskFlags } from "../RiskFlags";

export default function RiskFlagsExample() {
  const mockFlags = [
    {
      id: "1",
      category: "Budget Validation",
      severity: "low" as const,
      message: "Estimated costs are within acceptable range for similar projects.",
    },
    {
      id: "2",
      category: "Timeline Feasibility",
      severity: "medium" as const,
      message: "Project timeline may be aggressive given the scope of work.",
    },
    {
      id: "3",
      category: "Technical Specifications",
      severity: "high" as const,
      message: "Missing critical engineering details for foundation work.",
    },
  ];

  return (
    <div className="p-4">
      <RiskFlags flags={mockFlags} />
    </div>
  );
}
