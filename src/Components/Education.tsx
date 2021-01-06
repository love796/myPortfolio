import React from "react";
import { Educ } from "../Data";

export default class Education extends React.Component {
	etList = Educ;
	render() {
		return (
			<>
				<div id="education">
					<h2 className="heading">Education</h2>
					{this.etList.map((e, index) => {
						return (
							<div key={index}>
								<div className="education-block">
									<h3>{e.universityName}</h3>
									<span>{e.period}</span>
									<h4>{e.degree}</h4>
									<p>{e.description}</p>
								</div>
								{index !== this.etList.length - 1 && <span className="arrow-educ"></span>}
							</div>
						);
					})}
				</div>
			</>
		);
	}
}
