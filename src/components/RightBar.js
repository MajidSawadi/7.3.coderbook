import React from 'react'
import { Container ,Card , Button, Row, Col} from 'react-bootstrap'

const RightBar = () => {
    return (
        <Container>
            <Row>
                <Col> <Card style={{ width: '12rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card></Col>
<Col>
            <Card style={{ width: '12rem' }}>
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

export  {RightBar}
