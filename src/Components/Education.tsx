import React from "react";

type Props = { educationList: Education[] };

const Education = (props: Props) => {
	const educationList = props.educationList;
	return (
		<section id="education">
			<h2 className="heading">Education</h2>
			{educationList.map((education, index) => {
				return (
					<div key={index}>
						<div className="education-block">
							<h3>{education.universityName}</h3>
							<span>{education.period}</span>
							<h4>{education.degree}</h4>
							<p>{education.description}</p>
						</div>
					</div>
				);
			})}
		</section>
	);
};

export default Education;
