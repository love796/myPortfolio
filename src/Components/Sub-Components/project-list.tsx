import React from "react";

type Props = { project: Project };

const ListItem = (props: Props) => {
	const project = props.project;
	return (
		<div className="project shadow-large">
			<div className="project-info">
				<h3>{project.name}</h3>
				<p>
					{project.description.length <= 270 && project.description}
					{project.description.length > 270 &&
						project.description.substring(0, 400) + "..."}
					<br />
					{project.role && (
						<>
							<strong>Assigned Role: </strong>
							{project.role + ":"} <br /> {project.roleDescription}
						</>
					)}
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
