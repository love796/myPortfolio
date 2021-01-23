import React from "react";
import { SkillsArr } from "../Data";
import { Popover, OverlayTrigger, ProgressBar } from "react-bootstrap";

type Skill = {
	skill: String;
	value: number;
};

const Skills = () => {
	const skills = SkillsArr;

	const popover = (p: Skill) => {
		const style = { width: "200px" };
		return (
			<Popover id="popover-basic">
				<Popover.Title as="h3" className="text-center">
					{p.skill}
				</Popover.Title>
				<Popover.Content style={style}>
					<ProgressBar animated now={p.value} />
				</Popover.Content>
			</Popover>
		);
	};

	return (
		<div id="skills">
			<h2 className="heading">Skills</h2>
			<ul>
				{skills.map((skill, index) => {
					return (
						<OverlayTrigger key={index} placement="top" overlay={popover(skill)}>
							<li>{skill.skill}</li>
						</OverlayTrigger>
					);
				})}
			</ul>
		</div>
	);
};

export default Skills;
