"use client";

import { Lightbulb, ArrowRight } from "lucide-react";

interface PitchInputProps {
  idea: string;
  loading: boolean;
  onIdeaChange: (value: string) => void;
  onAnalyze: () => void;
}

export default function PitchInput({
  idea,
  loading,
  onIdeaChange,
  onAnalyze,
}: PitchInputProps) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8">
      <div className="flex items-center gap-2 mb-6">
        <Lightbulb className="w-5 h-5 text-yellow-500" />
        <h2 className="text-xl font-semibold text-gray-900">
          Tu Idea Original
        </h2>
      </div>

      <textarea
        value={idea}
        onChange={(e) => onIdeaChange(e.target.value)}
        placeholder="Describe tu idea de negocio, proyecto o startup aquí...&#10;&#10;Ejemplo: Quiero hacer una app para que estudiantes compartan apuntes y se ayuden con las tareas..."
        className="w-full h-64 p-4 border border-gray-300 rounded-2xl resize-none focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200 text-gray-900 text-xl leading-relaxed"
      />

      <div className="mt-5 flex items-center justify-between">
        <span className="text-sm text-gray-600">{idea.length} caracteres</span>
        <button
          onClick={onAnalyze}
          disabled={!idea.trim() || loading}
          className="flex items-center gap-2 bg-linear-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-2xl font-semibold hover:shadow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Analizando...
            </>
          ) : (
            <>
              Mejorar Pitch
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
