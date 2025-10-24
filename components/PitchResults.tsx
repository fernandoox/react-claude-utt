"use client";

import { Sparkles } from "lucide-react";
import { AnalysisResult } from "@/types/pitch";
import AnalysisScore from "./ui/AnalysisScore";
import PitchVersionCard from "./ui/PitchVersionCard";
import EmptyState from "./ui/EmptyState";
import LoadingState from "./ui/LoadingState";

interface PitchResultsProps {
  result: AnalysisResult | null;
  loading: boolean;
}

export default function PitchResults({ result, loading }: PitchResultsProps) {
  if (loading) {
    return <LoadingState />;
  }

  if (!result) {
    return <EmptyState />;
  }

  return (
    <div className="space-y-6">
      {/* Improved Pitch */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-green-500" />
          Pitch Mejorado
        </h3>
        <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 text-gray-800 text-lg leading-relaxed">
          {result.improved}
        </div>
      </div>

      {/* Analysis Scores */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Análisis</h3>
        <div className="space-y-3">
          {result.analysis.map((item, idx) => (
            <AnalysisScore key={idx} item={item} />
          ))}
        </div>
      </div>

      {/* Versions */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Versiones Adaptadas
        </h3>
        <div className="space-y-2">
          {result.versions.map((version, idx) => (
            <PitchVersionCard key={idx} version={version} />
          ))}
        </div>
      </div>
    </div>
  );
}
