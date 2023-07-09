import { Row, Col, Card, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function FeaturesPage() {
	return (
		<>
			<Container className="mt-5">
				<Row>
					<Col md={4}>
						<Card>
							<Card.Img
								variant="top"
								src="https://via.placeholder.com/150"
							/>
							<Card.Body>
								<Card.Title>Feature 1</Card.Title>
								<Card.Text>
									Curabitur blandit tempus porttitor. Maecenas
									sed diam eget risus varius blandit sit amet
									non magna. some more text
								</Card.Text>
								<Link to="/pricing">
									<Button variant="primary">
										Learn More
									</Button>
								</Link>
							</Card.Body>
						</Card>
					</Col>

					<Col md={4}>
						<Card>
							<Card.Img
								variant="top"
								src="https://via.placeholder.com/150"
							/>
							<Card.Body>
								<Card.Title>Feature 2</Card.Title>
								<Card.Text>
									Cras justo odio, dapibus ac facilisis in,
									egestas eget quam. Etiam porta sem malesuada
									magna mollis euismod.
								</Card.Text>
								<Link to="/pricing">
									<Button variant="primary">
										Learn More
									</Button>
								</Link>
							</Card.Body>
						</Card>
					</Col>

					<Col md={4}>
						<Card>
							<Card.Img
								variant="top"
								src="https://via.placeholder.com/150"
							/>
							<Card.Body>
								<Card.Title>Feature 3</Card.Title>
								<Card.Text>
									Vivamus sagittis lacus vel augue laoreet
									rutrum faucibus dolor auctor. Aenean lacinia
									bibendum nulla sed consectetur.
								</Card.Text>
								<Link to="/pricing">
									<Button variant="primary">
										Learn More
									</Button>
								</Link>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default FeaturesPage;
