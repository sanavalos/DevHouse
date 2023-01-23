import {
  GET_USERS,
  GET_USER,
  CLEAR_USER,
  USERS_COUNTRY,
} from "../actions/actions";

const initialState = {
  users: [],
  user: {},
  usersCountry: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case CLEAR_USER:
      return {
        ...state,
        user: {},
      };

    case USERS_COUNTRY:
      const users = action.payload.newData.filter(
        (user) =>
          user.country === action.payload.country &&
          user.uid !== action.payload.userId
      );
      return {
        ...state,
        usersCountry: users.slice(0, 3),
      };

    default:
      return state;
  }
}
