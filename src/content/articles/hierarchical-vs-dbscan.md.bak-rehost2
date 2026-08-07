---
title: "Hierarchical Clustering vs DBSCAN · Agglomerative vs Density-Based"
description: "Comparing hierarchical (agglomerative) clustering and DBSCAN — dendrograms, arbitrary shapes, noise handling, and the computational cost tradeoffs."
section: "compare"
publishDate: "2026-05-15T08:20:00Z"
ogImage: "https://img.ulec.com.cn/AI/hierarchical-vs-dbscan-2026-1880x869.jpg"
---
Hierarchical clustering builds a full tree of cluster merges (dendrogram). DBSCAN produces a flat clustering with a noise class.

Key differences: Hierarchical clustering provides a dendrogram — you can cut at any level to get different numbers of clusters, exploring the data at multiple granularities. DBSCAN gives you one clustering per (ε, minPts) combination. Hierarchical clustering is $O(n^3)$ for standard implementations (optimised: $O(n^2 \log n)$ for single-linkage). DBSCAN is $O(n \log n)$ with spatial indexing.

Use hierarchical clustering when you need to explore the data at multiple resolutions and the dataset is moderate in size (n < 50,000). Use DBSCAN for speed on large datasets or when noise identification is critical. HDBSCAN combines the advantages of both: density-based clusters + hierarchy (not a full dendrogram but a condensed cluster tree).
