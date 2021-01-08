import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Info } from "../Data";
import Social from "./Social";

export default class About extends React.Component {
	info = Info;
	render() {
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
							<Image src={this.info.image} roundedCircle alt="My image" />
							<Social></Social>
						</Col>
						<Col lg={8} className="about-text">
							<p dangerouslySetInnerHTML={{ __html: this.info.summary }}></p>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
