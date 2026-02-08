"use client";

import { useState } from "react";

type Stage = "input" | "generating" | "done";
type Status = "idle" | "loading" | "done" | "error";

interface GeneratedData {
  title?: string;
  description?: string;
  category?: string;
  content?: string;
}

interface GeneratePostModalProps {
  open: boolean;
  onClose: () => void;
  onGenerated: (data: GeneratedData) => void;
}

function StatusIndicator({
  label,
  status,
  error,
}: {
  label: string;
  status: Status;
  error?: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-md border border-border bg-surface px-4 py-3">
      <div className="flex h-6 w-6 items-center justify-center">
        {status === "loading" && (
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-muted border-t-accent" />
        )}
        {status === "done" && (
          <span className="text-lg text-green-400">&#10003;</span>
        )}
        {status === "error" && (
          <span className="text-lg text-red-400">&#10007;</span>
        )}
      </div>
      <div>
        <p className="text-sm font-medium text-foreground">{label}</p>
        {status === "loading" && (
          <p className="text-xs text-muted">Generating...</p>
        )}
        {status === "error" && (
          <p className="text-xs text-red-400">{error || "Failed"}</p>
        )}
        {status === "done" && (
          <p className="text-xs text-green-400">Complete</p>
        )}
      </div>
    </div>
  );
}

export default function GeneratePostModal({
  open,
  onClose,
  onGenerated,
}: GeneratePostModalProps) {
  const [stage, setStage] = useState<Stage>("input");
  const [prompt, setPrompt] = useState("");
  const [textStatus, setTextStatus] = useState<Status>("idle");
  const [textError, setTextError] = useState("");

  if (!open) return null;

  async function handleGenerate() {
    if (!prompt.trim()) return;

    setStage("generating");
    setTextStatus("loading");
    setTextError("");

    const generatedData: GeneratedData = {};

    try {
      const res = await fetch("/api/generate/text", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Text generation failed");
      }

      const data = await res.json();
      generatedData.title = data.title;
      generatedData.description = data.description;
      generatedData.category = data.category;
      generatedData.content = data.content;
      setTextStatus("done");
    } catch (err) {
      setTextStatus("error");
      setTextError(
        err instanceof Error ? err.message : "Text generation failed",
      );
    }

    onGenerated(generatedData);
    setStage("done");
  }

  function handleClose() {
    if (stage === "generating") return;
    setStage("input");
    setPrompt("");
    setTextStatus("idle");
    setTextError("");
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-lg rounded-xl border border-border bg-background p-6 shadow-2xl">
        <h2 className="mb-4 text-xl font-bold text-primary">
          Generate with AI
        </h2>

        {stage === "input" && (
          <>
            <label className="mb-1 block text-sm font-medium text-muted">
              What should the post be about?
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g. A guide to building REST APIs with Next.js App Router"
              rows={3}
              className="mb-3 w-full resize-none rounded-md border border-border bg-surface px-4 py-2.5 text-foreground outline-none focus:border-accent"
              autoFocus
            />
            <p className="mb-4 text-xs text-muted">
              Generates title, description, category, and content using Claude.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={handleClose}
                className="rounded-md border border-border px-4 py-2 text-sm text-muted transition-colors hover:bg-surface"
              >
                Cancel
              </button>
              <button
                onClick={handleGenerate}
                disabled={!prompt.trim()}
                className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-background transition-colors hover:bg-accent-dark disabled:opacity-50"
              >
                Generate
              </button>
            </div>
          </>
        )}

        {stage === "generating" && (
          <div className="space-y-3">
            <StatusIndicator
              label="Text (title, description, content)"
              status={textStatus}
              error={textError}
            />
            <p className="mt-2 text-center text-xs text-muted">
              This may take 10-20 seconds. Please wait...
            </p>
          </div>
        )}

        {stage === "done" && (
          <>
            <div className="mb-4 space-y-3">
              <StatusIndicator
                label="Text (title, description, content)"
                status={textStatus}
                error={textError}
              />
            </div>
            {textStatus === "done" && (
              <p className="mb-4 text-sm text-green-400">
                Content populated in the editor. You can review and edit before
                publishing.
              </p>
            )}
            <div className="flex justify-end">
              <button
                onClick={handleClose}
                className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-background transition-colors hover:bg-accent-dark"
              >
                Done
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
