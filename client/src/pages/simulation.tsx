import { RiskSimulation } from "@/components/RiskSimulation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SimulationPage() {
  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold">Risk Simulation</h1>
          <Badge variant="secondary">Digital Twin</Badge>
        </div>
        <p className="text-muted-foreground">
          Run predictive what-if scenarios to assess project impact under different conditions
        </p>
      </div>

      <Card className="p-6 bg-primary/5 border-primary/20">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
            <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold mb-1">How Simulation Works</h3>
            <p className="text-sm text-muted-foreground">
              Adjust cost, timeline, and resource parameters using the sliders. The AI model will instantly calculate 
              the projected impact on your project outcomes, including updated risk scores and feasibility assessments.
            </p>
          </div>
        </div>
      </Card>

      <RiskSimulation />

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Example Scenarios</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg border hover-elevate">
            <h4 className="font-medium mb-2">Monsoon Delay</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Test impact of 60-day monsoon delay with 15% cost increase
            </p>
            <div className="text-xs font-mono space-y-1">
              <div>Cost: +15%</div>
              <div>Timeline: +60 days</div>
              <div>Resources: 100%</div>
            </div>
          </div>

          <div className="p-4 rounded-lg border hover-elevate">
            <h4 className="font-medium mb-2">Budget Cut</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Evaluate feasibility with 20% budget reduction
            </p>
            <div className="text-xs font-mono space-y-1">
              <div>Cost: -20%</div>
              <div>Timeline: +0 days</div>
              <div>Resources: 80%</div>
            </div>
          </div>

          <div className="p-4 rounded-lg border hover-elevate">
            <h4 className="font-medium mb-2">Fast-Track</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Assess expedited completion with increased resources
            </p>
            <div className="text-xs font-mono space-y-1">
              <div>Cost: +25%</div>
              <div>Timeline: -45 days</div>
              <div>Resources: 150%</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
