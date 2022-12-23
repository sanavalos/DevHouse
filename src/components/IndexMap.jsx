import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import Locate from "./Locate";

export default function IndexMap() {
  useEffect(() => {
    console.log("RENDERING MAP");
  }, []);
  const markers = useSelector((state) => state.markers);
  useMemo(() => markers, []);

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const [selected, setSelected] = useState(null);
  const center = {
    lat: 7.5,
    lng: 0,
  };

  const { isLoaded, loadError } = useLoadScript({
    // googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
    language: "es",
  });

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(10);
  }, []);

  const panToDefault = useCallback(() => {
    mapRef.current.panTo({ lat: 7.5, lng: 0 });
    mapRef.current.setZoom(3);
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
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          gestureHandling: "greedy",
          minZoom: 3,
        }}
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
                panTo({ lat: marker.lat, lng: marker.lng });
              }}
            />
          ))}
        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
              panToDefault();
            }}
          >
            <div>
              <h3>
                Henry:
                <Link to={`/perfil/${selected.person}`}>{selected.person}</Link>
              </h3>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
      <Searchbar panTo={panTo} />
      <Locate panTo={panTo} />
    </>
  );
}
