import React from "react";

function Locate({ panTo }) {
  return (
    <button
      className="fixed top-[10vh] right-10 border-none z-10"
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
      <img src="gps.png" alt="gps button" className="w-[70px] cursor-pointer" />
    </button>
  );
}

export default Locate;
