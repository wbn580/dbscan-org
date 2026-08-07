---
title: "DBSCAN for Geospatial Data · Clustering GPS Coordinates"
description: "How to cluster geographic data with DBSCAN — Haversine distance, handling latitude and longitude, map visualisation with folium, and real-world spatial analysis."
section: "code"
publishDate: "2026-05-15T08:20:00Z"
ogImage: "https://img.ulec.com.cn/AI/dbscan-geospatial-clustering-2026-1880x1299.jpg"
---

```python
import numpy as np
from sklearn.cluster import DBSCAN
from sklearn.metrics import pairwise_distances

# GPS data: [lat, lon]
coords = np.array([[-33.8688, 151.2093], ...])  # Sydney CBD

# Compute Haversine distance matrix (in km)
from sklearn.neighbors import DistanceMetric
dist = DistanceMetric.get_metric('haversine')
# haversine expects radians
coords_rad = np.radians(coords)
D = dist.pairwise(coords_rad) * 6371  # Earth radius in km

# DBSCAN with precomputed distances
db = DBSCAN(eps=0.5, min_samples=5, metric='precomputed')  # 0.5 km
labels = db.fit_predict(D)

# Visualise with folium
import folium
m = folium.Map(location=[-33.8688, 151.2093], zoom_start=13)
colors = ['red', 'blue', 'green', 'purple', 'orange', 'gray']
for i, (lat, lon) in enumerate(coords):
    color = 'gray' if labels[i] == -1 else colors[labels[i] % len(colors)]
    folium.CircleMarker([lat, lon], radius=4, color=color, fill=True).add_to(m)
```

Key considerations: The epsilon must be in the same units as the distance metric (kilometres above). A small epsilon finds micro-clusters (blocks, buildings); larger epsilon captures neighbourhood-level clusters. Always use Haversine or Vincenty distance — Euclidean distance on lat/lon treats degrees as linear units, which is only approximately correct near the equator.
