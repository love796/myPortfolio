import React from "react";
import { Educ } from "../Data";

const Education = () => {
	const etList = Educ;
	return (
		<>
			<div id="education">
				<h2 className="heading">Education</h2>
				{etList.map((e, index) => {
					return (
						<div key={index}>
							<div className="education-block">
								<h3>{e.universityName}</h3>
								<span>{e.period}</span>
								<h4>{e.degree}</h4>
								<p>{e.description}</p>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Education;
