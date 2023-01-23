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
import { getUsers } from "../actions/actions";
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
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
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
    <div className=" w-[100%] lg:w-[60%]">
      <div className="absolute z-10" id="modal">
        <div className="ml-0 md:ml-[20vw] mt-80 justify-center pt-4 px-4 text-center block">
          <div className="absolute transition-opacity" aria-hidden="true">
            <div className=" bg-gray-500 opacity-75"></div>
          </div>
          <span className="hidden sm:h-screen" aria-hidden="true">
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
                    navigate("/conectarse");
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
        mapContainerClassName="w-full h-full"
        zoom={3}
        center={selected ?? center}
        onLoad={onMapLoad}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          gestureHandling: "greedy",
          minZoom: 3,
          styles: [
            {
              featureType: "all",
              elementType: "geometry",
              stylers: [
                {
                  color: "#202c3e",
                },
              ],
            },
            {
              featureType: "all",
              elementType: "labels.text.fill",
              stylers: [
                {
                  gamma: 0.01,
                },
                {
                  lightness: 20,
                },
                {
                  weight: "1.39",
                },
                {
                  color: "#ffffff",
                },
              ],
            },
            {
              featureType: "all",
              elementType: "labels.text.stroke",
              stylers: [
                {
                  weight: "0.96",
                },
                {
                  saturation: "9",
                },
                {
                  visibility: "on",
                },
                {
                  color: "#000000",
                },
              ],
            },
            {
              featureType: "all",
              elementType: "labels.icon",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "landscape",
              elementType: "geometry",
              stylers: [
                {
                  lightness: 30,
                },
                {
                  saturation: "9",
                },
                {
                  color: "#29446b",
                },
              ],
            },
            {
              featureType: "poi",
              elementType: "geometry",
              stylers: [
                {
                  saturation: 20,
                },
              ],
            },
            {
              featureType: "poi.park",
              elementType: "geometry",
              stylers: [
                {
                  lightness: 20,
                },
                {
                  saturation: -20,
                },
              ],
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [
                {
                  lightness: 10,
                },
                {
                  saturation: -30,
                },
              ],
            },
            {
              featureType: "road",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#193a55",
                },
              ],
            },
            {
              featureType: "road",
              elementType: "geometry.stroke",
              stylers: [
                {
                  saturation: 25,
                },
                {
                  lightness: 25,
                },
                {
                  weight: "0.01",
                },
              ],
            },
            {
              featureType: "water",
              elementType: "all",
              stylers: [
                {
                  lightness: -20,
                },
              ],
            },
          ],
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
                if (user) {
                  setSelected(marker);
                  panTo({ lat: Number(marker.lat), lng: Number(marker.lng) });
                }
              }}
              onMouseOver={() => {
                if (user) setSelected(marker);
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
                <span className="font-semibold">Nombre</span>:{selected.name}
              </p>
              <p>
                <span className="font-semibold">Localidad</span>:{" "}
                {selected.location}
              </p>
              <Link to={`/perfil/${selected.uid}`}>
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
              </Link>
            </>
          </InfoWindow>
        ) : null}
      </GoogleMap>
      {user?.uid && <Searchbar panTo={panTo} />}
      <Locate panTo={panTo} />
    </div>
  );
}
