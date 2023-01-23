import { GET_CHAT_MESSAGES } from "../actions/actions";

const initialState = {
  chatMessages: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CHAT_MESSAGES:
      return {
        ...state,
        chatMessages: action.payload,
      };
    default:
      return state;
  }
}
