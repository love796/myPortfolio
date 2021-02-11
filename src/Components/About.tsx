import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Social from "./Sub-Components/Social";

type Props = { myInfo: Info };

const About = (props: Props) => {
	const info = props.myInfo;

	return (
		<Container as="section" id="about">
			<Row>
				<Col md>
					<h2 className="heading">About Me</h2>
				</Col>
			</Row>
			<Row className="about-card">
				<Col lg={4} className="about-image">
					<Image src={info.image.toString()} roundedCircle alt="My image" />
					<Social></Social>
				</Col>
				<Col lg={8} className="about-text">
					<p dangerouslySetInnerHTML={{ __html: info.summary }}></p>
				</Col>
			</Row>
		</Container>
	);
};

export default About;
