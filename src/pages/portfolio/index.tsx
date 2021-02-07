import React from "react";
import Header from "../../components/Header";
import Lead from "../../components/Lead";
import About from "../../components/About";
import Experience from "../../components/Experience";
import Education from "../../components/Education";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";
import Footer from "../../components/Footer";
import * as data from "../../data";
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
