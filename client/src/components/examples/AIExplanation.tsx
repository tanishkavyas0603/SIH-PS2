import { AIExplanation } from "../AIExplanation";

export default function AIExplanationExample() {
  const mockFindings = [
    {
      category: "Completeness Assessment",
      severity: "positive" as const,
      message: "All required sections are present with detailed specifications. Technical drawings and BOQ are comprehensive.",
      impact: 15,
    },
    {
      category: "Budget Feasibility",
      severity: "warning" as const,
      message: "Estimated costs are 12% higher than similar projects in the region. Material pricing needs verification.",
      impact: -8,
    },
    {
      category: "Timeline Analysis",
      severity: "critical" as const,
      message: "Proposed timeline doesn't account for monsoon delays. High risk of schedule overrun.",
      impact: -12,
    },
    {
      category: "Technical Specifications",
      severity: "positive" as const,
      message: "Engineering standards comply with IRC guidelines. Soil analysis reports are thorough.",
      impact: 10,
    },
  ];

  return (
    <div className="p-4 max-w-2xl">
      <AIExplanation findings={mockFindings} />
    </div>
  );
}
