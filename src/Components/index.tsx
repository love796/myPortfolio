import React from "react";
import Header from "./Header";
import Lead from "./Lead";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "./Footer";
import * as data from "../Data";

const Components: React.FC = () => {
	return (
		<>
			<Header linksArr={data.LinksArr} />
			<Lead myInfo={data.MyInfo} />
			<About myInfo={data.MyInfo} />
			<Experience experienceList={data.ExperienceList} />
			<Education educationList={data.EducationList} />
			<Projects projectList={data.ProjectsList} />
			<Skills skillsList={data.SkillsList} />
			<Footer myInfo={data.MyInfo} />
		</>
	);
};

export default Components;
