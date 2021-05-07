import { toast } from "react-toastify";

import * as types from "../constants/auth.constants";

import api from "../apiServece";

const register = (email, password) => async (dispatch) => {
    try{
    dispatch({type: types.REGISTER_REQUEST});
    const {data}=await api.post('/users',{email, password})
    console.log({data});

    dispatch({type: types.REGISTER_SUCCESS, payload:data})
    }catch(error){

    }
};
export  const authActions={
    register,
};
