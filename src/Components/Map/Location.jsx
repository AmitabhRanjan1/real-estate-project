import { Map } from "leaflet";
import { TileLayer } from "react-leaflet";

const Location = () => {
  return (
    <div>
         <Map center={[45.4, -75.7]} zoom={12}>
         <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      </Map>
    </div>
  );
};

export default Location;