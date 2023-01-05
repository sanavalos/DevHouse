import {
  GET_USERS,
  GET_USER,
  GET_POSTS,
  FILTER_POSTS,
  SEARCH_POSTS,
  CLEAR_FILTER,
  GET_RESPONSES,
  LAST_POST,
  MOST_COMMENTED,
  USERS_COUNTRY,
} from "../actions/actions";

const initialState = {
  users: [],
  user: {},
  posts: [],
  filtered: [],
  responses: [],
  postId: "",
  usersCountry: [],
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

    case CLEAR_FILTER:
      return {
        ...state,
        filtered: state.posts,
      };

    case GET_RESPONSES:
      const responses = action.payload.newData.filter(
        (response) => response.post == action.payload.post
      );
      return {
        ...state,
        responses: responses,
        postId: action.payload.post,
      };

    case LAST_POST:
      let sortedPost = state.posts.sort((a, b) => {
        if (a.timestamp > b.timestamp) {
          return -1;
        }
        if (a.timestamp < b.timestamp) {
          return 1;
        }
        return 0;
      });
      return {
        ...state,
        filtered: sortedPost,
      };

    case MOST_COMMENTED:
      let mostCommented = [];
      if (state.filtered.length > 0) {
        mostCommented = state.filtered.sort(
          (a, b) => b.responses - a.responses
        );
      }
      return {
        ...state,
        filtered: mostCommented,
      };

    case USERS_COUNTRY:
      const users = action.payload.newData.filter(
        (user) =>
          user.country == action.payload.country &&
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

export default reducerApp;
