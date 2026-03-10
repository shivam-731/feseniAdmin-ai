"use client";
import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapContainer, TileLayer, CircleMarker, Tooltip, useMap } from "react-leaflet";
import { useTheme } from "next-themes";
import "leaflet/dist/leaflet.css";


// Data shape: { country, region, active, inactive, revenue, coordinates: [lat, lng] }
export type GeoSubscriptionDatum = {
  country: string;
  region: string;
  active: number;
  inactive: number;
  revenue: number;
  coordinates: [number, number];
};

function MapThemeUpdater({ dark }: { dark: boolean }) {
  const map = useMap();
  // Optionally update map style on theme change
  // (Leaflet OSM tiles are always light, but you can swap to dark tiles if needed)
  return null;
}


type Props = {
  region: string;
  toggle: "active" | "inactive";
  data: GeoSubscriptionDatum[];
};

export default function GeoSubscriptionLeafletMap({ region, toggle, data }: Props) {
  const { resolvedTheme } = useTheme();
  const dark = resolvedTheme === "dark";

  // Bubble size scale
  const getBubbleSize = (count: number) => 10 + Math.sqrt(count) * 2.5;

  // Filter data by region
  const filtered = useMemo(() => {
    if (!region || region === "All") return data;
    return data.filter((d) => d.region === region);
  }, [region, data]);

  // Memoize markers for performance
  const markers = useMemo(() => {
    return filtered.map((d) => ({
      ...d,
      value: toggle === "active" ? d.active : d.inactive,
      color: toggle === "active" ? "#10b981" : "#ef4444",
    }));
  }, [filtered, toggle]);

  // Map background color
  const cardBg = dark ? "bg-[#18181b]" : "bg-white";

  return (
    <Card className={cardBg}>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Subscription Distribution Map</CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="w-full" style={{ height: 500 }}>
          <MapContainer
            center={[20, 0]}
            zoom={2}
            minZoom={2}
            maxZoom={6}
            scrollWheelZoom={true}
            style={{ width: "100%", height: 500, borderRadius: 12 }}
            attributionControl={false}
            className="leaflet-container"
          >
            <MapThemeUpdater dark={dark} />
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            {markers.map((marker) => (
              <CircleMarker
                key={marker.country}
                center={marker.coordinates}
                radius={getBubbleSize(marker.value)}
                pathOptions={{ color: marker.color, fillColor: marker.color, fillOpacity: 0.7 }}
                stroke={true}
                weight={1.5}
              >
                <Tooltip direction="top" offset={[0, -8]} opacity={1} className="!bg-card !text-foreground !rounded-md !shadow-lg">
                  <div className="font-semibold mb-1">{marker.country}</div>
                  <div className="text-xs text-muted-foreground">Active: <span className="font-medium text-green-500">{marker.active}</span></div>
                  <div className="text-xs text-muted-foreground">Inactive: <span className="font-medium text-red-500">{marker.inactive}</span></div>
                  <div className="text-xs text-muted-foreground">Total Revenue: <span className="font-medium">${marker.revenue.toLocaleString()}</span></div>
                </Tooltip>
              </CircleMarker>
            ))}
          </MapContainer>
        </div>
      </CardContent>
    </Card>
  );
}
