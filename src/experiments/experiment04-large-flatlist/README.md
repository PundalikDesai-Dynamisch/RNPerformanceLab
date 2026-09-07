# Experiment 04 — Large FlatList

## Objective

Understand how list size, virtualization, rendering, and configuration affect React Native scrolling performance.

## Initial Problem

## Expected Symptoms

## Code Before Optimization

## How to Reproduce

1. Open Experiment 04
2. Observe initial load time
3. Scroll slowly, then fast
4. Profile during scroll

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
| Initial load time | | |
| Items mounted | | |
| Scroll smoothness | | |
| Frames missed during scroll | | |
| JS activity during scroll | | |

## Why the Fix Works

## What Did NOT Fix It

## Lessons Learned

## Questions to Revisit

1. How many rows are actually mounted?
2. Are all 5,000 items rendered?
3. What happens during fast scrolling?
4. Is the bottleneck row rendering or list configuration?
5. Is JS work happening during scrolling?
6. Are frames missed?
7. Is the list recycling/virtualizing as expected?
