import React from 'react' 
import {Card , 
  Button, 
  Container,Tab, ListGroup,
   Row,Col, InputGroup,Form, FormControl, Image} from 'react-bootstrap';
import {useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {postActions} from '../redux/actions'
import logo from "../img/logo.png";



const HomePage = () => {

const [body ,setPost]=useState('');
const {post} =useSelector((state)=>state)

 const dispatch = useDispatch();
 const {lodaing, posts }=useSelector(state => state.post)
 useEffect(()=>{
     dispatch(postActions.getPost());
 }, [dispatch])

 function onSubmit(e){
  e.preventDefault()
  dispatch(postActions.postPost(body))


}
 if(lodaing) return <h1>loading</h1>
 if(post.lodaing) return< h1>loading</h1>
 if(post.rederectToHompage) return (window.location.reload(false));

    return (
        <Container fluid>

          <Row className="justify-content-center">
            
            
              <Col style={{paddingLeft:0, marginLeft:0}}>
              <Col xs={1} md={0} className="d-flex flex-row">
      <Image src={logo} rounded float-left width="50px" className="m-1 " />
      <h3 className="m-2 p2">Majid</h3>
    </Col>
              <Col  >
                
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
  <Row>
    <Col sm={6}>
      <ListGroup>
        <ListGroup.Item action href="#link1">
          Link 1
        </ListGroup.Item>
        <ListGroup.Item action href="#link2">
          Link 2
        </ListGroup.Item>
      </ListGroup>
    </Col>
    <Col sm={12}>
      <Tab.Content>
        <Tab.Pane eventKey="#link1">
          
        </Tab.Pane>
        <Tab.Pane eventKey="#link2">
          
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
        </Col>
        </Col>
       
          
          <Col xs={6}><Form inline style={{width: '100%'}} onSubmit={onSubmit}>
            <FormControl type="text" placeholder="Search" style={{width: '80%'}}
            onChange={
              (e)=> setPost(e.target.value)
          }
            />
            <Button variant="btn btn-primary">Post</Button>
          </Form>
         
         
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
                    
                {p.comments?.map(i => {
               return (
            
              <Card 
              body>{i.content}
              
              </Card>
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
       
                  
                 
                </Card.Body>
              </Card>)
            })}</Col>
           <Col style={{paddingRight:0, marginRight:0}}>
           <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </Col>
           </Row>
        </Container>
    )
}

export {HomePage}
