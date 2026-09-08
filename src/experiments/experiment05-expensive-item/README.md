# Experiment 05 — Expensive List Item Rendering

## Objective

Learn the difference between a large list and an expensive row.

> Even a well-virtualized list can be slow if every visible row is expensive.

## Initial Problem

## Expected Symptoms

## Code Before Optimization

## How to Reproduce

1. Open Experiment 05
2. Observe render counts on rows
3. Change the filter
4. Profile with React DevTools

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
| Row render count | | |
| Render duration per row | | |
| Total JS work | | |
| Scroll behavior | | |

## Why the Fix Works

## What Did NOT Fix It

## Lessons Learned

## Questions to Revisit

1. Which row/component is expensive?
2. How much time does one render take?
3. How often does it render?
4. Does it render when its data has not changed?
5. Is the expensive calculation inside render?
6. Are props stable?
