import React from "react";
import { Popover, ProgressBar } from "react-bootstrap";

const SkillPopover = (skill: Skill): JSX.Element => {
	const style = { width: "200px" };

	return (
		<Popover id="popover-basic">
			<Popover.Title as="h3" className="text-center">
				{skill.name}
			</Popover.Title>
			<Popover.Content style={style}>
				<ProgressBar animated now={parseInt(skill.value.toString())} />
			</Popover.Content>
		</Popover>
	);
};

export default SkillPopover;
