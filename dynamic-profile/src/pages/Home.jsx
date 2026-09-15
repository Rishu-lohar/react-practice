import {Link} from "react-router-dom";
import { Container,Button} from "react-bootstrap";

function Home(){

    return(

        <Container className="mt-4">

            <h2>Students Profile Viewer</h2>

            <p>Click below buttons to view student profiles</p>

            <Button
                as={Link}
                to="/student/101"
                variant="primary"
                className="me-3"
            >Student 101</Button>

            <Button
                as={Link}
                to="/student/102"
                variant="success"
                className="me-3"
            >Student 102</Button>

            <Button
                as={Link}
                to="/student/103"
                variant="dark"
                className="me-3"
            >Student 103</Button>


        </Container>
    );
}
export default Home;