---
title: "DBSCAN for Anomaly Detection · Finding Outliers with Density"
description: "How to use DBSCAN for anomaly and outlier detection — the practical approach, advantages over statistical methods, and real-world applications in fraud and network security."
section: "code"
publishDate: "2026-05-15T08:10:00Z"
---

DBSCAN's noise classification makes it a ready-made anomaly detector: points labeled -1 are anomalies by definition. This approach has specific advantages over statistical methods (Z-score, IQR) and isolation-based methods (Isolation Forest).

## Approach

1. Fit DBSCAN on the dataset
2. All points with label = -1 are anomalies
3. The anomaly "score" can be: distance to nearest core point (further = more anomalous), or binary (-1 = anomaly)

## Advantages Over Statistical Methods

- **No distributional assumption**: Z-score and IQR assume normality. DBSCAN makes no distributional assumption — it only assumes anomalies are in low-density regions
- **Multivariate**: Z-score is per-feature. DBSCAN detects multivariate outliers (a point normal on every single feature but abnormal in combination)
- **Arbitrary-shaped "normal"**: DBSCAN can model "normal" as an arbitrary-shaped dense region, not a Gaussian blob

## Real-World Applications

**Credit card fraud**: Normal transactions cluster by location, time, and amount. Fraudulent transactions appear in sparse regions — timestamp is unusual, amount is atypical for the merchant category, location is far from the user's typical cluster.

**Network intrusion**: Normal traffic forms dense clusters by protocol, port, and packet size. Port scans, DDoS patterns, and exfiltration appear in sparse regions.

**Manufacturing quality control**: Normal products have tight sensor readings. Defects are sensor readings outside the dense normal region.

## Tuning for Anomaly Detection

Set minPts lower than for clustering — you want to detect small anomalous groups, not just isolate noise. ε should be set based on the k-distance graph with $k = \text{minPts}$ — not $k = \text{minPts} - 1$ (the standard clustering recommendation). This makes DBSCAN more sensitive to small anomalous groups.

## Caveats

DBSCAN detects **density-based anomalies** — points in sparse regions. It does not detect anomalies that form their own dense clusters (e.g., a botnet that exhibits clustered behaviour). For those, use Isolation Forest or LOF (Local Outlier Factor), which detect anomalies relative to local density.
