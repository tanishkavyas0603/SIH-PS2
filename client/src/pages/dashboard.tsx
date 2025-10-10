import { useState } from "react";
import { StatCard } from "@/components/StatCard";
import { QualityScoreGauge } from "@/components/QualityScoreGauge";
import { RiskFlags } from "@/components/RiskFlags";
import { AuditTrail } from "@/components/AuditTrail";
import { ExportReportsDialog } from "@/components/ExportReportsDialog";
import { FileText, Clock, CheckCircle, XCircle, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useTranslation } from "react-i18next";

export default function Dashboard() {
  const { t } = useTranslation();
  const [selectedRole] = useState<"official" | "reviewer" | "admin">("admin");

  const recentDPRs = [
    {
      id: "DPR-2024-001",
      title: "Highway Construction NH-27 Extension",
      status: "approved",
      score: 85,
      submittedBy: "Official Sharma",
      date: "2024-10-01",
    },
    {
      id: "DPR-2024-002",
      title: "Bridge Construction - Brahmaputra Crossing",
      status: "under_review",
      score: 72,
      submittedBy: "Official Kumar",
      date: "2024-10-02",
    },
    {
      id: "DPR-2024-003",
      title: "Rural Road Development Phase 3",
      status: "pending",
      score: 0,
      submittedBy: "Official Patel",
      date: "2024-10-03",
    },
    {
      id: "DPR-2024-004",
      title: "Water Supply Pipeline Expansion",
      status: "rejected",
      score: 42,
      submittedBy: "Official Das",
      date: "2024-09-30",
    },
  ];

  const mockRiskFlags = [
    {
      id: "1",
      category: "Budget Validation",
      severity: "low" as const,
      message: "Recent DPRs show improved cost estimation accuracy.",
    },
    {
      id: "2",
      category: "Timeline Feasibility",
      severity: "medium" as const,
      message: "3 projects currently experiencing delays due to monsoon.",
    },
  ];

  const mockAuditEvents = [
    {
      id: "1",
      timestamp: "2 hours ago",
      user: "Admin Kumar",
      userRole: "Admin",
      action: "DPR Approved",
      type: "approve" as const,
      details: "Highway Construction NH-27 approved after review.",
    },
    {
      id: "2",
      timestamp: "4 hours ago",
      user: "Reviewer Singh",
      userRole: "Reviewer",
      action: "Comment Added",
      type: "comment" as const,
      details: "Requested additional soil analysis for bridge foundation.",
    },
    {
      id: "3",
      timestamp: "Yesterday",
      user: "Official Patel",
      userRole: "Official",
      action: "DPR Uploaded",
      type: "upload" as const,
      details: "Rural Road Development Phase 3 submitted for assessment.",
    },
  ];

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "approved":
        return { label: t('status.approved'), variant: "default" as const, color: "text-success" };
      case "under_review":
        return { label: t('status.underReview'), variant: "secondary" as const, color: "text-warning" };
      case "rejected":
        return { label: t('status.rejected'), variant: "destructive" as const, color: "text-destructive" };
      default:
        return { label: t('status.pending'), variant: "outline" as const, color: "text-muted-foreground" };
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold" data-testid="text-page-title">{t('dashboard.title')}</h1>
          <p className="text-muted-foreground mt-1">
            {t('dashboard.welcome')}
          </p>
        </div>
        <ExportReportsDialog />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatCard
          title={t('dashboard.totalDprs')}
          value="1,234"
          description="All time submissions"
          icon={FileText}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title={t('dashboard.underReview')}
          value="42"
          description="Awaiting assessment"
          icon={Clock}
        />
        <StatCard
          title={t('dashboard.approved')}
          value="856"
          description="This quarter"
          icon={CheckCircle}
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title={t('dashboard.avgQualityScore')}
          value="76.5"
          description="Current average"
          icon={TrendingUp}
          trend={{ value: 3, isPositive: false }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">{t('dashboard.recentDprs')}</h3>
              <Button variant="outline" size="sm" asChild data-testid="button-view-all">
                <Link href="/all-dprs">View All</Link>
              </Button>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>{t('dashboard.status')}</TableHead>
                  <TableHead>{t('dashboard.qualityScore')}</TableHead>
                  <TableHead>{t('dashboard.submittedBy')}</TableHead>
                  <TableHead>{t('dashboard.date')}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentDPRs.map((dpr) => {
                  const statusConfig = getStatusConfig(dpr.status);
                  return (
                    <TableRow key={dpr.id} className="hover-elevate" data-testid={`row-dpr-${dpr.id}`}>
                      <TableCell className="font-mono text-sm">{dpr.id}</TableCell>
                      <TableCell className="font-medium">{dpr.title}</TableCell>
                      <TableCell>
                        <Badge variant={statusConfig.variant}>{statusConfig.label}</Badge>
                      </TableCell>
                      <TableCell>
                        {dpr.score > 0 ? (
                          <span className="font-mono">{dpr.score}/100</span>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </TableCell>
                      <TableCell>{dpr.submittedBy}</TableCell>
                      <TableCell className="text-muted-foreground">{dpr.date}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Card>
        </div>

        <div>
          <QualityScoreGauge score={76} title="Overall Quality Average" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RiskFlags flags={mockRiskFlags} />
        <AuditTrail events={mockAuditEvents} />
      </div>
    </div>
  );
}
