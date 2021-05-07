import React from 'react' 
import {Card , Button, Container, Row} from 'react-bootstrap';
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {postActions} from '../redux/actions'

const HomePage = () => {

 const dispatch = useDispatch();
 const {lodaing, posts }=useSelector(state => state.post)
 useEffect(()=>{
     dispatch(postActions.getPost());
 }, [dispatch])

 if(lodaing) return <h1>loading</h1>


    return (
        <Container>
            {posts.map(p=> {
                return(<Card style={{ width: '18rem' }}>
                    <Row className="felx">
                {p.photos?.map(i => {
               return (
               <Card.Img variant="top" src={i.url} />
                   )
                    })}
                    </Row>
                <Card.Body>
                  <Card.Title>{p.body}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>);
            })}
           
        </Container>
    )
}

export {HomePage}
