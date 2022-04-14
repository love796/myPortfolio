//Header links
export const LinksArr: string[] = [
	"about",
	"experience",
	"education",
	"projects",
	"skills",
	"contact",
];

//User Info
export const MyInfo: Info = {
	name: "Lovepreet Thind",
	occupation: "Software Engineer",
	image: "images/love.jpg",
	summary:
		"2.5 years of experience working SAP PI/PO consultant with Accenture. Worked on many client projects and implementations of SAP functionality with 3rd party vendors. Experience in design of interface A2A and B2B scenarios using SOAP, REST, IDocs, FTP, EDI, JDBC, ABAP-Proxy adapters. Received client appreciations for project handling and hard work. <br /> Also has work experience as full stack web developer using JavaScript and Firebase framework. <br />Excellent Communication, Interpersonal and Architectural skills with strong analytical ability and technical problem solving capability.",
	resume: "https://drive.google.com/file/d/1_Olro_M6Hk3mCPC_8_ps3LavnqETuthL/view?usp=sharing",
	phone: "9855941774",
	email: "slovepreet796@gmail.com",
	website: "lovepreet.ml",
	location: "Punjab, India",
};

//Experience section
export const ExperienceList: Experience[] = [
	{
		date: "December 2021 – PRESENT",
		name: "Accenture",
		title: "Software Developer Analyst",
		link: "https://www.accenture.com/",
		description:
			"Currently working as SAP PI/PO consultant with Accenture. Involved in Sizing, Requirements Gathering, Design, Development, Configuration, Administration and Documentation. Sound knowledge of various components of PI., System Landscape Directory (SLD), Integration Repository, Integration Directory, Runtime Workbench (RWB). Hands on experience in SAP XI/PI adapters like File, RFC, IDOC, JDBC, HTTP, SOAP, Mail, Client/Server ABAP Proxies and Cross Applications like ALE, IDOC's, RFC. Worked on various projects with 3rd party vendors for integration solutions for EDI, reporting, logistics and more. <br /><strong>Skills Used:</strong> SAP PI 7.3, Integration Builder, Graphical/XSLT/Java Mapping, Adapters, Proxies, XML",
	},
	{
		date: "September 2019 - December 2021",
		name: "Accenture",
		title: "ASSOCIATE SOFTWARE ENGINEER",
		link: "https://www.accenture.com/",
		description:
			"Worked as Associate resource for various SAP PO projects for the client. Learned all the concepts of technology from scratch. Applied the learnings in various hands-on projects. Served as a friendly, hardworking, and punctual employee. Organized and prioritized work to complete assignments in a timely, efficient manner. Trained in Java programming practices. Delivering at client’s expectations and needs. Worked well independently and on a team to solve problems.",
	},
	{
		date: "July 2018 – December 2018",
		name: "Auribises",
		title: "FULL STACK WEB DEVELOPER",
		link: "https://auribises.com/",
		description:
			"Utilized programming capabilities in JavaScript and its libraries as needed. Created web layouts and user interfaces using HTML and CSS. Developed web applications using Cloud Firebase Platform. Developed various web apps and admin portals. <br /><strong>Skills Used:</strong> JavaScript, AngularJS, Firebase",
	},
];

//Education section
export const EducationList: Education[] = [
	{
		universityName: "GURU NANAK DEV ENGINEERING COLLEGE",
		period: "August 2015 - May 2019",
		degree: "Bachelor of Technology in Computer Science",
		description:
			"Completed my Computer Science degree with 8.12 SGPA. Did extremely well in all my lab works and projects.",
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
	{ name: "Javascript", value: 40 },
	{ name: "Typescript", value: 30 },
	{ name: "React", value: 30 },
	{ name: "Angular", value: 30 },
	{ name: "Python", value: 40 },
	{ name: "Java", value: 30 },
	{ name: "HTML", value: 60 },
	{ name: "CSS", value: 60 },
];

//Projects section
export const ProjectsList: Project[] = [
	{
		name: "APPLICATION DEVCELOPMENT FACTORY(ADF): ",
		description:
			"Currently working ADF project for Client as SAP PI/PO consultant. Closely interacted with FICO, SD, ABAP Teams to understand business requirements and translated into PI Technical requirements. Designing the flow of the interfaces by identifying the optimal solution. Developed both INBOUND and OUTBOUND interfaces between SAP and various legacy systems. Configured JDBC, FILE, HTTP, SFTP, SOAP, IDoc, RFC and Mail adapters. Developed mappings are mostly Graphical Map, JAVA Map and XSLT Maps. Monitoring and troubleshooting the post go-live integration issues using the Runtime workbench.",
	},
	{
		name: "MEO",
		description:
			"Meo is a web application that provides admin control panel for a architect and real estate based company. It provide management for various jobs, employees and other stuff handled by company. It is build Firebase platform for storage, hosting and database activities.",
		role: "Full stack Developer",
		roleDescription:
			"Developed web app using JavaScript and JQuery. Used Firebase to implement database, authorization, and hosting. Handled entire project lifecycle and delivered with excellent performance.",
	},
	{
		name: "Learning Management System",
		description:
			"Online learning management system providing webinars on various courses offered by Auribises. It was build using AngularJs framework for frontend and Firebase platform for serverless backend support with integrited Paytm payment gateway.",
		role: "Full stack Developer",
		roleDescription:
			"Developed UI using Angular and JQuery. Used Firebase to implement database, authorization, and hosting.",
		link: "https://elearning.auribises.com/",
	},
	{
		name: "Chat Application",
		description:
			"Online room-based chat application using PHP, MySQL and Ajax. Introduces database and server concepts. Simple database based authencation and message fetching using Ajax. Full responsive design created using Bootstrap framework.",
		role: "Application Developer",
		roleDescription:
			"Implemented linear regression algorithm to provide prediction using historic data.",
		link: "https://github.com/love796/GamersWorld",
	},
	{
		name: "Stock Prediction",
		description:
			"Stock Prediction using machine learning. Not very accurate but introduces concepts of regression and its uses. Basic machine learning approach for data prediction. Used linear regression concept. Buld using Python libraries (scikit learn).",
		role: "Application Developer",
		roleDescription:
			"Created a web app using PHP and MySql with chat rooms and blogging features.",
		link: "https://github.com/love796/Stock-Leader",
	},
];
