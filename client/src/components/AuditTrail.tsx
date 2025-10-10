import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Clock, Upload, MessageSquare, CheckCircle, XCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

interface AuditEvent {
  id: string;
  timestamp: string;
  user: string;
  userRole: string;
  action: string;
  type: "upload" | "comment" | "approve" | "reject" | "review";
  details?: string;
}

interface AuditTrailProps {
  events: AuditEvent[];
}

export function AuditTrail({ events }: AuditTrailProps) {
  const { t } = useTranslation();
  const getEventIcon = (type: string) => {
    switch (type) {
      case "upload":
        return Upload;
      case "comment":
        return MessageSquare;
      case "approve":
        return CheckCircle;
      case "reject":
        return XCircle;
      default:
        return Clock;
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case "approve":
        return "text-success";
      case "reject":
        return "text-destructive";
      case "comment":
      case "review":
        return "text-warning";
      default:
        return "text-primary";
    }
  };

  return (
    <Card className="p-6" data-testid="card-audit-trail">
      <h3 className="text-lg font-semibold mb-6">{t('components.auditTrail.title')}</h3>
      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-px bg-border"></div>
        
        <div className="space-y-6">
          {events.map((event, index) => {
            const Icon = getEventIcon(event.type);
            const colorClass = getEventColor(event.type);
            
            return (
              <div key={event.id} className="relative flex gap-4" data-testid={`audit-event-${event.id}`}>
                <div className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-card border-2 flex items-center justify-center ${colorClass}`}>
                  <Icon className="h-5 w-5" />
                </div>
                
                <div className="flex-1 pt-1">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm">{event.action}</span>
                      <Badge variant="secondary" className="text-xs">
                        {event.userRole}
                      </Badge>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {event.timestamp}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback className="text-xs">
                        {event.user.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-muted-foreground">{event.user}</span>
                  </div>
                  
                  {event.details && (
                    <p className="text-sm text-muted-foreground">{event.details}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
