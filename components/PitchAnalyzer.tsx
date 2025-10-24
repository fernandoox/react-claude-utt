"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { AnalysisResult } from "@/types/pitch";
import PitchInput from "./PitchInput";
import PitchResults from "./PitchResults";

export default function PitchAnalyzer() {
  const [idea, setIdea] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleAnalyze = async (): Promise<void> => {
    if (!idea.trim()) return;

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idea }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Error de la API:", data);
        alert(`Error: ${data.details || data.error || "Error desconocido"}`);
        return;
      }

      setResult(data);
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un error al analizar tu pitch. Por favor intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-blue-50 to-pink-50 flex items-center justify-center py-8 px-4">
      <div className="w-full max-w-7xl">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-purple-600" />
            <h1 className="text-4xl font-bold bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Pitch Analyzer
            </h1>
          </div>
          <p className="text-gray-600 mb-6">
            Transforma tu idea en un pitch que vende
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <PitchInput
            idea={idea}
            loading={loading}
            onIdeaChange={setIdea}
            onAnalyze={handleAnalyze}
          />

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <PitchResults result={result} loading={loading} />
          </div>
        </div>
      </div>
    </div>
  );
}
