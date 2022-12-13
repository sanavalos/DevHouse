import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useState, useRef, useCallback } from "react";
import { useSelector } from "react-redux";
import Searchbar from "./Searchbar";
import Locate from "./Locate";

export default function IndexMap() {
  const markers = useSelector((state) => state.markers);
  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const [selected, setSelected] = useState(null);
  const libraries = ["places"];
  const center = {
    lat: 7.5,
    lng: 0,
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
    language: "es",
  });

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  if (loadError) return "Error loading map";
  if (!isLoaded) return "Loading map...";
  return (
    <>
      <GoogleMap
        mapContainerClassName="w-[70%] h-[100vh]"
        zoom={3}
        center={center}
        onLoad={onMapLoad}
      >
        {markers.length > 0 &&
          markers.map((marker) => (
            <Marker
              key={marker.lat}
              position={{ lat: marker.lat, lng: marker.lng }}
              icon={{
                url: "/house.png",
                scaledSize: new window.google.maps.Size(30, 30),
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(15, 15),
              }}
              onClick={() => {
                setSelected(marker);
              }}
            />
          ))}
        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h3>Henry: {selected.person}</h3>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
      <Searchbar panTo={panTo} />
      <Locate panTo={panTo} />
    </>
  );
}
