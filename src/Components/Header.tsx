import React, { useState } from "react";
import { LinksArr } from "../Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
	const linksArr = LinksArr;
	const [isBodyActive, setIsBodyActive] = useState(false);

	return (
		<>
			<div id="mobile-menu-open" className="shadow-large" onClick={() => setIsBodyActive(!isBodyActive)}>
				<FontAwesomeIcon icon={faBars} />
			</div>
			<header className={isBodyActive ? "active" : ""}>
				<div id="mobile-menu-close" onClick={() => setIsBodyActive(!isBodyActive)}>
					<span>Close</span> <i className="fa fa-times" aria-hidden="true"></i>
				</div>
				<ul id="menu" className="shadow">
					{linksArr.map((link, index) => {
						return (
							<li key={index}>
								<a href={"#" + link} onClick={() => setIsBodyActive(!isBodyActive)}>
									{link}
								</a>
							</li>
						);
					})}
				</ul>
			</header>
		</>
	);
};

export default Header;
