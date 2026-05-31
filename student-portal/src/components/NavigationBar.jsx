import {Link} from "react-router-dom";
import {Navbar, Nav, Container} from "react-bootstrap";

function NavigationBar(){

    return(

        <Navbar bg="dark" variant="dark" expand="lg">

            <Container>

                <Navbar.Brand>
                    Student Portal
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="me-auto">

                        <Nav.Link as={Link} to="/">Home</Nav.Link>

                        <Nav.Link as={Link} to="/students">Students</Nav.Link>

                        <Nav.Link as={Link} to="/reports">Reports</Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavigationBar;