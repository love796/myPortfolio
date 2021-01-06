import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Info } from "../Data";

export default class About extends React.Component {
	info = Info;
	render() {
		return (
			<div id="about" className="background-alt">
				<Container>
					<Row>
						<Col md={4}>
							<h2 className="heading">About Me</h2>
						</Col>
						<Col md={8}>
							<p>{this.info.summary}</p>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
