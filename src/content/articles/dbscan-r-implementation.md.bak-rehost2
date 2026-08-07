---
title: "DBSCAN in R · Implementation with dbscan and fpc Packages"
description: "Using DBSCAN in R — the dbscan package, kNNdistplot for epsilon selection, fpc::dbscan, and comparison with Python implementations."
section: "code"
publishDate: "2026-05-15T08:15:00Z"
ogImage: "https://img.ulec.com.cn/AI/dbscan-r-implementation-2026-1880x869.jpg"
---
The `dbscan` R package (Hahsler et al., 2019) provides a fast C++ implementation of DBSCAN with support for frNN (fixed-radius nearest neighbours) and shared nearest neighbour (SNN) clustering.

## Basic Usage

```r
library(dbscan)

# Generate data
data <- scale(multishapes[, 1:2])

# kNN distance plot for epsilon selection
kNNdistplot(data, k = 5)
abline(h = 0.15, col = "red")  # Suggested epsilon

# Cluster
res <- dbscan(data, eps = 0.15, minPts = 5)
table(res$cluster)  # -1 = noise

# Plot
plot(data, col = res$cluster + 1)
```

## Key Differences from Python

- **Faster on small-to-medium datasets** (C++ backend with OpenMP parallelisation for region queries)
- **Integrated with `factoextra`** for visualisation (`fviz_cluster()` with `geom = "point"`)
- **SNN clustering** (shared nearest neighbours) built into the same package — useful for high-dimensional data where density is defined by shared neighbours rather than distance
- **No built-in spatial indexing** — performance degrades on very large datasets (>100K points) compared to scikit-learn's ball_tree/kd_tree

## HDBSCAN in R

```r
library(dbscan)
res <- hdbscan(data, minPts = 5)
plot(data, col = res$cluster + 1)
```

The `dbscan` R package includes HDBSCAN with the same interface — no separate package needed.
