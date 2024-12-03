// import { useState } from "react";
import { useState } from "react";
import "./App.css";
import { Form } from "./component/Form.jsx";
import { CvSection } from "./component/CvSection.jsx";

const sections = [];

function App() {
	const [formType, setFormType] = useState("General");
	const [formSections, setFormSections] = useState("");
	const [inputs, setInputs] = useState({});

	function handleCategorySwitch(e) {
		setFormType(e.target.innerHTML);
		setInputs({});
	}

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};

	function handleSubmission(e) {
		e.preventDefault();
		// console.log(e.target);
		let formType = e.target.className;
		let formID = 0;
		let formInfo = {
			id: formID,
			type: formType,
			fieldValues: inputs,
		};

		sections.push(formInfo);
		setInputs({});

		// console.log(sections);

		setFormSections(
			sections.map((section) => (
				<CvSection
					key={section.id}
					formType={section.type}
					formInfo={section.fieldValues}
				></CvSection>
			))
		);
	}

	return (
		<>
			<button onClick={handleCategorySwitch}>General</button>
			<button onClick={handleCategorySwitch}>Education</button>
			<button onClick={handleCategorySwitch}>Experience</button>
			<form className={formType} onSubmit={handleSubmission}>
				<Form
					formType={formType}
					handleChange={handleChange}
					setInputs={setInputs}
					inputs={inputs}
				></Form>
				<input type="submit" value="Submit" />
			</form>
			<div>{formSections}</div>
		</>
	);
}

export default App;
