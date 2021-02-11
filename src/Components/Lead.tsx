import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

type Props = { myInfo: Info };

const Lead = (props: Props) => {
	const info = props.myInfo;
	const bgImage = { background: "url('images/lead-bg.jpg')", backgroundSize: "cover" };
	const scrollDown = () => document.getElementById("about")?.scrollIntoView();

	return (
		<section id="lead" style={bgImage}>
			<div id="lead-content">
				<h1>{info.name}</h1>
				<h2>{info.occupation}</h2>
				<a
					href={info.resume}
					target="_blank"
					rel="noreferrer"
					className="btn-rounded-white"
				>
					Download Resume
				</a>
			</div>

			<div id="lead-overlay"></div>

			<div id="lead-down" onClick={scrollDown}>
				<span>
					<FontAwesomeIcon icon={faChevronDown} />
				</span>
			</div>
		</section>
	);
};

export default Lead;
