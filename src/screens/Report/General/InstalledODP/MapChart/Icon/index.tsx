import React from "react";
// dependencies
import L from "leaflet";
import { Marker, Popup } from "react-leaflet";
// assets
import {
  blue_icon,
  yellow_icon,
  red_icon,
} from "../../../../../../utils/constants";

interface odpData {
  key: string;
  no: number;
  serial_number: string;
  capacity: number;
  capacity_remaining: number;
  optical_power: string;
  installed_at: string;
  latitude: string;
  longitude: string;
}

interface Props {
  data: odpData[];
}

var blueIcon = L.icon({
  iconUrl: blue_icon,
  iconSize: [28, 35],
  iconAnchor: [22, 34],
  popupAnchor: [-7, -34],
});

var yellowIcon = L.icon({
  iconUrl: yellow_icon,
  iconSize: [28, 35],
  iconAnchor: [22, 34],
  popupAnchor: [-7, -34],
});

var redIcon = L.icon({
  iconUrl: red_icon,
  iconSize: [28, 35],
  iconAnchor: [22, 34],
  popupAnchor: [-7, -34],
});

export default function Index({ data }: Props) {
  return (
    <>
      {data.map((item) => {
        const position: [number, number] = [
          Number(item.latitude),
          Number(item.longitude),
        ];
        if (item.capacity_remaining < 8 && item.capacity_remaining >= 4) {
          return (
            <Marker
              key={item.serial_number}
              position={position}
              icon={yellowIcon}
            >
              <Popup>
                ODP ID: {item.serial_number} <br /> Kapasitas:{" "}
                {item.capacity_remaining}
              </Popup>
            </Marker>
          );
        } else if (item.capacity_remaining >= 8) {
          return (
            <Marker
              key={item.serial_number}
              position={position}
              icon={blueIcon}
            >
              <Popup>
                ODP ID: {item.serial_number} <br /> Kapasitas:{" "}
                {item.capacity_remaining}
              </Popup>
            </Marker>
          );
        } else if (item.capacity_remaining < 4) {
          return (
            <Marker key={item.serial_number} position={position} icon={redIcon}>
              <Popup>
                ODP ID: {item.serial_number} <br /> Kapasitas:{" "}
                {item.capacity_remaining}
              </Popup>
            </Marker>
          );
        }
        return null;
      })}
    </>
  );
}
