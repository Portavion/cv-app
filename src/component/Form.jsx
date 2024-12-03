import "./Form.css";
import { educationForm, generalForm, experienceForm } from "../forms";
// import { CustomInput } from "./CustomInput";
// import { useState } from "react";

export function Form({ formType }) {
	// const [value, setValue] = useState("")
	let form = "";
	formType === "General"
		? (form = generalForm)
		: formType === "Education"
		? (form = educationForm)
		: (form = experienceForm);

	const formItems = form.map((item) => (
		<>
			<label>{item.placeholder}:</label>
			<input
				key={item.id}
				placeholder={item.placeholder}
				className="form-input"
				type={item.type}
			/>
		</>
	));

	return <div className="form-container">{formItems}</div>;
}
