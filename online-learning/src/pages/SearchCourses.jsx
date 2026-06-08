import {
  Form
} from "react-bootstrap";



function SearchCourses() {

  return (

    <div>

      <h2>
        Search Courses
      </h2>



      <Form className="mt-4">

        <Form.Control
          type="text"
          placeholder="Search Course..."
        />

      </Form>

    </div>
  );
}

export default SearchCourses;