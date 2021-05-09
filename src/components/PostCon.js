import React from 'react'
import { Container, Row , Col, FormControl, Button,Form  } from 'react-bootstrap'
import { useState } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import {postActions} from '../redux/actions'

const PostCon = () => {
const dispatch = useDispatch();
 const [body ,setPost]=useState('');
const {post} =useSelector((state)=>state)

function onSubmit(e){
    e.preventDefault()
    dispatch(postActions.postPost(body))
  
  
  }
   
   if(post.lodaing) return< h1>loading</h1>
   if(post.rederectToHompage) return (window.location.reload(false));
    return (
        <Container>
          

       
          
<Form inline style={{width: '100%'}} onSubmit={onSubmit}>
  <FormControl type="text" placeholder="sya something ..." style={{width: '80%'}}
  onChange={
    (e)=> setPost(e.target.value)
}
  />
  <Button variant="btn btn-primary">Post</Button>
</Form>
 


        </Container>
    )
}

export {PostCon}
