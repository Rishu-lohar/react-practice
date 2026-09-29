import { useParams, useNavigate } from "react-router-dom";

import {
  Container,
  Card,
  Button
} from "react-bootstrap";

import students from "../data/students";



function StudentProfile() {

  // URL 
  const { id } = useParams();

  // Navigation function
  const navigate = useNavigate();


  // Student search
  const student = students.find(
    (s) => s.id === Number(id)
  );


  // Next student function
  function nextStudent() {

    // Current student 
    const currentIndex = students.findIndex(
      (s) => s.id === Number(id)
    );

    // Next index
    const nextIndex = currentIndex + 1;


    
    if (nextIndex < students.length) {

      navigate(
        `/student/${students[nextIndex].id}`
      );

    }

    
    else {

      navigate(
        `/student/${students[0].id}`
      );
    }
  }



  return (

    <Container className="mt-4">

      <Card>

        <Card.Body>

          <Card.Title>
            Student Details
          </Card.Title>


          <Card.Text>
            <strong>ID:</strong> {student?.id}
          </Card.Text>


          <Card.Text>
            <strong>Name:</strong> {student?.name}
          </Card.Text>


          <Card.Text>
            <strong>Course:</strong> {student?.course}
          </Card.Text>


          <Card.Text>
            <strong>Marks:</strong> {student?.marks}
          </Card.Text>



          <Button
            variant="primary"
            onClick={nextStudent}
          >
            Next Student
          </Button>

        </Card.Body>

      </Card>

    </Container>
  );
}

export default StudentProfile;