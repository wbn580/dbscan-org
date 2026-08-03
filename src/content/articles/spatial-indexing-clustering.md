---
title: "Spatial Indexing for Clustering · R*-trees, kd-trees, and Ball Trees"
description: "How spatial indexing accelerates clustering algorithms — the data structures behind efficient neighborhood queries in DBSCAN and OPTICS."
section: "code"
publishDate: "2026-05-15T08:10:00Z"
ogImage: "https://img.ulec.com.cn/AI/spatial-indexing-clustering-2026-1880x869.jpg"
---
The region query ("find all points within distance ε of p") is the computational bottleneck of DBSCAN and related algorithms. Without spatial indexing, it's $O(n^2)$ — checking every point against every other point. Spatial indices reduce this to $O(\log n)$ per query.

## R*-tree

A balanced tree structure where each node defines a bounding rectangle containing its children. Built by grouping nearby points into rectangles, then grouping rectangles into larger rectangles. Query: traverse the tree, pruning branches whose bounding rectangle is entirely beyond ε. The standard spatial index for geographic data.

## kd-tree

A binary tree that recursively partitions space along alternating dimensions at the median. Query: recursively descend, pruning subtrees where the splitting hyperplane is beyond ε from the query point. Works well for low-dimensional data (d < 20) but degrades in high dimensions due to the curse of dimensionality — the splitting hyperplane rarely prunes subtrees.

## Ball Tree

Similar to kd-tree but partitions space using hyperspheres (balls) rather than axis-aligned splits. Each node defines a ball (centre + radius) containing all its points. More efficient than kd-trees for higher-dimensional data (d < 100) and data where clusters are not axis-aligned.

## Practical Choice

- **Geographic data (2D)**: R*-tree (best for spatial range queries)
- **Low-dimensional (2–10D)**: kd-tree (simplest, fastest construction)
- **Medium-dimensional (10–100D)**: Ball tree
- **High-dimensional (100+D)**: Use approximate nearest neighbours (Annoy, FAISS, HNSW) — exact spatial indexing degrades to $O(n)$ in high dimensions

Scikit-learn's `DBSCAN` supports `algorithm='ball_tree'`, `'kd_tree'`, or `'brute'`. Default is `'auto'` (chooses based on dimensionality).
