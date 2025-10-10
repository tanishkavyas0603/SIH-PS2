import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

interface RiskFlag {
  id: string;
  category: string;
  severity: "low" | "medium" | "high";
  message: string;
}

interface RiskFlagsProps {
  flags: RiskFlag[];
}

export function RiskFlags({ flags }: RiskFlagsProps) {
  const { t } = useTranslation();
  const getSeverityConfig = (severity: string) => {
    switch (severity) {
      case "low":
        return { icon: CheckCircle, variant: "default" as const, color: "text-success" };
      case "medium":
        return { icon: AlertTriangle, variant: "secondary" as const, color: "text-warning" };
      case "high":
        return { icon: XCircle, variant: "destructive" as const, color: "text-destructive" };
      default:
        return { icon: AlertTriangle, variant: "secondary" as const, color: "text-muted-foreground" };
    }
  };

  return (
    <Card className="p-6" data-testid="card-risk-flags">
      <h3 className="text-lg font-semibold mb-4">{t('components.riskFlags.title')}</h3>
      <div className="space-y-3">
        {flags.map((flag) => {
          const config = getSeverityConfig(flag.severity);
          const Icon = config.icon;
          return (
            <div
              key={flag.id}
              className="flex items-start gap-3 p-3 rounded-md hover-elevate"
              data-testid={`risk-flag-${flag.id}`}
            >
              <Icon className={`h-5 w-5 mt-0.5 ${config.color}`} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium">{flag.category}</span>
                  <Badge variant={config.variant} className="capitalize">
                    {flag.severity}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{flag.message}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
