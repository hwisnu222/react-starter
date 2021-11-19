import { LOGIN, LOGOUT } from "../types/login";

const initialState = {
  login: true,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return { login: true };
    case LOGOUT:
      return { login: false };
    default:
      return state;
  }
}

export default reducer;
