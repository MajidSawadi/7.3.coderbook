import React ,{useEffect}from 'react'
import { Image,  Row , Col , ListGroup, Tab,  } from 'react-bootstrap';
import {useDispatch , useSelector}from 'react-redux'
import {authActions} from '../redux/actions'
import logo from "../img/majid.jpeg";
const LeftBar = () => {

  const {laoding, username }=useSelector(state => state.auth)

 const dispatch = useDispatch();
 useEffect(()=>{
     dispatch(authActions.getProfile());
 }, [dispatch])

 if(laoding) return <h1>loading</h1>

    return (
        <div>
          
          
                  <Col xs={1} md={0} className="d-flex flex-row">
                  <Image src={logo} rounded float-left width="50px" className="m-1 " />
                  <h3 className="m-2 p2">Majid</h3>
                </Col>
              <Col  >
                
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
  <Row>
    <Col >
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
        </div>
    )
}

export {LeftBar}
