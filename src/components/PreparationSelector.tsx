import { cn } from "@/lib/utils";

export type PrepMode = "Quick Revision" | "University Exam" | "Concept Learning";

export interface PreparationSelectorProps {
  value: PrepMode;
  onChange: (value: PrepMode) => void;
}

const options: PrepMode[] = [
  "Quick Revision",
  "University Exam",
  "Concept Learning",
];

export function PreparationSelector({
  value,
  onChange,
}: PreparationSelectorProps) {
  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-foreground">
        Preparation mode
      </label>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              value === option
                ? "border-primary bg-primary text-primary-foreground shadow-sm"
                : "border-border bg-card text-foreground hover:border-primary/40 hover:bg-accent"
            )}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
