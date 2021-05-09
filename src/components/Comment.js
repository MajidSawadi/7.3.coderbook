import React from 'react'
import { Card , InputGroup,Button, FormControl, Container  } from 'react-bootstrap'
import {useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {postActions} from '../redux/actions'
const Comment = () => {
      
    const { posts }=useSelector(state => state.post)
 const dispatch = useDispatch();

 useEffect(()=>{
     dispatch(postActions.getComment);
 }, [dispatch])
 
    return (
        <div>

         {posts.map(i => {
     return (
         <div>
        {i.comments?.map(c => {
            return (
         
           <Card 
           body>{c.content}
           
           </Card>
                )
                 })}
            </div>
         )
          })}

          <InputGroup className="mb-3">
<FormControl
placeholder="your comment..."
aria-label="your comment.."
aria-describedby="basic-addon2"
/>
<InputGroup.Append>
<Button variant="outline-secondary">comment</Button>
</InputGroup.Append>
</InputGroup>  
        </div>
    )
}

export {Comment}
