import {Link} from "react-router-dom";

import { Navbar, Container, Nav} from "react-bootstrap";

function NavigationBar(){

    return (

        <Navbar bg="dark" varient="dark">

            <Container>

                {/* LOGO */}
                <Navbar.Brand>Student Dashboard</Navbar.Brand>

                {/* Nav Links */}

                <Nav>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                </Nav>

            </Container>
        </Navbar>
    );
}
export default NavigationBar;