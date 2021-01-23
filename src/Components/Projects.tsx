import React, { useState } from "react";
import { ProjectsList } from "../Data";
import { Container, Row, Col, Button } from "react-bootstrap";

const Projects = () => {
	const num = 2;
	const [projectList, setProjectList] = useState(ProjectsList.slice(0, num));
	return (
		<div id="projects" className="background-alt">
			<h2 className="heading">Projects</h2>
			<Container>
				<Row>
					{projectList.map((project, index) => listItem(project, index))}
					<Col>
						{projectList.length < num + 1 && ProjectsList.length > num && (
							<Button variant="primary" className="more-projects" onClick={() => setProjectList(ProjectsList)}>
								More Projects
							</Button>
						)}
					</Col>
				</Row>
			</Container>
		</div>
	);
};

const listItem = (project: Project, index: number) => {
	return (
		<div className="project shadow-large" key={index}>
			<div className="project-info">
				<h3>{project.name}</h3>
				<p>
					{project.description} <br />
					<strong>Assigned Role: </strong>
					{project.role}
				</p>
				{project.link && (
					<a href={project.link.toString()} target="_blank" rel="noreferrer">
						View Project
					</a>
				)}
			</div>
		</div>
	);
};

export default Projects;
