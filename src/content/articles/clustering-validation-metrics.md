---
title: "Clustering Validation Metrics · Silhouette, Davies-Bouldin, and Calinski-Harabasz"
description: "How to evaluate clustering quality — internal validation metrics (silhouette score, Davies-Bouldin index, Calinski-Harabasz index), when each is appropriate, and their limitations."
section: "math"
publishDate: "2026-05-15T08:10:00Z"
---

Evaluating clustering is fundamentally harder than evaluating classification — there are no ground-truth labels. Internal validation metrics assess clustering quality using only the data and the cluster assignments, without external labels.

## Silhouette Score

Measures how similar a point is to its own cluster versus the nearest other cluster. Range: [-1, 1]. Higher = better.

$$ s(i) = \frac{b(i) - a(i)}{\max(a(i), b(i))} $$

where $a(i)$ = mean distance to points in its own cluster, $b(i)$ = mean distance to points in the nearest other cluster.

**Best for**: Spherical, well-separated clusters (k-means output). Penalises DBSCAN-style arbitrary-shape clusters because peripheral points in elongated clusters have high distance to dense centre points.

## Davies-Bouldin Index

Average similarity between each cluster and its most similar other cluster, where similarity is the ratio of within-cluster scatter to between-cluster separation. Range: [0, ∞). Lower = better.

**Best for**: Balanced cluster sizes. Penalises one large + several small clusters.

## Calinski-Harabasz Index (Variance Ratio Criterion)

Ratio of between-cluster dispersion to within-cluster dispersion. Higher = better.

$$ CH = \frac{\text{tr}(B_k)}{\text{tr}(W_k)} \times \frac{N-k}{k-1} $$

**Best for**: Gaussian-distributed clusters with equal covariance. Heavily favours equal-sized, spherical clusters.

## Which Metric When?

| Metric | Good For | Bad For |
|---|---|---|
| Silhouette | k-means, hierarchical clustering | Arbitrary-shaped, varying-density |
| Davies-Bouldin | Comparing across k values | Density-based clustering |
| Calinski-Harabasz | Well-separated Gaussians | Outliers, non-spherical |

**Key insight**: These metrics share the implicit assumption of spherical, roughly-equal-sized clusters. Using them to tune DBSCAN parameters (ε, minPts) is misleading — DBSCAN's strength is finding arbitrary-shaped clusters, and these metrics penalise that strength. For density-based clustering, visual inspection, stability analysis, or DBCV (Density-Based Clustering Validation) are more appropriate — but no metric is a complete substitute for understanding your data.
