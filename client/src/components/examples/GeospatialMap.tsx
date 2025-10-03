import { GeospatialMap } from "../GeospatialMap";

export default function GeospatialMapExample() {
  const mockMarkers = [
    { lat: 26.1445, lng: 91.7362, title: "Highway Project - Guwahati", risk: "low" as const },
    { lat: 26.2006, lng: 92.9376, title: "Bridge Construction - Jorhat", risk: "medium" as const },
    { lat: 27.4728, lng: 94.9120, title: "Road Extension - Tinsukia", risk: "high" as const },
  ];

  return (
    <div className="p-4">
      <GeospatialMap markers={mockMarkers} />
    </div>
  );
}
