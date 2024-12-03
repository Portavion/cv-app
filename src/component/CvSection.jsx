export function CvSection({ id, formInfo, handleDelete, handleEdit }) {
	const formInfoArray = Object.entries(formInfo);
	const formItems = formInfoArray.map((item) => (
		<div key={item[0]} className={item[0]}>
			{item[1]}
		</div>
	));

	return (
		<div id={id}>
			<div className="form-container">
				{formItems}
				<div>
					<button onClick={handleEdit}>Edit</button>
					<button onClick={handleDelete}>Delete</button>
				</div>
			</div>
		</div>
	);
}
