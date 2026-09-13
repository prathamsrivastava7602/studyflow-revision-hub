import { BookOpen } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center gap-2 px-4 sm:px-6">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
          <BookOpen className="h-5 w-5" />
        </div>
        <span className="text-lg font-semibold tracking-tight text-foreground">
          StudyFlow
        </span>
      </div>
    </header>
  );
}
