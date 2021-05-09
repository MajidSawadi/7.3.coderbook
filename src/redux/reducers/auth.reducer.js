import * as types from "../constants/auth.constants";

const email =localStorage.getItem('coderbookUser');
 const id= 1;
const initialState = {
  email: email ?email :"",
  id: id ?id:"",
  loading: false,
  username:[],
  isAuthenticated: !!email || false,
  rederectToHompage: !!email,
  isTheSamePerson:!!id ,
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
            localStorage.setItem('coderbookUser',payload.email)
          return{
         ...state,
         loading: false,
         isAuthenticated: true,
         email: payload.email,
         rederectToHompage: true,


          };
          case types.USER_PROFILE_REQUEST:
            return{
           ...state,
           loading: true,
  
            };
            case types.REGISTER_SUCCESS:
              localStorage.setItem('coderbookUser',payload.email)
            return{
           ...state,
           loading: false,
           isAuthenticated: true,
           username: payload.id,
           isTheSamePerson: true,
           
  
  
            };

          



    default:
      return state;
  }
};

export default authReducer;