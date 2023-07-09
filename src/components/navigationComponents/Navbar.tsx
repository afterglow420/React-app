import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function TopNav() {
	return (
		<>
			<Navbar bg="dark" expand="lg" variant="dark">
				<Container>
					<Navbar.Brand as={Link} to="/home">APP NAME</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="flex-row">
							<Nav.Link as={Link} className="me-2" to="/home">
								Home
							</Nav.Link>
							<Nav.Link as={Link} className="me-2" to="/features">
								Features
							</Nav.Link>
							<Nav.Link as={Link} className="me-2" to="/pricing">
								Pricing
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default TopNav;
