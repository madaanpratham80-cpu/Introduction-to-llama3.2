# Llama 3.2 — Multimodal & Edge Intelligence

> A cinematic single-page landing site introducing **Meta's Llama 3.2** — the first open-weight multimodal model family built for on-device, edge, and frontier vision applications.

---

## Overview

This project is an immersive, animated web experience that showcases the Llama 3.2 model family. It blends full-viewport video backgrounds, cursor-driven interactions, scroll-triggered animations, and a premium dark aesthetic to communicate the capabilities of Llama 3.2 in a way that feels as cutting-edge as the model itself.

### About Llama 3.2

Llama 3.2 is Meta's latest generation of open-weight AI models, released at Connect 2024. It introduces:

- **Vision models** (11B & 90B) — multimodal LLMs capable of image reasoning, visual question answering, and document understanding
- **Edge/mobile text models** (1B & 3B) — ultra-lightweight models designed to run on-device with low latency
- **Open weights** — fully open and available via HuggingFace, Ollama, and ExecuTorch
- **Instruction-tuned variants** — optimised for summarisation, instruction following, and agentic tasks

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build Tool | Vite 5 |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion 12 |
| Font | Playfair Display (Google Fonts) |
| Icons | Bootstrap Icons |

---

## Features

- **Mouse-scrubbed hero video** — horizontal cursor position scrubs through a paused video, making the llama's gaze follow the user's mouse in real time
- **3D parallax tilt** — the hero video tilts in 3D space following cursor position using spring physics
- **Scroll-driven 3D text** — the cinematic text section uses `useScroll` + perspective transforms for a depth reveal effect
- **Scramble animations** — text entrance and hover effects use a character-scramble reveal technique
- **Full-viewport video backgrounds** — each section has its own looping background video
- **Animated metrics grid** — key Llama 3.2 benchmark stats animate in on scroll
- **Responsive navbar** — expanding capsule menu with a squash-and-stretch hamburger animation on mobile

---

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build
```

The dev server runs at `http://localhost:5173` by default.

---

## Project Structure

```
synapsex/
├── public/
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx          # Cursor-scrubbed video + 3D tilt
│   │   │   ├── CinematicTextSection.tsx # Scroll-driven 3D perspective text
│   │   │   ├── MetricsSection.tsx       # Benchmark stats grid
│   │   │   ├── TechnologySection.tsx    # Adaptive intelligence feature grid
│   │   │   ├── ArchitectureSection.tsx  # Model architecture breakdown
│   │   │   └── FooterSection.tsx        # Footer with video background
│   │   ├── MetaLogo.tsx                 # Official Meta wordmark SVG
│   │   ├── Navbar.tsx                   # Responsive animated navbar
│   │   ├── ScrambleIn.tsx               # Entrance scramble text animation
│   │   ├── ScrambleText.tsx             # Hover scramble text animation
│   │   ├── SquashHamburger.tsx          # Spring-animated hamburger icon
│   │   └── SynapseXLogo.tsx             # Site logo SVG
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.js
└── vite.config.ts
```

---

## Learn More

- [Llama 3.2 Announcement — Meta AI Blog](https://ai.meta.com/blog/llama-3-2-connect-2024-vision-edge-mobile-devices/)
- [Llama Models on HuggingFace](https://huggingface.co/meta-llama)
- [Run Llama 3.2 locally with Ollama](https://ollama.com/library/llama3.2)
- [ExecuTorch — On-device deployment](https://pytorch.org/executorch/)

---

## License

This landing page is a fan/showcase project. All Llama model weights are released by Meta under the [Llama 3.2 Community License](https://ai.meta.com/llama/license/).
