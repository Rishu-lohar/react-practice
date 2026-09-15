import {
  Card
} from "react-bootstrap";



function CourseCard({ course }) {

  return (

    <Card className="course-card">

      <Card.Body>

        <Card.Title>
          {course.title}
        </Card.Title>



        <Card.Text>
          <strong>Instructor:</strong>
          {" "}
          {course.instructor}
        </Card.Text>



        <Card.Text>
          <strong>Duration:</strong>
          {" "}
          {course.duration}
        </Card.Text>

      </Card.Body>

    </Card>
  );
}

export default CourseCard;