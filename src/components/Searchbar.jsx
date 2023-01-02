import React from "react";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
function Searchbar({ panTo }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOption: {
      location: { lat: () => 40.7128, lng: () => -74.006 },
      radius: 2000,
    },
  });
  return (
    <>
      <div className="absolute top-32 left-[70%] translate-x-[-50%] w-[100%] max-w-[400px] z-index">
        <Combobox
          onSelect={async (address) => {
            setValue(address, false);
            clearSuggestions();
            try {
              const results = await getGeocode({ address });
              const { lat, lng } = await getLatLng(results[0]);
              panTo({ lat, lng });
            } catch (error) {
              console.log(error);
            }
          }}
        >
          <ComboboxInput
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            disabled={!ready}
            placeholder="Elige una ubicación"
            className="p-2 text-xl w-[500px]"
          />
          <ComboboxPopover>
            <ComboboxList className="bg-yellow-300">
              {status === "OK" &&
                data.map(({ id, description }) => (
                  <ComboboxOption key={id} value={description} className="cursor-pointer my-2 hover:bg-black hover:text-yellow-300"/>
                ))}
            </ComboboxList>
          </ComboboxPopover>
        </Combobox>
      </div>
    </>
  );
}

export default Searchbar;
