# Experiment 01 — App Startup Time

## Objective

Learn how to analyze what happens between launching a React Native application and reaching an interactive first screen.

## Initial Problem

<!-- Describe the intentionally bad startup implementation -->

## Expected Symptoms

<!-- What should be observable when running the bad version -->

## Code Before Optimization

<!-- Key code snippets showing the intentional problem -->

## How to Reproduce

1. Set `startupMode: 'bad'` in `PerformanceLabConfig.ts`
2. Kill the app process
3. Cold start the app
4. Observe startup delay

## React DevTools Profiling Procedure

<!-- Step-by-step instructions for profiling with React DevTools -->

## React DevTools Observations

<!-- Fill in after profiling -->

## Perfetto Profiling Procedure

1. Connect device via USB
2. `adb shell perfetto` or use ui.perfetto.dev
3. Cold start the app
4. Look for `RNPerfLab:*` markers

## Perfetto Observations

<!-- Fill in after profiling -->

## Hypothesis

<!-- Fill in after analyzing profiling evidence -->

## Root Cause

<!-- Fill in after confirming hypothesis -->

## Fix

<!-- Fill in after implementing the fix -->

## Code After Optimization

<!-- Key code snippets showing the fix -->

## Before vs After Measurements

| Metric | Before | After |
|---|---:|---:|
| Cold Start | | |
| Warm Start | | |
| JS Init | | |
| Module Init | | |
| Navigation Init | | |
| DB Init | | |
| API Init | | |
| Initial Render | | |
| Lab TTI | | |

## Why the Fix Works

<!-- Explain the reasoning -->

## What Did NOT Fix It

<!-- Document approaches that didn't help -->

## Lessons Learned

<!-- What you took away from this experiment -->

## Questions to Revisit

1. What is the longest startup phase?
2. Is the work JS, native, or both?
3. Which work blocks the first interactive screen?
4. Which initialization is actually required before first interaction?
5. Which work can safely be deferred?
6. Are API and DB operations sequential when they could be independent?
7. Is module import itself performing expensive work?
8. Is navigation configuration responsible or is the initial screen responsible?
9. Is the first visible frame delayed by JS work?
10. What does Perfetto show that React DevTools does not?
