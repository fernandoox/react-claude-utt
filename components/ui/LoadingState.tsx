import { Loader2 } from "lucide-react";

export default function LoadingState() {
  return (
    <div className="h-full flex items-center justify-center text-gray-400 text-center min-h-[400px]">
      <div className="flex flex-col items-center">
        <Loader2 className="w-16 h-16 mb-4 opacity-50 animate-spin" />
        <p className="text-base leading-relaxed">
          Analizando tu pitch...
          <br />
          Esto puede tomar unos segundos
        </p>
      </div>
    </div>
  );
}
