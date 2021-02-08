import React from "react";
import Header from "../../Components/Header";
import Lead from "../../Components/Lead";
import About from "../../Components/About";
import Experience from "../../Components/Experience";
import Education from "../../Components/Education";
import Projects from "../../Components/Projects";
import Skills from "../../Components/Skills";
import Footer from "../../Components/Footer";
import * as data from "../../Data";
import "./style.css";

const Portfolio: React.FC = () => {
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

export default Portfolio;
