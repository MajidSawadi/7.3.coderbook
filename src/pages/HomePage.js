import React from 'react' 
import {RightBar, LeftBar, PostCon, ShowPost} from '../components'
import {Container, Row, Col} from 'react-bootstrap'


const HomePage = () => {



    return (
        <Container fluid>
          
          <Row>
          <Col><LeftBar/></Col>
          <Col xs={6}>
          <PostCon/>
          <ShowPost/>   
          </Col>
          <Col><RightBar/></Col>
          </Row>
        </Container>
    )
}

export {HomePage}
