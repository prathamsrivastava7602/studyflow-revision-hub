import { cn } from "@/lib/utils";

export type Difficulty = "Easy" | "Medium" | "Hard";

export interface DifficultySelectorProps {
  value: Difficulty;
  onChange: (value: Difficulty) => void;
}

const options: Difficulty[] = ["Easy", "Medium", "Hard"];

export function DifficultySelector({ value, onChange }: DifficultySelectorProps) {
  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-foreground">Difficulty</label>
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
