import React from "react";

type Props = { educationList: Education[] };

const Education: React.FC<Props> = ({ educationList }: Props) => {
	const edList = educationList;
	return (
		<>
			<div id="education">
				<h2 className="heading">Education</h2>
				{edList.map((education, index) => {
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
			</div>
		</>
	);
};

export default Education;
