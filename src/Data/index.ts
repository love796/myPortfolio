//Header links
export const LinksArr: String[] = ["about", "experience", "education", "projects", "skills", "contact"];

//User Info
export const MyInfo: Info = {
	name: "Lovepreet Thind",
	occupation: "Software Engineer",
	image: "images/love.jpg",
	summary:
		"An enthusiastic fresher with highly motivated learning and problem-solving skills having a Bachelor of Engineering degree in Computer Science and Engineering. Eager to learn new technologies and methodologies. Always willing to innovate new things that can improve the existing technology. Foreseeing a career in Front End Development. Love using different technologies for the tasks. Always keen to learn new technology and adapt to different environments.",
	resume: "https://drive.google.com/file/d/19OquP_ZGM_lM-E_Z_X20vDUYgON73HOZ/view?usp=sharing",
	phone: "9855941774",
	email: "slovepreet796@gmail.com",
	website: "lovepreet.ml",
	location: "Punjab, India",
};

//Experience section
export const ExperienceList: Experience[] = [
	{
		date: "September 2019 – PRESENT",
		name: "Accenture",
		title: "Associate Software Engineer",
		link: "https://www.accenture.com/",
		description:
			"Served as a friendly, hardworking, and punctual employee. Organized and prioritized work to complete assignments in a timely, efficient manner. Trained in Java programming practices. Delivering at client’s expectations and needs. Worked well independently and on a team to solve problems",
	},
	{
		date: "July 2018 – December 2018",
		name: "Auribises",
		title: "WEB DEVELOPMENT INTERN",
		link: "https://auribises.com/",
		description:
			"Utilized programming capabilities in JavaScript and its libraries as needed. Created web layouts and user interfaces using HTML and CSS. Developed web applications using Cloud Firebase Platform",
	},
];

//Education section
export const EducationList: Education[] = [
	{
		universityName: "GURU NANAK DEV ENGINEERING COLLEGE",
		period: "August 2015 - May 2019",
		degree: "Bachelor of Technology in Computer Science",
		description: "Completed my Computer Science degree with 8.12 SGPA. Did extremely well in all my lab works and projects.",
	},
	{
		universityName: "DRV DAV CENTENARY PUBLIC SCHOOL",
		period: "2014 - 2015",
		degree: "XII (SENIOR SECONDARY) SCIENCE",
		description: "Completed my Senior Secondary education with 79.12%.	",
	},
	{
		universityName: "DRV DAV CENTENARY PUBLIC SCHOOL",
		period: "2012 - 2013",
		degree: "X (SECONDARY)",
		description: "Completed my Secondary education with 9.6 CGPA.	",
	},
];

//Skills
export const SkillsList: Skill[] = [
	{ name: "Javascript", value: 60 },
	{ name: "Typescript", value: 40 },
	{ name: "React", value: 40 },
	{ name: "Angular", value: 30 },
	{ name: "Python", value: 50 },
	{ name: "Java", value: 30 },
	{ name: "HTML", value: 70 },
	{ name: "CSS", value: 70 },
];

//Projects section
export const ProjectsList: Project[] = [
	{
		name: "Chat Application",
		description:
			"Online room-based chat application using PHP, MySQL and Ajax. Introduces database and server concepts. Simple database based authencation and message fetching using Ajax. Full responsive design created using Bootstrap framework.",
		role: "Application Developer",
		link: "https://github.com/love796/GamersWorld",
	},
	{
		name: "Stock Prediction",
		description:
			"Stock Prediction using machine learning. Not very accurate but introduces concepts of regression and its uses. Basic machine learning approach for data prediction. Used linear regression concept. Buld using Python libraries (scikit learn).",
		role: "Application Developer",
		link: "https://github.com/love796/Stock-Leader",
	},
	{
		name: "MEO",
		description:
			" Meo is a web application that provides admin control panel for a architect and real estate based company. It provide management for various jobs, employees and other stuff handled by company. It is build Firebase platform for storage, hosting and database activities.",
		role: "Full stack Developer",
		link: "",
	},
	{
		name: "Learning Management System",
		description:
			"Online learning management system providing webinars on various courses offered by Auribises. It was build using AngularJs framework for frontend and Firebase platform for serverless backend support with integrited Paytm payment gateway.",
		role: "Full stack Developer",
		link: "",
	},
];
