type Info = {
	name: string;
	occupation: string;
	image: string;
	summary: string;
	resume: string;
	phone: string;
	email: string;
	website: string;
	location: string;
};

type Experience = {
	date: string;
	name: string;
	title: string;
	link: string;
	description: string;
};

type Education = {
	universityName: string;
	period: string;
	degree: string;
	description: string;
};

type Skill = {
	name: string;
	value: number;
};

type Project = {
	name: string;
	description: string;
	role?: string;
	roleDescription?: string;
	link?: string;
};
