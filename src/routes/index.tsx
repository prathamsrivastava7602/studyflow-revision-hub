import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { FileText, Lightbulb, Calculator, HelpCircle } from "lucide-react";

import { Header } from "@/components/Header";
import { UploadZone } from "@/components/UploadZone";
import {
  PreparationSelector,
  type PrepMode,
} from "@/components/PreparationSelector";
import {
  DifficultySelector,
  type Difficulty,
} from "@/components/DifficultySelector";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "StudyFlow — Turn lectures into exam-ready revision",
      },
      {
        name: "description",
        content:
          "Upload your lecture material and get focused revision notes plus a practice quiz generated from the same content.",
      },
      {
        property: "og:title",
        content: "StudyFlow — Turn lectures into exam-ready revision",
      },
      {
        property: "og:description",
        content:
          "Upload your lecture material and get focused revision notes plus a practice quiz generated from the same content.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const valueProps = [
  {
    icon: FileText,
    label: "Exam-focused revision notes",
  },
  {
    icon: Lightbulb,
    label: "Important concepts",
  },
  {
    icon: Calculator,
    label: "Definitions and formulas",
  },
  {
    icon: HelpCircle,
    label: "Practice quiz from the lecture",
  },
];

function Index() {
  const [file, setFile] = useState<File | null>(null);
  const [prepMode, setPrepMode] = useState<PrepMode>("University Exam");
  const [difficulty, setDifficulty] = useState<Difficulty>("Medium");

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-4 pb-16 pt-12 sm:px-6 sm:pt-16 md:pt-20">
          <div className="text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Turn lectures into exam-ready revision.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Upload your lecture material and get focused revision notes plus a
              practice quiz generated from the same content.
            </p>
          </div>

          <div className="mt-10 space-y-8 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-10">
            <UploadZone file={file} onFileSelect={setFile} />

            <div className="grid gap-8 sm:grid-cols-2">
              <PreparationSelector value={prepMode} onChange={setPrepMode} />
              <DifficultySelector value={difficulty} onChange={setDifficulty} />
            </div>

            <button
              type="button"
              disabled={!file}
              className="w-full rounded-xl bg-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Analyze Lecture
            </button>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-sm font-medium leading-snug text-foreground">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
