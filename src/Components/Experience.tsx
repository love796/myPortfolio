import React from "react";
import ListItem from "./Sub-Components/experience-list";

type Props = { experienceList: Experience[] };

const Experience = (props: Props) => {
	const experienceList = props.experienceList;

	return (
		<section id="experience" className="background-alt">
			<h2 className="heading">Experience</h2>
			<div id="experience-timeline">
				{experienceList.map((experience, index) => (
					<ListItem key={index} experience={experience} />
				))}
			</div>
		</section>
	);
};

export default Experience;
