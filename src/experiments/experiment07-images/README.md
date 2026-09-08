# Experiment 07 — Image-Heavy Screen

## Objective

Understand how image dimensions, decoding, memory pressure, rendering, and large image assets can affect React Native performance.

## Initial Problem

## Expected Symptoms

## Code Before Optimization

## How to Reproduce

1. Open Experiment 07
2. Observe loading behavior
3. Scroll through images
4. Monitor memory

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
| Load behavior | | |
| Scroll behavior | | |
| Memory usage | | |
| Frame behavior | | |
| Image quality | | |

## Why the Fix Works

## What Did NOT Fix It

## Lessons Learned

## Questions to Revisit

1. Are images much larger than their display size?
2. When are they loaded?
3. How many images are simultaneously active?
4. Is the bottleneck React rendering or image decode/memory?
5. Does scrolling trigger additional loading work?
6. Is memory pressure visible?
