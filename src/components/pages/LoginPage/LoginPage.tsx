import InputField from "../../basicComponents/InputField";
import Button from "../../basicComponents/Button";
import "./LoginPageStyles.css";

const LoginPage = () => {
	const handleEmailChange = (value: string) => {
		console.log("Email changed", value);
	};

	const handlePasswordChange = (value: string) => {
		console.log("Password changed", value);
	};

	const handleButtonClick = () => {
		console.log("button clicked");
	};

	return (
		<>
			<div className="login-page">
				<div className="animated-circle" />
				<div className="card">
					<div className="card-body">
						<div className="mb-5">
							<h5>Conecteaza-te la platforma noastra</h5>
						</div>
						<InputField
							label="Adresa de email"
							type="email"
							placeholder="mail@mail.com"
							onChange={handleEmailChange}
						/>
						<InputField
							label="Parola"
							type="password"
							onChange={handlePasswordChange}
							small="Nu vom impartasi datele dumneavoastra cu bla bla etc"
						/>
						<Button color="primary" onClick={handleButtonClick}>
							Autentificare
						</Button>
						<div
							className="row mt-3"
							style={{ textAlign: "center" }}
						>
							<span>
								Nu esti inregistrat?{" "}
								<a
									href="#"
									target="_blank"
									style={{
										fontWeight: "bold",
										color: "black",
									}}
								>
									Creeaza cont
								</a>
							</span>
							<span>
								<a
									href="#"
									target="_blank"
									style={{
										fontWeight: "bold",
										color: "black",
									}}
								>
									Ai uitat parola?
								</a>
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LoginPage;
