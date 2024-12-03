import "./Form.css";

export function Form({ formType, inputs, handleChange }) {
	if (formType === "General") {
		return (
			<div className="form-container">
				<label>Name</label>
				<input
					type="text"
					placeholder="name"
					name="name"
					value={inputs.name || ""}
					onChange={handleChange}
					className="form-input"
				/>
				<input
					type="email"
					placeholder="email"
					name="email"
					value={inputs.email || ""}
					onChange={handleChange}
					className="form-input"
				/>
				<input
					type="tel"
					placeholder="phone"
					name="tel"
					value={inputs.tel || ""}
					onChange={handleChange}
					className="form-input"
				/>
			</div>
		);
	} else if (formType === "Education") {
		return (
			<div className="form-container">
				<label>Name</label>
				<input
					type="text"
					placeholder="school name"
					name="schoolName"
					value={inputs.schoolName || ""}
					onChange={handleChange}
					className="form-input"
				/>
				<input
					type="text"
					placeholder="title of study"
					name="study"
					value={inputs.study || ""}
					onChange={handleChange}
					className="form-input"
				/>
				<input
					type="date"
					name="start"
					value={inputs.start || ""}
					onChange={handleChange}
					className="form-input"
				/>
				<input
					type="date"
					name="end"
					value={inputs.end || ""}
					onChange={handleChange}
					className="form-input"
				/>
			</div>
		);
	} else {
		return (
			<div className="form-container">
				<label>Name</label>
				<input
					type="text"
					placeholder="company name"
					name="companyName"
					value={inputs.companyName || ""}
					onChange={handleChange}
					className="form-input"
				/>
				<input
					type="text"
					placeholder="position"
					name="position"
					value={inputs.position || ""}
					onChange={handleChange}
					className="form-input"
				/>
				<input
					type="text"
					placeholder="responsibilities"
					name="responsibilities"
					value={inputs.responsibilities || ""}
					onChange={handleChange}
					className="form-input"
				/>
				<input
					type="date"
					name="start"
					value={inputs.start || ""}
					onChange={handleChange}
					className="form-input"
				/>
				<input
					type="date"
					name="end"
					value={inputs.end || ""}
					onChange={handleChange}
					className="form-input"
				/>
			</div>
		);
	}

	// const formItems = form.map((item) => (
	// 	<>
	// 		<label>{item.placeholder}:</label>
	// 		<input
	// 			key={item.id}
	// 			value={inputs.{item.id} || ""}
	// 			name={item.id}
	// 			onChange={(e) => setValue(e.target.value)}
	// 			placeholder={item.placeholder}
	// 			className="form-input"
	// 			type={item.type}
	// 		/>
	// 	</>
	// ));

	// return <div className="form-container">{formItems}</div>;
}
