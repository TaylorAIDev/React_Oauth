import { ISTATE, User } from "../../libs/types";
import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from "../types";

const initialState: ISTATE = {
  isAuthenticated: false,
  user: null,
};

export default function (state: ISTATE = initialState, action: any) {
  const { type, payload } = action;

  console.log(type, payload);

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: payload,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}
