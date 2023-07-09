import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navigationComponents/Navbar";
import HomePage from "./components/pages/HomePage/HomePage";
import FeaturesPage from "./components/pages/FeaturesPage/FeaturesPage";
import PricingPage from "./components/pages/PricingPage/PricingPage";
import "./App.css";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/home" element={<HomePage />} />
				<Route path="/features" element={<FeaturesPage />} />
				<Route path="/pricing" element={<PricingPage />} />
			</Routes>
		</Router>
	);
}

export default App;
