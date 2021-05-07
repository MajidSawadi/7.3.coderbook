import * as types from "../constants/auth.constants";

const initialState = {
  email: "",
  loading: false,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {

      case types.REGISTER_REQUEST:
          return{
         ...state,
         loading: true,

          };
          case types.REGISTER_SUCCESS:
          return{
         ...state,
         loading: false,
         isAuthenticated: true,
         email: payload.email,
         rederectToHompage: true,


          };

          



    default:
      return state;
  }
};

export default authReducer;