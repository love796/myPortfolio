import React from "react";
import { Info } from "../Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Lead = () => {
	const info = Info;

	const bgImage = { background: "url('images/lead-bg.jpg')", backgroundSize: "cover" };

	const scrollDown = () => {
		document.getElementById("next")?.scrollIntoView();
	};

	return (
		<>
			<div id="lead" style={bgImage}>
				<div id="lead-content">
					<h1>{info.name}</h1>
					<h2>{info.occupation}</h2>
					<a href={info.resume} target="_blank" rel="noreferrer" className="btn-rounded-white">
						Download Resume
					</a>
				</div>

				<div id="lead-overlay"></div>

				<div id="lead-down" onClick={scrollDown}>
					<span>
						<FontAwesomeIcon icon={faChevronDown} />
					</span>
				</div>
			</div>
			<span id="next"></span>
		</>
	);
};

export default Lead;
