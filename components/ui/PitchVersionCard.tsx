import { PitchVersion } from "@/types/pitch";

interface PitchVersionCardProps {
  version: PitchVersion;
}

export default function PitchVersionCard({ version }: PitchVersionCardProps) {
  return (
    <details className="bg-purple-50 border border-purple-200 rounded-lg p-3">
      <summary className="cursor-pointer text-sm font-medium text-purple-700 hover:text-purple-900">
        {version.type}
      </summary>
      <p className="mt-2 text-lg text-gray-700 leading-relaxed">
        {version.text}
      </p>
    </details>
  );
}
