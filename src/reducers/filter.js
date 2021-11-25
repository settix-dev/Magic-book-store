import { CHANGE_FILTER } from "../actions";

const fiterInitialState = {
  filter: "",
};

const filterReducer = (state = fiterInitialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      console.log(action.type);
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export default filterReducer;
