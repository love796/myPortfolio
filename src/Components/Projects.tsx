import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Projects = (props: { projectList: Project[] }) => {
	const num = 2;
	const [projectList, setProjectList] = useState(props.projectList.slice(0, num));
	return (
		<div id="projects" className="background-alt">
			<h2 className="heading">Projects</h2>
			<Container>
				<Row>
					{projectList.map((project, index) => listItem(project, index))}
					<Col>
						{projectList.length < num + 1 && props.projectList.length > num && (
							<Button variant="primary" className="more-projects" onClick={() => setProjectList(props.projectList)}>
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
