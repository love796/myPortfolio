import React from "react";
import ListItem from "./Sub-Components/experience-list";

type Props = { experienceList: Experience[] };

const Experience: React.FC<Props> = (props: Props) => {
	const experienceList = props.experienceList;

	return (
		<div id="experience" className="background-alt">
			<h2 className="heading">Experience</h2>
			<div id="experience-timeline">
				{experienceList.map((experience, index) => (
					<ListItem key={index} experience={experience} />
				))}
			</div>
		</div>
	);
};

export default Experience;
