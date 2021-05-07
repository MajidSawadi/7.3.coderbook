import React from 'react' 
import {Card , Button, Container, Row, Col, Image} from 'react-bootstrap';
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
          <Row >
            {posts.map(p=> {
                return(<Card style={{ width: '100%' }}>
                  
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
                  
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>);
            })}
           </Row>
        </Container>
    )
}

export {HomePage}
