import React from "react";
import { MyInfo } from "../Data";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
	const info = MyInfo;
	return (
		<footer id="contact" className="optional-section">
			<Container>
				<Row>
					<Col sm={9}>
						<h2>Get in Touch</h2>
						<ul className="list-unstyled">
							<li>Phone number: {info.phone}</li>
							<li>Email: {info.email}</li>
							<li>Website: {info.website}</li>
							<li>Address: {info.location}</li>
						</ul>
					</Col>
					<Col sm={3}>
						<p>Copyright &copy; 2020 {info.name}</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
