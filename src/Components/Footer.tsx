import React from "react";
import { Info } from "../Data";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn, faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default class Footer extends React.Component {
	constructor(props: String) {
		super(props);
		this.scrollToTop = this.scrollToTop.bind(this);
	}

	scrollToTop() {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	}

	render() {
		return (
			<footer>
				<Container>
					<Row>
						<Col sm={5} className="copyright">
							<p>Copyright &copy; 2020 {Info.name}</p>
						</Col>
						<Col sm={2} className="top">
							<span id="to-top" onClick={this.scrollToTop}>
								<FontAwesomeIcon icon={faChevronUp} />
							</span>
						</Col>
						<Col sm={5} className="social">
							<ul>
								<li>
									<a href="https://github.com/love796">
										<FontAwesomeIcon icon={faGithub} />
									</a>
								</li>
								<li>
									<a href="https://linkedin.com/">
										<FontAwesomeIcon icon={faLinkedinIn} />
									</a>
								</li>
								<li>
									<a href="https://www.facebook.com/">
										<FontAwesomeIcon icon={faFacebookF} />
									</a>
								</li>
								<li>
									<a href="https://twitter.com/">
										<FontAwesomeIcon icon={faTwitter} />
									</a>
								</li>
							</ul>
						</Col>
					</Row>
				</Container>
			</footer>
		);
	}
}
