import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

const PageNotFound = () => {
	return (
		<Container className="page-not-found">
			<Row>
				<Col>
					<h1>OOPS!</h1>
					<p>
						You have landed on an unknown page.
						<br />
						Please go back to
						<Link to="/"> Homepage. </Link>
					</p>
				</Col>
			</Row>
		</Container>
	);
};

export default PageNotFound;
