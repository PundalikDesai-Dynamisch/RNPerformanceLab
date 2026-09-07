# Experiment 02 — Unnecessary Re-renders

## Objective

Learn how unnecessary React component renders affect JavaScript work and frame performance.

## Initial Problem

<!-- Describe the bad re-render scenario -->

## Expected Symptoms

<!-- What should be visible: render counters increasing, React DevTools showing unnecessary renders -->

## Code Before Optimization

<!-- Key code showing unstable props / state placement -->

## How to Reproduce

1. Open Experiment 02
2. Start React DevTools Profiler
3. Tap "Increment" 5–10 times
4. Stop profiler and analyze

## React DevTools Profiling Procedure

<!-- Step-by-step -->

## React DevTools Observations

<!-- Fill in after profiling -->

## Perfetto Profiling Procedure

<!-- Step-by-step -->

## Perfetto Observations

<!-- Fill in after profiling -->

## Hypothesis

<!-- Fill in after analysis -->

## Root Cause

<!-- Fill in after confirming -->

## Fix

<!-- Fill in after implementing -->

## Code After Optimization

<!-- Key code snippets -->

## Before vs After Measurements

| Metric | Before | After |
|---|---:|---:|
| Render count (per increment) | | |
| Render duration | | |
| Interaction duration | | |
| Approx frame behavior | | |

## Why the Fix Works

## What Did NOT Fix It

## Lessons Learned

## Questions to Revisit

1. What caused the parent to render?
2. Why did the children render?
3. Which children actually needed to render?
4. Which components were unnecessary?
5. How many ProductCards rendered?
6. What evidence does React DevTools provide?
7. Are object/function props recreated?
