import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function HomePage() {
	return (
		<Container className="mt-5">
			<Row className="mb-4">
				<Col>
					<h1>Welcome to Our App</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nulla vel porttitor metus, ac convallis metus.
					</p>
				</Col>
			</Row>

			<Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Link to={"/features"}>Click to find out more about our features</Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
		</Container>
	);
}

export default HomePage;
