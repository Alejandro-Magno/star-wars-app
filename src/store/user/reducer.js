import axios from "axios";

const initialState = {
  USER: [],
  FILMS:[]
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case "GET_USER":
      return {
        ...state,
        USER: action.payload,
      };

      
      case "GET_FILMS":
          return {
              ...state,
              FILMS: action.payload,
            };
            
      default:
      return state;
  }
};
export default reducer
