import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./PricingPage.css";
import {
	faChartLine,
	faCheck,
	faFaceSmile,
	faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import vscode from "../../../assets/vscode.png";
import github from "../../../assets/github.png";
import react from "../../../assets/react.svg";
import bootstrap from "../../../assets/th.jpg";
import vite from "../../../assets/vite.png";
import node from "../../../assets/node.png";

function PricingPage() {
	return (
		<>
			<Container className="pricing-container">
				<p className="page-title">
					Try Now. Offers Expires{" "}
					<span className="page-title-span">Soon.</span>
				</p>
				<p className="page-title-p">
					Join over 3,000,000 developers using Blackbox
				</p>
				<Row className="mt-3 d-flex align-items-stretch">
					<Col md={4} className="mb-3 mb-md-0">
						<Card className="rounded blue-pricing-card d-flex flex-column justify-content-between h-100">
							<Card.Body className="pricing-card-body">
								<Card.Title>
									<h1 id="good">Good </h1>
									<h1 id="blue-developer">Developer</h1>
									<h1 id="blue-pricing">$0.99/mo</h1>
									<small className="small-info">
										Cancel anytime &middot; Billed Monthly
									</small>
								</Card.Title>
								<Button
									variant="warning"
									size="lg"
									className="subscribe-button mt-5"
								>
									Subscribe
								</Button>
								<Card.Subtitle className="mt-1">
									<small id="offer-info">
										Offer Expires Tomorrow
									</small>
								</Card.Subtitle>
								<Card.Text className="mt-5 card-text">
									<FontAwesomeIcon icon={faCheck} />{" "}
									<span id="blue-span">1,000</span> Code
									Autocomplete
								</Card.Text>
								<Card.Text className="card-text">
									<FontAwesomeIcon icon={faCheck} />{" "}
									<span id="blue-span">1,000</span> Code Chat
								</Card.Text>
								<Card.Text className="card-text">
									<FontAwesomeIcon icon={faCheck} />{" "}
									<span id="blue-span">1,000</span> Code
									Search
								</Card.Text>
								<Card.Text className="card-text">
									<FontAwesomeIcon icon={faCheck} />{" "}
									<span id="blue-span">Save</span> Important
									Snippets
								</Card.Text>
								<Card.Text className="card-text">
									<FontAwesomeIcon icon={faCheck} /> 200+
									languages
								</Card.Text>
								<Card.Text className="card-text">
									<FontAwesomeIcon icon={faChartLine} /> Best
									in Class Accuracy
								</Card.Text>
								<Card.Text className="card-text">
									<FontAwesomeIcon icon={faHeadset} />{" "}
									Priority Support
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>

					<Col md={4} className="mb-3 mb-md-0">
						<Card className="rounded green-pricing-card d-flex flex-column justify-content-between h-100">
							<Card.Body className="pricing-card-body">
								<Card.Title>
									<h1 id="good">Awesome </h1>
									<h1 id="green-developer">Developer</h1>
									<h1 id="green-pricing">$1.99/mo</h1>
									<small className="small-info">
										Cancel anytime &middot; Billed Monthly
									</small>
								</Card.Title>
								<Button
									variant="warning"
									size="lg"
									className="subscribe-button mt-5"
								>
									Subscribe
								</Button>
								<Card.Subtitle className="mt-1">
									<small id="offer-info">
										Offer Expires Tomorrow
									</small>
								</Card.Subtitle>
								<Card.Text className="mt-5 card-text">
									<FontAwesomeIcon icon={faCheck} />{" "}
									<span id="green-span">Unlimited</span> Code
									Autocomplete
								</Card.Text>
								<Card.Text className="card-text">
									<FontAwesomeIcon icon={faCheck} />{" "}
									<span id="green-span">Unlimited</span> Code
									Chat
								</Card.Text>
								<Card.Text className="card-text">
									<FontAwesomeIcon icon={faCheck} />{" "}
									<span id="green-span">VS CODE</span>{" "}
									Extension
								</Card.Text>
								<Card.Text className="card-text">
									<FontAwesomeIcon icon={faCheck} />{" "}
									<span id="green-span">Jupyter Lab</span>{" "}
									Extension
								</Card.Text>
								<Card.Text className="card-text">
									<FontAwesomeIcon icon={faCheck} />{" "}
									<span id="green-span">Google Colab</span>{" "}
									Extension
								</Card.Text>
								<Card.Text className="card-text">
									<FontAwesomeIcon icon={faCheck} />{" "}
									<span id="green-span">1,000</span> Code
									Search
								</Card.Text>
								<Card.Text className="card-text">
									<FontAwesomeIcon icon={faCheck} />{" "}
									<span id="green-span">Save</span> Important
									Snippets
								</Card.Text>
								<Card.Text className="card-text">
									<FontAwesomeIcon icon={faCheck} /> 3000 Text
									Copied
								</Card.Text>
								<Card.Text className="card-text">
									<FontAwesomeIcon icon={faCheck} /> 200+
									languages
								</Card.Text>
								<Card.Text className="card-text">
									<FontAwesomeIcon icon={faChartLine} /> Best
									in Class Accuracy
								</Card.Text>
								<Card.Text className="card-text">
									<FontAwesomeIcon icon={faHeadset} />{" "}
									Priority Support
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col md={4} className="mb-3 mb-md-0">
						<Card className="rounded orange-pricing-card d-flex flex-column justify-content-between h-100">
							<Card.Body className="pricing-card-body">
								<Card.Title>
									<h1 id="good">Legendary </h1>
									<h1 id="orange-developer">Developer</h1>
									<h1 id="orange-pricing">$1.99/mo</h1>
									<small className="small-info">
										Cancel anytime &middot; Billed Monthly
									</small>
								</Card.Title>
								<Button
									variant="warning"
									size="lg"
									className="subscribe-button mt-5"
								>
									Subscribe
								</Button>
								<Card.Subtitle className="mt-1">
									<small id="offer-info">
										Offer Expires Tomorrow
									</small>
								</Card.Subtitle>
								<Card.Text className="mt-5 card-text">
									<FontAwesomeIcon icon={faCheck} />
									Up to<span id="orange-span"> 20 Users</span>
								</Card.Text>
								<Card.Text className="card-text">
									<FontAwesomeIcon icon={faCheck} />
									<span id="orange-span">Everything</span> in
									AWESOME Developer
								</Card.Text>
								<Card.Text className="card-text">
									<FontAwesomeIcon icon={faCheck} />
									<span id="orange-span">Priority</span>{" "}
									access to new Features
								</Card.Text>
								<Card.Text className="card-text">
									<FontAwesomeIcon icon={faCheck} />
									Dedicate Support Engineer
								</Card.Text>
								<Card.Text className="card-text">
									<FontAwesomeIcon icon={faChartLine} /> Best
									in Class Accuracy
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
			<Container className="mt-5">
				<div className="sticky-brand-div">Join over 3,000,000 users</div>
			</Container>
			<Container className="brand-container px-4">
				<Row className="mt-3 gx-1">
					<Col md={2}>
						<div className="p-3 brand-col">
							<img
								src={vscode}
								alt="VS Code"
								className="brand-logo"
							/>
						</div>
					</Col>
					<Col md={2}>
						<div className="p-3 brand-col">
							<img
								src={github}
								alt="VS Code"
								className="brand-logo"
							/>
						</div>
					</Col>
					<Col md={2}>
						<div className="p-3 brand-col">
							<img
								src={react}
								alt="VS Code"
								className="brand-logo"
							/>
						</div>
					</Col>
					<Col md={2}>
						<div className="p-3 brand-col">
							<img
								src={bootstrap}
								alt="VS Code"
								className="brand-logo"
							/>
						</div>
					</Col>
					<Col md={2}>
						<div className="p-3 brand-col">
							<img
								src={vite}
								alt="VS Code"
								className="brand-logo"
							/>
						</div>
					</Col>
					<Col md={2}>
						<div className="p-3 brand-col">
							<img
								src={node}
								alt="VS Code"
								className="brand-logo"
							/>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default PricingPage;
