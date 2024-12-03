// import { useState } from "react";
import { useState } from "react";
import "./App.css";
import { Form } from "./component/Form.jsx";

function App() {
	const [formType, setFormType] = useState("General");

	function handleCategorySwitch(e) {
		setFormType(e.target.innerHTML);
	}

	return (
		<>
			<button onClick={handleCategorySwitch}>General</button>
			<button onClick={handleCategorySwitch}>Education</button>
			<button onClick={handleCategorySwitch}>Experience</button>

			<Form formType={formType}></Form>
		</>
	);
}

export default App;
