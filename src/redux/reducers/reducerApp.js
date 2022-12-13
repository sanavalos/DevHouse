import { GET_GEOLOCATION } from "../actions/actions";

const initialState = {
  location: [],
  markers: [
    { lat: 43.675819, lng: 7.289429, person: "Mario" },
    { lat: 48.9044, lng: 2.3064, person: "Fernando" },
    { lat: -37.979858, lng: -57.589794, person: "Santiago" },
  ],
};

export function reducerApp(state = initialState, action) {
  switch (action.type) {
    case GET_GEOLOCATION:
      return {
        ...state,
        location: action.payload,
      };
    default:
      return state;
  }
}

export default reducerApp;
