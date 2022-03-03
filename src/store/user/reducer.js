import axios from "axios";

const initialState = {
  USER: [],
  FILMS:[],
  CHARACTERS:[],
  USERLIST:[]
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case "GET_USER":
      return {
        ...state,
        USER: action.payload,
      };

    case "GET_USERLIST":
      return {
        ...state,
        USERLIST: action.payload,
      };

    case "GET_FILMS":
      return {
        ...state,
        FILMS: action.payload,
      };

    case "GET_CHARACTERS":
      return {
        ...state,
        CHARACTERS: action.payload,
      };

    default:
      return state;
  }
};
export default reducer
