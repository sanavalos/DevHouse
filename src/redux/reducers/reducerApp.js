import {
  GET_USERS,
  GET_USER,
  GET_POSTS,
  FILTER_POSTS,
  SEARCH_POSTS,
} from "../actions/actions";

const initialState = {
  users: [],
  user: {},
  posts: [],
  filtered: [],
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

    case FILTER_POSTS:
      let filtered = [];
      if (state.posts.length > 0) {
        if (action.payload === "" || action.payload === "Todos") {
          filtered = state.posts;
        } else {
          filtered = state.posts.filter(
            (post) =>
              post.country.toLowerCase() === action.payload.toLowerCase()
          );
        }
      } else {
        filtered = state.posts;
      }
      return {
        ...state,
        filtered: filtered,
      };

    case SEARCH_POSTS:
      let search = [];
      if (state.posts.length > 0) {
        search = state.posts.filter(
          (post) =>
            post.user.toLowerCase().includes(action.payload.toLowerCase()) ||
            post.title.toLowerCase().includes(action.payload.toLowerCase())
        );
      } else {
        search = state.posts;
      }

      return {
        ...state,
        filtered: search,
      };
    default:
      return state;
  }
}

export default reducerApp;
