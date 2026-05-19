---
title: "OPTICS · Ordering Points To Identify the Clustering Structure"
description: "How OPTICS extends DBSCAN to handle varying-density clusters — the reachability plot, core distance, and how to extract clusters from OPTICS output."
section: "concept"
publishDate: "2026-05-15T08:10:00Z"
---
OPTICS (Ankerst et al., 1999) is an extension of DBSCAN that addresses its most significant limitation: the inability to detect clusters of varying density using a single ε parameter. Instead of producing a single clustering, OPTICS produces an **ordering of points** that encodes the hierarchical clustering structure.

## Core Distance and Reachability Distance

**Core distance** of point $p$: the distance to its `minPts`-th nearest neighbour. If $p$ has fewer than `minPts` neighbours within ε, the core distance is undefined.

**Reachability distance** of point $q$ from core point $p$: $\max$ (core-distance($p$), distance($p$, $q$)). For non-core points, it's undefined.

## The Reachability Plot

The primary output of OPTICS is a reachability plot — points ordered along the x-axis, with their reachability distance on the y-axis. Valleys in this plot correspond to clusters. Deeper valleys = denser clusters. Shallower valleys = sparser clusters.

**Extracting clusters**: Define a threshold ξ on the reachability distance. A contiguous region with reachability below ξ forms a cluster. Varying ξ extracts clusters at different density levels — this is the key advantage over DBSCAN's single ε.

## OPTICS vs HDBSCAN

OPTICS requires post-processing (ξ threshold) to extract clusters. HDBSCAN automates this by selecting clusters based on stability — the sum of excess-of-mass over the cluster lifetime. In modern practice, HDBSCAN is preferred because it doesn't require manual ξ selection.

## Implementation

`sklearn.cluster.OPTICS` in scikit-learn. Parameters: `min_samples` (default 5), `xi` (determines minimum steepness for cluster boundary, default 0.05). Computational cost: $O(n^2)$ in the worst case without spatial indexing, $O(n \log n)$ with ball trees or kd-trees for low-dimensional data.
