import { Link } from "react-router-dom";

import {
  Nav
} from "react-bootstrap";



function Sidebar() {

  return (

    <div className="sidebar">

      <h4 className="text-white mb-4">
        Courses
      </h4>



      <Nav className="flex-column">

        <Nav.Link
          as={Link}
          to="/courses/search"
        >
          Search Courses
        </Nav.Link>



        <Nav.Link
          as={Link}
          to="/courses/list"
        >
          Course List
        </Nav.Link>

      </Nav>

    </div>
  );
}

export default Sidebar;