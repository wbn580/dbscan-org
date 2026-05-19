---
title: "DBSCAN vs k-means vs HDBSCAN · A Practical Comparison"
description: "A side-by-side comparison of DBSCAN, k-means, and HDBSCAN — when each algorithm wins, real performance on benchmark datasets, and guidelines for choosing."
section: "compare"
publishDate: "2026-05-15T05:00:00Z"
---

Three clustering algorithms dominate practical work. Choosing between them requires understanding their assumptions.

## The Assumptions

| Algorithm | Cluster Shape | Handles Noise | Needs # Clusters? |
|---|---|---|---|
| k-means | Spherical, equal size | Forces into cluster | Yes |
| DBSCAN | Arbitrary | Explicit noise labels | No |
| HDBSCAN | Arbitrary | Explicit noise labels | No |

## When Each Wins

**k-means** wins when data is well-separated, spherical, and roughly equal cluster sizes. Fast: O(n) per iteration.

**DBSCAN** wins with arbitrary-shaped clusters, spatial data, and a known distance threshold (e.g., "within 100 metres"). Fails on varying density.

**HDBSCAN** wins as the default choice for real-world data. Single parameter, handles varying density, builds cluster hierarchy.

## When All Fail

- High-dimensional data: distance concentration makes density meaningless. Reduce dimensions first.
- Radically different cluster sizes
- Overlapping clusters: use soft clustering (Gaussian Mixture Models)

## Guideline

Start with HDBSCAN for exploratory clustering. Use k-means for speed and simplicity on well-behaved data. Use DBSCAN when domain knowledge provides a natural ε threshold.
