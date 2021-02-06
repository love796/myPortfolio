import React from "react";
import { Container, Row, Col } from "react-bootstrap";

type Props = { myInfo: Info };

const Footer: React.FC<Props> = (props: Props) => {
	const myInfo = props.myInfo;
	return (
		<footer id="contact" className="optional-section">
			<Container>
				<Row>
					<Col sm={9}>
						<h2>Get in Touch</h2>
						<ul className="list-unstyled">
							<li>Phone number: {myInfo.phone}</li>
							<li>Email: {myInfo.email}</li>
							<li>Website: {myInfo.website}</li>
							<li>Address: {myInfo.location}</li>
						</ul>
					</Col>
					<Col sm={3}>
						<p>Copyright &copy; 2020 {myInfo.name}</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
