import { useState } from "react";
import { Proj } from "../Data";
import { Container, Row, Col, Button } from "react-bootstrap";

const Projects = () => {
	const n = 2;
	const [projectList, setProjectList] = useState(Proj.slice(0, n));
	return (
		<div id="projects" className="background-alt">
			<h2 className="heading">Projects</h2>
			<Container>
				<Row>
					{projectList.map((proj, index) => {
						return (
							<div className="project shadow-large" key={index}>
								<div className="project-info">
									<h3>{proj.name}</h3>
									<p>
										{proj.description} <br />
										<strong>Assigned Role: </strong>
										{proj.role}
									</p>
									{proj.link && (
										<a href={proj.link} target="_blank" rel="noreferrer">
											View Project
										</a>
									)}
								</div>
							</div>
						);
					})}
					<Col>
						{projectList.length < n + 1 && Proj.length > n && (
							<Button variant="primary" className="more-projects" onClick={() => setProjectList(Proj)}>
								More Projects
							</Button>
						)}
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Projects;
