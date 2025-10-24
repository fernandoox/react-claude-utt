import { TrendingUp } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="h-full flex items-center justify-center text-gray-400 text-center min-h-[400px]">
      <div className="flex flex-col items-center">
        <TrendingUp className="w-16 h-16 mb-4 opacity-50" />
        <p className="text-base leading-relaxed">
          Escribe tu idea y presiona
          <br />
          "Mejorar Pitch"
        </p>
      </div>
    </div>
  );
}
