// Import the React , Card, and ListGroup components from the react-bootstrap library
import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
function PostDetail({el}) {
  // Render the PostDetail component, which includes a Card component with a title, date, image, and description
    return (
      <Card style={{ width: '40rem' }}>
        
        <Card.Body>

          <Card.Title>{el.title}</Card.Title>
          <ListGroup className="list-group-flush">
          <ListGroup.Item>{el.date}</ListGroup.Item>
        </ListGroup>
         
          <Card.Img variant="top" src={el.image} style={{width:"450px", height:"450px"}} />
        </Card.Body>
       
        <Card.Body>
        <Card.Text>
            {el.description}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
  

export default PostDetail