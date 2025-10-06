"use client";

import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
// import iconUrl from "leaflet/dist/images/marker-icon.png";
// import iconShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface ChangeViewInterface {
  center: [number, number];
}

interface EstatesMapInterface {
  mapSearch: any;
  markersLocations: any;
  zoomCoords?: [number, number] | null;
}

const ChangeView: React.FC<ChangeViewInterface> = ({ center }) => {
  const map = useMap();

  useEffect(() => {
    if (center) {
      map.flyTo(center, 16, { animate: true } as any);
    }
  }, [center, map]);

  return null;
};

const EstatesMap: React.FC<EstatesMapInterface> = ({
  mapSearch,
  markersLocations,
  zoomCoords,
}) => {
  const [center, setCenter] = useState<[number, number]>(
    markersLocations?.length > 0
      ? markersLocations[0].coords
      : [24.7136, 46.6753]
  ); // default Amman

  useEffect(() => {
    if (!mapSearch) return;

    const fetchCoords = async () => {
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
            mapSearch
          )}&countrycodes=sa&limit=1`
        );
        const data = await res.json();
        if (data.length > 0) {
          setCenter([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
        } else {
          alert("Location not found in Saudi Arabia!");
        }
      } catch (err) {
        console.error("Search failed:", err);
      }
    };

    fetchCoords();
  }, [mapSearch]);
  useEffect(() => {
    if (zoomCoords) {
      setCenter(zoomCoords); // update center when estate clicked
    }
  }, [zoomCoords]);

  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{ width: "100%" }}
      className="min-h-screen lg:flex md:flex hidden relative z-10"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />

      {markersLocations?.length > 0 &&
        markersLocations?.map((loc: any, index: number) => (
          <Marker key={index} position={loc.coords}></Marker>
        ))}

      <ChangeView center={center} />
    </MapContainer>
  );
};

export default EstatesMap;
