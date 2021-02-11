import React from "react";

type Props = { project: Project };

const ListItem = (props: Props) => {
	const project = props.project;
	return (
		<div className="project shadow-large">
			<div className="project-info">
				<h3>{project.name}</h3>
				<p>
					{project.description} <br />
					<strong>Assigned Role: </strong>
					{project.role}
				</p>
				{project.link && (
					<a href={project.link} target="_blank" rel="noreferrer">
						View Project
					</a>
				)}
			</div>
		</div>
	);
};

export default ListItem;
