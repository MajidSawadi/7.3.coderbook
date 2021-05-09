import React from 'react'
import {useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {postActions} from '../redux/actions'
import { Container, Row ,Card, Image } from 'react-bootstrap'
import { Comment} from './Comment'

const ShowPost = () => {

const {laoding, posts }=useSelector(state => state.post)

 const dispatch = useDispatch();
 useEffect(()=>{
     dispatch(postActions.getPost());
 }, [dispatch])


 if(laoding) return <h1>loading</h1>
    return (

        <Container>
            {posts.map(p=> {
      return(
      <Card style={{ width: '100%' }}>
      <Card.Body>
        <Card.Title>{p.body}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Row>
      {p.photos?.map(i => {
     return (

      <Image src={i.url} fluid style={{width: 'auto', height: 420 }} className="m-2 p5"/>

         )
        })}
        </Row>
        <Comment/>
          </Card.Body>
          </Card>
       
            )})}

            
    
    </Container>
    );
    
}

export  {ShowPost}
