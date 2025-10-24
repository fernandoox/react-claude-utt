import { AnalysisItem } from "@/types/pitch";

interface AnalysisScoreProps {
  item: AnalysisItem;
}

export default function AnalysisScore({ item }: AnalysisScoreProps) {
  return (
    <div>
      <div className="flex justify-between mb-1.5">
        <span className="text-base font-medium text-gray-700">
          {item.label}
        </span>
        <span className="text-base font-bold text-blue-600">
          {item.score}/10
        </span>
      </div>
      <div className="bg-gray-200 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full transition-all"
          style={{ width: `${item.score * 10}%` }}
        />
      </div>
      <p className="text-base text-gray-600 mt-1">{item.feedback}</p>
    </div>
  );
}
