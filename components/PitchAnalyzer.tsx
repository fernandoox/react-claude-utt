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

    // Simular llamada a API (aquí iría la integración real con Claude)
    setTimeout(() => {
      setResult({
        original: idea,
        improved:
          "Tu idea mejorada aparecería aquí con un pitch estructurado, gancho inicial fuerte, propuesta de valor clara y call-to-action convincente.",
        analysis: [
          {
            label: "Claridad",
            score: 7,
            feedback: "Tu idea es comprensible pero podría ser más específica",
          },
          {
            label: "Gancho",
            score: 5,
            feedback: "Necesitas un opening más impactante",
          },
          {
            label: "Valor",
            score: 8,
            feedback: "La propuesta de valor es sólida",
          },
        ],
        versions: [
          {
            type: "30 segundos",
            text: "Versión elevator pitch ultra corta...",
          },
          {
            type: "Inversionista",
            text: "Versión enfocada en ROI y métricas...",
          },
          {
            type: "Redes Sociales",
            text: "Versión casual y viral para TikTok/IG...",
          },
        ],
      });
      setLoading(false);
    }, 2000);
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
            <PitchResults result={result} />
          </div>
        </div>
      </div>
    </div>
  );
}
