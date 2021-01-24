import React from "react";
import SkillPopover from "./Sub-Components/skill-popover";
import { OverlayTrigger } from "react-bootstrap";

const Skills = (props: { skillsList: Skill[] }) => {
	const skills = props.skillsList;

	return (
		<div id="skills">
			<h2 className="heading">Skills</h2>
			<ul>
				{skills.map((skill, index) => {
					return (
						<OverlayTrigger key={index} placement="top" overlay={SkillPopover(skill)}>
							<li>{skill.name}</li>
						</OverlayTrigger>
					);
				})}
			</ul>
		</div>
	);
};

export default Skills;
