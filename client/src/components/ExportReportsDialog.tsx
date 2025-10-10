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
import { useTranslation } from "react-i18next";

interface ExportReportsDialogProps {
  dprId?: string;
  dprTitle?: string;
}

export function ExportReportsDialog({ dprId, dprTitle = "DPR Report" }: ExportReportsDialogProps) {
  const { t } = useTranslation();
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
          {t('components.exportReports.exportReport')}
        </Button>
      </DialogTrigger>
      <DialogContent data-testid="dialog-export">
        <DialogHeader>
          <DialogTitle>{t('components.exportReports.title')}</DialogTitle>
          <DialogDescription>
            {t('components.exportReports.description')}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="space-y-3">
            <Label>{t('components.exportReports.selectFormat')}</Label>
            <RadioGroup value={format} onValueChange={(value) => setFormat(value as "pdf" | "excel")}>
              <div className="flex items-center space-x-3 p-4 rounded-lg border hover-elevate">
                <RadioGroupItem value="pdf" id="pdf" data-testid="radio-pdf" />
                <Label htmlFor="pdf" className="flex-1 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-destructive/10">
                      <FileText className="h-5 w-5 text-destructive" />
                    </div>
                    <div>
                      <div className="font-medium">{t('components.exportReports.pdfReport')}</div>
                      <div className="text-sm text-muted-foreground">
                        {t('components.exportReports.pdfDescription')}
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
                      <div className="font-medium">{t('components.exportReports.excelSpreadsheet')}</div>
                      <div className="text-sm text-muted-foreground">
                        {t('components.exportReports.excelDescription')}
                      </div>
                    </div>
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-medium text-sm mb-2">{t('components.exportReports.reportContents')}</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• {t('components.exportReports.dprSummary')}</li>
              <li>• {t('components.exportReports.aiQualityScore')}</li>
              <li>• {t('components.exportReports.riskFlags')}</li>
              <li>• {t('components.exportReports.geospatialValidation')}</li>
              <li>• {t('components.exportReports.fraudDetection')}</li>
              <li>• {t('components.exportReports.completeAuditTrail')}</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={() => setIsOpen(false)} data-testid="button-cancel-export">
            {t('components.exportReports.cancel')}
          </Button>
          <Button onClick={handleExport} data-testid="button-confirm-export">
            <Download className="h-4 w-4 mr-2" />
            {t('components.exportReports.export')} {format.toUpperCase()}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
