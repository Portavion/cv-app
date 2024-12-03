import { CvSection } from "./CvSection";

export function HeaderSections({ sections, handleDelete, handleEdit }) {
	let generalSection = sections.filter((item) => item.type === "General");

	generalSection = generalSection.map((section) => (
		<CvSection
			key={section.id}
			id={section.id}
			formInfo={section.fieldValues}
			handleDelete={handleDelete}
			handleEdit={handleEdit}
		></CvSection>
	));

	let experienceSections = sections.filter(
		(item) => item.type === "Experience"
	);

	experienceSections = experienceSections.map((section) => (
		<CvSection
			key={section.id}
			id={section.id}
			formInfo={section.fieldValues}
			handleDelete={handleDelete}
			handleEdit={handleEdit}
		></CvSection>
	));

	let educationSections = sections.filter(
		(item) => item.type === "Education"
	);

	educationSections = educationSections.map((section) => (
		<CvSection
			key={section.id}
			id={section.id}
			formInfo={section.fieldValues}
			handleDelete={handleDelete}
			handleEdit={handleEdit}
		></CvSection>
	));

	return (
		<>
			<div className="General">
				<h2>General</h2>
				{generalSection}
			</div>
			<h2>Experience</h2>
			<div className="Experience">{experienceSections}</div>
			<div className="Education">
				<h2>Education</h2>
				{educationSections}
			</div>
		</>
	);
}
