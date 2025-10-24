import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic();

const cleanJsonResponse = (text: string): string => {
  let cleaned = text.trim();
  if (cleaned.startsWith("```json")) {
    cleaned = cleaned.replace(/^```json\s*\n?/, "").replace(/\n?```\s*$/, "");
  } else if (cleaned.startsWith("```")) {
    cleaned = cleaned.replace(/^```\s*\n?/, "").replace(/\n?```\s*$/, "");
  }
  return cleaned.trim();
};

export async function POST(request: NextRequest) {
  try {
    const { idea } = await request.json();

    if (!idea?.trim()) {
      return NextResponse.json(
        { error: "La idea es requerida" },
        { status: 400 }
      );
    }

    const message = await anthropic.messages.create({
      model: "claude-sonnet-4-5",
      max_tokens: 2000,
      messages: [
        {
          role: "user",
          content: `Eres un experto en crear pitches de negocios efectivos. Analiza la siguiente idea y responde ÚNICAMENTE con JSON válido sin markdown:

Idea: ${idea}

Formato de respuesta:
{
  "improved": "pitch mejorado (máximo 150 palabras) con gancho inicial fuerte, propuesta de valor clara y call-to-action",
  "analysis": [
    {"label": "Claridad", "score": 7, "feedback": "qué tan comprensible es"},
    {"label": "Gancho", "score": 6, "feedback": "qué tan atractivo es el opening"},
    {"label": "Valor", "score": 8, "feedback": "qué tan clara es la propuesta de valor"}
  ],
  "versions": [
    {"type": "30 segundos", "text": "elevator pitch ultra corto"},
    {"type": "Inversionista", "text": "enfocado en ROI y métricas"},
    {"type": "Redes Sociales", "text": "casual y viral para TikTok/IG"}
  ]
}`,
        },
      ],
    });

    const responseText =
      message.content[0].type === "text" ? message.content[0].text : "";
    const parsedResponse = JSON.parse(cleanJsonResponse(responseText));

    return NextResponse.json({
      original: idea,
      ...parsedResponse,
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Error al procesar la solicitud" },
      { status: 500 }
    );
  }
}
