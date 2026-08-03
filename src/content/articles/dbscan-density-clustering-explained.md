---
title: "DBSCAN · Density-Based Spatial Clustering Explained"
description: "A complete guide to the DBSCAN clustering algorithm — how density-based clustering works, the eps and minPts parameters, advantages over k-means, and handling of noise points."
section: "concept"
publishDate: "2026-05-15T05:00:00Z"
ogImage: "https://img.ulec.com.cn/AI/dbscan-density-clustering-explained-2026-1880x869.jpg"
---

DBSCAN (Density-Based Spatial Clustering of Applications with Noise) is one of the most widely used clustering algorithms in data science. Proposed by Martin Ester, Hans-Peter Kriegel, Jörg Sander, and Xiaowei Xu in 1996, it can find clusters of arbitrary shape, doesn't require specifying the number of clusters, and explicitly identifies noise points.

## The Core Idea

DBSCAN defines clusters as dense regions of points separated by sparse regions. Three point types: **core points** (≥ minPts neighbors within ε), **border points** (within ε of a core point), and **noise points** (neither core nor border).

## Parameters

- **ε (epsilon)**: neighborhood radius. The k-distance graph method helps choose ε — find the "elbow" in sorted k-nearest-neighbor distances.
- **minPts**: minimum points for density. Rule of thumb: minPts ≥ dimensionality + 1.

## Algorithm

```
for each unvisited point P:
    mark visited; find neighbors within ε
    if neighbors < minPts: mark as noise
    else: expand cluster through density-connected points
```

Time complexity: O(n²) naive, O(n log n) with spatial indices (R*-tree, kd-tree).

## Strengths

- Finds arbitrarily shaped clusters (k-means forces spherical)
- Explicit noise identification — valuable for anomaly detection
- No need to pre-specify k

## Weaknesses

- Single global ε can't handle varying densities
- Struggles in high dimensions (use PCA/UMAP first)
- Parameter sensitivity

## HDBSCAN: The Modern Successor

HDBSCAN builds a hierarchy of DBSCAN clusterings across all ε values and selects the most stable clusters. It requires only `min_cluster_size` and handles varying densities naturally. In modern practice, HDBSCAN has largely superseded DBSCAN through the `hdbscan` Python library (McInnes et al.).

[^1]: Ester, M., Kriegel, H.P., Sander, J., & Xu, X. (1996). A Density-Based Algorithm for Discovering Clusters in Large Spatial Databases with Noise. *KDD '96*.
