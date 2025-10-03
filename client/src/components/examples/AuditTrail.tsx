import { AuditTrail } from "../AuditTrail";

export default function AuditTrailExample() {
  const mockEvents = [
    {
      id: "1",
      timestamp: "2 hours ago",
      user: "Admin Kumar",
      userRole: "Admin",
      action: "DPR Approved",
      type: "approve" as const,
      details: "Project meets all requirements and budget allocations are justified.",
    },
    {
      id: "2",
      timestamp: "5 hours ago",
      user: "Reviewer Singh",
      userRole: "Reviewer",
      action: "Comment Added",
      type: "comment" as const,
      details: "Geospatial validation shows potential drainage issues in sector B.",
    },
    {
      id: "3",
      timestamp: "1 day ago",
      user: "Official Sharma",
      userRole: "Official",
      action: "DPR Uploaded",
      type: "upload" as const,
      details: "Highway Construction Project - NH-27 Extension (125km)",
    },
  ];

  return (
    <div className="p-4 max-w-2xl">
      <AuditTrail events={mockEvents} />
    </div>
  );
}
