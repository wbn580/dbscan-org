---
title: "HDBSCAN · Hierarchical Density-Based Clustering Explained"
description: "A complete guide to HDBSCAN — how it builds a hierarchy of DBSCAN clusterings, the mutual reachability graph, cluster stability, and the min_cluster_size parameter."
section: "concept"
publishDate: "2026-05-15T08:10:00Z"
ogImage: "https://img.ulec.com.cn/AI/hdbscan-explained-2026-1880x869.jpg"
---
HDBSCAN (Campello, Moulavi & Sander, 2013; McInnes et al., 2017) is the modern successor to DBSCAN. It removes the need to specify ε, handles varying-density clusters natively, and requires only one main parameter: `min_cluster_size`.

## How It Works

1. **Build the mutual reachability graph**: Transform the data space using mutual reachability distance — the maximum of core distances. This "spreads out" points in low-density regions while keeping dense regions compact.

2. **Construct a minimum spanning tree (MST)**: On the transformed space.

3. **Build a hierarchy**: Remove edges from the MST in decreasing order of weight, creating a dendrogram of cluster merges.

4. **Condense the tree**: Remove small branches using `min_cluster_size` — the smallest grouping that will be considered a cluster.

5. **Extract clusters by stability**: For each candidate cluster, compute stability = $\sum_{p \in \text{cluster}} (\lambda_{\text{birth}} - \lambda_{\text{death}})$ where $\lambda$ is the inverse of distance. Select the set of clusters with maximum total stability.

## Parameters

- **min_cluster_size** (required): The smallest size of a cluster. Higher → fewer, larger clusters. Lower → more, smaller clusters. Default in practice: 5–15.
- **min_samples** (optional): Controls conservativeness. Higher → more points classified as noise. Default = min_cluster_size.
- **cluster_selection_epsilon**: A distance cutoff — clusters beyond this distance are not merged. Useful when domain knowledge provides a natural distance threshold.

## Why HDBSCAN Is Better Than DBSCAN

- **No ε parameter**: You don't need to find the "right" neighborhood radius
- **Varying density**: Built into the hierarchy — dense and sparse clusters coexist
- **Noise robustness**: More conservative noise classification than DBSCAN
- **Flat + hierarchical output**: Get both the final clustering and the hierarchy for interpretation
