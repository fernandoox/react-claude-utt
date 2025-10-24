import Anthropic from "@anthropic-ai/sdk";
import { AnalysisResult } from "@/types/pitch";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function analyzePitch(idea: string): Promise<AnalysisResult> {
  const prompt = `Eres un experto en crear pitches de negocios efectivos. Analiza la siguiente idea de negocio y proporciona:

1. Una versión mejorada del pitch (máximo 150 palabras) con gancho inicial fuerte, propuesta de valor clara y call-to-action convincente.
2. Un análisis con puntuación del 1-10 para:
   - Claridad: Qué tan comprensible es la idea
   - Gancho: Qué tan atractivo es el opening
   - Valor: Qué tan clara es la propuesta de valor
3. Tres versiones adaptadas del pitch:
   - Versión de 30 segundos (elevator pitch)
   - Versión para inversionistas (enfocada en ROI y métricas)
   - Versión para redes sociales (casual y viral)

Idea original:
${idea}

Responde ÚNICAMENTE con un JSON válido en el siguiente formato exacto (sin markdown, sin explicaciones adicionales):
{
  "improved": "pitch mejorado aquí",
  "analysis": [
    {"label": "Claridad", "score": 7, "feedback": "comentario breve"},
    {"label": "Gancho", "score": 6, "feedback": "comentario breve"},
    {"label": "Valor", "score": 8, "feedback": "comentario breve"}
  ],
  "versions": [
    {"type": "30 segundos", "text": "versión corta"},
    {"type": "Inversionista", "text": "versión para inversores"},
    {"type": "Redes Sociales", "text": "versión social"}
  ]
}`;

  const message = await anthropic.messages.create({
    model: "claude-3-5-sonnet-20241022",
    max_tokens: 2000,
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  const responseText =
    message.content[0].type === "text" ? message.content[0].text : "";

  // Parse la respuesta JSON
  const parsedResponse = JSON.parse(responseText);

  return {
    original: idea,
    improved: parsedResponse.improved,
    analysis: parsedResponse.analysis,
    versions: parsedResponse.versions,
  };
}
