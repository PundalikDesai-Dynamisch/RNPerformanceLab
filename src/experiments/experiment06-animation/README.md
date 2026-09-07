# Experiment 06 — Heavy Animation

## Objective

Understand animation performance and the difference between JS-driven work and animation work that can execute independently of JS.

## Initial Problem

## Expected Symptoms

## Code Before Optimization

## How to Reproduce

1. Open Experiment 06
2. Press "Start Animation"
3. Observe jank/smoothness
4. Capture Perfetto trace

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
| Frame behavior | | |
| JS activity during animation | | |
| UI thread activity | | |
| Perceived smoothness | | |

## Why the Fix Works

## What Did NOT Fix It

## Lessons Learned

## Questions to Revisit

1. Which thread is overloaded?
2. Is JS work occurring during animation?
3. Does animation progress depend on JS?
4. Are frames being missed?
5. Is the animation itself expensive, or is other JS work interfering?
