export function CvSection({ formType, formInfo }) {
	// const [value, setValue] = useState("")
	// console.log(formInfo);
	const formInfoArray = Object.entries(formInfo);
	console.log(formInfoArray);

	const formItems = formInfoArray.map((item) => (
		<>
			<div>{item[1]}</div>
		</>
	));

	return (
		<>
			<h2>{formType}</h2>
			<div className="form-container">{formItems}</div>
			<button>Edit</button>
			<button>Delete</button>
		</>
	);
}
