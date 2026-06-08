import {
  Outlet
} from "react-router-dom";

import {
  Container,
  Row,
  Col,
  Navbar
} from "react-bootstrap";

import Sidebar from "../components/Sidebar";



function CoursesDashboard() {

  return (

    <>

      {/* Top Navbar */}
      <Navbar
        bg="dark"
        variant="dark"
        className="px-3"
      >

        <Navbar.Brand>
          Learning Dashboard
        </Navbar.Brand>

      </Navbar>






      {/* Main Layout */}
      <Container fluid>

        <Row>

          {/* Sidebar */}
          <Col
            md={3}
            className="sidebar-column"
          >

            <Sidebar />

          </Col>






          {/* Main Content */}
          <Col
            md={9}
            className="content-column"
          >

            {/* Child Routes */}
            <Outlet />

          </Col>

        </Row>

      </Container>

    </>
  );
}

export default CoursesDashboard;