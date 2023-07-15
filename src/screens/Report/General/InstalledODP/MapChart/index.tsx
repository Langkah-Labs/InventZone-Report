import React from "react";
// dependencies
import { MapContainer, TileLayer, useMap } from "react-leaflet";

export default function Index() {
  return (
    <MapContainer center={[0.7893, 113.9213]} zoom={5} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
    </MapContainer>
  );
}
