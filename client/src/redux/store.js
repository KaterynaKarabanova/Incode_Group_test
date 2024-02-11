import { createStore } from "redux";

const initialState = {
  ticker: [],
  prevData: [],
  isLoading: true,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ticker/set":
      return {
        ...state,
        ticker: action.payload,
      };
    case "prevData/set":
      return {
        ...state,
        prevData: action.payload,
      };
    case "isLoading/set":
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export const store = createStore(rootReducer);
