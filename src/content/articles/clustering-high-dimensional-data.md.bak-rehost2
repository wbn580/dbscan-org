---
title: "Clustering with High-Dimensional Data · The Curse of Dimensionality"
description: "Why clustering fails in high dimensions — distance concentration, the emptiness phenomenon, and strategies for clustering high-dimensional data with DBSCAN."
section: "math"
publishDate: "2026-05-15T08:15:00Z"
ogImage: "https://img.ulec.com.cn/AI/clustering-high-dimensional-data-2026-1880x1299.jpg"
---
Clustering in high dimensions is qualitatively different from clustering in 2D or 3D. The phenomenon that makes it different — distance concentration — affects all distance-based algorithms, including DBSCAN.

## Distance Concentration

In high dimensions, the contrast between nearest and farthest neighbours disappears. As $d \to \infty$, $\frac{\max(\text{dist}) - \min(\text{dist})}{\min(\text{dist})} \to 0$. In plain English: all points are approximately equally far from each other.

For DBSCAN, this means the concept of "ε-neighbourhood" breaks down. At one ε, all points are neighbours (single cluster). Slightly smaller ε, no points are neighbours (all noise). The useful range of ε collapses.

## When Does This Happen?

Distance concentration becomes noticeable at d ≈ 10–20 for Euclidean distance with uniform-random data. For real data with structure (clusters, correlations), higher dimensions are tolerable — but beyond d ≈ 50, even structured data typically requires dimensionality reduction before clustering.

## Solutions

**PCA**: Reduce to the first k principal components explaining 90%+ of variance. The remaining dimensions are likely noise.

**t-SNE / UMAP**: Non-linear reduction for visualisation and preprocessing. Preserves local neighbourhood structure better than PCA. UMAP is preferred for preprocessing before clustering as it preserves more global structure.

**Subspace clustering**: Cluster in lower-dimensional subspaces, then combine. CLIQUE, PROCLUS, SUBCLU. Rarely used in modern practice outside academic research.

**Shared nearest neighbours (SNN)**: Define similarity by the overlap of k-nearest neighbour sets, not by distance. More robust to dimensionality than distance-based approaches. Available in the `dbscan` R package.

**HDBSCAN**: Generally more robust to high dimensionality than DBSCAN because it operates on a hierarchy of density thresholds, reducing sensitivity to any single ε.
