import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Social from "./Sub-Components/Social";

type Props = { myInfo: Info };

const About: React.FC<Props> = (props: Props) => {
	const info = props.myInfo;

	return (
		<div id="about">
			<Container>
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
						<p dangerouslySetInnerHTML={{ __html: info.summary.toString() }}></p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default About;
