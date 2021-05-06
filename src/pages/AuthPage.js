import React from 'react'
import {useState} from 'react'
import {useDispatch , useSelector}from 'react-redux'
import {authActions} from '../redux/actions'
import {Form , Button, Container} from 'react-bootstrap'
const AuthPage = () => {

const [email, setEmail] = useState('')
const dispatch = useDispatch();
const {auth} =useSelector((state)=>state)
const [password ,setPassowrd] = useState('')
function onSubmit(e){
    e.preventDefault()
    dispatch(authActions.register(email, password))


}
if(auth.loading) return ("loading");
    return (
        <Container>
            <Form onSubmit={onSubmit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email"  
    onChange={
        (e)=> setEmail(e.target.value)
    }/>

    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control 
    type="password" 
    placeholder="Password"
    onChange={
        (e)=> setPassowrd(e.target.value)
    } />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </Container>
    )
}

export {AuthPage}
