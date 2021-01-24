import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Experience = (props: { experienceList: Experience[] }) => {
	const experienceList = props.experienceList;

	return (
		<div id="experience" className="background-alt">
			<h2 className="heading">Experience</h2>
			<div id="experience-timeline">{experienceList.map((experience, index) => listItem(experience, index))}</div>
		</div>
	);
};

const listItem = (experience: Experience, index: number) => {
	return (
		<div key={index}>
			<div className="vtimeline-icon">
				<FontAwesomeIcon icon={faMapMarkerAlt} />
			</div>
			<div className="vtimeline-point">
				<div className="vtimeline-block">
					<span className="vtimeline-date">{experience.date}</span>
					<div className="vtimeline-content">
						<h3>{experience.title}</h3>
						<h4>
							<a href={experience.link.toString()} target="_blank" rel="noreferrer">
								{experience.name}
							</a>
						</h4>
						<p>{experience.description}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
