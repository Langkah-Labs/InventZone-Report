import React from "react";
// dependencies
import { MapContainer, TileLayer } from "react-leaflet";
import { useInstalledODP } from "../hooks";
// components
import MarkerIcon from "./Icon";

export default function Index() {
  const {mapData} = useInstalledODP();
  return (
    <MapContainer center={[0.7893, 113.9213]} zoom={5} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerIcon data={mapData} />
    </MapContainer>
  );
}
