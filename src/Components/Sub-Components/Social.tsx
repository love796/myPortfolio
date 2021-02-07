import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn, faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Social: React.FC = () => {
	return (
		<Row>
			<Col lg className="social">
				<ul>
					<li>
						<a href="https://github.com/love796" target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={faGithub} />
						</a>
					</li>
					<li>
						<a
							href="https://linkedin.com/in/lovepreethind"
							target="_blank"
							rel="noreferrer"
						>
							<FontAwesomeIcon icon={faLinkedinIn} />
						</a>
					</li>
					<li>
						<a href="https://facebook.com/love6991" target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={faFacebookF} />
						</a>
					</li>
					<li>
						<a href="https://twitter.com/" target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={faTwitter} />
						</a>
					</li>
				</ul>
			</Col>
		</Row>
	);
};

export default Social;
