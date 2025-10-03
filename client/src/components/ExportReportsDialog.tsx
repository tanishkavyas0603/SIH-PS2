import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Download, FileText, Table } from "lucide-react";

interface ExportReportsDialogProps {
  dprId?: string;
  dprTitle?: string;
}

export function ExportReportsDialog({ dprId, dprTitle = "DPR Report" }: ExportReportsDialogProps) {
  const [format, setFormat] = useState<"pdf" | "excel">("pdf");
  const [isOpen, setIsOpen] = useState(false);

  const handleExport = () => {
    console.log(`Exporting ${dprTitle} as ${format.toUpperCase()}`);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button data-testid="button-export-report">
          <Download className="h-4 w-4 mr-2" />
          Export Report
        </Button>
      </DialogTrigger>
      <DialogContent data-testid="dialog-export">
        <DialogHeader>
          <DialogTitle>Export DPR Report</DialogTitle>
          <DialogDescription>
            Generate a comprehensive report with AI analysis, quality scores, and risk assessments
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="space-y-3">
            <Label>Select Format</Label>
            <RadioGroup value={format} onValueChange={(value) => setFormat(value as "pdf" | "excel")}>
              <div className="flex items-center space-x-3 p-4 rounded-lg border hover-elevate">
                <RadioGroupItem value="pdf" id="pdf" data-testid="radio-pdf" />
                <Label htmlFor="pdf" className="flex-1 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-destructive/10">
                      <FileText className="h-5 w-5 text-destructive" />
                    </div>
                    <div>
                      <div className="font-medium">PDF Report</div>
                      <div className="text-sm text-muted-foreground">
                        Professional format with charts and visualizations
                      </div>
                    </div>
                  </div>
                </Label>
              </div>

              <div className="flex items-center space-x-3 p-4 rounded-lg border hover-elevate">
                <RadioGroupItem value="excel" id="excel" data-testid="radio-excel" />
                <Label htmlFor="excel" className="flex-1 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-success/10">
                      <Table className="h-5 w-5 text-success" />
                    </div>
                    <div>
                      <div className="font-medium">Excel Spreadsheet</div>
                      <div className="text-sm text-muted-foreground">
                        Tabular data for further analysis and processing
                      </div>
                    </div>
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-medium text-sm mb-2">Report Contents</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• DPR Summary & Metadata</li>
              <li>• AI Quality Score with Explanation</li>
              <li>• Risk Flags & Recommendations</li>
              <li>• Geospatial Validation Results</li>
              <li>• Fraud Detection Analysis</li>
              <li>• Complete Audit Trail</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={() => setIsOpen(false)} data-testid="button-cancel-export">
            Cancel
          </Button>
          <Button onClick={handleExport} data-testid="button-confirm-export">
            <Download className="h-4 w-4 mr-2" />
            Export {format.toUpperCase()}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
