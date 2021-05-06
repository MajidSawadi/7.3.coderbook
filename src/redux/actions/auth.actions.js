import { toast } from "react-toastify";

import * as types from "../constants/auth.constants";

import api from "../api";

const register = (email, password) => async (dispatch) => {
    try{
    dispatch({type: types.REGISTER_REQUEST});
    }catch(error){

    }
};
export  const authActions={
    register,
};
