import { Map, Marker } from "pigeon-maps"

const GoogleMap = () => {
  return (
    <Map height={400} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
      <Marker width={50} anchor={[50.879, 4.6997]} />
    </Map>
  );
};

export default GoogleMap;
