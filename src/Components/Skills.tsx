import React from "react";
import { SkillsArr } from "../Data";
import { Popover, OverlayTrigger, ProgressBar } from "react-bootstrap";

type Skill = {
	skill: String;
	value: number;
};

export default class Skills extends React.Component {
	skills = SkillsArr;

	popover(p: Skill) {
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
	}

	render() {
		return (
			<div id="skills">
				<h2 className="heading">Skills</h2>
				<ul>
					{this.skills.map((skill, index) => {
						return (
							<OverlayTrigger key={index} placement="top" overlay={this.popover(skill)}>
								<li>{skill.skill}</li>
							</OverlayTrigger>
						);
					})}
				</ul>
			</div>
		);
	}
}
