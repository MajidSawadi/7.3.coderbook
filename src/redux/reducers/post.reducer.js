import * as types from "../constants/post.constants";

const initialState = {
  posts: [],
  loading: false,
  isAuthenticated: false,

};

const postReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {

      case types.POST_REQUEST:
          return{
         ...state,
         loading: true,

          };
          case types.ADD_POST_REQUEST:
          return{
         ...state,
         loading: true,

          };
          case types.POST_SUCCESS:
          return{
         ...state,
         loading: false,
          posts: payload,

          };
          case types.ADD_POST_SUCCESS:
          return{
         ...state,
         loading: false,
        posts: payload,
        rederectToHompage: true,
        isAuthenticated: true,



          };

          



    default:
      return state;
  }
};

export default postReducer;