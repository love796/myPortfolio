type Info = {
	name: String;
	occupation: String;
	image: String;
	summary: String;
	resume: String;
	phone: String;
	email: String;
	website: String;
	location: String;
};

type Experience = {
	date: String;
	name: String;
	title: String;
	link: String;
	description: String;
};

type Education = {
	universityName: String;
	period: String;
	degree: String;
	description: String;
};

type Skill = {
	name: String;
	value: Number;
};

type Project = {
	name: String;
	description: String;
	role: String;
	link?: String;
};
