import React from "react";

function Locate({ panTo }) {
  return (
    <button
      className="absolute top-4 right-4 border-none z-10"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => "Error en la localización"
        );
      }}
    >
      <img src="gps.png" alt="gps button" className="w-[30px] cursor-pointer" />
    </button>
  );
}

export default Locate;
