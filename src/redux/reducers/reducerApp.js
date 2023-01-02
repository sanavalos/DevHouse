import { GET_USERS, GET_USER, GET_POSTS } from "../actions/actions";

const initialState = {
  users: [],
  user: {},
  posts: [],
};

export function reducerApp(state = initialState, action) {
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

    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
}

export default reducerApp;
