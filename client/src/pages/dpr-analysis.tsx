import { useState } from "react";
import { QualityScoreGauge } from "@/components/QualityScoreGauge";
import { RiskFlags } from "@/components/RiskFlags";
import { AIExplanation } from "@/components/AIExplanation";
import { GeospatialMap } from "@/components/GeospatialMap";
import { CommentThread } from "@/components/CommentThread";
import { AuditTrail } from "@/components/AuditTrail";
import { ExportReportsDialog } from "@/components/ExportReportsDialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, CheckCircle, XCircle } from "lucide-react";
import { Link } from "wouter";

export default function DPRAnalysis() {
  const [status, setStatus] = useState<"pending" | "under_review" | "approved" | "rejected">("under_review");

  const dprData = {
    id: "DPR-2024-001",
    title: "Highway Construction NH-27 Extension",
    submittedBy: "Official Sharma",
    submittedDate: "2024-10-01",
    location: "Guwahati to Jorhat, Assam",
    budget: "₹125 Crore",
    timeline: "18 months",
    score: 85,
  };

  const mockRiskFlags = [
    {
      id: "1",
      category: "Budget Validation",
      severity: "low" as const,
      message: "Estimated costs are within acceptable range for similar highway projects.",
    },
    {
      id: "2",
      category: "Timeline Feasibility",
      severity: "medium" as const,
      message: "Project timeline may need adjustment for monsoon season delays.",
    },
    {
      id: "3",
      category: "Environmental Impact",
      severity: "low" as const,
      message: "Environmental clearance documentation is complete and verified.",
    },
  ];

  const mockFindings = [
    {
      category: "Completeness Assessment",
      severity: "positive" as const,
      message: "All required sections including technical drawings, BOQ, and environmental impact assessments are comprehensive.",
      impact: 15,
    },
    {
      category: "Budget Feasibility",
      severity: "warning" as const,
      message: "Material costs are slightly elevated compared to regional averages, requires verification with suppliers.",
      impact: -5,
    },
    {
      category: "Technical Specifications",
      severity: "positive" as const,
      message: "Engineering standards fully comply with IRC guidelines. Soil analysis and foundation design are thorough.",
      impact: 12,
    },
  ];

  const mockComments = [
    {
      id: "1",
      author: "Reviewer Patel",
      role: "reviewer",
      timestamp: "2 hours ago",
      content: "Budget allocation appears reasonable. Recommend verifying contractor credentials and ensuring adequate monsoon preparation provisions.",
    },
  ];

  const mockMapMarkers = [
    { lat: 26.1445, lng: 91.7362, title: "Project Start - Guwahati", risk: "low" as const },
    { lat: 26.7509, lng: 94.2037, title: "Project End - Jorhat", risk: "low" as const },
  ];

  const mockAuditEvents = [
    {
      id: "1",
      timestamp: "2 hours ago",
      user: "Reviewer Patel",
      userRole: "Reviewer",
      action: "Comment Added",
      type: "comment" as const,
      details: "Added feedback on budget allocation and timeline.",
    },
    {
      id: "2",
      timestamp: "1 day ago",
      user: "AI System",
      userRole: "System",
      action: "Quality Assessment Completed",
      type: "review" as const,
      details: "AI analysis generated quality score of 85/100.",
    },
    {
      id: "3",
      timestamp: "1 day ago",
      user: "Official Sharma",
      userRole: "Official",
      action: "DPR Uploaded",
      type: "upload" as const,
      details: "Highway Construction NH-27 Extension submitted for review.",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild data-testid="button-back">
          <Link href="/dashboard">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold" data-testid="text-dpr-title">{dprData.title}</h1>
            <Badge variant="secondary">{dprData.id}</Badge>
          </div>
          <p className="text-muted-foreground">
            Submitted by {dprData.submittedBy} on {dprData.submittedDate}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <ExportReportsDialog dprId={dprData.id} dprTitle={dprData.title} />
          <Button variant="outline" className="gap-2" onClick={() => setStatus("rejected")} data-testid="button-reject">
            <XCircle className="h-4 w-4" />
            Reject
          </Button>
          <Button className="gap-2" onClick={() => setStatus("approved")} data-testid="button-approve">
            <CheckCircle className="h-4 w-4" />
            Approve
          </Button>
        </div>
      </div>

      <Card className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Location</p>
            <p className="font-medium">{dprData.location}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Budget</p>
            <p className="font-medium font-mono">{dprData.budget}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Timeline</p>
            <p className="font-medium">{dprData.timeline}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Status</p>
            <Badge variant={status === "approved" ? "default" : status === "rejected" ? "destructive" : "secondary"}>
              {status === "approved" ? "Approved" : status === "rejected" ? "Rejected" : "Under Review"}
            </Badge>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <QualityScoreGauge score={dprData.score} />
        <div className="lg:col-span-2">
          <RiskFlags flags={mockRiskFlags} />
        </div>
      </div>

      <Tabs defaultValue="explanation" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="explanation" data-testid="tab-explanation">AI Explanation</TabsTrigger>
          <TabsTrigger value="map" data-testid="tab-map">Geospatial</TabsTrigger>
          <TabsTrigger value="comments" data-testid="tab-comments">Comments</TabsTrigger>
          <TabsTrigger value="audit" data-testid="tab-audit">Audit Trail</TabsTrigger>
        </TabsList>

        <TabsContent value="explanation" className="mt-6">
          <AIExplanation findings={mockFindings} />
        </TabsContent>

        <TabsContent value="map" className="mt-6">
          <GeospatialMap markers={mockMapMarkers} />
        </TabsContent>

        <TabsContent value="comments" className="mt-6">
          <CommentThread comments={mockComments} onAddComment={(content) => console.log("New comment:", content)} />
        </TabsContent>

        <TabsContent value="audit" className="mt-6">
          <AuditTrail events={mockAuditEvents} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
