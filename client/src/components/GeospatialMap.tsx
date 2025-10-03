import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";

declare global {
  interface Window {
    L: any;
  }
}

interface MapMarker {
  lat: number;
  lng: number;
  title: string;
  risk: "low" | "medium" | "high";
}

interface GeospatialMapProps {
  markers: MapMarker[];
  center?: [number, number];
  zoom?: number;
}

export function GeospatialMap({ markers, center = [26.1445, 91.7362], zoom = 7 }: GeospatialMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (!mapRef.current || typeof window === "undefined" || !window.L) return;

    if (!mapInstanceRef.current) {
      const map = window.L.map(mapRef.current).setView(center, zoom);
      
      window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(map);

      mapInstanceRef.current = map;
    }

    const map = mapInstanceRef.current;
    
    map.eachLayer((layer: any) => {
      if (layer instanceof window.L.Marker) {
        map.removeLayer(layer);
      }
    });

    markers.forEach((marker) => {
      const color = marker.risk === "high" ? "red" : marker.risk === "medium" ? "orange" : "green";
      
      const icon = window.L.divIcon({
        className: "custom-marker",
        html: `<div style="
          background-color: ${color};
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        "></div>`,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });

      window.L.marker([marker.lat, marker.lng], { icon })
        .addTo(map)
        .bindPopup(`<strong>${marker.title}</strong><br/>Risk: ${marker.risk}`);
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [markers, center, zoom]);

  return (
    <Card className="p-6" data-testid="card-geospatial-map">
      <h3 className="text-lg font-semibold mb-4">Geospatial Validation</h3>
      <div
        ref={mapRef}
        className="h-96 rounded-lg overflow-hidden border"
        data-testid="map-container"
      />
      <div className="mt-4 flex items-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <span>Low Risk</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-orange-500"></div>
          <span>Medium Risk</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <span>High Risk</span>
        </div>
      </div>
    </Card>
  );
}
