import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

const ChangeView = ({ center }) => {
  const map = useMap();
  map.setView(center);
  return null;
};

const EstatesMap = ({ mapSearch }) => {
  const [center, setCenter] = useState([31.963158, 35.930359]); // default Amman

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

  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{ width: "100%" }}
      className="h-[100%] max-h-[100%] lg:flex md:flex hidden relative z-10"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />

      <Marker position={center}>
        <Popup>{mapSearch || "Amman, Jordan"}</Popup>
      </Marker>

      <ChangeView center={center} />
    </MapContainer>
  );
};

export default EstatesMap;
