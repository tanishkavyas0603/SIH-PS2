import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { RotateCcw } from "lucide-react";

interface SimulationParams {
  costAdjustment: number;
  timelineExtension: number;
  resourceMultiplier: number;
}

export function RiskSimulation() {
  const [params, setParams] = useState<SimulationParams>({
    costAdjustment: 0,
    timelineExtension: 0,
    resourceMultiplier: 100,
  });

  const baseData = {
    cost: 5000000,
    timeline: 365,
    riskScore: 72,
  };

  const simulatedData = {
    cost: baseData.cost * (1 + params.costAdjustment / 100),
    timeline: baseData.timeline + params.timelineExtension,
    riskScore: Math.min(100, Math.max(0, baseData.riskScore + params.costAdjustment * 0.3 + params.timelineExtension * 0.1)),
  };

  const chartData = [
    {
      name: "Cost",
      Original: baseData.cost / 100000,
      Simulated: simulatedData.cost / 100000,
    },
    {
      name: "Timeline",
      Original: baseData.timeline,
      Simulated: simulatedData.timeline,
    },
    {
      name: "Risk Score",
      Original: baseData.riskScore,
      Simulated: simulatedData.riskScore,
    },
  ];

  const resetSimulation = () => {
    setParams({
      costAdjustment: 0,
      timelineExtension: 0,
      resourceMultiplier: 100,
    });
  };

  return (
    <Card className="p-6" data-testid="card-risk-simulation">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-semibold">Predictive Risk Simulation</h3>
        <Button variant="outline" size="sm" onClick={resetSimulation} data-testid="button-reset-simulation">
          <RotateCcw className="h-4 w-4 mr-2" />
          Reset
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium">Cost Adjustment (%)</label>
              <span className="text-sm font-mono" data-testid="text-cost-value">{params.costAdjustment}%</span>
            </div>
            <Slider
              value={[params.costAdjustment]}
              onValueChange={(value) => setParams({ ...params, costAdjustment: value[0] })}
              min={-50}
              max={50}
              step={5}
              data-testid="slider-cost"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>-50%</span>
              <span>+50%</span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium">Timeline Extension (days)</label>
              <span className="text-sm font-mono" data-testid="text-timeline-value">{params.timelineExtension}</span>
            </div>
            <Slider
              value={[params.timelineExtension]}
              onValueChange={(value) => setParams({ ...params, timelineExtension: value[0] })}
              min={0}
              max={180}
              step={15}
              data-testid="slider-timeline"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>0 days</span>
              <span>180 days</span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium">Resource Allocation (%)</label>
              <span className="text-sm font-mono" data-testid="text-resource-value">{params.resourceMultiplier}%</span>
            </div>
            <Slider
              value={[params.resourceMultiplier]}
              onValueChange={(value) => setParams({ ...params, resourceMultiplier: value[0] })}
              min={50}
              max={150}
              step={10}
              data-testid="slider-resource"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>50%</span>
              <span>150%</span>
            </div>
          </div>

          <div className="pt-4 space-y-3 border-t">
            <div className="flex justify-between">
              <span className="text-sm">Projected Cost:</span>
              <span className="text-sm font-mono font-semibold">₹{(simulatedData.cost / 100000).toFixed(2)}L</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Projected Timeline:</span>
              <span className="text-sm font-mono font-semibold">{simulatedData.timeline} days</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Projected Risk Score:</span>
              <span className="text-sm font-mono font-semibold">{simulatedData.riskScore.toFixed(1)}/100</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-4">Impact Comparison</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "6px",
                }}
              />
              <Legend />
              <Bar dataKey="Original" fill="hsl(var(--chart-1))" />
              <Bar dataKey="Simulated" fill="hsl(var(--chart-2))" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
}
