import React from "react";
import { Info } from "../Data";
import { Container, Row, Col } from "react-bootstrap";
export default class Footer extends React.Component {
	info = Info;
	render() {
		return (
			<footer id="contact" className="optional-section">
				<Container>
					<Row>
						<Col sm={9}>
							<h2>Get in Touch</h2>
							<ul className="list-unstyled">
								<li>Phone number: {this.info.phone}</li>
								<li>Email: {this.info.email}</li>
								<li>Website: {this.info.website}</li>
								<li>Address: {this.info.location}</li>
							</ul>
						</Col>
						<Col sm={3}>
							<p>Copyright &copy; 2020 {Info.name}</p>
						</Col>
					</Row>
				</Container>
			</footer>
		);
	}
}
