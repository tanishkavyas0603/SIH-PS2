import { DPRUpload } from "@/components/DPRUpload";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function UploadPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Upload DPR</h1>
        <p className="text-muted-foreground">
          Submit your Detailed Project Report for AI-powered quality assessment and risk analysis
        </p>
      </div>

      <DPRUpload onUpload={(file) => console.log("Uploaded:", file.name)} />

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">What Happens Next?</h3>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
              <span className="text-sm font-bold text-primary">1</span>
            </div>
            <div>
              <h4 className="font-medium mb-1">Document Processing</h4>
              <p className="text-sm text-muted-foreground">
                Our system extracts structured data from your DPR including project details, budget, timeline, and technical specifications.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
              <span className="text-sm font-bold text-primary">2</span>
            </div>
            <div>
              <h4 className="font-medium mb-1">AI Quality Assessment</h4>
              <p className="text-sm text-muted-foreground">
                Advanced AI models evaluate completeness, feasibility, financial viability, and risk factors to generate a comprehensive quality score.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
              <span className="text-sm font-bold text-primary">3</span>
            </div>
            <div>
              <h4 className="font-medium mb-1">Fraud Detection & Validation</h4>
              <p className="text-sm text-muted-foreground">
                Automatic screening for duplicate content, plagiarism, and suspicious patterns. Geospatial validation of project claims.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-success/10 flex-shrink-0">
              <CheckCircle className="h-5 w-5 text-success" />
            </div>
            <div>
              <h4 className="font-medium mb-1">Review & Decision</h4>
              <p className="text-sm text-muted-foreground">
                Reviewers assess AI findings, add comments, and recommend approval or rejection. Complete audit trail maintained.
              </p>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-primary/5 border-primary/20">
        <h3 className="text-lg font-semibold mb-3">Document Requirements</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
            <span>Supported formats: PDF, TXT</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
            <span>Maximum file size: 50 MB</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
            <span>Include project name, location, budget, timeline, and technical specifications</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
            <span>Attach supporting documents (BOQ, drawings, clearances) if available</span>
          </li>
        </ul>
      </Card>
    </div>
  );
}
