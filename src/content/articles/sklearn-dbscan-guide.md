---
title: "Scikit-learn DBSCAN · Implementation Guide"
description: "A practical guide to using DBSCAN in scikit-learn — parameter configuration, handling large datasets, extracting cluster labels, and visualising results."
section: "code"
publishDate: "2026-05-15T08:10:00Z"
ogImage: "https://img.ulec.com.cn/AI/sklearn-dbscan-guide-2026-1880x869.jpg"
---

```python
from sklearn.cluster import DBSCAN
from sklearn.preprocessing import StandardScaler
from sklearn.datasets import make_blobs

# 1. Always standardise before DBSCAN (distance-based)
X, _ = make_blobs(n_samples=500, centers=4, n_features=2, random_state=42)
X = StandardScaler().fit_transform(X)

# 2. Fit
db = DBSCAN(eps=0.3, min_samples=5)
labels = db.fit_predict(X)

# 3. Interpret
n_clusters = len(set(labels)) - (1 if -1 in labels else 0)
n_noise = list(labels).count(-1)
print(f"Clusters: {n_clusters}, Noise: {n_noise}")

# 4. Access core sample indices
core_indices = db.core_sample_indices_
```

## Key Attributes

- `labels_`: Cluster label for each point (-1 = noise)
- `core_sample_indices_`: Indices of core points (not border, not noise)
- `components_`: The actual core point instances (copy of X at core_sample_indices_)

## Memory Considerations

DBSCAN requires an $O(n^2)$ or $O(n\text{d})$ distance computation depending on the algorithm. For n > 50,000, use `algorithm='ball_tree'` or `algorithm='kd_tree'` and `leaf_size=30`. For n > 500,000, consider approximate methods (HDBSCAN with `approx_min_span_tree=True`) or pre-computed distance matrices on a subset of features.

## Common Errors

- **All points labeled -1 (noise)**: ε is too small or minPts is too high. Increase ε or decrease minPts.
- **Single large cluster + many noise points**: ε is borderline — some points barely connected. Slightly increase ε or use HDBSCAN.
- **Memory error on large dataset**: Use ball_tree/kd_tree, reduce dimensionality with PCA first, or switch to HDBSCAN.
