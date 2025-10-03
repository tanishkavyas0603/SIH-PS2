import { Card } from "@/components/ui/card";
import { CheckCircle, AlertTriangle, XCircle, Info } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Finding {
  category: string;
  severity: "positive" | "neutral" | "warning" | "critical";
  message: string;
  impact: number;
}

interface AIExplanationProps {
  findings: Finding[];
}

export function AIExplanation({ findings }: AIExplanationProps) {
  const getSeverityConfig = (severity: string) => {
    switch (severity) {
      case "positive":
        return { icon: CheckCircle, color: "text-success", bg: "bg-success/10" };
      case "warning":
        return { icon: AlertTriangle, color: "text-warning", bg: "bg-warning/10" };
      case "critical":
        return { icon: XCircle, color: "text-destructive", bg: "bg-destructive/10" };
      default:
        return { icon: Info, color: "text-primary", bg: "bg-primary/10" };
    }
  };

  return (
    <Card className="p-6" data-testid="card-ai-explanation">
      <h3 className="text-lg font-semibold mb-4">AI Analysis Explanation</h3>
      <p className="text-sm text-muted-foreground mb-6">
        Our AI model evaluated this DPR across multiple dimensions. Here's what influenced the quality score:
      </p>

      <Accordion type="single" collapsible className="w-full">
        {findings.map((finding, index) => {
          const config = getSeverityConfig(finding.severity);
          const Icon = config.icon;

          return (
            <AccordionItem key={index} value={`item-${index}`} data-testid={`finding-${index}`}>
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3 flex-1">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-md ${config.bg}`}>
                    <Icon className={`h-5 w-5 ${config.color}`} />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-medium">{finding.category}</div>
                    <div className="text-sm text-muted-foreground">
                      Impact: {finding.impact > 0 ? "+" : ""}{finding.impact} points
                    </div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="pl-14 pr-4 pb-4">
                  <p className="text-sm">{finding.message}</p>
                  
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex-1 h-2 bg-border rounded-full overflow-hidden">
                      <div
                        className={`h-full ${finding.impact > 0 ? "bg-success" : "bg-destructive"}`}
                        style={{ width: `${Math.abs(finding.impact)}%` }}
                      />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground">
                      {Math.abs(finding.impact)}%
                    </span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Card>
  );
}
