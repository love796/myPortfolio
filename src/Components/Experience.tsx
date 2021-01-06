import React from "react";
import { Exp } from "../Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default class Experience extends React.Component {
	xpList = Exp;
	render() {
		return (
			<div id="experience" className="background-alt">
				<h2 className="heading">Experience</h2>
				<div id="experience-timeline">
					{this.xpList.map((x, index) => {
						return (
							<div key={index}>
								<div className="vtimeline-icon">
									<FontAwesomeIcon icon={faMapMarkerAlt} />
								</div>
								<div className="vtimeline-point">
									<div className="vtimeline-block">
										<span className="vtimeline-date">{x.date}</span>
										<div className="vtimeline-content">
											<h3>{x.title}</h3>
											<h4>
												<a href={x.link} target="_blank" rel="noreferrer">
													{x.name}
												</a>
											</h4>
											<p>{x.description}</p>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
