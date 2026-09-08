# Experiment 03 — Heavy JavaScript Calculation

## Objective

Learn what happens when synchronous JavaScript work occupies the JS thread for too long.

## Initial Problem

## Expected Symptoms

## Code Before Optimization

## How to Reproduce

1. Open Experiment 03
2. Tap "Calculate"
3. Observe UI responsiveness during calculation

## React DevTools Profiling Procedure

## React DevTools Observations

## Perfetto Profiling Procedure

## Perfetto Observations

## Hypothesis

## Root Cause

## Fix

## Code After Optimization

## Before vs After Measurements

| Metric | Before | After |
|---|---:|---:|
| Calculation duration | | |
| Interaction responsiveness | | |
| Frames missed | | |
| JS thread busy time | | |

## Why the Fix Works

## What Did NOT Fix It

## Lessons Learned

## Questions to Revisit

1. How long does the synchronous operation run?
2. Is the work CPU-bound?
3. Which thread is busy?
4. Does the UI thread also become busy?
5. Is the algorithm unnecessarily expensive?
6. Can the work be reduced?
7. Can the work be moved away from the critical interaction path?
