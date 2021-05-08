//import { toast } from "react-toastify";

import * as types from "../constants/post.constants";

import api from "../apiServece";

const getPost = (email, password) => async (dispatch) => {
    try{
    dispatch({type: types.POST_REQUEST});
    const {data}=await api.get('/posts')
    console.log({data});

    dispatch({type: types.POST_SUCCESS, payload:data})
    }catch(error){

    }
};
const postPost = (body) => async (dispatch) => {
    try{
    dispatch({type: types.ADD_POST_REQUEST});
    const {postData}=await api.post('/posts',{body})
    console.log({postData});

    dispatch({type: types.ADD_POST_SUCCESS, payload:postData})
    }catch(error){

    }
};
export  const postActions={
    getPost,
    postPost,
};