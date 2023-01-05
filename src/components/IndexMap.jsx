import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Searchbar from "./Searchbar";
import Locate from "./Locate";
import { useDispatch } from "react-redux";
import { getUsers } from "../redux/actions/actions";
import { UserAuth } from "../context/AuthContext";

export default function IndexMap() {
  const dispatch = useDispatch();
  const { user } = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const users = useSelector((state) => state.users);
  useMemo(() => users, []);

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
    <div className="w-[60%]">
      <div className="absolute z-10 overflow-y-auto" id="modal">
        <div className="ml-[500px] flex justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="absolute transition-opacity" aria-hidden="true">
            <div className="  bg-gray-500 opacity-75"></div>
          </div>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div
            className="inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="bg-white px-4 pt-5 pb-4">
              <div className="">
                <div className="mt-3 text-center">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-headline"
                  >
                    {user?.email
                      ? user?.displayName
                        ? `Bienvenido ${user?.displayName}`
                        : `Bienvenido Henry`
                      : `Inicia sesion para utilizar la busqueda`}
                  </h3>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex justify-center">
              {user?.email ? (
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-yellow-300  text-base font-medium text-black hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => {
                    document.getElementById("modal").style.display = "none";
                  }}
                >
                  Iniciar busqueda
                </button>
              ) : (
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-yellow-300  text-base font-medium text-black hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Registrarse / Iniciar Sesion
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <GoogleMap
        mapContainerClassName="w-[100%] h-[100vh]"
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
        {users.length > 0 &&
          users.map((marker) => (
            <Marker
              key={marker.lat}
              position={{ lat: Number(marker.lat), lng: Number(marker.lng) }}
              icon={{
                url: "/house.png",
                scaledSize: new window.google.maps.Size(30, 30),
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(15, 15),
              }}
              onClick={() => {
                setSelected(marker);
                panTo({ lat: Number(marker.lat), lng: Number(marker.lng) });
              }}
            />
          ))}
        {selected ? (
          <InfoWindow
            position={{ lat: Number(selected.lat), lng: Number(selected.lng) }}
            onCloseClick={() => {
              setSelected(null);
              panToDefault();
            }}
          >
            <>
              <p>
                <span className="font-semibold">Nombre</span>:
                <Link to={`/perfil/${selected.uid}`}> {selected.name}</Link>
              </p>
              <p>
                <span className="font-semibold">Localidad</span>:{" "}
                {selected.location}
              </p>
              {!selected.image ? (
                <img
                  src="https://images.assetsdelivery.com/compings_v2/thesomeday123/thesomeday1231709/thesomeday123170900021.jpg"
                  alt="user"
                  className="h-32 w-full rounded-lg mt-2"
                />
              ) : (
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="h-32 w-full rounded-lg mt-2"
                />
              )}
            </>
          </InfoWindow>
        ) : null}
      </GoogleMap>
      <Searchbar panTo={panTo} />
      <Locate panTo={panTo} />
    </div>
  );
}
