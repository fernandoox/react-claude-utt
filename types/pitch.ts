export interface AnalysisItem {
  label: string;
  score: number;
  feedback: string;
}

export interface PitchVersion {
  type: string;
  text: string;
}

export interface AnalysisResult {
  original: string;
  improved: string;
  analysis: AnalysisItem[];
  versions: PitchVersion[];
}
