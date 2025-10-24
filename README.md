# Pitch Analyzer

Mejora tus ideas de negocio con inteligencia artificial. Transforma tu pitch en una propuesta convincente con análisis detallado y versiones adaptadas.

## 🚀 Características

- **Análisis inteligente** con Claude AI
- **Pitch mejorado** con gancho, valor y call-to-action
- **Puntuación** en Claridad, Gancho y Valor
- **3 versiones adaptadas**: 30 segundos, Inversionistas, Redes Sociales

## 🛠️ Instalación

```bash
npm install
```

## ⚙️ Configuración

1. Crea un archivo `.env.local`:
```bash
ANTHROPIC_API_KEY=tu_api_key_aqui
```

2. Obtén tu API key en [Anthropic Console](https://console.anthropic.com/settings/keys)

## 🎯 Uso

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

## 📁 Estructura

```
├── app/
│   ├── api/analyze/      # API route de Claude
│   ├── page.tsx          # Página principal
│   └── layout.tsx        # Layout
├── components/
│   ├── PitchAnalyzer.tsx # Componente principal
│   ├── PitchInput.tsx    # Input de ideas
│   ├── PitchResults.tsx  # Resultados
│   └── ui/               # Componentes UI
├── types/
│   └── pitch.ts          # Interfaces TypeScript
└── lib/
    └── api.ts            # Utilidades API
```

## 🧰 Stackk

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Anthropic Claude API

## 📝 Licenciaaajenyjeje

MIT
