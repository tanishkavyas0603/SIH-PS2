import { useState, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, File, X } from "lucide-react";

interface DPRUploadProps {
  onUpload?: (file: File) => void;
}

export function DPRUpload({ onUpload }: DPRUploadProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && (file.type === "application/pdf" || file.type === "text/plain")) {
      setSelectedFile(file);
    }
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = () => {
    if (selectedFile && onUpload) {
      onUpload(selectedFile);
      console.log("File uploaded:", selectedFile.name);
    }
  };

  const clearFile = () => {
    setSelectedFile(null);
  };

  return (
    <Card className="p-6" data-testid="card-dpr-upload">
      <h3 className="text-lg font-semibold mb-4">Upload DPR Document</h3>
      
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`
          border-2 border-dashed rounded-lg p-12 text-center transition-colors
          ${isDragging ? "border-primary bg-primary/5" : "border-border"}
        `}
        data-testid="dropzone-upload"
      >
        <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
        <p className="text-sm font-medium mb-2">
          Drag and drop your DPR file here
        </p>
        <p className="text-xs text-muted-foreground mb-4">
          Supported formats: PDF, TXT
        </p>
        <label htmlFor="file-input">
          <Button variant="secondary" asChild data-testid="button-browse-file">
            <span>Browse Files</span>
          </Button>
          <input
            id="file-input"
            type="file"
            accept=".pdf,.txt"
            onChange={handleFileSelect}
            className="hidden"
          />
        </label>
      </div>

      {selectedFile && (
        <div className="mt-4 p-4 bg-card rounded-lg border flex items-center justify-between" data-testid="container-selected-file">
          <div className="flex items-center gap-3">
            <File className="h-10 w-10 text-primary" />
            <div>
              <p className="text-sm font-medium" data-testid="text-filename">{selectedFile.name}</p>
              <p className="text-xs text-muted-foreground">
                {(selectedFile.size / 1024).toFixed(2)} KB
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button onClick={handleUpload} data-testid="button-upload">
              Upload & Analyze
            </Button>
            <Button variant="ghost" size="icon" onClick={clearFile} data-testid="button-clear-file">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
}
