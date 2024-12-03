import { useState } from "react";
import "./App.css";
import { Form } from "./component/Form.jsx";
import { v4 as uuid } from "uuid";
import { HeaderSections } from "./component/HeaderSections.jsx";

let sections = [];

function App() {
	const [formType, setFormType] = useState("General");
	const [formSections, setFormSections] = useState("");
	const [inputs, setInputs] = useState({});
	const [generalSubmitted, setGeneralSubmitted] = useState(false);

	function handleCategorySwitch(e) {
		setFormType(e.target.innerHTML);
		setInputs({});
	}

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};

	const handleDelete = (event) => {
		let sectionId = event.target.parentNode.parentNode.parentNode.id;

		const removedSectionType = sections.filter(
			(section) => section.id === sectionId
		)[0].type;

		sections.filter((section) => section.id != sectionId);
		sections = sections.filter((section) => section.id != sectionId);

		if (removedSectionType === "General") {
			setGeneralSubmitted(false);
		}

		const newFormSections = (
			<HeaderSections sections={sections} handleDelete={handleDelete} />
		);

		setFormSections(newFormSections);

		// console.log(newFormSections);
		// sections.filter();
	};

	function handleSubmission(e) {
		e.preventDefault();

		const formInfo = {
			id: uuid(),
			type: e.target.className,
			fieldValues: inputs,
		};

		if (formType === "General" && !generalSubmitted) {
			setGeneralSubmitted(true);
		} else if (formType === "General" && generalSubmitted) {
			alert("General informations already submitted");
			return;
		}

		sections.push(formInfo);

		// const newFormSections = sections.map((section) => (
		// 	<CvSection
		// 		key={section.id}
		// 		formType={section.type}
		// 		id={section.id}
		// 		formInfo={section.fieldValues}
		// 		handleDelete={handleDelete}
		// 	></CvSection>
		// ));
		const newFormSections = (
			<HeaderSections sections={sections} handleDelete={handleDelete} />
		);
		// setFormSections([...newFormSections]);
		setFormSections(newFormSections);

		setInputs({});
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
			{formSections}
		</>
	);
}

export default App;
