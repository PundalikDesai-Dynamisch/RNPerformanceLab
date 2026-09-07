# RN Performance Lab

A hands-on React Native performance laboratory.

## Purpose

This is intentionally a performance-debugging lab. Each experiment contains a controlled bad implementation. The purpose is to learn:

```text
symptom → measurement → profiling → evidence → root cause → fix → verification
```

## Learning Path

```text
00 — Project Structure (Foundation)
       ↓
01 — App Startup Time
       ↓
02 — Unnecessary Re-renders
       ↓
03 — Heavy JS Calculation
       ↓
04 — Large FlatList
       ↓
05 — Expensive List Item Rendering
       ↓
06 — Heavy Animation
       ↓
07 — Image-Heavy Screen
```

## Rules

1. Do not optimize before profiling.
2. Do not trust assumptions when a trace can answer the question.
3. Do not change multiple variables unless necessary.
4. Do not fabricate performance numbers.
5. Always measure before and after.
6. Keep experiments isolated.
7. Prefer realistic bottlenecks over artificial delays.
8. Understand the thread involved before choosing a fix.

## The Golden Rule

> **Profile → Understand → Hypothesize → Fix → Verify.**
>
> Never: Guess → Optimize randomly → Hope.

## Tools

- **React Native DevTools Performance** — React-level analysis
- **Perfetto on Android** — JS/UI/native/frame-level analysis
- **Xcode Instruments on iOS** — Platform-level analysis (later)

## Getting Started

```bash
npm install
npx react-native run-android   # or run-ios
```

## Project Structure

```text
src/
├── app/                    ← App entry + navigation
├── components/             ← Shared components
├── experiments/            ← Isolated experiment modules
│   ├── experiment01-startup/
│   ├── experiment02-rerenders/
│   ├── experiment03-js-calculation/
│   ├── experiment04-large-flatlist/
│   ├── experiment05-expensive-item/
│   ├── experiment06-animation/
│   └── experiment07-images/
├── performance/            ← Instrumentation utilities
├── screens/                ← Screen components
├── services/               ← API + Database services
└── utils/                  ← Data generation + calculations
```

See `PERFORMANCE_LAB.md` for the complete glossary, profiling rules, and workflow templates.