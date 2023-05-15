import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
//represents a navigation bar
const NavBar = ({setText}) => {
    return (
        <Navbar bg="black" expand="lg" variant='dark' className='navbares'>
              <Container fluid>
                <Navbar.Brand href="#" style={{color:"white",fontFamily:"fantasy",fontSize:"47px",fontStyle:"oblique"}}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhUDbUS2o32MI46syViK263AVm_gwuOjZd8w&usqp=CAU" style={{width:"55px",height:"55px"}}/>    Media Blog</Navbar.Brand>
               
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll>
              {/*When the user clicks on the Link to="/home" or to="/add", the user will be redirected to the respective routes*/}
                   <Nav.Link href="#action1"><Link to="/home" style={{textDecoration:"none" ,color:"grey"}}> HOME</Link></Nav.Link>
                  </Nav>
                {/*search Form*/}
                  <Form className="d-flex">     
              <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{backgroundColor:"white", border:"black", color:"black",width:"300px"}}
              onChange={(e)=>setText(e.target.value)}
              />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDB-7iexsIGkBSlF5H3sDY6yNnqry14QCoy8mU1xU&s"
             style={{width:"50px",height:"50px", marginRight:"200px"}}/>
          </Form>

                 <Nav.Link href="#action1"><Link to="/add"> <img src="data:image/png;base64,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"
                  style={{width:"55px",height:"55px", marginRight:"200px"}}/></Link></Nav.Link>

                  <Nav.Link href="#action1"><Link to="/profil">  <img src="data:image/png;base64,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"
                   style={{width:"55px",height:"55px", marginRight:"100px"}}/> </Link></Nav.Link>
               

                </Navbar.Collapse>
              </Container>
            </Navbar>
          )
}

export default NavBar
