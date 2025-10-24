import { AnalysisResult } from "@/types/pitch";

export async function analyzePitch(idea: string): Promise<AnalysisResult> {
  const response = await fetch("/api/analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ idea }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Error al analizar el pitch");
  }

  return response.json();
}
