import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ListItem from "./Sub-Components/project-list";

type Props = { projectList: Project[] };

const Projects = (props: Props) => {
	const num = 2;
	const [projectList, setProjectList] = useState(props.projectList.slice(0, num));
	return (
		<section id="projects" className="background-alt">
			<Container>
				<h2 className="heading">Projects</h2>
				<Row>
					{projectList.map((project, index) => (
						<ListItem project={project} key={index} />
					))}
					<Col>
						{projectList.length < num + 1 && props.projectList.length > num && (
							<Button
								variant="primary"
								className="more-projects"
								onClick={() => setProjectList(props.projectList)}
							>
								More Projects
							</Button>
						)}
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Projects;
