# StudyFlow Hub

I want you to build the first working version of a hackathon web application called "StudyFlow".

IMPORTANT DEVELOPMENT RULE:

Do NOT build the entire application in one step.

Do NOT implement Gemini, backend/API, PDF text extraction, database, authentication, or quiz generation yet.

For this first task, build ONLY the frontend landing page and make absolutely sure it renders correctly in the Lovable Preview before finishing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PROJECT CONTEXT

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

I am participating in a college hackathon called "PROMPT WARS" conducted by the Android Club, VIT Bhopal.

Problem Statement:

AI-Powered Student Workspace

The goal is to build ONE polished AI flow that removes a specific piece of student busywork.

Our chosen flow is:

LECTURE PDF

→ AI ANALYSIS

→ EXAM-READY REVISION PACK

→ 5-QUESTION PRACTICE QUIZ

The product is NOT a general-purpose AI student platform.

Do NOT add:

- calendar

- todo list

- attendance

- chatbot

- flashcards

- social features

- messaging

- payments

- unnecessary authentication

- unrelated AI tools

- complex dashboards

- multi-tool integrations

The entire product should focus on one excellent workflow.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PRODUCT

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Working name:

STUDYFLOW

Main value proposition:

"Turn lectures into exam-ready revision."

Supporting message:

"Upload your lecture material and get focused revision notes plus a practice quiz generated from the same content."

Target user:

College students preparing for exams.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FIRST TASK ONLY — FRONTEND

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create a beautiful, production-quality responsive landing page.

The page must contain:

1. BRANDING

StudyFlow

A subtle academic/student productivity identity.

2. HERO SECTION

Large headline:

"Turn lectures into exam-ready revision."

Supporting text:

"Upload your lecture material and get focused revision notes plus a practice quiz generated from the same content."

3. PDF UPLOAD AREA

Create a large, clearly visible drag-and-drop upload component.

Text such as:

"Drop your lecture PDF here"

and:

"or browse files"

Clearly indicate:

"PDF only"

The component should support:

- click to browse

- drag and drop visual state

- selected-file state

- remove/reset selected file

For this first version, the file does NOT need to be sent to a backend.

4. PREPARATION MODE

Provide a clean selector with:

Quick Revision

University Exam

Concept Learning

5. DIFFICULTY

Provide:

Easy

Medium

Hard

6. PRIMARY BUTTON

"Analyze Lecture"

For this first version, clicking the button should NOT call an API.

It may remain disabled until a PDF is selected.

Do not fake AI results.

7. SMALL VALUE PROPOSITION SECTION

Briefly communicate that the application will generate:

- Exam-focused revision notes

- Important concepts

- Definitions and formulas when present

- A practice quiz from the same lecture

Keep this visually compact.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

VISUAL DESIGN

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The design should feel:

- premium

- modern

- academic

- minimal

- trustworthy

- polished

- student-focused

Do NOT make it look like a generic ChatGPT clone.

Use:

- excellent typography

- strong visual hierarchy

- generous spacing

- subtle borders

- subtle shadows

- restrained animations

- clean cards

- polished buttons

- responsive layout

Use Lucide icons where useful.

Make desktop and mobile layouts responsive.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

IMPORTANT TECHNICAL REQUIREMENTS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use the simplest reliable frontend architecture.

Use:

- Next.js

- TypeScript

- Tailwind CSS

- Lucide React

Do not add unnecessary dependencies.

Do not create a database.

Do not create authentication.

Do not create API routes yet.

Do not add Gemini yet.

Do not add server-side functionality yet.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CRITICAL — VERIFY THE PAGE ACTUALLY RENDERS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before considering this task complete:

1. Verify the root route `/` loads.

2. Verify the page is visible in Lovable Preview.

3. Verify there are no React errors.

4. Verify there are no TypeScript errors.

5. Verify there are no missing imports.

6. Verify all components are actually imported and rendered.

7. Verify no CSS is hiding the page.

8. Verify the page does not depend on an unavailable API or environment variable.

9. Verify the upload interface is visible.

10. Verify the page works at desktop and mobile widths.

If the Preview is blank or broken, FIX THE ISSUE before finishing.

Do not simply tell me that the page was created.

Actually verify that the generated application renders successfully.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CODE QUALITY

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Keep components organized and readable.

Prefer a structure similar to:

app/

  page.tsx

  globals.css

components/

  Header.tsx

  UploadZone.tsx

  PreparationSelector.tsx

  DifficultySelector.tsx

Do not create unnecessary files.

Do not create fake backend functions.

Do not create placeholder AI responses.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

COMPLETION CONDITION

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This task is complete ONLY when I can open the Lovable Preview and see the fully rendered StudyFlow landing page.

After completing this task:

1. Briefly tell me what you created.

2. Tell me that you verified the Preview renders.

3. List any files/components you created or changed.

4. STOP.

Do NOT proceed to PDF extraction or Gemini integration until I give you the next instruction.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/9ff1d90f-91ac-4159-b8fa-26c9fb1d43bc).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
