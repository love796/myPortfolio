import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = (props: { linksArr: String[] }) => {
	const linksArr = props.linksArr;
	const [isBodyActive, setIsBodyActive] = useState(false);
	const toggleMenu = () => setIsBodyActive(!isBodyActive);

	return (
		<>
			<div id="mobile-menu-open" className="shadow-large" onClick={toggleMenu}>
				<FontAwesomeIcon icon={faBars} />
			</div>
			<header className={isBodyActive ? "active" : ""}>
				<div id="mobile-menu-close" onClick={toggleMenu}>
					<span>Close</span> <i className="fa fa-times" aria-hidden="true"></i>
				</div>
				<ul id="menu" className="shadow">
					{linksArr.map((link, index) => {
						return (
							<li key={index}>
								<a href={"#" + link} onClick={toggleMenu}>
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
