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
  odp_id: string;
  capacity: number;
  capacity_after: number;
  optical_power: number;
  installation_date: string;
  location: string;
  lat: number;
  long: number;
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
        const position: [number, number] = [item.lat, item.long];
        if (item.capacity_after < 8 && item.capacity_after >= 4) {
          return (
            <Marker key={item.odp_id} position={position} icon={yellowIcon}>
              <Popup>
                ODP ID: {item.odp_id} <br /> Kapasitas: {item.capacity_after}
              </Popup>
            </Marker>
          );
        } else if (item.capacity_after >= 8) {
          return (
            <Marker key={item.odp_id} position={position} icon={blueIcon}>
              <Popup>
                ODP ID: {item.odp_id} <br /> Kapasitas: {item.capacity_after}
              </Popup>
            </Marker>
          );
        } else if (item.capacity_after < 4) {
          return (
            <Marker key={item.odp_id} position={position} icon={redIcon}>
              <Popup>
                ODP ID: {item.odp_id} <br /> Kapasitas: {item.capacity_after}
              </Popup>
            </Marker>
          );
        }
        return null;
      })}
    </>
  );
}
