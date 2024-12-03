import { CvSection } from "./CvSection";

export function HeaderSections({ sections, handleDelete }) {
	let generalSection = sections.filter((item) => item.type === "General");

	generalSection = generalSection.map((section) => (
		<CvSection
			key={section.id}
			id={section.id}
			formInfo={section.fieldValues}
			handleDelete={handleDelete}
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
		></CvSection>
	));

	return (
		<>
			<h2>General</h2>
			{generalSection}
			<h2>Experience</h2>
			{experienceSections}
			<h2>Educatoin</h2>
			{educationSections}
		</>
	);
}
