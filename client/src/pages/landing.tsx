import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Shield, TrendingUp, Map, FileSearch, Zap, Lock } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen">
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />
        
        <div className="relative">
          <header className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary">
                  <Shield className="h-6 w-6 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">DPR Assessment</span>
              </div>
              <Button asChild data-testid="button-sign-in">
                <Link href="/dashboard">Sign In</Link>
              </Button>
            </div>
          </header>

          <section className="container mx-auto px-4 py-20 md:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Zap className="h-4 w-4" />
                Powered by Advanced AI
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                AI-Powered DPR Quality Assessment & Risk Prediction
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Transform infrastructure project evaluation with intelligent quality scoring, fraud detection, 
                geospatial validation, and predictive risk simulation.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button size="lg" asChild data-testid="button-get-started">
                  <Link href="/dashboard">
                    Get Started
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild data-testid="button-learn-more">
                  <Link href="#features">
                    Learn More
                  </Link>
                </Button>
              </div>

              <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  <span>Enterprise Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  <span>Government Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  <span>Real-time Analysis</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section id="features" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools for complete DPR lifecycle management and assessment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border bg-card hover-elevate" data-testid="feature-card-ai-scoring">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                <FileSearch className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Quality Scoring</h3>
              <p className="text-muted-foreground">
                Intelligent evaluation of completeness, feasibility, financial viability, and risk with explainable AI insights.
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card hover-elevate" data-testid="feature-card-fraud">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10 mb-4">
                <Shield className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fraud Detection</h3>
              <p className="text-muted-foreground">
                Automatic identification of duplicate content, plagiarism, and suspicious patterns across all DPRs.
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card hover-elevate" data-testid="feature-card-geospatial">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-success/10 mb-4">
                <Map className="h-6 w-6 text-success" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Geospatial Validation</h3>
              <p className="text-muted-foreground">
                Interactive maps with risk zone visualization and project location verification.
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card hover-elevate" data-testid="feature-card-simulation">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-warning/10 mb-4">
                <TrendingUp className="h-6 w-6 text-warning" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Risk Simulation</h3>
              <p className="text-muted-foreground">
                Predictive what-if scenarios for cost, timeline, and resource adjustments with real-time impact analysis.
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card hover-elevate" data-testid="feature-card-rbac">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Role-Based Access</h3>
              <p className="text-muted-foreground">
                Secure workflows for Officials, Reviewers, and Admins with complete audit trails.
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card hover-elevate" data-testid="feature-card-reports">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-success/10 mb-4">
                <FileSearch className="h-6 w-6 text-success" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Report Export</h3>
              <p className="text-muted-foreground">
                Generate professional PDF and Excel reports with comprehensive analysis and recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your DPR Assessment?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join government departments using AI-powered analysis for infrastructure projects
            </p>
            <Button size="lg" asChild data-testid="button-cta">
              <Link href="/dashboard">
                Get Started Now
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 DPR Assessment System. Built for Government Infrastructure Projects.</p>
        </div>
      </footer>
    </div>
  );
}
