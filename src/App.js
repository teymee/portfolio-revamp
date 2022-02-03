import Banner from "./Components/Banner/Banner";
import "./App.css";
import MiddleSection from "./Components/MiddleSection/MiddleSection";
import ProjectList from "./Components/Projects/ProjectList";
import Contact from "./Components/Contact/Contact";

function App() {
	return (
		<div className="App">
			<div className="container">
				<Banner />
				<MiddleSection />
				<ProjectList />
				<div className="back-color"></div>
				<Contact/>
				<div className="text"></div>
			</div>
		</div>
	);
}

export default App;
