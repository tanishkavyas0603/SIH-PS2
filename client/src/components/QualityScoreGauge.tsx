import { Card } from "@/components/ui/card";

interface QualityScoreGaugeProps {
  score: number;
  title?: string;
}

export function QualityScoreGauge({ score, title = "Quality Score" }: QualityScoreGaugeProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return { bg: "success", text: "success-foreground", stroke: "hsl(var(--success))" };
    if (score >= 50) return { bg: "warning", text: "warning-foreground", stroke: "hsl(var(--warning))" };
    return { bg: "destructive", text: "destructive-foreground", stroke: "hsl(var(--destructive))" };
  };

  const scoreColor = getScoreColor(score);
  const circumference = 2 * Math.PI * 70;
  const offset = circumference - (score / 100) * circumference;

  return (
    <Card className="p-6" data-testid="card-quality-score">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="flex flex-col items-center">
        <div className="relative w-48 h-48">
          <svg className="transform -rotate-90 w-48 h-48">
            <circle
              cx="96"
              cy="96"
              r="70"
              stroke="hsl(var(--border))"
              strokeWidth="12"
              fill="none"
            />
            <circle
              cx="96"
              cy="96"
              r="70"
              stroke={scoreColor.stroke}
              strokeWidth="12"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              className="transition-all duration-1000"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl font-bold" data-testid="text-score-value">{score}</div>
              <div className="text-sm text-muted-foreground">out of 100</div>
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <div className={`h-3 w-3 rounded-full bg-${scoreColor.bg}`}></div>
          <span className="text-sm font-medium">
            {score >= 80 ? "Excellent" : score >= 50 ? "Needs Improvement" : "Critical Issues"}
          </span>
        </div>
      </div>
    </Card>
  );
}
