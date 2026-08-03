---
title: "Distance Metrics for Clustering · Euclidean, Manhattan, Cosine, and More"
description: "How the choice of distance metric affects clustering results — Euclidean, Manhattan, Cosine, Mahalanobis, Haversine, and when to use each."
section: "math"
publishDate: "2026-05-15T08:10:00Z"
ogImage: "https://img.ulec.com.cn/AI/distance-metrics-clustering-2026-1880x1253.jpg"
---
The distance metric is the most under-appreciated parameter in clustering. Changing the metric changes which points are considered "close" and thus fundamentally changes the clusters. DBSCAN defaults to Euclidean distance but supports custom metrics.

## Key Distance Metrics

**Euclidean** ($L_2$): Straight-line distance. Default. Works well for continuous features on similar scales. Sensitive to scale differences — normalise/standardise first.

**Manhattan** ($L_1$): Sum of absolute differences. More robust to outliers than Euclidean. Useful for grid-like data (city blocks) and when features represent counts.

**Cosine**: 1 minus the cosine of the angle between vectors. Ignores magnitude — two documents with similar word proportions but different lengths are similar. Dominant in text clustering (TF-IDF vectors).

**Mahalanobis**: Euclidean distance scaled by the inverse covariance matrix. Accounts for feature correlations and different scales. Computationally expensive ($O(d^2)$ per distance calculation).

**Haversine**: Great-circle distance between two points on a sphere. For geographic coordinates (latitude/longitude). DBSCAN with Haversine distance clusters GPS coordinates correctly (unlike Euclidean, which treats lat/lon as Cartesian).

## Choosing a Metric

- **Continuous, normalised**: Euclidean
- **Count data, heavy tails**: Manhattan
- **Text (TF-IDF, embeddings)**: Cosine
- **Correlated features**: Mahalanobis
- **Geographic (lat/lon)**: Haversine
- **Mixed types**: Gower distance (pre-compute)


Scikit-learn's `DBSCAN(metric='precomputed')` accepts a pre-computed distance matrix — use this for custom or non-standard metrics. The matrix is $n \times n$ and must be symmetric.

## Impact Example

Clustering the same dataset with Euclidean vs Manhattan vs Cosine can produce completely different results. For a dataset of customer transactions, Euclidean clusters by total spending; Manhattan clusters by distribution across categories; Cosine clusters by spending pattern (ignoring total). All are "correct" — they answer different questions.
