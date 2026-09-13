import { useRef, useState } from "react";
import { UploadCloud, FileText, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface UploadZoneProps {
  file: File | null;
  onFileSelect: (file: File | null) => void;
}

export function UploadZone({ file, onFileSelect }: UploadZoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const dropped = e.dataTransfer.files?.[0];
    if (dropped && dropped.type === "application/pdf") {
      onFileSelect(dropped);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      onFileSelect(selected);
    }
  };

  const clearFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    onFileSelect(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const openFileDialog = () => {
    inputRef.current?.click();
  };

  return (
    <div
      onClick={openFileDialog}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      role="button"
      tabIndex={0}
      aria-label="Upload lecture PDF"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          openFileDialog();
        }
      }}
      className={cn(
        "relative rounded-2xl border-2 border-dashed bg-card p-8 text-center outline-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:p-12",
        isDragging
          ? "border-primary bg-primary/5"
          : "border-border hover:border-primary/40 hover:bg-accent/50",
        file && "border-solid border-primary/30 bg-primary/[0.03]"
      )}
    >
      <input
        ref={inputRef}
        type="file"
        accept="application/pdf"
        className="sr-only"
        onChange={handleInputChange}
        id="pdf-upload"
      />

      {file ? (
        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <FileText className="h-7 w-7" />
          </div>
          <div className="max-w-xs truncate text-base font-medium text-foreground">
            {file.name}
          </div>
          <div className="text-xs text-muted-foreground">
            {(file.size / 1024 / 1024).toFixed(2)} MB · PDF
          </div>
          <button
            type="button"
            onClick={clearFile}
            className="relative z-20 mt-2 inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground shadow-sm transition-colors hover:bg-accent"
          >
            <X className="h-3.5 w-3.5" />
            Remove file
          </button>
        </div>
      ) : (
        <div className="pointer-events-none relative z-10 flex flex-col items-center gap-3">
          <div
            className={cn(
              "flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-muted-foreground transition-colors",
              isDragging && "bg-primary/10 text-primary"
            )}
          >
            <UploadCloud className="h-8 w-8" />
          </div>
          <div className="space-y-1">
            <p className="text-base font-medium text-foreground">
              Drop your lecture PDF here
            </p>
            <p className="text-sm text-muted-foreground">
              or{" "}
              <span className="font-medium text-primary">browse files</span>
            </p>
          </div>
          <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground">
            PDF only
          </span>
        </div>
      )}
    </div>
  );
}
