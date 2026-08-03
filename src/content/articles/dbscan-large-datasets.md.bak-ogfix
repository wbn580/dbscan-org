---
title: "Scaling DBSCAN to Large Datasets · Approximation Strategies"
description: "Practical approaches to clustering millions of points — approximate DBSCAN, sampling, grid-based acceleration, and the limits of exact DBSCAN."
section: "code"
publishDate: "2026-05-15T08:20:00Z"
---
DBSCAN's $O(n \log n)$ complexity is adequate for hundreds of thousands of points but breaks down at millions. Approximate methods trade accuracy for scalability.

Strategies: (1) **Subsampling**: Randomly sample 10–20% of points, cluster, then assign remaining points to the nearest cluster. Fast but loses small clusters and can mislabel border points. (2) **Grid-based DBSCAN (GDBSCAN)**: Partition space into a grid, run DBSCAN on grid cells instead of individual points. $O(g \log g)$ where g ≪ n. Tradeoff: grid size controls accuracy. (3) **Spark DBSCAN**: Distributed implementation using spatial partitioning across worker nodes. Available in Spark MLlib (limited) or custom implementations using RDD/Dataset API. Overhead of distributed computing typically makes this slower than single-machine on datasets < 10M points.

For most practical use, the pragmatic approach is HDBSCAN with `approx_min_span_tree=True` — it's fast enough for 1M+ points and handles varying density automatically.
